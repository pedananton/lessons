import { SET_USERS, CREATE_USER } from "../actions/users";

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
    default:
      return state;
  }
}
