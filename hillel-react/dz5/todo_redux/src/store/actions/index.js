
export const TOGGLE_ITEM = 'ACTION/TOGGLE';

export function toggleItem(value) {
    return {
        type: TOGGLE_ITEM,
        payload: value,
    }
}

