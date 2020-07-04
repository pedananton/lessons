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
            
            return { 
                ...state,
                todos: state.todos.map((item)=>({isDone: !item.isDone})),
                //isDone: !payload.isDone, 
                log: console.log('TOGGLE_ACTION', payload),
            }
        
            /**
             * не меняет isDone в стейте 
             */
        
        default: 
            return state;
    }
}
