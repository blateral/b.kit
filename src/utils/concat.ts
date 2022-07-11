import { isValidArray } from './arrays';

export const concat = (
    values: Array<string | undefined>,
    delimeter = ', '
): string => {
    const parts: string[] = [];

    if (!isValidArray(values, false)) {
        return '';
    }

    for (const value of values) {
        if (value && typeof value === 'string') {
            parts.push(value);
        }
    }

    return parts.join(delimeter);
};
