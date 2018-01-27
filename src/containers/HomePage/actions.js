import { BUTTON_PRESS } from './constants';

export function onButtonPress(key) {
    return { type: BUTTON_PRESS, key };
}