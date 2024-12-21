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
  try {
    const response = await request(app)
      .post(`${URL}/profile/signin`)
      .send({
        email: "morty@email.com",
        password: "WubbaPickleRick",
      })
      .set("Content-Type", "application/json")
      .set("Accept", "application/json");
    expect(response.status).toBe(200);
  } catch (error) {
    console.log(error);
  }
});

test("Sign in: expect status 401 due to invalid credentials", async () => {
  try {
    const response = await request(app)
      .post(`${URL}/profile/signin`)
      .send({
        email: "rick@email.com",
        password: "WubbaPickleRick",
      })
      .set("Content-Type", "application/json")
      .set("Accept", "application/json");
    expect(response.status).toBe(401);
  } catch (error) {
    console.log(error);
  }
});

test("Sign out", async () => {
  try {
    const response = await request(app).post(`${URL}/profile/signout`);
    expect(response.status).toBe(204);
  } catch (error) {
    console.log(error);
  }
});
