import React from "react";

import SearchIconSVG from "../../assets/svgs/search-icon";

/* eslint-disable-next-line */
export interface SearchIconProps {
  color?: string;
  size?: number | string;
}

export function SearchIcon({ color = "black", size }: SearchIconProps) {
  return <SearchIconSVG />;
}

export default SearchIcon;
