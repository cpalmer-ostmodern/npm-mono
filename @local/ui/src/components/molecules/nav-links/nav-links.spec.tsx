import { render } from "@testing-library/react";

import NavLinks from "./nav-links";

describe("NavLinks", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<NavLinks tw={""} links={[]} />);
    expect(baseElement).toBeTruthy();
  });
});
