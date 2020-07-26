import axios from "axios";

export default axios.create({
  baseURL: "https://5f16d587a346a00016739638.mockapi.io/users",
  headers: {
    "Content-Type": "application/json",
  },
});
