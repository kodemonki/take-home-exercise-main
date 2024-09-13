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

describe("API Versioning", () => {
  it("should respond to requests made to the versioned endpoint", async () => {
    const res = await request(app).get("/V1/");
    expect(res.status).toBe(200);
  });
});

describe("API Endpoints", () => {
  it("should respond to requests made to the /media/ endpoint", async () => {
    const res = await request(app).get("/v1/media/");
    expect(res.status).toBe(200);
  });

  it("should respond to requests made to the /genres/ endpoint", async () => {
    const res = await request(app).get("/v1/genres/");
    expect(res.status).toBe(200);
  });

  it("should respond to requests made to the /years/ endpoint", async () => {
    const res = await request(app).get("/v1/years/");
    expect(res.status).toBe(200);
  });

  it("should throw error to requests made to the /media/paginate/ endpoint", async () => {
    const res = await request(app).get("/v1/media/paginate/");
    expect(res.status).toBe(500);
  });

  it("should respond to requests made to the /media/paginate/?page=1&limit=10 endpoint", async () => {
    const res = await request(app).get("/v1/media/paginate/?page=1&limit=10");
    expect(res.status).toBe(200);
  });
}