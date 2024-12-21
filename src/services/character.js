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

const identifyAliveCharacters = (characters) => {
  return characters.filter((character) => character.status === status.ALIVE);
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
    const aliveCharacters = identifyAliveCharacters(characters);
    res.status(codes.OK).json({ results: formatCharacters(aliveCharacters) });
  } catch (error) {
    res
      .status(codes.INTERNAL_SERVER_ERROR)
      .json({ description: en.INTERNAL_SERVER_ERROR });
  }
};

export const getCharacterById = async (req, res) => {
  const id = parseInt(req.params.id);

  try {
    const response = await getAllCharactersRequest();
    const characters = replaceCharacterName(response?.data?.results);
    const aliveCharacters = identifyAliveCharacters(characters);
    const character = aliveCharacters.find((character) => character.id === id);
    if (character) {
      res.status(codes.OK).json({ results: formatCharacters([character]) });
    } else {
      res.status(codes.NOT_FOUND).json({ description: en.NOT_FOUND });
    }
  } catch (error) {
    res
      .status(codes.INTERNAL_SERVER_ERROR)
      .json({ description: en.INTERNAL_SERVER_ERROR });
  }
};
