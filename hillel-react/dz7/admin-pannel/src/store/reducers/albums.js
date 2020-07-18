import { SET_ALBUMS } from "../actions/albums";

const initialState = {
  albums: [],
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case SET_ALBUMS:
      return { ...state, albums: payload };
    default:
      return state;
  }
}
