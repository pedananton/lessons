
export const TOGGLE_ACTION = 'ACTION/TOGGLE';

export function toggleAction(isDone) {
    return {
        type: TOGGLE_ACTION,
        payload: isDone,
        log: console.log('toggleAction', isDone)
    }
}

