import React from 'react';
import Footer from '../';
import Container from 'components/Container';
import { shallow } from 'enzyme';

it('should render a Container', () => {
    const render = shallow(<Footer />);
    expect(render.find(Container).length).toEqual(1);
    expect(render).toMatchSnapshot();
})