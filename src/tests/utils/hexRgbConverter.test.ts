import { hexToRgba } from '../../utils/hexRgbConverter';

test('Empty string parameter', () => {
    expect(hexToRgba('', 0.5)).toBe(undefined);
});

test('Non hex string parameter', () => {
    expect(hexToRgba('rgb(0,0,0)', 0.5)).toBe(undefined);
});

test('Valid hex color', () => {
    expect(hexToRgba('#f46235', 0.5)).toBe('rgba(244,98,53,0.5)');
});

test('Valid short hex color', () => {
    expect(hexToRgba('#f46', 0.5)).toBe('rgba(255,68,102,0.5)');
});

test('Negative alpha value', () => {
    expect(hexToRgba('#ffffff', -0.5)).toBe('rgba(255,255,255,0)');
});

test('Out of range alpha value', () => {
    expect(hexToRgba('#ffffff', 15)).toBe('rgba(255,255,255,1)');
});

test('Out of range negative alpha value', () => {
    expect(hexToRgba('#ffffff', -15)).toBe('rgba(255,255,255,0)');
});
