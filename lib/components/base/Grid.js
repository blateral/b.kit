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
import * as React from 'react';
import styled, { css } from 'styled-components';
import { spacings, mq } from '../../utils/styles';
var gridSettings = {
    cols: 28,
    gutter: spacings.spacer,
};
var getWidth = function (props) {
    var mediumSpan = props.medium ? props.medium.span : 1;
    var semilargeSpan = props.semilarge ? props.semilarge.span : 1;
    var largeSpan = props.large ? props.large.span : 1;
    var xlargeSpan = props.xlarge ? props.xlarge.span : 1;
    return css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n        width: ", "%;\n\n        ", "\n\n        ", "\n\n        ", "\n\n        ", "\n    "], ["\n        width: ", "%;\n\n        ",
        "\n\n        ",
        "\n\n        ",
        "\n\n        ",
        "\n    "])), (props.span || 1) * 100, function (props) {
        return props.medium
            ? css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n                      @media ", " {\n                          width: ", "%;\n                      }\n                  "], ["\n                      @media ", " {\n                          width: ", "%;\n                      }\n                  "])), mq.medium, (mediumSpan || 1) * 100) : '';
    }, function (props) {
        return props.semilarge
            ? css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n                      @media ", " {\n                          width: ", "%;\n                      }\n                  "], ["\n                      @media ", " {\n                          width: ", "%;\n                      }\n                  "])), mq.semilarge, (semilargeSpan || 1) * 100) : '';
    }, function (props) {
        return props.large
            ? css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n                      @media ", " {\n                          width: ", "%;\n                      }\n                  "], ["\n                      @media ", " {\n                          width: ", "%;\n                      }\n                  "])), mq.large, (largeSpan || 1) * 100) : '';
    }, function (props) {
        return props.xlarge
            ? css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n                      @media ", " {\n                          width: ", "%;\n                      }\n                  "], ["\n                      @media ", " {\n                          width: ", "%;\n                      }\n                  "])), mq.xlarge, (xlargeSpan || 1) * 100) : '';
    });
};
var getLeftRight = function (props) {
    var mediumMove = props.medium ? props.medium.move : 0;
    var semilargeMove = props.semilarge ? props.semilarge.move : 0;
    var largeMove = props.large ? props.large.move : 0;
    var xlargeMove = props.xlarge ? props.xlarge.move : 0;
    return css(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n        left: ", ";\n        right: ", ";\n\n        ", "\n\n        ", "\n\n        ", "\n\n        ", "\n    "], ["\n        left: ", ";\n        right: ",
        ";\n\n        ",
        "\n\n        ",
        "\n\n        ",
        "\n\n        ",
        "\n    "])), props.move && props.move > 0 ? props.move * 100 + '%' : 'auto', props.move && props.move < 0
        ? props.move * -100 + '%'
        : 'auto', function (props) {
        return props.medium
            ? css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n                      @media ", " {\n                          left: ", ";\n                          right: ", ";\n                      }\n                  "], ["\n                      @media ", " {\n                          left: ",
                ";\n                          right: ",
                ";\n                      }\n                  "])), mq.medium, mediumMove && mediumMove > 0
                ? mediumMove * 100 + '%'
                : 'auto', mediumMove && mediumMove < 0
                ? mediumMove * -100 + '%'
                : 'auto') : '';
    }, function (props) {
        return props.semilarge
            ? css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n                      @media ", " {\n                          left: ", ";\n                          right: ", ";\n                      }\n                  "], ["\n                      @media ", " {\n                          left: ",
                ";\n                          right: ",
                ";\n                      }\n                  "])), mq.semilarge, semilargeMove && semilargeMove > 0
                ? semilargeMove * 100 + '%'
                : 'auto', semilargeMove && semilargeMove < 0
                ? semilargeMove * -100 + '%'
                : 'auto') : '';
    }, function (props) {
        return props.large
            ? css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n                      @media ", " {\n                          left: ", ";\n                          right: ", ";\n                      }\n                  "], ["\n                      @media ", " {\n                          left: ",
                ";\n                          right: ",
                ";\n                      }\n                  "])), mq.large, largeMove && largeMove > 0
                ? largeMove * 100 + '%'
                : 'auto', largeMove && largeMove < 0
                ? largeMove * -100 + '%'
                : 'auto') : '';
    }, function (props) {
        return props.xlarge
            ? css(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n                      @media ", " {\n                          left: ", ";\n                          right: ", ";\n                      }\n                  "], ["\n                      @media ", " {\n                          left: ",
                ";\n                          right: ",
                ";\n                      }\n                  "])), mq.xlarge, xlargeMove && xlargeMove > 0
                ? xlargeMove * 100 + '%'
                : 'auto', xlargeMove && xlargeMove < 0
                ? xlargeMove * -100 + '%'
                : 'auto') : '';
    });
};
var StyledCol = styled.div(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n    ", ";\n    ", ";\n    padding-top: ", "px;\n    padding-left: ", "px;\n    display: block;\n    position: relative;\n\n    align-self: ", ";\n"], ["\n    ", ";\n    ", ";\n    padding-top: ", "px;\n    padding-left: ", "px;\n    display: block;\n    position: relative;\n\n    align-self: ",
    ";\n"])), getWidth, getLeftRight, function (_a) {
    var gutter = _a.gutter;
    return gutter || 0;
}, function (_a) {
    var gutter = _a.gutter;
    return gutter || 0;
}, function (_a) {
    var valign = _a.valign;
    switch (valign) {
        case 'top':
            return 'flex-start';
        case 'center':
            return 'center';
        case 'bottom':
            return 'flex-end';
        default:
            return undefined;
    }
});
var Col = function (props) {
    return React.createElement(React.Fragment, null, props.children);
};
var StyledGrid = styled.div(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n    margin-top: -", "px;\n    margin-left: -", "px;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n\n    align-items: ", ";\n"], ["\n    margin-top: -", "px;\n    margin-left: -", "px;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n\n    align-items: ",
    ";\n"])), function (_a) {
    var gutter = _a.gutter;
    return gutter || 0;
}, function (_a) {
    var gutter = _a.gutter;
    return gutter || 0;
}, function (_a) {
    var valign = _a.valign;
    switch (valign) {
        case 'top':
            return 'flex-start';
        case 'center':
            return 'center';
        case 'bottom':
            return 'flex-end';
        default:
            return undefined;
    }
});
var Grid = function (_a) {
    var gutter = _a.gutter, valign = _a.valign, children = _a.children;
    return (React.createElement(StyledGrid, { gutter: gutter, valign: valign }, React.Children.map(children, function (comp) {
        return React.createElement(StyledCol, __assign({}, comp.props, { gutter: gutter }));
    })));
};
Grid.defaultProps = {
    gutter: gridSettings.gutter,
};
export default {
    Row: Grid,
    Col: Col,
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12;
//# sourceMappingURL=Grid.js.map