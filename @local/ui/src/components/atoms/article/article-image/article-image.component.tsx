import React from 'react';

/* eslint-disable-next-line */
export interface ArticleImageProps {
  src: string;
  orientation: 'square' | 'portrait';
  alt: string;
  tw?: string;
}

export function ArticleImage({src, orientation, alt, tw}: ArticleImageProps) {

  return (
    <div className={`${tw} ${orientation === 'square' ? 'aspect-square' : 'aspect-portrait'}`}>
      <img src={src} alt={alt} className="object-cover w-full" />
    </div>
  );
}

export default ArticleImage;
