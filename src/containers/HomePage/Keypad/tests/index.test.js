import React from 'react';
import Keypad from '../';
import configureStore from 'redux-mock-store'
import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import ButtonGroup from 'components/ButtonGroup';
import Row from 'components/Row';
import Column from 'components/Column';

const mockStore = configureStore();

describe('<Keypad />', () => {
    it('should render Display', () => {
        const render = mount(
            <Provider store={mockStore({ result: 0 })}>
                <Keypad numericKeys={[]} operationKeys={[]} optionKeys={[]} />
            </Provider>
        );

        expect(render.find(ButtonGroup).length).toEqual(3);
    });
});