import React from 'react';
/* eslint-disable-next-line */
export interface MenuMagazineCoverProps {
  issueNumber?: number | string;
  coverImage?: string;
  issueDetails?: string;
  twCoverImage?: string;
  twIssueText?: string;
  twIssueNumber?: string;
  twWrapper?: string;
}

export function MenuMagazineCover({
  issueNumber,
  coverImage,
  issueDetails,
  twCoverImage,
  twIssueText,
  twIssueNumber,
  twWrapper,
}: MenuMagazineCoverProps) {
  return coverImage ? (
    <div className={twWrapper}>
      {issueNumber && (
        <div className="flex flex-col justify-between max-md:w-full">
          <div className="flex justify-end gap-6 md:justify-between">
            <span className={twIssueText}>Issue</span>
            <span className={twIssueNumber}>{issueNumber}</span>
          </div>
          <div className="block md:hidden text-right font-quaternary">
            {issueDetails}
          </div>
        </div>
      )}

      {coverImage && (
        <div className={twCoverImage}>
          <img src={coverImage} alt={`HIA Issue ${issueNumber}`} />
        </div>
      )}
    </div>
  ) : null;
}

export default MenuMagazineCover;
