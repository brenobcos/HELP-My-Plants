import axios from "axios";

export const api = axios.create({
  baseURL: "http://help-my-plants-backend.herokuapp.com/",
});
