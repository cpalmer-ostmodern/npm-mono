import React from "react";
import Link from 'next/link';

/* eslint-disable-next-line */
export interface ArticleTitleProps {
  title: string | number;
  titleLink?: string;
  tw?: string;
}

export function ArticleTitle({title, titleLink, tw}: ArticleTitleProps) {
  return (
    <h3 className={tw}>
      {titleLink ? <Link href={titleLink}>{title}</Link> : title}
    </h3>
  );
}

export default ArticleTitle;
