import axios from "axios";

const URL = process.env.URL || "https://rickandmortyapi.com/api";

const instance = axios.create({
  baseURL: URL,
  timeout: 1000,
});

export default instance;
