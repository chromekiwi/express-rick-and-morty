import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { codes } from "../lib/utils.js";
import { genToken } from "../auth/jwt.js";
import { en } from "../lib/languages/en.js";

const secret = process.env.KEY;
const credentials = {
  email: process.env.EMAIL,
  password: process.env.PASSWORD,
};

export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (email != credentials.email || password != credentials.password) {
      return res
        .status(codes.UNAUTHORIZED)
        .json({ description: en.UNAUTHORIZED });
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const token = await genToken({ email });
    res.cookie("token", token);
    res.status(codes.OK).json({ email, password: hash });
  } catch (error) {
    res
      .status(codes.INTERNAL_SERVER_ERROR)
      .json({ description: en.INTERNAL_SERVER_ERROR });
  }
};

export const signout = async (req, res) => {
  try {
    res.cookie("token", "", { expires: new Date(0) });
    return res.sendStatus(codes.NO_CONTENT);
  } catch (error) {
    res
      .status(codes.INTERNAL_SERVER_ERROR)
      .json({ description: en.INTERNAL_SERVER_ERROR });
  }
};

export const verification = async (req, res) => {
  const { token } = req.cookies;

  try {
    if (!token)
      return res
        .status(codes.UNAUTHORIZED)
        .json({ description: en.UNAUTHORIZED });

    jwt.verify(token, secret, async (error, user) => {
      if (error)
        return res
          .status(codes.UNAUTHORIZED)
          .json({ description: en.UNAUTHORIZED });

      if (user.email != credentials.email)
        return res.status(codes.NOT_FOUND).json({ description: en.NOT_FOUND });

      console.log(user);

      return res.status(codes.OK).json({ email: user.email });
    });
  } catch (error) {
    res
      .status(codes.INTERNAL_SERVER_ERROR)
      .json({ description: en.INTERNAL_SERVER_ERROR });
  }
};
