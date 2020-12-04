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
import Section from '../base/Section';
import Wrapper from '../base/Wrapper';
import Image from '../blocks/Image';
import { spacings } from '../../utils/styles';
import { colors } from '../../theme';
var StyledImage = styled(Image)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    width: 100%;\n"], ["\n    width: 100%;\n"])));
var Gallery = function (_a) {
    var isInverted = _a.isInverted, hasBack = _a.hasBack, images = _a.images, className = _a.className;
    return (React.createElement(Section, { addSeperation: true, bgClamp: "normal", bgColor: isInverted
            ? colors.black
            : hasBack
                ? colors.mono.light
                : 'transparent', className: className },
        React.createElement(Wrapper, { clampWidth: "normal", addWhitespace: true },
            React.createElement(Grid.Row, { gutter: images && (images.length <= 1 ? 0 : spacings.nudge * 2) }, images &&
                images.map(function (image, i) { return (React.createElement(Grid.Col, { medium: {
                        span: (image.size === 'half' ? 14 : 28) / 28,
                    }, key: i },
                    React.createElement(StyledImage, __assign({}, image)))); })))));
};
export default Gallery;
var templateObject_1;
//# sourceMappingURL=Gallery.js.map