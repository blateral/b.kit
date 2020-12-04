var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
import React from 'react';
import styled from 'styled-components';
import Grid from '../base/Grid';
import Image from '../blocks/Image';
import Copy from '../typography/Copy';
import Title from '../blocks/Title';
import Wrapper from '../base/Wrapper';
import Section from '../base/Section';
import { mq, spacings, withRange } from '../../utils/styles';
import { colors } from '../../theme';
var WideImage = styled(Image)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    position: relative;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    width: 100%;\n    height: 100%;\n\n    @media ", " {\n        position: absolute;\n        width: 50%;\n        left: ", ";\n        right: ", ";\n\n        transform: translateX(\n            ", "\n        );\n    }\n\n    @media ", " {\n        max-width: ", "px;\n    }\n"], ["\n    position: relative;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    width: 100%;\n    height: 100%;\n\n    @media ", " {\n        position: absolute;\n        width: 50%;\n        left: ", ";\n        right: ", ";\n\n        transform: translateX(\n            ", "\n        );\n    }\n\n    @media ", " {\n        max-width: ", "px;\n    }\n"])), mq.semilarge, function (_a) {
    var isMirrored = _a.isMirrored;
    return (isMirrored ? 'auto' : '50%');
}, function (_a) {
    var isMirrored = _a.isMirrored;
    return (isMirrored ? '50%' : 'auto');
}, function (_a) {
    var isMirrored = _a.isMirrored;
    return (isMirrored ? '100%' : '-100%');
}, mq.xlarge, spacings.wrapperLarge / 2);
var InfoWrapper = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    padding-top: ", "px;\n    padding-bottom: ", "px;\n\n    @media ", " {\n        ", "\n\n        ", ";\n\n        padding-bottom: ", "px;\n        padding-left: ", "px;\n\n        ", ";\n    }\n"], ["\n    padding-top: ", "px;\n    padding-bottom: ", "px;\n\n    @media ", " {\n        ", "\n\n        ",
    ";\n\n        padding-bottom: ", "px;\n        padding-left: ",
    "px;\n\n        ",
    ";\n    }\n"])), spacings.nudge, spacings.nudge * 2, mq.semilarge, withRange([spacings.spacer * 3, spacings.spacer * 4], 'padding-top'), function (_a) {
    var isMirrored = _a.isMirrored;
    return withRange([
        isMirrored ? 0 : spacings.spacer,
        isMirrored ? spacings.spacer * 2.5 : spacings.spacer,
    ], 'padding-right');
}, spacings.nudge * 6, function (_a) {
    var isMirrored = _a.isMirrored;
    return !isMirrored ? spacings.spacer * 2.5 : spacings.spacer;
}, function (_a) {
    var isMirrored = _a.isMirrored;
    return withRange([
        !isMirrored ? 0 : spacings.spacer,
        !isMirrored ? spacings.spacer * 2.5 : spacings.spacer,
    ], 'padding-left');
});
var StyledTitle = styled(Title)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    & + * {\n        margin-top: ", "px;\n    }\n"], ["\n    & + * {\n        margin-top: ", "px;\n    }\n"])), spacings.nudge * 6);
var Actions = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    padding: ", "px 0;\n    padding-top: ", "px;\n\n    &:last-child {\n        padding-bottom: 0;\n    }\n\n    & > * {\n        flex: 1;\n    }\n\n    & > * + * {\n        margin-left: ", "px;\n    }\n"], ["\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    padding: ", "px 0;\n    padding-top: ", "px;\n\n    &:last-child {\n        padding-bottom: 0;\n    }\n\n    & > * {\n        flex: 1;\n    }\n\n    & > * + * {\n        margin-left: ", "px;\n    }\n"])), spacings.spacer, spacings.spacer * 2, spacings.spacer);
var ContentBlock = styled(Copy)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    ul {\n        padding-left: 0;\n        list-style-position: inside;\n    }\n\n    :not(:first-child) {\n        padding-top: ", "px;\n    }\n"], ["\n    ul {\n        padding-left: 0;\n        list-style-position: inside;\n    }\n\n    :not(:first-child) {\n        padding-top: ", "px;\n    }\n"])), spacings.nudge * 5);
var SubTextBlock = styled(ContentBlock)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    :not(:first-child) {\n        padding-top: ", "px;\n    }\n"], ["\n    :not(:first-child) {\n        padding-top: ", "px;\n    }\n"])), spacings.nudge * 3);
var Teaser = function (_a) {
    var isInverted = _a.isInverted, isMirrored = _a.isMirrored, hasBack = _a.hasBack, superTitle = _a.superTitle, title = _a.title, titleAs = _a.titleAs, image = _a.image, intro = _a.intro, text = _a.text, subText = _a.subText, primaryAction = _a.primaryAction, secondaryAction = _a.secondaryAction;
    return (React.createElement(Section, { addSeperation: true, bgClamp: "normal", bgColor: isInverted
            ? colors.black
            : hasBack
                ? colors.mono.light
                : 'transparent' },
        image && (React.createElement(WideImage, __assign({ coverSpace: true }, image, { isMirrored: isMirrored }))),
        React.createElement(Wrapper, { clampWidth: "normal", addWhitespace: true },
            React.createElement(Grid.Row, { gutter: spacings.spacer },
                React.createElement(Grid.Col, { semilarge: {
                        span: 14 / 28,
                        move: (isMirrored ? 14 : 0) / 28,
                    } }),
                React.createElement(Grid.Col, { semilarge: {
                        span: 14 / 28,
                        move: (isMirrored ? -14 : 0) / 28,
                    } },
                    React.createElement(InfoWrapper, { isMirrored: isMirrored },
                        React.createElement(StyledTitle, { isInverted: isInverted, title: title, titleAs: titleAs, superTitle: superTitle }),
                        intro && (React.createElement(ContentBlock, { type: "copy-b", textColor: isInverted ? colors.white : colors.black }, intro)),
                        text && (React.createElement(ContentBlock, { textColor: isInverted ? colors.white : colors.black },
                            React.createElement("div", { dangerouslySetInnerHTML: {
                                    __html: text,
                                } }))),
                        subText && (React.createElement(SubTextBlock, { textColor: isInverted ? colors.white : colors.black, type: "copy-i" }, subText)),
                        (primaryAction || secondaryAction) && (React.createElement(Actions, null,
                            primaryAction && primaryAction(isInverted),
                            secondaryAction &&
                                secondaryAction(isInverted)))))))));
};
export default Teaser;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=TeaserWide.js.map