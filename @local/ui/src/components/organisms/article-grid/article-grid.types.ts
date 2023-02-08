import { IArticle } from '../../molecules/article/article.types';

export interface ArticleGridProps {
  articles: IArticle[];
  columns?: number;
  buttonText?: string;
  buttonLink?: string;
  twArticleGrid?: string;
  twArticleImg?: string;
  twArticleButton?: string;
  twArticleButtonBx?: string;
  twArticleTitle?: string;
  twArticle?: string;
  twArticleCategory?: string;
}