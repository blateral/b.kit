import { printAnchorTag } from '../../utils/concat';

test('With href', () => {
    expect(printAnchorTag('https://www.google.de/')).toBe(
        '<a href="https://www.google.de/">https://www.google.de/</a>'
    );
});

test('With empty href', () => {
    expect(printAnchorTag('')).toBe('');
});

test('With custom label', () => {
    expect(printAnchorTag('https://www.google.de/', 'Google')).toBe(
        '<a href="https://www.google.de/">Google</a>'
    );
});

test('With type telefon', () => {
    expect(printAnchorTag('+49 118901', undefined, 'phone')).toBe(
        '<a href="tel:+49 118901">+49 118901</a>'
    );
});

test('With type mail', () => {
    expect(
        printAnchorTag('max.mustermann@mustermail.com', undefined, 'mail')
    ).toBe(
        '<a href="mailto:max.mustermann@mustermail.com">max.mustermann@mustermail.com</a>'
    );
});
