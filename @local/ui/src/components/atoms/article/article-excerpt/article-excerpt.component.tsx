import React from 'react';

/* eslint-disable-next-line */
export interface ArticleExcerptProps {
  excerpt?: string;
  tw?: string;
}

export function ArticleExcerpt({ excerpt, tw }: ArticleExcerptProps) {
  return excerpt ? <div className={tw}>{excerpt}</div> : null;
}

export default ArticleExcerpt;
