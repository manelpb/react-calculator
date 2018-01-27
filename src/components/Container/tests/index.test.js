import React from 'react';
import Container from '../';
import { shallow } from 'enzyme';

it('should render a div', () => {
    const render = shallow(<Container />);
    expect(render.find('div').length).toEqual(1);
})