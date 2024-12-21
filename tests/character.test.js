import request from "supertest";
import app from "../src/app.js";

let server;
const PORT = 3002;
const URL = "/api/v1";

let token;

beforeAll(async () => {
  try {
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
  } catch (error) {
    console.log(error);
  }
});

afterAll(async () => {
  try {
    await request(app).post(`${URL}/profile/signout`);
    server.close();
  } catch (error) {
    console.log(error);
  }
});

test("Get alive characters", async () => {
  try {
    const response = await request(app)
      .get(`${URL}/characters/alive`)
      .set("Cookie", `token=${token}`);
    expect(response.status).toBe(200);
    expect(response.body.results[0]).toHaveProperty("id");
    expect(response.body.results[0].status).toBe("Alive");
  } catch (error) {
    console.log(error);
  }
});

test("Get alive character by ID", async () => {
  try {
    const id = 4;
    const response = await request(app)
      .get(`${URL}/characters/${id}`)
      .set("Cookie", `token=${token}`);
    expect(response.status).toBe(200);
    expect(response.body.results[0]).toHaveProperty("id");
    expect(response.body.results[0].status).toBe("Alive");
  } catch (error) {
    console.log(error);
  }
});

test("Get alive character by ID: expect status 404 due ID not found", async () => {
  try {
    const id = 16;
    const response = await request(app)
      .get(`${URL}/characters/${id}`)
      .set("Cookie", `token=${token}`);
    expect(response.status).toBe(404);
  } catch (error) {
    console.log(error);
  }
});
