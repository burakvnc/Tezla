import axios from "axios";

const api = axios.create({
  baseURL: "https://artistic-totally-dassie.ngrok-free.app/",
  timeout: 10000,
});

export default api;
  