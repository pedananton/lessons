import {
    ACTION_SET_CONTACTS,
    ACTION_OPEN_MODAL,
    ACTION_CLOSE_MODAL,
    ACTION_TOGGLE,
    ACTION_CREATE_CONTACT,
} from "../actions"

const initialState = {
    contacts: [],
    formItem: null,
};

function getEmptyItem(contact) {
    return { name: 'contact', surname: 'contact', phone: 'contact' };
}

function createContact(contacts, contact) {
    return [...contacts, contact];
}

export default function (state = initialState, {type, payload} ) {
    switch (type) {

        case ACTION_OPEN_MODAL:
            console.log('ACTION_OPEN_MODAL', payload)
            return {
                ...state,
                formItem: payload
                    ? state.formItem.value
                    : getEmptyItem(),
            };

            case ACTION_CLOSE_MODAL:
            return {
                ...state,
                formItem: null,
            };

        case ACTION_SET_CONTACTS:
            return { ...state, contacts: payload };

        case ACTION_CREATE_CONTACT:
            console.log('ACTION_CREATE_CONTACT', payload)
            return {
                ...state,
                contacts: createContact(state.contacts, payload),
            };
            
        case ACTION_TOGGLE :
            return {
                ...state,
                contacts: state.contacts.map((contact) => 
                    contact.id !== payload
                    ? contact
                    : {...contact, isToggle: !contact.isToggle }
                )
            }
        
        default: 
            return state;
    }
}