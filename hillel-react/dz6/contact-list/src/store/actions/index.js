import api from '../../api';


export const ACTION_OPEN_MODAL = 'ACTION_OPEN_MODAL';
export function openModal(id) {
    return {
        type: ACTION_OPEN_MODAL,
        payload: id,
    };
}

export const TOGGLE_ACTION = 'ACTION/TOGGLE';
export function toggleAction(id) {
    return {
        type: TOGGLE_ACTION,
        payload: id,
    }
}

export const ACTION_SET_CONTACTS = 'ACTION_SET_CONTACTS';
export function setContacts(data) {
    return {
        type: ACTION_SET_CONTACTS,
        payload: data,
    };
}

export function fetchContacts() {
    return function (dispatch) {
        api.get().then((resp) => dispatch(setContacts(resp.data)));
    };
}