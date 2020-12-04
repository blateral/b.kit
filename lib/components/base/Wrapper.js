var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import * as React from 'react';
import styled from 'styled-components';
import { spacings } from '../../utils/styles';
var View = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    position: relative;\n    width: 100%;\n    max-width: ", "px;\n    margin-left: auto;\n    margin-right: auto;\n    padding: 0 ", "px;\n"], ["\n    position: relative;\n    width: 100%;\n    max-width: ",
    "px;\n    margin-left: auto;\n    margin-right: auto;\n    padding: 0 ", "px;\n"])), function (_a) {
    var clampWidth = _a.clampWidth;
    return clampWidth === 'large' ? spacings.wrapperLarge : spacings.wrapper;
}, function (_a) {
    var addWhitespace = _a.addWhitespace;
    return (addWhitespace ? spacings.spacer : 0);
});
var Wrapper = function (_a) {
    var addWhitespace = _a.addWhitespace, clampWidth = _a.clampWidth, className = _a.className, children = _a.children;
    return (React.createElement(View, { className: className, addWhitespace: addWhitespace, clampWidth: clampWidth }, children));
};
export default Wrapper;
var templateObject_1;
//# sourceMappingURL=Wrapper.js.map