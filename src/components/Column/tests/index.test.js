import React from 'react';
import Column from '../';
import { shallow } from 'enzyme';

it('should render a div', () => {
    const render = shallow(<Column />);
    expect(render.find('div').length).toEqual(1);
})