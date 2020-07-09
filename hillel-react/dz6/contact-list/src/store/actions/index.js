import api from '../../api';


export const ACTION_OPEN_MODAL = 'ACTION_OPEN_MODAL';
export function openModal(id) {
    return {
        type: ACTION_OPEN_MODAL,
        payload: id,
    };
}

export const ACTION_CLOSE_MODAL = 'ACTION_CLOSE_MODAL';
export function closeModal() {
    return {
        type: ACTION_CLOSE_MODAL,
    };
}

export const ACTION_CHANGE_FORM_ITEM = 'ACTION_CHANGE_FORM_ITEM';
export function changeFormItem(changes) {
    return {
        type: ACTION_CHANGE_FORM_ITEM,
        payload: changes,
    };
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