import React from 'react';
import Link from 'next/link';

/* eslint-disable-next-line */
export interface ArticleCategoryProps {
  children: string | number;
  link?: string;
  tw?: string;
}

export function ArticleCategory({ children, tw, link }: ArticleCategoryProps) {
  return children ? (
    <div className={tw}>
      {link ? <Link href={link}>{children}</Link> : children}
    </div>
  ) : null;
}

export default ArticleCategory;
