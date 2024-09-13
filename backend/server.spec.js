import request from "supertest";
import app from "./server";

describe("GET /v1/media", () => {
  it(
    "should return all the media items",
    async () => {
      const res = await request(app)
        .get("/v1/")
        .expect("Content-Type", "text/html; charset=utf-8")
        .expect(200);
      expect(res.text).toBe("Media Api /v1");
    },
    20 * 1000
  );
});
