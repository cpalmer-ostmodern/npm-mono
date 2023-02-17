import React from 'react';
import { Article } from '../../molecules/article';
import { TopicButton } from '../../atoms/button/button.component';
import { IArticle } from '../../molecules/article/article.types';

export interface ArticleFeatureGridProps {
  articles: IArticle[];
  buttonText?: string;
  buttonLink?: string;
  reverseOrder?: boolean;
  twArticleFeatureGridWrapper?: string;
  twArticleFeatureGridGrid?: string;
  twArticleImg?: string;
  twArticleButton?: string;
  twArticleButtonBx?: string;
  twArticleTitle?: string;
  twArticle?: string;
  twArticleCategory?: string;
  twArticleFeatureGridContainer?: string;
  twArticleFeatureGridBackground?: string;
}

export function ArticleFeatureGrid({
  articles,
  buttonText,
  reverseOrder = false,
  twArticleFeatureGridWrapper,
  twArticleFeatureGridGrid,
  twArticleImg,
  twArticleButtonBx,
  twArticleButton,
  twArticleTitle,
  twArticle,
  twArticleCategory,
  twArticleFeatureGridContainer,
  twArticleFeatureGridBackground,
}: ArticleFeatureGridProps) {
  return articles ? (
    <div className={twArticleFeatureGridBackground}>
      <div className={twArticleFeatureGridContainer}>
        <div
          className={`${twArticleFeatureGridGrid} ${
            reverseOrder ? 'flex-row-reverse' : ''
          }`}
        >
          <div className={twArticleFeatureGridWrapper}>
            {articles.map((article, index) => {
              return (
                <div key={`article-${index}`}>
                  <Article
                    thumbnail={article.thumbnail}
                    title={article.title}
                    category={article.category}
                    imageOrientation="square"
                    imageAlt={article.imageAlt}
                    link={article.link}
                    tw={twArticle}
                    twImg={twArticleImg}
                    twTitle={twArticleTitle}
                    twCategory={twArticleCategory}
                  />
                </div>
              );
            })}
          </div>
          <div className="md:self-center">
            {buttonText && (
              <div className={twArticleButtonBx}>
                <TopicButton
                  topicName={buttonText}
                  icon="icon icon-arrow-left"
                  tw={twArticleButton}
                  size="28px"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="text-center" data-testid="error-article-feature-grid">
      No articles available
    </div>
  );
}

export default ArticleFeatureGrid;
