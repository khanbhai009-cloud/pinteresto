export interface Paragraph {
  id: string;
  text: string;
}

export interface Product {
  name: string;
  price: string;
  affiliate_url: string;
  insert_after_para: string; // id of paragraph
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  seo_title: string;
  meta_desc: string;
  excerpt: string;
  niche: string;
  sub_niche: string;
  collection_tag: string;
  image_url: string;
  pinterest_url: string;
  paragraphs: Paragraph[];
  products: Product[];
  faq: FAQ[];
  tags: string[];
  primary_keyword: string;
  status: string;
  views: number;
  created_at: number; // or Date/Timestamp, using number for simplicity in mock
  updated_at: number;
  account: string;
  pin_count?: number; // Added from Collection logic if needed
  like_count?: number;
}

export interface SubNiche {
  slug: string;
  title: string;
}

export interface Niche {
  slug: string;
  title: string;
  description: string;
  cover_image: string;
  sub_niches: SubNiche[];
}

export interface Collection {
  collection_tag: string;
  niche: string;
  sub_niche: string;
  title: string;
  description: string;
  cover_image: string;
  slug_list: string[];
  pin_count: number;
  last_updated: number;
}
