import React from 'react';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import { Article } from '../../molecules/article';
import { IArticle } from '../../molecules/article/article.types';

export interface ImageCarouselProps {
  articles?: IArticle[];
  title?: string;
  width?: string;
  height?: string;
  gap?: string;
  direction?: 'rtl' | 'ltr' | 'ttb' | undefined;
  twArticle?: string;
  twArticleImg?: string;
  twArticleTitle?: string;
  twArticleCategory?: string;
  twImageCarouselTitle?: string;
  twImageCarouselGrid?: string;
  twCarouselContainer?: string;
  twSplideWrapper?: string;
  twMobileArticlesWrapper?: string;
  twImageCarouselWrapper?: string;
}

export function ImageCarousel({
  width,
  height,
  gap,
  direction,
  articles,
  title,
  twImageCarouselTitle,
  twImageCarouselGrid,
  twImageCarouselWrapper,
  twSplideWrapper,
  twMobileArticlesWrapper,
  twArticleImg,
  twArticleTitle,
  twArticle,
  twArticleCategory,
}: ImageCarouselProps) {
  const setImageOrientation = (index: number) => {
    return index % 2 ? 'square' : 'portrait';
  };
  return articles ? (
    <section className={twImageCarouselWrapper}>
      <div className={twImageCarouselGrid}>
        <div className={twSplideWrapper}>
          <Splide
            className="col-span-2 relative flex"
            hasTrack={false}
            onArrowsMounted={(splide, prev, next) => {
              console.log(prev, next);
            }}
            tag="div"
            aria-labelledby="chosen-articles"
            options={{
              arrowPath:
                'M2.117 12l7.527 6.235-.644.765-9-7.521 9-7.479.645.764-7.529 6.236h21.884v1h-21.883z',
              direction: direction,
              perPage: 3,
              perMove: 1,
              height: height,
              width: width,
              rewind: false,
              gap: gap,
            }}
          >
            <SplideTrack id="splide01-track">
              {articles &&
                articles.map((article, index) => (
                  <SplideSlide key={`article-${index}`}>
                    <div>
                      <Article
                        thumbnail={article.thumbnail}
                        title={article.title}
                        category={article.category}
                        imageAlt={article.imageAlt}
                        imageOrientation={setImageOrientation(index)}
                        link={article.link}
                        tw={twArticle}
                        twImg={twArticleImg}
                        twTitle={twArticleTitle}
                        twCategory={twArticleCategory}
                      />
                    </div>
                  </SplideSlide>
                ))}
            </SplideTrack>
          </Splide>
        </div>
        <div className="col-span-1">
          <h2 id="chosen-articles" className={twImageCarouselTitle}>
            {title}
          </h2>
        </div>
        <div className={twMobileArticlesWrapper}>
          {articles.map((article, index) => {
            return (
              <Article
                key={`article-${index}`}
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
            );
          })}
        </div>
      </div>
    </section>
  ) : (
    <div className="text-center" data-testid="error-image-carousel">
      No articles available
    </div>
  );
}
