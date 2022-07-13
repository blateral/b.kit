import { concat } from '../../utils/concat';

test('With two values', () => {
    expect(concat(['Hello', 'Uwe'])).toBe('Hello, Uwe');
});

test('With custom delimeter', () => {
    expect(concat(['Hello', 'Uwe'], ' - ')).toBe('Hello - Uwe');
});

test('With more entries', () => {
    expect(concat(['Hello', 'my', 'name', 'is', 'Uwe'], ' - ')).toBe(
        'Hello - my - name - is - Uwe'
    );
});

test('With number entries', () => {
    expect(concat(['Hello', 'my', 'name', 'is', 'Uwe', 50], ' - ')).toBe(
        'Hello - my - name - is - Uwe - 50'
    );
});

test('With undefined values', () => {
    expect(concat(['Hello', 'my', '', undefined, 'Uwe'], ' - ')).toBe(
        'Hello - my - Uwe'
    );
});
