import { clampValue } from '../../utils/clamp';

test('Without max. Value in range', () => {
    expect(clampValue(2, 0)).toBe(2);
});

test('Without max. Value out of range', () => {
    expect(clampValue(-1, 0)).toBe(0);
});

test('Without max. And negative min. Value out of range', () => {
    expect(clampValue(-3, -2)).toBe(-2);
});

test('With range. Value in range', () => {
    expect(clampValue(15, 5, 20)).toBe(15);
});

test('With range. Value out of range', () => {
    expect(clampValue(31, 5, 20)).toBe(20);
});

test('With range across negativ and positive values.', () => {
    expect(clampValue(-10, -3, 1)).toBe(-3);
});
