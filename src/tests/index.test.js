import configureStore from '../configureStore';

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