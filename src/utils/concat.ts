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

export const printAnchorTag = (props: {
    href: string;
    label?: string;
    isExternal?: boolean;
    type?: 'mail' | 'phone';
}) => {
    if (!props?.href) return '';
    let pre = '';
    if (props.type === 'mail') pre = 'mailto:';
    if (props.type === 'phone') pre = 'tel:';

    return `<a ${
        props.isExternal ? 'target="_blank" rel="noopener noreferrer" ' : ''
    }href="${pre}${props.href}">${props.label || props.href}</a>`;
};
