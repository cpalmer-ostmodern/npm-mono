import { render } from "@testing-library/react";

import { TopicButton } from "./button.component";

describe("Button", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<TopicButton size={""} />);
    expect(baseElement).toBeTruthy();
  });
});
