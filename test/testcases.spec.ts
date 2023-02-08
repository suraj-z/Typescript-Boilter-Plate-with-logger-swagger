import app from '../src/index';
import request from 'supertest';

describe("GET / - a simple hello world api test case", () => {
  it("Hello API Request", async () => {
    const result = await request(app).get("/hello");
    expect(result.statusCode).toBe(200);
    expect(result.body).toEqual({
      "Status ": "SUCCESS",
      "Response": "Hello World!"
    });
  });
});