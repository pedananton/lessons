import { combineReducers } from "redux";
import users from "./users";
import rooms from "./rooms";
import filters from "./filters";

export default combineReducers({
  users,
  rooms,
  filters,
});
