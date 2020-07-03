import {TOGGLE_ACTION} from "../actions"

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
        case TOGGLE_ACTION:
            debugger
            //state.todos.map(item.id, {...item, isDone: !item.isDone}) 
            return
        default: 
            return state;
    }
}