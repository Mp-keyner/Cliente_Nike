import axios from "axios";
export const baseURL = "http://localhost:8000/api/";
const instance = axios.create({
  baseURL,
});

export default instance;
