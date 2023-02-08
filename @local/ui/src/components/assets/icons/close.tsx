import * as React from "react";

const SvgComponent = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} {...props}>
    <path
      fill="none"
      stroke="#000"
      strokeWidth={2}
      strokeMiterlimit={10}
      d="m7 7 36 36M43 7 7 43"
    />
  </svg>
);

export default SvgComponent;
