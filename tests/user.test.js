import request from "supertest";
import app from "../src/app.js";

let server;
const PORT = 3001;
const URL = "/api/v1";

beforeAll(() => {
  server = app.listen(PORT);
});

afterAll(() => {
  server.close();
});

test("Sign in", async () => {
  const response = await request(app)
    .post(`${URL}/profile/signin`)
    .send({
      email: "morty@email.com",
      password: "WubbaPickleRick",
    })
    .set("Content-Type", "application/json")
    .set("Accept", "application/json");
  expect(response.status).toBe(200);
});

test("Sign out", async () => {
  const response = await request(app).post(`${URL}/profile/signout`);
  expect(response.status).toBe(204);
});
