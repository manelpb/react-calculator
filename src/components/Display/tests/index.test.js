import React from 'react';
import Display from '../';
import { shallow } from 'enzyme';

it('should render a div', () => {
    const render = shallow(<Display />);
    expect(render.find('div').length).toEqual(1);
    expect(render).toMatchSnapshot();
})