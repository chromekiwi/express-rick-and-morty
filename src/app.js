import express from "express";
import morgan from "morgan";

import character from "./routes/v1/character.routes.js";

const API = "/api/v1";

const app = express();
app.use(morgan("dev"));
app.use(express.json());

app.use(API, character);

export default app;
