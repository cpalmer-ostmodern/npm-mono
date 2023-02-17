import React from 'react';
import { ArticleTitle } from '../../atoms/article/article-title/article-title.component';
import { ArticleCategory } from '../../atoms/article/article-category/article-category.component';
import { ArticleExcerpt } from '../../atoms/article/article-excerpt/article-excerpt.component';
import { ArticleAuthor } from '../../atoms/article/article-author/article-author.component';
import { ArticleImage } from '../../atoms/article/article-image/article-image.component';

/* eslint-disable-next-line */
export interface FeaturedArticleProps {
  title?: string;
  articleLink?: string;
  articleCategory?: string;
  articleCategoryLink?: string;
  articleTitle?: string;
  articleExcerpt?: string;
  articleAuthor?: string;
  articleAuthorLink?: string;
  articleImage?: string;
  articleImageAlt?: string;
  reverseOrder?: boolean;
  twBackground?: string;
  twWrapper?: string;
  twTitle?: string;
  twArticleTextWrapper?: string;
  twArticleCategory?: string;
  twArticleTitle?: string;
  twArticleExcerpt?: string;
  twArticleAuthor?: string;
  twArticleImage?: string;
}

export function FeaturedArticle({
  title,
  articleLink,
  articleCategory,
  articleCategoryLink,
  articleTitle,
  articleExcerpt,
  articleAuthor,
  articleAuthorLink,
  articleImage,
  articleImageAlt = '',
  reverseOrder,
  twBackground,
  twWrapper,
  twTitle,
  twArticleTextWrapper,
  twArticleCategory,
  twArticleTitle,
  twArticleExcerpt,
  twArticleAuthor,
  twArticleImage,
}: FeaturedArticleProps) {
  return (
    <div className={twBackground}>
      <div className="xl:container px-6 xl:px-10 xl:mx-auto">
        {title && (
          <h2
            className={`${twTitle} ${
              reverseOrder ? 'text-right' : 'text-left'
            }`}
          >
            {title}
          </h2>
        )}
      </div>
      <article
        className={`${twWrapper} ${reverseOrder ? 'lg:flex-row-reverse' : ''}`}
      >
        <div className={twArticleTextWrapper}>
          {articleCategory && (
            <ArticleCategory tw={twArticleCategory} link={articleCategoryLink}>
              {articleCategory}
            </ArticleCategory>
          )}

          {articleTitle && (
            <ArticleTitle
              title={articleTitle}
              tw={twArticleTitle}
              titleLink={articleLink}
            />
          )}

          {articleExcerpt && (
            <ArticleExcerpt excerpt={articleExcerpt} tw={twArticleExcerpt} />
          )}

          {articleAuthor && (
            <ArticleAuthor
              authorName={articleAuthor}
              authorLink={articleAuthorLink}
              tw={twArticleAuthor}
            />
          )}
        </div>
        <div>
          {articleImage && (
            <ArticleImage
              src={articleImage}
              orientation="portrait"
              alt={articleImageAlt}
              tw={twArticleImage}
              link={articleLink}
            />
          )}
        </div>
      </article>
    </div>
  );
}

export default FeaturedArticle;
