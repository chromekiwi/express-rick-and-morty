import request from "supertest";
import app from "../src/app.js";

let server;
const PORT = process.env.PORT || 3001;

beforeAll(() => {
  server = app.listen(PORT);
});

afterAll(() => {
  server.close();
});

test("Get all the characters", async () => {
  const response = await request(app).get("/api/v1/characters");
  expect(response.status).toBe(200);
  expect(response.body[0]).toHaveProperty("id");
});
