import { SET_FILTER } from "../actions/filters";

const initialState = {
  filter: "all",
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case SET_FILTER:
      return { ...state, filter: payload };
    default:
      return state;
  }
}
