import React from 'react';
import { calculate, addKey } from '../operations';

it('should calculate sum', () => {
    const operations = [1, '+', 2];

    const result = calculate(operations);
    expect(result).toEqual(3);
});

it('should calculate division', () => {
    const operations = [4, '/', 2];

    const result = calculate(operations);
    expect(result).toEqual(2);
});

it('should calculate multiply', () => {
    const operations = [4, '*', 2];

    const result = calculate(operations);
    expect(result).toEqual(8);
});

it('should calculate substract', () => {
    const operations = [4, '-', 2];

    const result = calculate(operations);
    expect(result).toEqual(2);
});

it('should calculate multiple operations', () => {
    const operations = [2, '+', 3, '-', 1, '*', 2, '='];

    const result = calculate(operations);
    expect(result).toEqual(8);
});

it('should calculate a sum with 3 numbers', () => {
    const operations = [1, '+', 2, '+', 5];

    const result = calculate(operations);
    expect(result).toEqual(8);
});

it('should print result with last op is not a number', () => {
    const operations = [1, '+', 2, '+'];

    const result = calculate(operations);
    expect(result).toEqual(3);
});

it('should concat numbers if last operation is a number', () => {
    const operations = [1, '+', 2];
    const expectedOperations = [1, '+', 23];
    const newKey = 3;

    const result = addKey(operations, newKey);
    const calc = calculate(operations);

    expect(JSON.stringify(result.newOperations)).toEqual(JSON.stringify(expectedOperations));
    expect(calc).toEqual(24);
});

it('should avoid multiple sequencial operations', () => {
    const operations = [1, '+', 2, '+'];
    const expectedOperations = [1, '+', 2, '='];
    const newKey = '=';

    const result = addKey(operations, newKey);
    const calc = calculate(result.newOperations);

    expect(JSON.stringify(result.newOperations)).toEqual(JSON.stringify(expectedOperations));
    expect(calc).toEqual(3);
});

it('should clean operations', () => {
    const operations = [1, '+', 2, '+'];
    const expectedOperations = [0];
    const newKey = 'C';

    const result = addKey(operations, newKey);
    const calc = calculate(result.newOperations);

    expect(JSON.stringify(result.newOperations)).toEqual(JSON.stringify(expectedOperations));
});

it('should not calculate when operations didnt contain numbers and we add an op', () => {
    const operations = [];
    const newKey = '+';

    const result = addKey(operations, newKey);
    const calc = calculate(result.newOperations);

    expect(calc).toEqual(0);
});

it('should return 0 when operations is not an array', () => {
    const operations = null;
    const result = calculate(operations);
    expect(result).toEqual(0);
});
