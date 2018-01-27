import React from 'react';
import { shallow } from 'enzyme';
import configureStore from '../configureStore';
import App from '../App';

describe('configureStore', () => {
    it ('should return the store', () => {
        const expected = {
            result: 0,
            operations: [0],
        };

        const store = configureStore();
        expect(store.getState()).toEqual(expected);
    });
});