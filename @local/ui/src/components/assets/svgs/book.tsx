import * as React from "react";

const Book = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 330 310"
    height={24}
    width={24}
    {...props}
  >
    <title>{"Book Pictograph 1"}</title>
    <path
      style={{
        opacity: 1,
        fill: "#fff",
        fillOpacity: 1,
        stroke: "none",
        strokeWidth: 0.25,
        strokeLinecap: "round",
        strokeLinejoin: "miter",
        strokeMiterlimit: 4,
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
      }}
      d="M245.627 396.122h250.767v244.337H245.627z"
      transform="translate(-207.047 -371.181)"
    />
    <path
      style={{
        fill: "#333f4f",
      }}
      d="M510.478 414.181v-21c0-3.869-2.585-7-5.77-7H395.094c-9.415 0-17.796 5.507-23.061 14-5.266-8.493-13.646-14-23.062-14H239.355c-3.185 0-5.77 3.131-5.77 7v21h-11.538v238h124.227c6.312 8.587 15.542 14 25.773 14s19.458-5.413 25.766-14h124.234v-238H510.51zm-265.385-14H348.94c9.543 0 17.308 9.422 17.308 21v133.775c0 3.868 2.585 7 5.77 7 3.184 0 5.769-3.132 5.769-7V421.18c0-11.578 7.765-21 17.307-21H498.94v224H395.093c-9.411 0-17.796 5.507-23.061 14-5.266-8.493-13.65-14-23.062-14H245.124v-224z"
      transform="translate(-207.047 -371.181)"
    />
  </svg>
);

export default Book;
