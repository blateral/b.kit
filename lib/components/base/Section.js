var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import * as React from 'react';
import styled, { css } from 'styled-components';
import { mq, spacings, withRange } from '../../utils/styles';
var getBackground = function (mode, bgColor) {
    var bgValue = undefined;
    switch (mode) {
        case 'full':
            bgValue = bgColor;
            break;
        case 'half-left':
            bgValue = "linear-gradient(to left, transparent 50%, " + bgColor + " 50%)";
            break;
        case 'half-right':
            bgValue = "linear-gradient(to right, transparent 50%, " + bgColor + " 50%)";
            break;
        case 'larger-left':
            bgValue = "linear-gradient(to left, transparent 40%, " + bgColor + " 40%)";
            break;
        case 'larger-right':
            bgValue = "linear-gradient(to right, transparent 40%, " + bgColor + " 40%)";
            break;
    }
    return bgValue;
};
var View = styled.section(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    position: relative;\n    overflow: hidden;\n\n    ", "\n    ", "\n\n    ", "\n"], ["\n    position: relative;\n    overflow: hidden;\n\n    ",
    "\n    ",
    "\n\n    ",
    "\n"])), function (_a) {
    var addSeperation = _a.addSeperation;
    return addSeperation &&
        withRange([spacings.spacer * 2, spacings.spacer * 4], 'padding-top');
}, function (_a) {
    var addSeperation = _a.addSeperation;
    return addSeperation &&
        withRange([spacings.spacer * 2, spacings.spacer * 4], 'padding-bottom');
}, function (_a) {
    var indent = _a.indent;
    return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n            &[data-ident='", "'] + &[data-ident='", "'] {\n                padding-top: 0;\n            }\n        "], ["\n            &[data-ident='", "'] + &[data-ident='", "'] {\n                padding-top: 0;\n            }\n        "])), indent, indent);
});
var Back = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    display: ", ";\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    max-width: ", "px;\n\n    background: ", ";\n\n    margin: 0 auto;\n    z-index: -1;\n\n    @media ", " {\n        background: ", ";\n    }\n\n    @media ", " {\n        :before {\n            content: ", ";\n            position: absolute;\n            top: 0;\n            left: 0;\n            bottom: 0;\n            width: ", "px;\n            background-color: ", ";\n\n            transform: translateX(-100%);\n        }\n\n        :after {\n            content: ", ";\n            position: absolute;\n            top: 0;\n            right: 0;\n            bottom: 0;\n            width: ", "px;\n            background-color: ", ";\n\n            transform: translateX(100%);\n        }\n    }\n"], ["\n    display: ", ";\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    max-width: ",
    "px;\n\n    background: ", ";\n\n    margin: 0 auto;\n    z-index: -1;\n\n    @media ", " {\n        background: ",
    ";\n    }\n\n    @media ", " {\n        :before {\n            content: ",
    ";\n            position: absolute;\n            top: 0;\n            left: 0;\n            bottom: 0;\n            width: ", "px;\n            background-color: ", ";\n\n            transform: translateX(-100%);\n        }\n\n        :after {\n            content: ",
    ";\n            position: absolute;\n            top: 0;\n            right: 0;\n            bottom: 0;\n            width: ", "px;\n            background-color: ", ";\n\n            transform: translateX(100%);\n        }\n    }\n"])), function (_a) {
    var bgColor = _a.bgColor, bgMode = _a.bgMode;
    return (bgColor && bgMode ? 'block' : 'none');
}, function (_a) {
    var bgClamp = _a.bgClamp, bgMode = _a.bgMode;
    return bgClamp
        ? bgClamp === 'large' || bgMode === 'full'
            ? spacings.wrapperLarge
            : spacings.wrapper
        : undefined;
}, function (_a) {
    var bgColor = _a.bgColor;
    return bgColor || undefined;
}, mq.semilarge, function (_a) {
    var bgColor = _a.bgColor, bgMode = _a.bgMode;
    return bgColor && bgMode && bgMode !== 'full'
        ? getBackground(bgMode, bgColor)
        : undefined;
}, mq.xlarge, function (_a) {
    var bgMode = _a.bgMode, bgClamp = _a.bgClamp;
    return (bgClamp === 'normal' && bgMode === 'half-left') ||
        bgMode === 'larger-left'
        ? "\"\""
        : undefined;
}, (spacings.wrapperLarge - spacings.wrapper) / 2, function (_a) {
    var bgColor = _a.bgColor;
    return bgColor && bgColor;
}, function (_a) {
    var bgMode = _a.bgMode, bgClamp = _a.bgClamp;
    return (bgClamp === 'normal' && bgMode === 'half-right') ||
        bgMode === 'larger-right'
        ? "\"\""
        : undefined;
}, (spacings.wrapperLarge - spacings.wrapper) / 2, function (_a) {
    var bgColor = _a.bgColor;
    return bgColor && bgColor;
});
var Section = function (_a) {
    var as = _a.as, bgColor = _a.bgColor, _b = _a.bgMode, bgMode = _b === void 0 ? 'full' : _b, bgClamp = _a.bgClamp, addSeperation = _a.addSeperation, className = _a.className, children = _a.children;
    return (React.createElement(View, { as: as, "data-ident": bgColor || 'plain', indent: bgColor || 'plain', addSeperation: addSeperation, className: className },
        bgColor && bgMode && (React.createElement(Back, { bgColor: bgColor, bgMode: bgMode, bgClamp: bgClamp })),
        children));
};
export default Section;
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=Section.js.map