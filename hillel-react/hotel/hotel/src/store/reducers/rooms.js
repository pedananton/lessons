import { SET_ROOMS } from "../actions/rooms";

const initialState = {
  items: [],
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case SET_ROOMS:
      return { ...state, items: payload };
    default:
      return state;
  }
}
