import {TOGGLE_ITEM} from "../actions"

const initialState = {
    todos: [
        {
            title: 'learning english',
            isDone: false,
            id: 1,
        },
    ],
};

export default function (state = initialState, {type, payload=state.todos} ) {
    switch (type) {
        case TOGGLE_ITEM:
            debugger 
            return
        default: 
            return state;
    }
}