import React from 'react';
import Button from '../';
import { shallow, mount } from 'enzyme';
import 'jest-styled-components'
import styled from 'styled-components'

it('should render a html button', () => {
    const render = shallow(<Button />);
    expect(render.find('button').length).toEqual(1);
})

it('should render a html button with style', () => {
    const render = mount(<Button width={10} height={10} backgroundColor='red' />);

    expect(render).toHaveStyleRule('width', '10px');
    expect(render).toHaveStyleRule('height', '10px');
    expect(render).toHaveStyleRule('background-color', 'red');
})