import React from 'react';
import Link from 'next/link';

import { MediaImage } from '../../atoms/media/media-image/media-image.component';
import { MediaMeta } from '../../atoms/media/media-meta/media-meta.component';

import { IMediaItem } from './media-item.types';

/* eslint-disable-next-line */

export function MediaItem({
  thumbnail,
  title,
  category,
  date,
  imageAlt,
  link,
  twMediaImage,
  twMediaMetaDivider,
  twMediaMetaWrapper,
  twMediaItemTitle,
}: IMediaItem) {
  return (
    <Link href={link}>
      <article>
        <MediaImage tw={twMediaImage} src={thumbnail} alt={imageAlt} />

        {date &&
          <MediaMeta
            twDivider={twMediaMetaDivider}
            twWrapper={twMediaMetaWrapper}
            date={date}
            category={category}
          />
        }

        <h3 className={twMediaItemTitle}>{title}</h3>
      </article>
    </Link>
  );
}

export default MediaItem;

