import {
  ACTION_SET_CONTACTS,
  ACTION_OPEN_MODAL,
  ACTION_CLOSE_MODAL,
  ACTION_CREATE_CONTACT,
  ACTION_CHANGE_FORM_ITEM,
  ACTION_DELETE,
} from "../actions";

const initialState = {
  contacts: [],
  formItem: null,
};

function createContact(contacts, contact) {
  return [...contacts, contact];
}

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case ACTION_DELETE:
      return {
        ...state,
        contacts: state.contacts.filter((contact) => contact.id !== payload),
      };

    case ACTION_OPEN_MODAL:
      return {
        ...state,
        formItem: { name: "contact", surname: "contact", phone: "contact" },
      };

    case ACTION_CHANGE_FORM_ITEM:
      return {
        ...state,
        formItem: { ...state.formItem, ...payload },
      };

    case ACTION_CLOSE_MODAL:
      return {
        ...state,
        formItem: null,
      };

    case ACTION_SET_CONTACTS:
      return { ...state, contacts: payload };

    case ACTION_CREATE_CONTACT:
      return {
        ...state,
        contacts: createContact(state.contacts, payload),
      };

    default:
      return state;
  }
}
