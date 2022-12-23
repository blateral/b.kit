import { isValidArray } from '../../../utils/arrays';

test('passing no parameter', () => {
    expect(isValidArray()).toBe(false);
});

test('passing empty array', () => {
    expect(isValidArray([])).toBe(true);
});

test('passing empty array with allow empty flag = false', () => {
    expect(isValidArray([], false)).toBe(false);
});

test('passing array with values', () => {
    expect(isValidArray(['valA', 'valB', 'valC'])).toBe(true);
});

test('passing array with values and allow empy flag = false', () => {
    expect(isValidArray(['valA', 'valB', 'valC'])).toBe(true);
});
