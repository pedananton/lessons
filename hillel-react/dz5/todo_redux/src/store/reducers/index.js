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
            //debugger
            console.log('TOGGLE_ACTION', state)
            return ({...state, isDone: !state.todos.isDone}) 
        
        default: 
            return state;
    }
}