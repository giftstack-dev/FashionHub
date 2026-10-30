export type CategoryType =
  | 'All'
  | 'Traditional'
  | 'Bridal'
  | 'Corporate'
  | 'Casual'
  | 'Kids';

export interface CollectionItem {
  id: string;
  title: string;
  category: Exclude<CategoryType, 'All'>;
  imageUrl: string;
  videoUrl?: string;
  description: string;
  price?: number;
  featured?: boolean;
  fabricDetails?: string;
  leadTime?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  location: string;
  outfit: string;
  quote: string;
  rating: number;
}

export interface FaqItem {
  number: string;
  question: string;
  answer: string;
}

export interface PricingCategory {
  category: string;
  startingPrice: number;
  popularFor: string;
  turnaroundTime: string;
  description: string;
  features: string[];
}
