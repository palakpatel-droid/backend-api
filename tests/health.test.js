import request from "supertest";
import express from "express";

const app = express();
app.get("/", (req, res) => res.status(200).send("OK"));

describe("Health check", () => {
  it("should return 200", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
  });
});
