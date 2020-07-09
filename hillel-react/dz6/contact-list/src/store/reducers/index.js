import {
    ACTION_SET_CONTACTS,
    ACTION_OPEN_MODAL,
    ACTION_CLOSE_MODAL,
} from "../actions"

const initialState = {
    contacts: [],
    formItem: null,
};

export default function (state = initialState, {type, payload} ) {
    function getEmptyItem() {
        return { name: ' name', surname: ' surname', phone: ' phone' };
    }

    switch (type) {
        case ACTION_OPEN_MODAL:
            return {
                ...state,
                formItem: payload
                    ? state.contacts.find((contact) => contact.id === payload)
                    : getEmptyItem(),
            };

            case ACTION_CLOSE_MODAL:
            return {
                ...state,
                formItem: null,
            };

        case ACTION_SET_CONTACTS:
            return { ...state, contacts: payload };
        
        default: 
            return state;
    }
}