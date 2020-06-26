
import {ADD_NEW_LIST_ITEM_ACTION} from "../actions"
//debugger
const initialState = {
    inputValue: '',
    itemValue: 'SomeItemValue',
};


export default function (state = initialState, {type, payload} ) {
    //debugger
    switch (type) {
        case ADD_NEW_LIST_ITEM_ACTION:
            return {...state, itemValue: state.inputValue + payload};
        default: 
            return state;
    }
}