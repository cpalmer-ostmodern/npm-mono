import React from 'react';
import { Article } from '../../molecules/article';
import { TopicButton } from '../../atoms/button';
import { ArticleGridProps } from './article-grid.types';

export function ArticleGrid({
  articles,
  columns = 4,
  buttonText,
  twArticleGrid,
  twArticleImg,
  twArticleButtonBx,
  twArticleButton,
  twArticleTitle,
  twArticle,
  twArticleCategory,
}: ArticleGridProps) {
  const setImageOrientation = (index: number) => {
    return index % 2 ? 'portrait' : 'square';
  };

  return (
    <>
      <div className={`${twArticleGrid} md:grid-cols-${columns}`}>
        {articles.map((article, index) => {
          return (
            <div key={`article-${index}`}>
              <Article
                thumbnail={article.thumbnail}
                title={article.title}
                category={article.category}
                imageOrientation={setImageOrientation(index)}
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

      {buttonText && (
        <div className={twArticleButtonBx}>
          <TopicButton
            topicName={buttonText}
            icon="icon icon-arrow-left"
            tw={twArticleButton}
          />
        </div>
      )}
    </>
  );
}

export default ArticleGrid;
