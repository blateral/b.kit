var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from 'react';
import styled from 'styled-components';
import Heading from '../typography/Heading';
import { spacings, withRange } from '../../utils/styles';
import { colors, fonts } from '../../theme';
var View = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    text-align: ", ";\n"], ["\n    text-align: ", ";\n"])), function (_a) {
    var isCentered = _a.isCentered;
    return (isCentered ? 'center' : 'left');
});
var SuperTitle = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    display: inline-block;\n    ", ";\n\n    font-family: ", ";\n    font-weight: ", ";\n    font-style: ", ";\n    ", "\n    line-height: ", ";\n    letter-spacing: ", ";\n    text-transform: ", ";\n\n    color: ", ";\n"], ["\n    display: inline-block;\n    ", ";\n\n    font-family: ", ";\n    font-weight: ", ";\n    font-style: ", ";\n    ", "\n    line-height: ", ";\n    letter-spacing: ", ";\n    text-transform: ", ";\n\n    color: ", ";\n"])), withRange([spacings.nudge * 2, spacings.nudge * 3], 'padding-bottom'), fonts['super'].family, fonts['super'].weight, fonts['super'].style, withRange(fonts['super'].size, 'font-size'), fonts['super'].lineHeight, fonts['super'].letterSpacing, fonts['super'].textTransform, function (_a) {
    var textColor = _a.textColor;
    return textColor || 'inherit';
});
var Title = function (_a) {
    var superTitle = _a.superTitle, title = _a.title, titleAs = _a.titleAs, isInverted = _a.isInverted, isCentered = _a.isCentered, className = _a.className;
    return (React.createElement(View, { isCentered: isCentered, className: className },
        superTitle && (React.createElement(SuperTitle, { textColor: isInverted ? colors.white : colors.black }, superTitle)),
        title && (React.createElement(Heading, { size: 2, textColor: isInverted ? colors.white : colors.black, as: titleAs }, title))));
};
export default Title;
var templateObject_1, templateObject_2;
//# sourceMappingURL=Title.js.map