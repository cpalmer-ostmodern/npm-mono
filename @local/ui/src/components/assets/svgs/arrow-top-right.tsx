import * as React from "react";

const ArrowTopRight = (props: any) => (
  <svg
    className="svg-icon"
    style={{
      verticalAlign: "middle",
      fill: "currentColor",
      overflow: "hidden",
    }}
    height={24}
    width={24}
    viewBox="0 0 1024 1024"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M746.667 725.333A21.333 21.333 0 0 1 725.333 704V298.667H320A21.333 21.333 0 0 1 320 256h426.667A21.333 21.333 0 0 1 768 277.333V704a21.333 21.333 0 0 1-21.333 21.333z"
      fill="#333"
    />
    <path
      d="M277.333 768a21.333 21.333 0 0 1-15.146-6.187 21.333 21.333 0 0 1 0-30.293L731.52 262.187a21.333 21.333 0 0 1 30.293 30.293L292.48 761.813A21.333 21.333 0 0 1 277.333 768z"
      fill="#333"
    />
  </svg>
);

export default ArrowTopRight;
