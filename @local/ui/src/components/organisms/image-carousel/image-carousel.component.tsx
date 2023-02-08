import React from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { Article } from "../../molecules/article";

export function ImageCarousel({
  width,
  height,
  gap,
  columns = 12,
  articles,
  twCarouselContainer,
  twArticleImg,
  twArticleTitle,
  twArticle,
  twArticleCategory,
}: any) {
  const setImageOrientation = (index: number) => {
    return index % 2 ? "portrait" : "square";
  };
  return (
    <section className="!mt-60">
      <div className={`grid grid-cols-${columns}`}>
        <div className={`${twCarouselContainer}`}>
          <Splide
            hasTrack={false}
            onArrowsMounted={(splide, prev, next) => {
              console.log(prev, next);
            }}
            tag="div"
            aria-labelledby="chosen-articles"
            options={{
              arrowPath:
                "M2.117 12l7.527 6.235-.644.765-9-7.521 9-7.479.645.764-7.529 6.236h21.884v1h-21.883z",
              perPage: 2,
              perMove: 1,
              height: height,
              width: width,
              rewind: false,
              gap: gap,
            }}
          >
            <SplideTrack id="splide01-track">
              {articles &&
                articles.map((article: any, index: number) => (
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
        <div className="col-span-2">
          <h2
            id="chosen-articles"
            className="text-right font-bold font-primary text-9xl text-grey-100 ml-10"
          >
            اخترنا لكم
          </h2>
        </div>
      </div>
    </section>
  );
}