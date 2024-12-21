import { getAllCharactersRequest } from "../api/routes/characters.routes.js";
import { codes } from "../lib/utils.js";
import { en } from "../lib/languages/en.js";

export const getAllCharacters = async (req, res) => {
  try {
    const response = await getAllCharactersRequest();
    res.status(codes.OK).json(response?.data?.results);
  } catch (error) {
    res
      .status(codes.INTERNAL_SERVER_ERROR)
      .json({ description: en.INTERNAL_SERVER_ERROR });
  }
};
