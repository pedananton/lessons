
import {ADD_NEW_LIST_ITEM_ACTION} from "../actions"
//debugger
const initialState = {
    itemValue: 'SomeItemValue',
    inputValue: '',
    
};
//debugger

export default function (state = initialState, {type, payload} ) {
    switch (type) {
        case ADD_NEW_LIST_ITEM_ACTION:
            return {...state, item: state.inputValue + payload};
        default: 
            return state;
    }
}