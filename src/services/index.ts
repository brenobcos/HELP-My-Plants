import axios from "axios";

export const api = axios.create({
  baseURL: "https://web-production-d7d5.up.railway.app/",
});
