
export const TOGGLE_ACTION = 'ACTION/TOGGLE';

export function toggleAction(item) {
    return {
        type: TOGGLE_ACTION,
        payload: item,
        //log: console.log('toggleAction', item)
    }
}

