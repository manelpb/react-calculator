import React from 'react';

import reducer from '../reducer';
import * as actions from '../actions';

describe('HomePage reducer', () => {
    let state = {};

    beforeEach(() => {
        state = {
            result: 0,
            operations: [0],
        };
    });

    it('should handle action BUTTON_PRESS', () => {
        const expected = {
            result: 1,
            operations: [1],
        };

        expect(reducer(state, actions.onButtonPress({ label: 1 }))).toEqual(expected);
    });

    it('should return current state if actions is not valid', () => {
        const expected = {
            result: 0,
            operations: [0],
        };

        expect(reducer(state, { type: 'invalid' })).toEqual(expected);
    });

    it('should return current state', () => {
        expect(reducer(undefined, {})).toEqual(state);
    });
});