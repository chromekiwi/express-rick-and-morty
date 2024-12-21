import express from "express";
import { signin, signout, verification } from "../../services/user.js";

const router = express.Router();

const URL = "/profile";

router.post(`${URL}/signin`, signin);
router.post(`${URL}/signout`, signout);
router.get(`${URL}/verification`, verification);

export default router;
