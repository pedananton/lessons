import axios from "axios";

export const users = axios.create({
  baseURL: "https://5f16d587a346a00016739638.mockapi.io/users",
  headers: {
    "Content-Type": "application/json",
  },
});

export const rooms = axios.create({
  baseURL: "https://5f16d587a346a00016739638.mockapi.io/Rooms",
  headers: {
    "Content-Type": "application/json",
  },
});
