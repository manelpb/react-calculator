import React from 'react';

import * as constants from '../constants';

it('has a constant name BUTTON_PRESS', () => {
    const expected = 'app/BUTTON_PRESS';

    expect(constants.BUTTON_PRESS).toEqual(expected);
});