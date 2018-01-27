import React from 'react';
import App from '../App';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { shallow } from 'enzyme';

describe('<App />', () => {
    it('should header and footer', () => {
        const render = shallow(<App />);
        expect(render.find(Header).length + render.find(Footer).length).toEqual(2);
    });
});