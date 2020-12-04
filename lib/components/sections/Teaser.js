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
var ImgWrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: column;\n    position: relative;\n    height: 100%;\n    width: 100%;\n"], ["\n    display: flex;\n    flex-direction: column;\n    position: relative;\n    height: 100%;\n    width: 100%;\n"])));
var StyledImage = styled(Image)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    position: relative;\n    width: 100%;\n    height: 100%;\n"], ["\n    position: relative;\n    width: 100%;\n    height: 100%;\n"])));
var ImgDescDesktop = styled(Copy)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    display: none;\n\n    @media ", " {\n        display: block;\n        padding: ", "px ", "px;\n    }\n"], ["\n    display: none;\n\n    @media ", " {\n        display: block;\n        padding: ", "px ", "px;\n    }\n"])), mq.semilarge, spacings.spacer, spacings.spacer * 2);
var ImgDescMobile = styled(Copy)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    display: block;\n    padding: ", "px 0;\n\n    @media ", " {\n        display: none;\n    }\n"], ["\n    display: block;\n    padding: ", "px 0;\n\n    @media ", " {\n        display: none;\n    }\n"])), spacings.spacer, mq.semilarge);
var InfoWrapper = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    padding-top: ", "px;\n    padding-bottom: ", "px;\n\n    @media ", " {\n        ", "\n\n        ", ";\n\n        padding-bottom: ", "px;\n        padding-left: ", "px;\n\n        ", ";\n    }\n"], ["\n    padding-top: ", "px;\n    padding-bottom: ", "px;\n\n    @media ", " {\n        ", "\n\n        ",
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
var StyledTitle = styled(Title)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    & + * {\n        margin-top: ", "px;\n    }\n"], ["\n    & + * {\n        margin-top: ", "px;\n    }\n"])), spacings.nudge * 6);
var Actions = styled.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    padding: ", "px 0;\n    padding-top: ", "px;\n\n    &:last-child {\n        padding-bottom: 0;\n    }\n\n    & > * {\n        flex: 1;\n    }\n\n    & > * + * {\n        margin-left: ", "px;\n    }\n"], ["\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    padding: ", "px 0;\n    padding-top: ", "px;\n\n    &:last-child {\n        padding-bottom: 0;\n    }\n\n    & > * {\n        flex: 1;\n    }\n\n    & > * + * {\n        margin-left: ", "px;\n    }\n"])), spacings.spacer, spacings.spacer * 2, spacings.spacer);
var ContentBlock = styled(Copy)(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n    ul {\n        padding-left: 0;\n        list-style-position: inside;\n    }\n\n    :not(:first-child) {\n        padding-top: ", "px;\n    }\n"], ["\n    ul {\n        padding-left: 0;\n        list-style-position: inside;\n    }\n\n    :not(:first-child) {\n        padding-top: ", "px;\n    }\n"])), spacings.nudge * 5);
var SubTextBlock = styled(ContentBlock)(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n    :not(:first-child) {\n        padding-top: ", "px;\n    }\n"], ["\n    :not(:first-child) {\n        padding-top: ", "px;\n    }\n"])), spacings.nudge * 3);
var Teaser = function (_a) {
    var isInverted = _a.isInverted, isMirrored = _a.isMirrored, bgMode = _a.bgMode, superTitle = _a.superTitle, title = _a.title, titleAs = _a.titleAs, image = _a.image, intro = _a.intro, text = _a.text, subText = _a.subText, primaryAction = _a.primaryAction, secondaryAction = _a.secondaryAction;
    var getSectionBgMode = function () {
        switch (bgMode) {
            case 'full':
                return 'full';
            case 'splitted':
                return isMirrored ? 'larger-left' : 'larger-right';
            default:
                return undefined;
        }
    };
    return (React.createElement(Section, { addSeperation: true, bgClamp: "normal", bgColor: isInverted
            ? colors.black
            : bgMode
                ? colors.mono.light
                : 'transparent', bgMode: !isInverted ? getSectionBgMode() : undefined },
        React.createElement(Wrapper, { clampWidth: "normal", addWhitespace: true },
            React.createElement(Grid.Row, { gutter: spacings.spacer },
                React.createElement(Grid.Col, { semilarge: {
                        span: 14 / 28,
                        move: (isMirrored ? 14 : 0) / 28,
                    } },
                    React.createElement(ImgWrapper, { isMirrored: isMirrored },
                        image && React.createElement(StyledImage, __assign({ coverSpace: true }, image)),
                        (image === null || image === void 0 ? void 0 : image.description) && (React.createElement(ImgDescMobile, { size: "small", textColor: isInverted ? colors.white : colors.black }, image.description)))),
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
                                secondaryAction(isInverted)))))),
            React.createElement(Grid.Row, { gutter: spacings.spacer },
                React.createElement(Grid.Col, { semilarge: {
                        span: (bgMode === 'splitted' ? 11.2 : 14) / 28,
                        move: (isMirrored
                            ? bgMode === 'splitted'
                                ? 16.8
                                : 14
                            : 0) / 28,
                    } }, (image === null || image === void 0 ? void 0 : image.description) && (React.createElement(ImgDescDesktop, { size: "small", textColor: isInverted ? colors.white : colors.black }, image.description))),
                React.createElement(Grid.Col, { semilarge: {
                        span: (bgMode === 'splitted' ? 16.8 : 14) / 28,
                        move: (isMirrored
                            ? bgMode === 'splitted'
                                ? -11.2
                                : -14
                            : 0) / 28,
                    } })))));
};
export default Teaser;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;
//# sourceMappingURL=Teaser.js.map