import { users } from "../../api";

export const SET_USERS = "SET_USERS";
export const getUsers = () => (dispatch) => {
  users.get().then((resp) =>
    dispatch({
      type: SET_USERS,
      payload: resp.data,
    })
  );
};

export const CREATE_USER = "CREATE_USER";
export function saveFormUser(changes) {
  return function (dispatch) {
    users.post("", changes).then((resp) =>
      dispatch({
        type: CREATE_USER,
        payload: resp.data,
      })
    );
  };
}

export const NEW_USER_FORM = "NEW_USER_FORM";
export function newUserForm(name) {
  return {
    type: NEW_USER_FORM,
    payload: name,
  }
}
