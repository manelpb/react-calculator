import React from 'react';
import CalcDisplay from '../';
import Display from 'components/Display';
import configureStore from 'redux-mock-store'
import { mount } from 'enzyme';
import { Provider } from 'react-redux';

const mockStore = configureStore();

describe('<CalcDisplay />', () => {
    it('should render Display', () => {
        const render = mount(
            <Provider store={mockStore({ result: 0 })}>
                <CalcDisplay />
            </Provider>
        );

        expect(render.find(Display).length).toEqual(1);
    });
});