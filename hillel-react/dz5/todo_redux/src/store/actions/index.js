
export const ADD_NEW_LIST_ITEM_ACTION = 'ACTION/ADD';

export function addNewListItem(value) {
    //debugger
    return {
        
        type: ADD_NEW_LIST_ITEM_ACTION,
        payload: value,
    };
}


