import axios from "axios";

export const api = axios.create({
  baseURL: "https://help-my-plants.azurewebsites.net/",
});
