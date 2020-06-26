import { ADD_INPUT_ACTION } from "../actions";
import {ADD_LIST_ITEM_ACTION} from "../actions"

const initialState = {
    inputValue: '',
    listItemValue: 'listItemValue',
};


export default function (state = initialState, {type, payload} ) {
    switch (type) {
        case ADD_INPUT_ACTION:
            return {...state, inputValue: state.inputValue + payload};
        case ADD_LIST_ITEM_ACTION:
            return {...state, listItemValue: state.listItemValue + payload};
        default: 
            return state;
    }
}