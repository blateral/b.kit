import { isValidArray } from './arrays';

export const concat = (
    values: Array<string | number | undefined>,
    delimeter = ', '
): string => {
    const parts: string[] = [];

    if (!isValidArray(values, false)) {
        return '';
    }

    for (const value of values) {
        if (value === undefined || value === null) continue;
        if (typeof value === 'string' && value !== '') {
            parts.push(value);
            continue;
        }

        if (typeof value === 'number') {
            parts.push(value.toString());
            continue;
        }
    }

    return parts.join(delimeter);
};

export const printAnchorTag = (
    href: string,
    label?: string,
    type?: 'mail' | 'phone'
) => {
    if (!href) return '';
    let pre = '';
    if (type === 'mail') pre = 'mailto:';
    if (type === 'phone') pre = 'tel:';

    return `<a href="${pre}${href}">${label || href}</a>`;
};
