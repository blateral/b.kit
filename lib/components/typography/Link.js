import React from 'react';
var Link = function (_a) {
    var isExternal = _a.isExternal, href = _a.href, children = _a.children, className = _a.className;
    return (React.createElement("a", { href: href, target: isExternal ? '_blank' : undefined, rel: isExternal ? 'noopener noreferrer' : undefined, className: className }, children));
};
export default Link;
//# sourceMappingURL=Link.js.map