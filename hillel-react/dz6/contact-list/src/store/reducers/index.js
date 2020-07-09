import {
    ACTION_SET_CONTACTS,
    ACTION_OPEN_MODAL,
    ACTION_CLOSE_MODAL,
    ACTION_TOGGLE
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
        case ACTION_TOGGLE :
            return {
                ...state,
                log: console.log('ACTION_TOGGLE'),
                contacts: state.contacts.map((contact) => 
                    contact.id !== payload
                    ? contact
                    : {...contact, isToggle: !contact.isToggle }
                )
            }

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