import React from 'react';
import Link from 'next/link';

/* eslint-disable-next-line */
export interface ArticleAuthorProps {
  authorName?: string;
  authorLink?: string;
  tw?: string;
}

export function ArticleAuthor({
  authorName,
  authorLink,
  tw,
}: ArticleAuthorProps) {
  return authorName ? (
    <div className={tw}>
      {authorLink ? <Link href={authorLink}>{authorName}</Link> : authorName}
    </div>
  ) : null;
}

export default ArticleAuthor;
