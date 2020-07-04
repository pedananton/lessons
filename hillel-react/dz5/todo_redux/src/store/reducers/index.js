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
            
            return { ...state, isDone: !state.todos.isDone}
            //isDone: !state.todos.isDone, log: console.log('TOGGLE_ACTION', payload, isDone)
            /**
             * не меняет isDone повторно
             */
        
        default: 
            return state;
    }
}