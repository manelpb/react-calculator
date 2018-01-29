import React from 'react';
import H1 from '../';
import { shallow } from 'enzyme';

it('should render a h1', () => {
    const render = shallow(<H1 />);
    expect(render.find('h1').length).toEqual(1);
    expect(render).toMatchSnapshot();
})