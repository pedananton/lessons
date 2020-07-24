import { SET_USERS, CREATE_USER, NEW_USER_FORM } from "../actions/users";

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

    case NEW_USER_FORM:
      return {
        ...state,
        formItem: { name: "name", surname: "surname", phone: "phone" },
      };
    default:
      return state;
  }
}
