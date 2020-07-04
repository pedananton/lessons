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

export default function (state = initialState, {type, payload} ) {
    switch (type) {
        case TOGGLE_ACTION:
            debugger
            console.log('TOGGLE_ACTION', this)
            const item = state.todos.item
            return (item.id, {...item, isDone: !item.isDone}) 
        default: 
            return state;
    }
}