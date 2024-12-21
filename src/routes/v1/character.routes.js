import express from "express";
import {
  getAllCharacters,
  getAliveCharacters,
} from "../../services/character.js";

const router = express.Router();

router.get("/characters", getAllCharacters);
router.get("/characters/alive", getAliveCharacters);

export default router;
