import request from "supertest";
import app from "./server";

describe("GET /v1/media", () => {
  it("should return all the media items", async () => {
    const res = await request(app)
      .get("/v1/media")
      .expect("Content-Type", /json/)
      .expect(200);

    expect(res.body[0].title).toBe("Raiders of the Lost Ark");
  });

});