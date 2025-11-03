import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

export async function sendMessage(message, history) {
  const resp = await api.post("/chat", { message, history });
  return resp.data;
}