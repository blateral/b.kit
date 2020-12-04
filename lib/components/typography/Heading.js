var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import * as React from 'react';
import styled, { css } from 'styled-components';
import { mq, withRange } from '../../utils/styles';
import { fonts } from '../../theme';
// Styles
var BaseStyles = styled.h1(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    margin: 0;\n    padding: 0;\n    color: ", ";\n\n    hyphens: auto;\n    overflow-wrap: break-word;\n\n    ", "\n\n    text-shadow: ", ";\n"], ["\n    margin: 0;\n    padding: 0;\n    color: ", ";\n\n    hyphens: auto;\n    overflow-wrap: break-word;\n\n    ",
    "\n\n    text-shadow: ",
    ";\n"])), function (_a) {
    var textColor = _a.textColor;
    return textColor;
}, function (props) {
    return !props.hyphens && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n            @media ", " {\n                hyphens: none;\n            }\n        "], ["\n            @media ", " {\n                hyphens: none;\n            }\n        "])), mq.large);
}, function (_a) {
    var hasShadow = _a.hasShadow;
    return hasShadow && '1px 2px 8px rgba(0, 0, 0, 0.25)';
});
var View = styled(BaseStyles)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    font-family: ", ";\n    font-weight: ", ";\n    font-style: ", ";\n    ", "\n    line-height: ", ";\n    letter-spacing: ", ";\n    text-transform: ", ";\n"], ["\n    font-family: ", ";\n    font-weight: ", ";\n    font-style: ", ";\n    ", "\n    line-height: ", ";\n    letter-spacing: ", ";\n    text-transform: ", ";\n"])), function (_a) {
    var type = _a.type;
    return fonts[type].family;
}, function (_a) {
    var type = _a.type;
    return fonts[type].weight;
}, function (_a) {
    var type = _a.type;
    return fonts[type].style;
}, function (_a) {
    var type = _a.type;
    return withRange(fonts[type].size, 'font-size');
}, function (_a) {
    var type = _a.type;
    return fonts[type].lineHeight;
}, function (_a) {
    var type = _a.type;
    return fonts[type].letterSpacing;
}, function (_a) {
    var type = _a.type;
    return fonts[type].textTransform;
});
var Heading = function (_a) {
    var as = _a.as, className = _a.className, size = _a.size, textColor = _a.textColor, hyphens = _a.hyphens, hasShadow = _a.hasShadow, children = _a.children;
    var tag = 'h1';
    var type = 'heading-1';
    switch (size) {
        default:
        case 1:
            tag = 'h1';
            type = 'heading-1';
            break;
        case 2:
            tag = 'h2';
            type = 'heading-2';
            break;
        case 3:
            tag = 'h3';
            type = 'heading-3';
            break;
        case 4:
            tag = 'h4';
            type = 'heading-4';
            break;
    }
    return (React.createElement(View, { as: as || tag, type: type, textColor: textColor, hyphens: hyphens, hasShadow: hasShadow, className: className }, children));
};
Heading.defaultProps = {
    as: 'h2',
    size: 2,
};
export default Heading;
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=Heading.js.map