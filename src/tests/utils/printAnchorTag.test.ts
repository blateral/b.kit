import { printAnchorTag } from '../../utils/concat';

test('With href', () => {
    expect(printAnchorTag({ href: 'https://www.google.de/' })).toBe(
        '<a href="https://www.google.de/">https://www.google.de/</a>'
    );
});

test('With empty href', () => {
    expect(printAnchorTag({ href: '' })).toBe('');
});

test('With custom label', () => {
    expect(
        printAnchorTag({ href: 'https://www.google.de/', label: 'Google' })
    ).toBe('<a href="https://www.google.de/">Google</a>');
});

test('With external link', () => {
    expect(
        printAnchorTag({ href: 'https://www.google.de/', isExternal: true })
    ).toBe(
        '<a target="_blank" rel="noopener noreferrer" href="https://www.google.de/">https://www.google.de/</a>'
    );
});

test('With type telefon', () => {
    expect(printAnchorTag({ href: '+49 118901', type: 'phone' })).toBe(
        '<a href="tel:+49 118901">+49 118901</a>'
    );
});

test('With type mail', () => {
    expect(
        printAnchorTag({
            href: 'max.mustermann@mustermail.com',
            type: 'mail',
        })
    ).toBe(
        '<a href="mailto:max.mustermann@mustermail.com">max.mustermann@mustermail.com</a>'
    );
});
