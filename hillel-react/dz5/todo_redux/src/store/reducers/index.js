
import {ADD_NEW_LIST_ITEM_ACTION} from "../actions"

const initialState = {
    inputValue: '',
    listItemValue: 'listItemValue',
};


export default function (state = initialState, {type, payload} ) {
    //debugger
    switch (type) {
        case ADD_NEW_LIST_ITEM_ACTION:
            return {...state, listItemValue: state.inputValue + payload};
        default: 
            return state;
    }
}