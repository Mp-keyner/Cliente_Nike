import axios from "axios";
export const baseURL = "http://localhost:8000/api/";
// export const baseURL = "https://fc54hzbr-8000.use2.devtunnels.ms/";
const instance = axios.create({
  baseURL,
});

export default instance;
