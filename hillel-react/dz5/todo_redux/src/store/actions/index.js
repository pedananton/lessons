
export const TOGGLE_ACTION = 'ACTION/TOGGLE';

export function toggleAction(value) {
    return {
        type: TOGGLE_ACTION,
        payload: value,
    }
}

