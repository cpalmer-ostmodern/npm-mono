import React from "react";
import Link from "next/link";
import { TopicButton } from "../../atoms/button/button.component";
import { MediaItem } from "../../molecules/media-item";
import { IMediaItem } from "../../molecules/media-item/media-item.types";

export interface MediaGridProps {
  articles: IMediaItem[];
  columns: number;
  title?: string;
  buttonLink?: string;
  buttonText?: string;
  titleLink?: string;
  twMediaImage?: string;
  twMediaTitle?: string;
  twMediaItemTitle?: string;
  twMediaItemGrid?: string;
  twMediaBackground?: string;
  twMediaButton?: string;
  twMediaButtonWrapper?: string;
  twMediaMetaDivider?: string;
  twMediaMetaWrapper?: string;
  twMediaGridWrapper?: string;
}

export function MediaGrid({
  articles,
  columns = 3,
  title,
  buttonText,
  titleLink,
  twMediaTitle,
  twMediaImage,
  twMediaItemGrid,
  twMediaItemTitle,
  twMediaBackground,
  twMediaButton,
  twMediaButtonWrapper,
  twMediaMetaDivider,
  twMediaMetaWrapper,
  twMediaGridWrapper,
}: MediaGridProps) {
  return (
    <div className={`${twMediaBackground}`}>
      <div className={twMediaGridWrapper}>
        <Link href={titleLink ? titleLink : "#"}>
          <h2 className={twMediaTitle}>{title}</h2>
        </Link>

        <div className={`${twMediaItemGrid} md:grid-cols-${columns}`}>
          {articles.map((article, index) => {
            return (
              <MediaItem
                key={`media-item-${index}`}
                link={article.link}
                category={article.category}
                title={article.title}
                date={article.date}
                thumbnail={article.thumbnail}
                imageAlt={article.imageAlt}
                twMediaItemTitle={twMediaItemTitle}
                twMediaImage={twMediaImage}
                twMediaMetaWrapper={twMediaMetaWrapper}
                twMediaMetaDivider={twMediaMetaDivider}
              />
            );
          })}
        </div>

        {buttonText && (
          <div className={twMediaButtonWrapper}>
            <TopicButton
              topicName={buttonText}
              icon="arrow-left"
              tw={`${twMediaButton}`}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default MediaGrid;
