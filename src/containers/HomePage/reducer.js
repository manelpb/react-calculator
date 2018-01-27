import { BUTTON_PRESS } from './constants';
import { addKey } from './operations';

const initialState = {
    result: 0,
    operations: [0],
};

export default function homeReducer(state = initialState, action) {
    switch (action.type) {
        case BUTTON_PRESS:
            const addedKey = addKey(state.operations, action.key.label);
            return Object.assign({}, state, { result: addedKey.currentOperation, operations: addedKey.newOperations });
        default:
            return state;
    }
}