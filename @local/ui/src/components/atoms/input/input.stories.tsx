import * as React from "react";
import { Input } from "./input.component";

export default {
  title: "Components / Forms / Input",
  parameters: {
    component: Input,
    componentSubtitle: "Simple input component",
  },
};

export const outline = () => (
  <div style={{ width: "500px" }}>
    <Input type="text" defaultValue="ابحث هنا" />
  </div>
);
