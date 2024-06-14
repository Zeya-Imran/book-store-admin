import axios from "axios";

const login = axios.create({
  baseURL: "http://localhost:5173",
});

export { login };
