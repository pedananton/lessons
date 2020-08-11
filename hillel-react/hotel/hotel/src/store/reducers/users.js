import {
  SET_USERS,
  CREATE_USER,
  DELETE_USER,
  SET_DATE,
} from "../actions/users";

const initialState = {
  users: [],
  formItem: null,
  date: new Date(),
};

function createUser(users, user) {
  return [...users, user];
}

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case SET_DATE:
      return { ...state, date: payload };

    case SET_USERS:
      return { ...state, users: payload };

    case CREATE_USER:
      return {
        ...state,
        users: createUser(state.users, payload),
      };

    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== payload),
      };

    default:
      return state;
  }
}
