import { collection, query, where, orderBy, limit, getDocs, getDoc, doc } from 'firebase/firestore';
import { db } from './firebase';
import type { BlogPost, Niche, Collection } from './types';

// Write these functions:
// - getLatestPosts(limit = 20)
// - getNiches()
// - getSubNiches(niche)
// - getCollectionPins(niche, sub_niche, limit = 10)
// - getPostBySlug(slug)
// - getRelatedPosts(niche, sub_niche, currentSlug, limit = 4)

export async function getLatestPosts(limitCount = 20): Promise<BlogPost[]> {
  try {
    const q = query(
      collection(db, 'blog_posts'),
      where('status', '==', 'published'),
      orderBy('created_at', 'desc'),
      limit(limitCount)
    );
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => doc.data() as BlogPost);
  } catch (error) {
    console.error("Error in getLatestPosts", error);
    return [];
  }
}

export async function getNiches(): Promise<Niche[]> {
  try {
    const q = query(collection(db, 'niches'));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => doc.data() as Niche);
  } catch (error) {
    console.error("Error in getNiches", error);
    return [];
  }
}

export async function getSubNiches(nicheSlug: string): Promise<Niche | null> {
  try {
    const q = query(collection(db, 'niches'), where('slug', '==', nicheSlug), limit(1));
    const snapshot = await getDocs(q);
    if (snapshot.empty) return null;
    return snapshot.docs[0].data() as Niche;
  } catch (error) {
    console.error("Error in getSubNiches", error);
    return null;
  }
}

export async function getCollectionPins(niche: string, sub_niche: string, limitCount = 10): Promise<BlogPost[]> {
  try {
    const q = query(
      collection(db, 'blog_posts'),
      where('niche', '==', niche),
      where('sub_niche', '==', sub_niche),
      where('status', '==', 'published'),
      orderBy('created_at', 'desc'),
      limit(limitCount)
    );
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => doc.data() as BlogPost);
  } catch (error) {
    console.error("Error in getCollectionPins", error);
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const q = query(collection(db, 'blog_posts'), where('slug', '==', slug), limit(1));
    const snapshot = await getDocs(q);
    if (snapshot.empty) return null;
    return snapshot.docs[0].data() as BlogPost;
  } catch (error) {
    console.error("Error in getPostBySlug", error);
    return null;
  }
}

export async function getRelatedPosts(niche: string, sub_niche: string, currentSlug: string, limitCount = 4): Promise<BlogPost[]> {
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
}
