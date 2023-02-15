import React from 'react';
import { Article } from '../../molecules/article';
import { ArticleTitle } from '../../atoms/article/article-title/article-title.component';
import { TopicButton } from '../../atoms/button';

import { ArticleGridProps } from '../article-grid/article-grid.types';

/* eslint-disable-next-line */
export interface ArticleGridWithTitleProps extends ArticleGridProps {
  title: string;
  titleLink: string;
  titleRightAligned: boolean;
  twGridTitle: string;
}

export function ArticleGridWithTitle({
  articles,
  columns = 4,
  title,
  buttonText,
  titleRightAligned,
  titleLink,
  twArticleGrid,
  twArticleImg,
  twArticleButtonBx,
  twArticleButton,
  twArticleTitle,
  twArticle,
  twArticleCategory,
  twGridTitle,
}: ArticleGridWithTitleProps) {
  const setImageOrientation = (index: number) => {
    return index % 2 ? 'portrait' : 'square';
  };

  /**
   * Calculates the css order groups required for the title to be
   * positioned top right of the ArticleGrid relative to the number of columns.
   *
   * Reference: https://developer.mozilla.org/en-US/docs/Web/CSS/order
   **/
  const calculateArticleOrderNumber = (
    rightAlignTitle: boolean,
    index: number,
    columns: number,
  ) => {
    return rightAlignTitle && index < columns - 1 ? '1' : '3';
  };

  return articles ? (
    <>
      <div className="block md:hidden mb-8">
        <ArticleTitle title={title} titleLink={titleLink} tw={twGridTitle} />
      </div>

      <div className={`${twArticleGrid} grid-cols-${columns}`}>
        <div
          className={`hidden md:block md:order-${
            titleRightAligned ? '2' : '1'
          }`}
        >
          <ArticleTitle title={title} titleLink={titleLink} tw={twGridTitle} />
        </div>

        {articles.map((article, index) => {
          return (
            <div
              key={`article-${index}`}
              className={`max-md:min-w-80 order-${calculateArticleOrderNumber(
                titleRightAligned,
                index,
                columns,
              )}`}
            >
              <Article
                thumbnail={article.thumbnail}
                title={article.title}
                category={article.category}
                imageOrientation={setImageOrientation(index)}
                imageAlt={article.imageAlt}
                key={`article-${index}`}
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
            size={'28px'}
          />
        </div>
      )}
    </>
  ) : (
    <div className="text-center" data-testid="error-article-grid-with-text">
      No articles available
    </div>
  );
}

export default ArticleGridWithTitle;
