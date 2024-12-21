import axios from "../axios.js";

export const getAllCharactersRequest = () => axios.get("/character");
