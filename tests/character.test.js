import request from "supertest";
import app from "../src/app.js";

let server;
const PORT = process.env.PORT || 3001;
const URL = "/api/v1";

let token;

beforeAll(async () => {
  server = app.listen(PORT);
  const response = await request(app)
    .post(`${URL}/profile/signin`)
    .send({
      email: "morty@email.com",
      password: "WubbaPickleRick",
    })
    .set("Content-Type", "application/json")
    .set("Accept", "application/json");
  token = response.headers["set-cookie"][0].split(";")[0].split("=")[1];
});

afterAll(async () => {
  await request(app).post(`${URL}/profile/signout`);
  server.close();
});

test("Get all the characters", async () => {
  const response = await request(app)
    .get(`${URL}/characters`)
    .set("Cookie", `token=${token}`);
  expect(response.status).toBe(200);
  expect(response.body.results[0]).toHaveProperty("id");
});

test("Get alive characters", async () => {
  const response = await request(app)
    .get(`${URL}/characters/alive`)
    .set("Cookie", `token=${token}`);
  expect(response.status).toBe(200);
  expect(response.body.results[0]).toHaveProperty("id");
  expect(response.body.results[0].status).toBe("Alive");
});
