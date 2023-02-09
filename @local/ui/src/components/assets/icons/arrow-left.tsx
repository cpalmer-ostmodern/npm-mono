import * as React from "react";

const SvgComponent = (props: any) => (
  <svg
    width={48}
    height={38}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M6.75 17.5 1 11.75 6.75 6M24 11.75H1" stroke="#212121" />
  </svg>
);

export default SvgComponent;
