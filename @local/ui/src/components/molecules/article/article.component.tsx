import React from 'react';
import Link from 'next/link';

import { ArticleImage } from '../../atoms/article/article-image/article-image.component';
import { ArticleCategory } from '../../atoms/article/article-category/article-category.component';

import { IArticle } from './article.types';

/* eslint-disable-next-line */

export function Article({
  thumbnail,
  title,
  category,
  imageOrientation,
  imageAlt,
  link,
  tw,
  twImg,
  twTitle,
  twCategory,
}: IArticle) {
  return (
    <Link href={link ? link : '#'}>
      <article className={tw}>
        <ArticleImage
          src={thumbnail}
          orientation={imageOrientation}
          alt={imageAlt}
          tw={twImg}
        />
        <h3 className={twTitle}>{title}</h3>
        {category && (
          <ArticleCategory tw={twCategory}>{category}</ArticleCategory>
        )}
      </article>
    </Link>
  );
}

export default Article;
