import { SET_USERS } from "../actions/users";

const initialState = {
  items: [],
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case SET_USERS:
      return { ...state, items: payload };
    default:
      return state;
  }
}
