import { rooms } from "../../api";

export const SET_ROOMS = "SET_ROOMS";
export const getRooms = () => (dispatch) => {
    rooms.get().then((resp) =>
    dispatch({
      type: SET_ROOMS,
      payload: resp.data,
    })
  );
};
