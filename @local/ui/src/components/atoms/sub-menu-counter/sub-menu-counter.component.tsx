import React from "react";

/* eslint-disable-next-line */
export interface SubMenuCounterProps {
  totalLinks: number;
  tw?: string;
}

export function SubMenuCounter({totalLinks, tw}: SubMenuCounterProps) {
  return (<div className={tw}>({totalLinks})</div>)
}

export default SubMenuCounter;
