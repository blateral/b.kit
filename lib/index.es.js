import React, { createElement, Fragment, Children } from 'react';
import styled, { css } from 'styled-components';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var mq = {
    medium: '(min-width: 40em)',
    semilarge: '(min-width: 52em)',
    large: '(min-width: 64em)',
    xlarge: '(min-width: 90em)',
    xxlarge: '(min-width: 105em)',
    xxxLarge: '(min-width: 150em)',
};
var spacings = {
    nudge: 5,
    spacer: 20,
    wrapper: 1440,
    wrapperLarge: 2400,
};
/***** Range Helper *****/
var getSizeByRange = function (range) {
    return "calc(" + range[0] + "px + (" + range[1] + " - " + range[0] + ") * ((100vw - 300px) / (" + spacings.wrapperLarge + " - 320)));";
};
var withRange = function (range, property) {
    if (!property)
        return '';
    return "\n        " + property + ": " + range[0] + "px;\n        " + property + ": " + getSizeByRange(range) + ";\n\n        @media " + mq.xxlarge + " {\n            " + property + ": " + range[1] + "px;\n        }\n    ";
};

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
    return createElement(Fragment, null, props.children);
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
    return (createElement(StyledGrid, { gutter: gutter, valign: valign }, Children.map(children, function (comp) {
        return createElement(StyledCol, __assign({}, comp.props, { gutter: gutter }));
    })));
};
Grid.defaultProps = {
    gutter: gridSettings.gutter,
};
var Grid$1 = {
    Row: Grid,
    Col: Col,
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12;

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
var View = styled.section(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n    position: relative;\n    overflow: hidden;\n\n    ", "\n    ", "\n\n    ", "\n"], ["\n    position: relative;\n    overflow: hidden;\n\n    ",
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
    return css(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n            &[data-ident='", "'] + &[data-ident='", "'] {\n                padding-top: 0;\n            }\n        "], ["\n            &[data-ident='", "'] + &[data-ident='", "'] {\n                padding-top: 0;\n            }\n        "])), indent, indent);
});
var Back = styled.div(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n    display: ", ";\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    max-width: ", "px;\n\n    background: ", ";\n\n    margin: 0 auto;\n    z-index: -1;\n\n    @media ", " {\n        background: ", ";\n    }\n\n    @media ", " {\n        :before {\n            content: ", ";\n            position: absolute;\n            top: 0;\n            left: 0;\n            bottom: 0;\n            width: ", "px;\n            background-color: ", ";\n\n            transform: translateX(-100%);\n        }\n\n        :after {\n            content: ", ";\n            position: absolute;\n            top: 0;\n            right: 0;\n            bottom: 0;\n            width: ", "px;\n            background-color: ", ";\n\n            transform: translateX(100%);\n        }\n    }\n"], ["\n    display: ", ";\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    max-width: ",
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
    return (createElement(View, { as: as, "data-ident": bgColor || 'plain', indent: bgColor || 'plain', addSeperation: addSeperation, className: className },
        bgColor && bgMode && (createElement(Back, { bgColor: bgColor, bgMode: bgMode, bgClamp: bgClamp })),
        children));
};
var templateObject_1$1, templateObject_2$1, templateObject_3$1;

var View$1 = styled.div(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n    position: relative;\n    width: 100%;\n    max-width: ", "px;\n    margin-left: auto;\n    margin-right: auto;\n    padding: 0 ", "px;\n"], ["\n    position: relative;\n    width: 100%;\n    max-width: ",
    "px;\n    margin-left: auto;\n    margin-right: auto;\n    padding: 0 ", "px;\n"])), function (_a) {
    var clampWidth = _a.clampWidth;
    return clampWidth === 'large' ? spacings.wrapperLarge : spacings.wrapper;
}, function (_a) {
    var addWhitespace = _a.addWhitespace;
    return (addWhitespace ? spacings.spacer : 0);
});
var Wrapper = function (_a) {
    var addWhitespace = _a.addWhitespace, clampWidth = _a.clampWidth, className = _a.className, children = _a.children;
    return (createElement(View$1, { className: className, addWhitespace: addWhitespace, clampWidth: clampWidth }, children));
};
var templateObject_1$2;

var Img = styled.img(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n    max-width: 100%;\n    display: block;\n    ", "\n"], ["\n    max-width: 100%;\n    display: block;\n    ",
    "\n"])), function (_a) {
    var coverSpace = _a.coverSpace;
    return coverSpace && css(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n            object-fit: cover;\n            object-position: center;\n        "], ["\n            object-fit: cover;\n            object-position: center;\n        "])));
});
var Picture = styled.picture(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(["\n    ", "\n"], ["\n    ",
    "\n"])), function (_a) {
    var coverSpace = _a.coverSpace;
    return coverSpace &&
        "\n    display: flex;\n    height: 100%;\n    width: 100%;\n";
});
var Image = function (_a) {
    var className = _a.className, small = _a.small, medium = _a.medium, semilarge = _a.semilarge, large = _a.large, xlarge = _a.xlarge, alt = _a.alt, coverSpace = _a.coverSpace, onClick = _a.onClick;
    return (createElement(Picture, { coverSpace: coverSpace, onClick: onClick },
        xlarge && createElement("source", { srcSet: xlarge, media: mq.xlarge }),
        large && createElement("source", { srcSet: large, media: mq.large }),
        semilarge && createElement("source", { srcSet: semilarge, media: mq.semilarge }),
        medium && createElement("source", { srcSet: medium, media: mq.medium }),
        createElement(Img, { srcSet: small, alt: alt || '', coverSpace: coverSpace, className: className })));
};
var templateObject_1$3, templateObject_2$2, templateObject_3$2;

/***** Colors *****/
var colors = {
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
var fonts = {
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

var StyledImage = styled(Image)(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n    width: 100%;\n"], ["\n    width: 100%;\n"])));
var Gallery = function (_a) {
    var isInverted = _a.isInverted, hasBack = _a.hasBack, images = _a.images, className = _a.className;
    return (React.createElement(Section, { addSeperation: true, bgClamp: "normal", bgColor: isInverted
            ? colors.black
            : hasBack
                ? colors.mono.light
                : 'transparent', className: className },
        React.createElement(Wrapper, { clampWidth: "normal", addWhitespace: true },
            React.createElement(Grid$1.Row, { gutter: images && (images.length <= 1 ? 0 : spacings.nudge * 2) }, images &&
                images.map(function (image, i) { return (React.createElement(Grid$1.Col, { medium: {
                        span: (image.size === 'half' ? 14 : 28) / 28,
                    }, key: i },
                    React.createElement(StyledImage, __assign({}, image)))); })))));
};
var templateObject_1$4;

var Gallery$1 = Gallery;

export { Gallery$1 as Gallery };
//# sourceMappingURL=index.es.js.map
