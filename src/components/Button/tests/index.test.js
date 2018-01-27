import React from 'react';
import Button from '../';
import { shallow } from 'enzyme';

it('should render a html button', () => {
    const render = shallow(<Button />);
    expect(render.find('button').length).toEqual(1);
})