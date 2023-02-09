import React from 'react';

/* eslint-disable-next-line */
export interface MediaImageProps {
  src: string;
  alt: string;
  tw?: string;
}

export function MediaImage({src, alt, tw}: MediaImageProps) {

  return (
    <div className={tw}>
      <img src={src} alt={alt} className='object-cover w-full' />
    </div>
  );
}

export default MediaImage;
