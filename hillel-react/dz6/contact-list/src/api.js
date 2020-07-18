import axios from "axios";

export default axios.create({
  baseURL: "https://5f086a6c445d0800166917c4.mockapi.io/contacts",
  headers: {
    "Content-Type": "application/json",
  },
});
