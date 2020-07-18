import { albums } from "../../api";

export const SET_ALBUMS = "SET_ALBUMS";
export const getAlbums = () => (dispatch) => {
  albums.get().then((resp) =>
    dispatch({
      type: SET_ALBUMS,
      payload: resp.data,
    })
  );
};
