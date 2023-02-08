import { handler } from "./index";

describe("handler", () => {
  it('should return "This is UMS"', async () => {
    const response = await handler();
    expect(response.body).toBe("This is UMS");
  });
});
