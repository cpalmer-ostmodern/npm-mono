import * as React from "react";

const SvgComponent = (props: any) => (
  <svg
    width={6}
    height={6}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="#212121" d="M3.172.344 6 3.173 3.172 6 .343 3.173z" />
  </svg>
);

export default SvgComponent;
