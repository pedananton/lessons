export const ADD_INPUT_ACTION = 'ACTION/ADD';
export const ADD_LIST_ITEM_ACTION = 'ACTION/ADD';

export function addInputValue(value) {
    return {
        type: ADD_INPUT_ACTION,
        payload: value,
    };
}

export function addListItemValue(value) {
    return {
        type: ADD_LIST_ITEM_ACTION,
        payload: value,
    };
}

