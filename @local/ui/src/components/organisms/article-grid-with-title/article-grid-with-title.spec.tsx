import React from "react";
import { render } from "@testing-library/react";

import ArticleGrid from "./article-grid-with-title.component";

describe("ArticleGrid", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <ArticleGrid
        articles={[
          {
            link: "#",
            imageOrientation: "square",
            category: "",
            title:
              "مفاجآت وأرقام مميزة في مسيرتها.. هل يكون 2023 عام عودة ريهانا إلى قمة المنافسة الغنائية بعد غياب؟",
            thumbnail:
              "https://static.hiamag.com/styles/312x462/public/2023-01/%D8%B5%D9%88%D8%B1%D8%A9%20%D9%85%D9%86%20%D8%B5%D9%81%D8%AD%D8%A9%20%D8%B1%D9%8A%D9%87%D8%A7%D9%86%D8%A7%20%D8%B9%D9%84%D9%89%20%D9%81%D9%8A%D8%B3%D8%A8%D9%88%D9%83%20%283%29_0.jpg?h=b7c95cc5&itok=ertW0Pxc",
            imageAlt: "HIA image",
          },
        ]}
        columns={4}
        title="لايف ستايل"
        titleLink="#"
        titleRightAligned
        twGridTitle={""}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
