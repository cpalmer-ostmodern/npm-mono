import * as React from "react";

const SearchIcon = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} {...props}>
    <circle
      style={{
        fill: "none",
        stroke: "#000",
        strokeWidth: 2,
        strokeMiterlimit: 10,
      }}
      cx={13}
      cy={13}
      r={9}
    />
    <path
      style={{
        fill: "none",
        stroke: "#000",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeMiterlimit: 10,
      }}
      d="m26 26-6.563-6.563"
    />
  </svg>
);

export default SearchIcon;
