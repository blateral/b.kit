var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import * as React from 'react';
import styled from 'styled-components';
import Link from '../typography/Link';
var bdotColor = '#1fc2f4';
var Dot = styled(Link)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    width: 11px;\n    height: 11px;\n\n    display: inline-block;\n    vertical-align: middle;\n    border-radius: 50%;\n\n    background: ", ";\n    color: ", ";\n    text-decoration: none;\n\n    span {\n        visibility: hidden;\n        font-size: 0;\n        color: transparent;\n    }\n"], ["\n    width: 11px;\n    height: 11px;\n\n    display: inline-block;\n    vertical-align: middle;\n    border-radius: 50%;\n\n    background: ", ";\n    color: ", ";\n    text-decoration: none;\n\n    span {\n        visibility: hidden;\n        font-size: 0;\n        color: transparent;\n    }\n"])), bdotColor, bdotColor);
var Bdot = function (_a) {
    var className = _a.className;
    return (React.createElement(Dot, { className: className, href: "https://blateral.com", isExternal: true },
        React.createElement("span", null, "b.lateral - creative agency")));
};
export default Bdot;
var templateObject_1;
//# sourceMappingURL=Bdot.js.map