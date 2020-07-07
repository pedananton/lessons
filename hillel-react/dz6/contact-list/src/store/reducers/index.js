import {TOGGLE_ACTION} from "../actions"

const initialState = {
    contacts: [],
};

export default function (state = initialState, {type, payload} ) {
    switch (type) {
        case TOGGLE_ACTION:
            return { 
                
                log: console.log('TOGGLE_ACTION', payload),
            }
        
        default: 
            return state;
    }
}