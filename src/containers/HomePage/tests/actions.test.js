import React from 'react';

import * as constants from '../constants';
import * as actions from '../actions';

it('has a type BUTTON_PRESS', () => {
    const expected = {
        type: constants.BUTTON_PRESS,
        key: 1,
    };

    const result = actions.onButtonPress(1);
    expect(result).toEqual(expected);
});