var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import * as React from 'react';
import styled, { css } from 'styled-components';
import { mq, spacings, withRange } from '../../utils/styles';
import { fonts } from '../../theme';
var BaseStyles = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    hyphens: auto;\n    color: ", ";\n\n    @media ", " {\n        hyphens: none;\n    }\n\n    a:not([class]) {\n        color: currentColor;\n        transition: color 0.25s;\n\n        &:hover {\n            opacity: 0.75;\n        }\n    }\n\n    *:first-child {\n        margin-top: 0;\n    }\n\n    // *:last-child {\n    //     margin-bottom: 0;\n    // }\n\n    ", ";\n"], ["\n    hyphens: auto;\n    color: ", ";\n\n    @media ", " {\n        hyphens: none;\n    }\n\n    a:not([class]) {\n        color: currentColor;\n        transition: color 0.25s;\n\n        &:hover {\n            opacity: 0.75;\n        }\n    }\n\n    *:first-child {\n        margin-top: 0;\n    }\n\n    // *:last-child {\n    //     margin-bottom: 0;\n    // }\n\n    ",
    ";\n"])), function (_a) {
    var textColor = _a.textColor;
    return textColor || 'inherit';
}, mq.medium, function (_a) {
    var columns = _a.columns;
    return columns && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n            columns: 350px 2;\n            column-gap: ", "px;\n\n            li {\n                break-inside: avoid;\n            }\n\n            blockquote {\n                break-inside: avoid;\n            }\n        "], ["\n            columns: 350px 2;\n            column-gap: ", "px;\n\n            li {\n                break-inside: avoid;\n            }\n\n            blockquote {\n                break-inside: avoid;\n            }\n        "])), spacings.spacer);
});
var View = styled(BaseStyles)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    font-family: ", ";\n    font-weight: ", ";\n    font-style: ", ";\n    ", "\n    line-height: ", ";\n    letter-spacing: ", ";\n    text-transform: ", ";\n"], ["\n    font-family: ", ";\n    font-weight: ", ";\n    font-style: ", ";\n    ", "\n    line-height: ", ";\n    letter-spacing: ", ";\n    text-transform: ", ";\n"])), function (_a) {
    var type = _a.type, size = _a.size;
    return fonts[type][size].family;
}, function (_a) {
    var type = _a.type, size = _a.size;
    return fonts[type][size].weight;
}, function (_a) {
    var type = _a.type, size = _a.size;
    return fonts[type][size].style;
}, function (_a) {
    var type = _a.type, size = _a.size;
    return withRange(fonts[type][size].size, 'font-size');
}, function (_a) {
    var type = _a.type, size = _a.size;
    return fonts[type][size].lineHeight;
}, function (_a) {
    var type = _a.type, size = _a.size;
    return fonts[type][size].letterSpacing;
}, function (_a) {
    var type = _a.type, size = _a.size;
    return fonts[type][size].textTransform;
});
var Copy = function (_a) {
    var _b = _a.type, type = _b === void 0 ? 'copy' : _b, _c = _a.size, size = _c === void 0 ? 'medium' : _c, textColor = _a.textColor, columns = _a.columns, className = _a.className, children = _a.children;
    return (React.createElement(View, { type: type, size: size, textColor: textColor, columns: columns, className: className }, children));
};
Copy.defaultProps = { type: 'copy', size: 'medium' };
export default Copy;
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=Copy.js.map