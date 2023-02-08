import React from "react";

/* eslint-disable-next-line */
export interface ArticleCategoryProps {
  children: string | number;
  tw?: string;
}

export function ArticleCategory({children, tw}: ArticleCategoryProps) {
  return (
    <div className={tw}>
      {children}
    </div>
  );
}

export default ArticleCategory;
