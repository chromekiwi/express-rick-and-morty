import request from "supertest";
import app from "../src/app.js";

let server;
const PORT = process.env.PORT || 3001;
const URL = "/api/v1";

beforeAll(() => {
  server = app.listen(PORT);
});

afterAll(() => {
  server.close();
});

test("Get all the characters", async () => {
  const response = await request(app).get(`${URL}/characters`);
  expect(response.status).toBe(200);
  expect(response.body.results[0]).toHaveProperty("id");
});

test("Get alive characters", async () => {
  const response = await request(app).get(`${URL}/characters/alive`);
  expect(response.status).toBe(200);
  expect(response.body.results[0]).toHaveProperty("id");
  expect(response.body.results[0].status).toBe("Alive");
});
