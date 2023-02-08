import React from 'react';

/* eslint-disable-next-line */
export interface MediaMetaProps {
  date: string;
  category: string;
  twWrapper?: string;
  twDivider?: string;
}

export function MediaMeta({date, category, twWrapper, twDivider}: MediaMetaProps) {

  return (
    <div className={twWrapper}>
      <div className='flex gap-6'>
        <div className={`${twDivider}`}>{date}</div>
        <div>{category}</div>
      </div>
    </div>
  );
}

export default MediaMeta;
