import { SET_USERS, CREATE_USER, DELETE_USER } from "../actions/users";

const initialState = {
  users: [],
  formItem: null,
};

function createUser(users, user) {
  return [...users, user];
}

export default function (state = initialState, { type, payload }) {
  switch (type) {
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
