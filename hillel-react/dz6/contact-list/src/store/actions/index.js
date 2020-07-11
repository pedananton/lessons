import api from '../../api';

export const ACTION_DELETE = 'ACTION_DELETE';
export function deleteContact(id) {
    return function(dispatch) {
        api.delete(id).then(() =>
            dispatch({
                type: ACTION_DELETE,
                payload: id,
            })
        )
    }
}
 
export const ACTION_CREATE_CONTACT = 'ACTION_CREATE_CONTACT';
export function saveFormContact(changes) {
    var re = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
        var valid = re.test(changes.phone);
        if (valid&&changes.name&&changes.surname !== "") {
            return function(dispatch) {
        
                api.post('', changes).then((resp) =>
                    dispatch({
                        type: ACTION_CREATE_CONTACT,
                        payload: resp.data,
                    })
                )
                dispatch(closeModal());
            } 
        } else {
            (alert('Некорректный номер или имя!'))}
    
}

export const ACTION_TOGGLE = 'ACTION_TOGGLE';
export function toggleContact(id) {
    return {
        type: ACTION_TOGGLE,
        payload: id,
    };
}

export const ACTION_OPEN_MODAL = 'ACTION_OPEN_MODAL';
export function openModal(name) {
    return {
        type: ACTION_OPEN_MODAL,
        payload: name,
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