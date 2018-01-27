import React from 'react';
import Row from '../';
import { shallow } from 'enzyme';

it('should render a div', () => {
    const render = shallow(<Row />);
    expect(render.find('div').length).toEqual(1);
})