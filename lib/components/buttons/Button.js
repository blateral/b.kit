var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import * as React from 'react';
import styled from 'styled-components';
import { spacings, withRange } from '../../utils/styles';
import { colors, fonts } from '../../theme';
var View = styled.a(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    min-height: 3em;\n    height: 3.65em;\n    min-width: 123px;\n    padding: 0.1em 1.2em;\n\n    display: inline-block;\n    display: inline-flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    justify-content: center;\n    align-items: center;\n    vertical-align: middle;\n\n    font-family: ", ";\n    ", "\n    font-weight: ", ";\n    text-align: center;\n    text-decoration: none;\n    line-height: 1;\n    letter-spacing: ", ";\n\n    outline: none;\n    border: none;\n    user-select: none;\n    cursor: pointer;\n\n    pointer-events: ", ";\n\n    will-change: transform;\n\n    background-color: ", ";\n    color: ", ";\n    text-align: left;\n\n    transition: all ease-in-out 0.2s;\n\n    & > * {\n        color: ", ";\n    }\n\n    & > :not(:last-child) {\n        padding-right: ", "px;\n    }\n\n    &:hover {\n        transform: scale(1.02);\n    }\n\n    &:focus {\n        text-decoration: underline;\n        transform: scale(1.012);\n    }\n\n    &:active {\n        transform: scale(0.95);\n    }\n"], ["\n    min-height: 3em;\n    height: 3.65em;\n    min-width: 123px;\n    padding: 0.1em 1.2em;\n\n    display: inline-block;\n    display: inline-flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    justify-content: center;\n    align-items: center;\n    vertical-align: middle;\n\n    font-family: ", ";\n    ", "\n    font-weight: ", ";\n    text-align: center;\n    text-decoration: none;\n    line-height: 1;\n    letter-spacing: ", ";\n\n    outline: none;\n    border: none;\n    user-select: none;\n    cursor: pointer;\n\n    pointer-events: ", ";\n\n    will-change: transform;\n\n    background-color: ",
    ";\n    color: ",
    ";\n    text-align: left;\n\n    transition: all ease-in-out 0.2s;\n\n    & > * {\n        color: ",
    ";\n    }\n\n    & > :not(:last-child) {\n        padding-right: ", "px;\n    }\n\n    &:hover {\n        transform: scale(1.02);\n    }\n\n    &:focus {\n        text-decoration: underline;\n        transform: scale(1.012);\n    }\n\n    &:active {\n        transform: scale(0.95);\n    }\n"])), fonts.copy.medium.family, withRange(fonts.copy.medium.size, 'font-size'), fonts.copy.medium.weight, fonts.copy.medium.letterSpacing, function (_a) {
    var disable = _a.disable;
    return (disable ? 'none' : 'all');
}, function (_a) {
    var inverted = _a.inverted, disable = _a.disable;
    return disable ? colors.mono.medium : inverted ? colors.white : colors.black;
}, function (_a) {
    var inverted = _a.inverted, disable = _a.disable;
    return disable ? colors.white : inverted ? colors.black : colors.white;
}, function (_a) {
    var inverted = _a.inverted, disable = _a.disable;
    return disable ? colors.white : inverted ? colors.black : colors.white;
}, spacings.nudge);
var ViewGhost = styled(View)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    border: solid 1px\n        ", ";\n    box-shadow: none;\n    background-color: transparent;\n    text-align: center;\n    color: ", ";\n\n    & > * {\n        color: ", ";\n    }\n\n    &:hover {\n        transform: scale(1.04);\n    }\n\n    &:focus {\n        text-decoration: underline;\n        transform: scale(1.012);\n    }\n\n    &:active {\n        transform: scale(0.95);\n    }\n"], ["\n    border: solid 1px\n        ",
    ";\n    box-shadow: none;\n    background-color: transparent;\n    text-align: center;\n    color: ",
    ";\n\n    & > * {\n        color: ",
    ";\n    }\n\n    &:hover {\n        transform: scale(1.04);\n    }\n\n    &:focus {\n        text-decoration: underline;\n        transform: scale(1.012);\n    }\n\n    &:active {\n        transform: scale(0.95);\n    }\n"])), function (_a) {
    var inverted = _a.inverted, disable = _a.disable;
    return disable
        ? colors.mono.medium
        : inverted
            ? colors.white
            : colors.black;
}, function (_a) {
    var inverted = _a.inverted, disable = _a.disable;
    return disable ? colors.mono.medium : inverted ? colors.white : colors.black;
}, function (_a) {
    var inverted = _a.inverted, disable = _a.disable;
    return disable
        ? colors.mono.medium
        : inverted
            ? colors.white
            : colors.black;
});
var Button = React.forwardRef(function (props, ref) {
    var BtnView = props.type === 'ghost' ? ViewGhost : View;
    if (props.as === 'button') {
        return (React.createElement(BtnView, { ref: ref, as: props.as, inverted: props.isInverted, disable: props.isDisabled, onClick: props.onClick, className: props.className }, props.children));
    }
    else {
        return (React.createElement(BtnView, { ref: ref, as: props.as, href: props.href, target: props.isExternal && '_blank', rel: props.isExternal && 'noopener noreferrer', inverted: props.isInverted, disable: props.isDisabled, onClick: props.onClick, className: props.className }, props.children));
    }
});
Button.displayName = 'Button';
var Icon = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-end;\n    align-items: center;\n    width: 35px;\n    height: 35px;\n\n    color: ", ";\n\n    transition: transform 0.2s ease-in-out;\n\n    ", ":hover > & {\n        transform: translateX(3px);\n    }\n"], ["\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-end;\n    align-items: center;\n    width: 35px;\n    height: 35px;\n\n    color: ", ";\n\n    transition: transform 0.2s ease-in-out;\n\n    ", ":hover > & {\n        transform: translateX(3px);\n    }\n"])), function (_a) {
    var color = _a.color;
    return color || colors['primary-2'];
}, View);
var Label = styled.span(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    display: inline-block;\n"], ["\n    display: inline-block;\n"])));
export default { View: Button, Label: Label, Icon: Icon };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=Button.js.map