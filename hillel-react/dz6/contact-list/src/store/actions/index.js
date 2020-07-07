export const TOGGLE_ACTION = 'ACTION/TOGGLE';

export function toggleAction(contact) {
    return {
        type: TOGGLE_ACTION,
        payload: contact,
    }
}