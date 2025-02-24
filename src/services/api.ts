import axios from "axios";

const api = axios.create({
  baseURL: "https://opensky-network.org/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
