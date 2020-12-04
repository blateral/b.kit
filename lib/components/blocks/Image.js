var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import * as React from 'react';
import styled, { css } from 'styled-components';
import { mq } from '../../utils/styles';
var Img = styled.img(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    max-width: 100%;\n    display: block;\n    ", "\n"], ["\n    max-width: 100%;\n    display: block;\n    ",
    "\n"])), function (_a) {
    var coverSpace = _a.coverSpace;
    return coverSpace && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n            object-fit: cover;\n            object-position: center;\n        "], ["\n            object-fit: cover;\n            object-position: center;\n        "])));
});
var Picture = styled.picture(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    ", "\n"], ["\n    ",
    "\n"])), function (_a) {
    var coverSpace = _a.coverSpace;
    return coverSpace &&
        "\n    display: flex;\n    height: 100%;\n    width: 100%;\n";
});
var Image = function (_a) {
    var className = _a.className, small = _a.small, medium = _a.medium, semilarge = _a.semilarge, large = _a.large, xlarge = _a.xlarge, alt = _a.alt, coverSpace = _a.coverSpace, onClick = _a.onClick;
    return (React.createElement(Picture, { coverSpace: coverSpace, onClick: onClick },
        xlarge && React.createElement("source", { srcSet: xlarge, media: mq.xlarge }),
        large && React.createElement("source", { srcSet: large, media: mq.large }),
        semilarge && React.createElement("source", { srcSet: semilarge, media: mq.semilarge }),
        medium && React.createElement("source", { srcSet: medium, media: mq.medium }),
        React.createElement(Img, { srcSet: small, alt: alt || '', coverSpace: coverSpace, className: className })));
};
export default Image;
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=Image.js.map