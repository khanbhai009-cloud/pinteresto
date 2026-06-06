import { collection, query, where, orderBy, limit, getDocs, getDoc, doc } from 'firebase/firestore';
import { db } from './firebase';
import type { BlogPost, Niche, Collection } from './types';

const CACHE_TTL_MS = 3600 * 1000; // 3600 seconds (1 hour)

async function withCache<T>(cacheKey: string, fetchFn: () => Promise<T>): Promise<T> {
  try {
    const cachedItem = localStorage.getItem(`plinth_cache_${cacheKey}`);
    if (cachedItem) {
      const { timestamp, data } = JSON.parse(cachedItem);
      if (Date.now() - timestamp < CACHE_TTL_MS) {
        return data as T;
      }
    }
  } catch (e) {
    // Ignore cache read errors
  }

  const data = await fetchFn();

  try {
    localStorage.setItem(`plinth_cache_${cacheKey}`, JSON.stringify({
      timestamp: Date.now(),
      data
    }));
  } catch (e) {
    // Ignore cache write errors (e.g. quota exceeded)
  }

  return data;
}

export async function getLatestPosts(limitCount = 20): Promise<BlogPost[]> {
  return withCache(`latest_posts_${limitCount}`, async () => {
    try {
      // Avoid composite index by ordering by date first, then filtering status client-side
      const q = query(
        collection(db, 'blog_posts'),
        orderBy('created_at', 'desc'),
        limit(limitCount * 3) // fetch extra to account for any unpublished posts
      );
      const snapshot = await getDocs(q);
      const allPosts = snapshot.docs.map(doc => doc.data() as BlogPost);
      const published = allPosts.filter(p => p.status === 'published');
      return published.slice(0, limitCount);
    } catch (error) {
      console.error("Error in getLatestPosts", error);
      return [];
    }
  });
}

export async function getNiches(): Promise<Niche[]> {
  return withCache('niches', async () => {
    try {
      const q = query(collection(db, 'niches'));
      const snapshot = await getDocs(q);
      return snapshot.docs.map(doc => doc.data() as Niche);
    } catch (error) {
      console.error("Error in getNiches", error);
      return [];
    }
  });
}

export async function getSubNiches(nicheSlug: string): Promise<Niche | null> {
  return withCache(`sub_niches_${nicheSlug}`, async () => {
    try {
      const q = query(collection(db, 'niches'), where('slug', '==', nicheSlug), limit(1));
      const snapshot = await getDocs(q);
      if (snapshot.empty) return null;
      return snapshot.docs[0].data() as Niche;
    } catch (error) {
      console.error("Error in getSubNiches", error);
      return null;
    }
  });
}

export async function getCollectionPins(niche: string, sub_niche: string, limitCount = 10): Promise<BlogPost[]> {
  return withCache(`collection_pins_${niche}_${sub_niche}_${limitCount}`, async () => {
    try {
      // Multiple equality constraints do not require a composite index.
      // We sort locally to avoid needing one for the orderBy.
      const q = query(
        collection(db, 'blog_posts'),
        where('niche', '==', niche),
        where('sub_niche', '==', sub_niche),
        where('status', '==', 'published'),
        limit(100)
      );
      const snapshot = await getDocs(q);
      const posts = snapshot.docs.map(doc => doc.data() as BlogPost);
      // Sort descending by created_at
      posts.sort((a, b) => (b.created_at || 0) - (a.created_at || 0));
      return posts.slice(0, limitCount);
    } catch (error) {
      console.error("Error in getCollectionPins", error);
      return [];
    }
  });
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  return withCache(`post_${slug}`, async () => {
    try {
      const q = query(collection(db, 'blog_posts'), where('slug', '==', slug), limit(1));
      const snapshot = await getDocs(q);
      if (snapshot.empty) return null;
      return snapshot.docs[0].data() as BlogPost;
    } catch (error) {
      console.error("Error in getPostBySlug", error);
      return null;
    }
  });
}

export async function getRelatedPosts(niche: string, sub_niche: string, currentSlug: string, limitCount = 4): Promise<BlogPost[]> {
  return withCache(`related_posts_${niche}_${sub_niche}_${currentSlug}_${limitCount}`, async () => {
    try {
      const q = query(
        collection(db, 'blog_posts'),
        where('niche', '==', niche),
        where('sub_niche', '==', sub_niche),
        where('status', '==', 'published'),
        limit(limitCount + 1) // one extra to filter out the current document
      );
      const snapshot = await getDocs(q);
      const posts = snapshot.docs.map(doc => doc.data() as BlogPost);
      return posts.filter(post => post.slug !== currentSlug).slice(0, limitCount);
    } catch (error) {
      console.error("Error in getRelatedPosts", error);
      return [];
    }
  });
}
