import express from "express";
import { getAllCharacters } from "../../services/character.js";

const router = express.Router();

router.get("/characters", getAllCharacters);

export default router;
