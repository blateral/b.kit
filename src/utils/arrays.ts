export const isEmptyArray = <T>(array?: Array<T>) => {
    if (!array) return undefined;
    if (!Array.isArray(array)) return undefined;
    return array.length <= 0;
};

export const isValidArray = <T>(array?: Array<T>, allowEmpty = true) => {
    if (!array) return false;
    if (!Array.isArray(array)) return false;
    return allowEmpty ? true : array.length > 0;
};
