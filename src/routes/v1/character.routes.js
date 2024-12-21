import express from "express";
import {
  getAliveCharacters,
  getCharacterById,
} from "../../services/character.js";
import { evalToken } from "../../auth/jwt.js";

const router = express.Router();

router.get("/characters/alive", evalToken, getAliveCharacters);
router.get("/characters/:id", evalToken, getCharacterById);

export default router;
