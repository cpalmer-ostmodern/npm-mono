import React from "react";
import { render } from "@testing-library/react";

import MediaGrid from "./media-grid.component";

describe("MediaGrid", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <MediaGrid
        columns={3}
        title="بودكاست"
        titleLink="#"
        buttonText="المزيد"
        buttonLink="#"
        articles={[
          {
            link: "#",
            title:
              "مفاجآت وأرقام مميزة في مسيرتها.. هل يكون 2023 عام عودة ريهانا إلى قمة المنافسة الغنائية بعد غياب؟",
            thumbnail:
              "https://static.hiamag.com/styles/500x500/public/2023-01/episode%205.jpg?h=57024e64&itok=2Jj0FY1z",
            imageAlt: "HIA image",
            category: "جلسة فلسفة",
            date: "15 يوليو 2021",
          },
        ]}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
