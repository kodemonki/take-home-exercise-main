import request from "supertest";
import app from "./server";

describe("CORS Configuration", () => {
  it("should allow requests from allowed origins", async () => {
    const allowedOrigins = ["http://localhost:3001", "http://localhost:1234"];
    for (const origin of allowedOrigins) {
      const res = await request(app)
        .get("/v1/")
        .set("Origin", origin)
        .expect(200);
      expect(res.headers["access-control-allow-origin"]).toBe(origin);
    }
  });

  it("should reject requests from disallowed origins", async () => {
    const disallowedOrigin = "http://notallowed.com";
    const res = await request(app)
      .get("/v1/")
      .set("Origin", disallowedOrigin)
      .expect(200);
    expect(res.headers["access-control-allow-origin"]).toBeUndefined();
  });
});