
import {ADD_NEW_LIST_ITEM_ACTION} from "../actions"
//debugger
const initialState = {
    todos: [
        {
            itemValue: 'learning english',
            isDone: false,
            id: 1,
        },
    ],
};
//debugger

export default function (state = initialState, {type, payload} ) {
    switch (type) {
        case ADD_NEW_LIST_ITEM_ACTION:
            return {
                ...state, 
                itemValue: state.itemValue + payload,
            };
        default: 
            return state;
    }
}