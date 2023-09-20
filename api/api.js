import axios from "axios";

const api = axios.create({
  baseURL: "https://tezla-backend-production.up.railway.app/",
  timeout: 10000,
});

export default api;
  