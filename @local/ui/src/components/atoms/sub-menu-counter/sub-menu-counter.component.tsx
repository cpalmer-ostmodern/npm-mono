import React from 'react';

/* eslint-disable-next-line */
export interface SubMenuCounterProps {
  totalLinks: number | undefined;
  tw?: string;
}

export function SubMenuCounter({ totalLinks, tw }: SubMenuCounterProps) {
  return totalLinks ? <div className={tw}>({totalLinks})</div> : null;
}

export default SubMenuCounter;
