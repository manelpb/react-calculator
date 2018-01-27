import React from 'react';
import HomePage from '../';
import { shallow } from 'enzyme';

import Container from 'components/Container';

describe('<HomePage />', () => {
    it('should Container', () => {
        const render = shallow(<HomePage />);
        expect(render.find(Container).length).toEqual(1);
    });
});