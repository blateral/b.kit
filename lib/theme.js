var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
/***** Colors *****/
export var colors = {
    black: '#000000',
    white: '#ffffff',
    mono: {
        light: '#F0F0F0',
        medium: '#C8C8C8',
        dark: '#A5A5A5',
    },
    primary: {
        light: '#DD8AA3',
        medium: '#98012E',
        dark: '#59011B',
    },
    secondary: {
        light: '#5A7384',
        medium: '#35444E',
        dark: '#222A30',
    },
    tertiary: {
        light: '#F2F5FA',
        medium: '#C9CED7',
        dark: '#A8ABB4',
    },
};
/***** Fonts *****/
var copyBase = {
    family: 'Roboto',
    weight: '400',
    style: 'normal',
    lineHeight: '1.53',
    letterSpacing: '0',
    size: [10, 13],
};
var headingBase = {
    family: 'Roboto',
    weight: '700',
    style: 'normal',
    lineHeight: '1.1',
    letterSpacing: '0',
    size: [38, 40],
};
export var fonts = {
    copy: {
        small: __assign(__assign({}, copyBase), { lineHeight: '1.53', size: [11, 13] }),
        medium: __assign(__assign({}, copyBase), { lineHeight: '1.43', size: [14, 16] }),
        big: __assign(__assign({}, copyBase), { lineHeight: '1.18', size: [20, 22] }),
    },
    'copy-i': {
        small: __assign(__assign({}, copyBase), { style: 'italic', lineHeight: '1.53', size: [11, 13] }),
        medium: __assign(__assign({}, copyBase), { style: 'italic', lineHeight: '1.43', size: [14, 16] }),
        big: __assign(__assign({}, copyBase), { style: 'italic', lineHeight: '1.18', size: [20, 22] }),
    },
    'copy-b': {
        small: __assign(__assign({}, copyBase), { weight: '700', lineHeight: '1.53', size: [11, 13] }),
        medium: __assign(__assign({}, copyBase), { weight: '700', lineHeight: '1.43', size: [14, 16] }),
        big: __assign(__assign({}, copyBase), { weight: '700', lineHeight: '1.18', size: [20, 22] }),
    },
    super: __assign(__assign({}, copyBase), { weight: '700', lineHeight: '1.43', size: [14, 16] }),
    'heading-1': headingBase,
    'heading-2': __assign(__assign({}, headingBase), { size: [32, 35], lineHeight: '1.14' }),
    'heading-3': __assign(__assign({}, headingBase), { size: [32, 35], lineHeight: '1.14' }),
    'heading-4': __assign(__assign({}, headingBase), { size: [32, 35], lineHeight: '1.14' }),
    label: {
        small: __assign(__assign({}, copyBase), { lineHeight: '1.53', size: [11, 13] }),
        medium: __assign(__assign({}, copyBase), { lineHeight: '1.43', size: [14, 16] }),
        big: __assign(__assign({}, copyBase), { lineHeight: '1.18', size: [20, 22] }),
    },
    callout: {
        small: __assign(__assign({}, copyBase), { lineHeight: '1.53', size: [11, 13] }),
        medium: __assign(__assign({}, copyBase), { lineHeight: '1.43', size: [14, 16] }),
        big: __assign(__assign({}, copyBase), { lineHeight: '1.18', size: [20, 22] }),
    },
};
//# sourceMappingURL=theme.js.map