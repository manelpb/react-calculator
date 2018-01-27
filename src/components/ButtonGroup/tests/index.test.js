import React from 'react';
import { ButtonGroup, sortColumns } from '../';
import Button from 'components/Button';
import { shallow } from 'enzyme';

it('should render 2 buttons', () => {
    const items = [
        {
            label: 'a',
            onClick: () => {},
        },
        {
            label: 'b',
            onClick: () => {},
        },
    ];

    const render = shallow(<ButtonGroup rows={1} cols={2} items={items} />);
    expect(render.find(Button).length).toEqual(2);
    // expect(render).toMatchSnapshot();
})

it('should sort columns', () => {
    const columns = [
        {
            label: 2,
        },
        {
            label: 1,
        },
    ];

    const columns1 = [
        {
            label: 1,
        },
        {
            label: 2,
        },
    ];

    const expected = [
        {
            label: 1,
        },
        {
            label: 2,
        },
    ];

    expect(sortColumns(columns)).toEqual(expected);
    expect(sortColumns(columns1)).toEqual(expected);
});

it('should sort columns when they have the same value', () => {
    const columns = [
        {
            label: 1,
        },
        {
            label: 1,
        },
    ];

    const expected = [
        {
            label: 1,
        },
        {
            label: 1,
        },
    ];

    expect(sortColumns(columns)).toEqual(expected);
});

it('should sort columns with sort key exists', () => {
    const columns = [
        {
            label: 'A',
            sort: 2,
        },
        {
            label: 'B',
            sort: 1,
        },
    ];

    const columns1 = [
        {
            label: 'B',
            sort: 1,
        },
        {
            label: 'A',
            sort: 2,
        },
    ];

    const expected = [
        {
            label: 'B',
            sort: 1,
        },
        {
            label: 'A',
            sort: 2,
        },
    ];

    expect(sortColumns(columns)).toEqual(expected);
    expect(sortColumns(columns1)).toEqual(expected);
});