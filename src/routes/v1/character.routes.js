import express from "express";
import {
  getAllCharacters,
  getAliveCharacters,
} from "../../services/character.js";
import { evalToken } from "../../auth/jwt.js";

const router = express.Router();

router.get("/characters", evalToken, getAllCharacters);
router.get("/characters/alive", evalToken, getAliveCharacters);

export default router;
