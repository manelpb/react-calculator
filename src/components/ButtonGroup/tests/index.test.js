import React from 'react';
import ButtonGroup from '../';
import Button from 'components/Button';
import { shallow } from 'enzyme';

it('should render 2 buttons', () => {
    const items = [
        {
            label: 'a',
            onClick: () => {},
        },
        {
            label: 'b',
            onClick: () => {},
        },
    ];

    const render = shallow(<ButtonGroup rows={1} cols={2} items={items} />);
    expect(render.find(Button).length).toEqual(2);
    // expect(render).toMatchSnapshot();
})