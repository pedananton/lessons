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
export function saveFormUser(data) {
  return function (dispatch) {
    users.post("", data).then((resp) =>
      dispatch({
        type: CREATE_USER,
        payload: resp.data,
      })
    );
  };
}
