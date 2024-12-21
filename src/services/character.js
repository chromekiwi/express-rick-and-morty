import { getAllCharactersRequest } from "../api/routes/characters.routes.js";
import { codes, status } from "../lib/utils.js";
import { en } from "../lib/languages/en.js";

const replaceCharacterName = (characters) => {
  return characters.map((character) => {
    const newName = character.name.replace(/\s/g, "_");
    return { ...character, name: newName };
  });
};

const formatCharacters = (characters) => {
  return characters.map((character) => {
    return {
      id: character.id,
      name: character.name,
      status: character.status,
      gender: character.gender,
    };
  });
};

export const getAllCharacters = async (req, res) => {
  try {
    const response = await getAllCharactersRequest();
    const characters = replaceCharacterName(response?.data?.results);
    res.status(codes.OK).json({ results: formatCharacters(characters) });
  } catch (error) {
    res
      .status(codes.INTERNAL_SERVER_ERROR)
      .json({ description: en.INTERNAL_SERVER_ERROR });
  }
};

export const getAliveCharacters = async (req, res) => {
  try {
    const response = await getAllCharactersRequest();
    const characters = replaceCharacterName(response?.data?.results);
    const aliveCharacters = characters.filter(
      (character) => character.status === status.ALIVE
    );
    res.status(codes.OK).json({ results: formatCharacters(aliveCharacters) });
  } catch (error) {
    res
      .status(codes.INTERNAL_SERVER_ERROR)
      .json({ description: en.INTERNAL_SERVER_ERROR });
  }
};
