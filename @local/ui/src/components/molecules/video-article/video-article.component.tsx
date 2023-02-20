import React from 'react';
import Link from 'next/link';

import { ArticleVideoImage } from '../../atoms/article/article-video-image/article-video-image.component';
import { ArticleCategory } from '../../atoms/article/article-category/article-category.component';
import { IArticle } from '../article/article.types';

/* eslint-disable-next-line */

export interface VideoArticleProps extends IArticle {
  twIcon?: string;
}

export function VideoArticle({
  thumbnail = '',
  title = '',
  category,
  imageAlt = '',
  link,
  tw,
  twImg,
  twIcon,
  twTitle,
  twCategory,
}: VideoArticleProps) {
  return (
    <article className={tw}>
      {thumbnail && (
        <Link href={link ? link : '#'}>
          <ArticleVideoImage
            src={thumbnail}
            alt={imageAlt}
            twImg={twImg}
            twIcon={twIcon}
          />
        </Link>
      )}

      {title && (
        <Link href={link ? link : '#'}>
          <h3 className={twTitle}>{title}</h3>
        </Link>
      )}

      {category && (
        <ArticleCategory tw={twCategory}>{category}</ArticleCategory>
      )}
    </article>
  );
}

export default VideoArticle;
