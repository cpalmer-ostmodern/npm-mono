export type IArticle = {
  thumbnail: string;
  title: string;
  category?: string;
  imageOrientation?: 'square' | 'portrait';
  imageAlt: string;
  link?: string;
  tw?: string;
  twImg?: string;
  twTitle?: string;
  twCategory?: string;
}