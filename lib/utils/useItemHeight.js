import { useEffect, useState } from 'react';
export var useItemHeight = function () {
    var _a = useState(null), element = _a[0], setElement = _a[1];
    var _b = useState(0), height = _b[0], setHeight = _b[1];
    useEffect(function () {
        var calcHeight = function () {
            if (element)
                setHeight(element.offsetHeight);
        };
        if (element) {
            calcHeight();
            window.addEventListener('resize', calcHeight);
        }
        return function () {
            window.removeEventListener('resize', calcHeight);
        };
    }, [element]);
    return {
        setElement: setElement,
        height: height,
    };
};
//# sourceMappingURL=useItemHeight.js.map