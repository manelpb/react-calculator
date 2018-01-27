import React from 'react';
import Header from '../';
import Container from 'components/Container';
import H1 from 'components/H1';
import { shallow } from 'enzyme';

it('should render a Container and H1', () => {
    const render = shallow(<Header />);
    expect(render.find(Container).length + render.find(H1).length).toEqual(2);
})