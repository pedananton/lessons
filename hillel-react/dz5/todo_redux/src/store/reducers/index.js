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
            return { 
                ...state,
                todos: state.todos.map((item)=>({isDone: !item.isDone})),
                log: console.log('TOGGLE_ACTION', payload),
            }
        
        default: 
            return state;
    }
}
