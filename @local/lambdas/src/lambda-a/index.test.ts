import { handler } from "./index";

describe("handler", () => {
  it('should return "This is CMS"', async () => {
    const response = await handler({
      headers: {},
      httpMethod: "GET",
      statusCode: 200,
    });
    expect(response.body).toBe("This is CMS");
  });
});
