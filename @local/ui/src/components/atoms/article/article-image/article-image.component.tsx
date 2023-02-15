import React from 'react';
import Link from 'next/link';

/* eslint-disable-next-line */
export interface ArticleImageProps {
  src?: string;
  orientation?: 'square' | 'portrait' | undefined;
  alt?: string;
  link?: string;
  tw?: string;
}

export function ArticleImage({
  src = '',
  orientation = 'square',
  alt = '',
  tw = '',
  link,
}: ArticleImageProps) {
  return src ? (
    <div
      className={`${tw} ${
        orientation === 'square' ? 'aspect-square' : 'aspect-portrait'
      }`}
    >
      {link ? (
        <Link href={link}>
          <img src={src} alt={alt} className="object-cover w-full h-full" />
        </Link>
      ) : (
        <img src={src} alt={alt} className="object-cover w-full h-full" />
      )}
    </div>
  ) : null;
}

export default ArticleImage;
