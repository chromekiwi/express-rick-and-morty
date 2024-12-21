import express from "express";
import morgan from "morgan";
import cors from "cors";
import cookie from "cookie-parser";
import { codes } from "./lib/utils.js";

import character from "./routes/v1/character.routes.js";
import user from "./routes/v1/user.routes.js";

const API = "/api/v1";

const app = express();
app.use(cors({ origin: "*", credentials: true }));
app.use(morgan("dev"));
app.use(cookie());
app.use(express.json());

app.use(API, user);
app.use(API, character);

app.use((req, res) => {
  return res.status(codes.NOT_FOUND).json({
    message: "I turned myself into a pickle, Morty! I’m Pickle Ri-i-i-ick!",
  });
});

export default app;
