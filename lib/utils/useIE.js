import { useState, useEffect } from 'react';
var useIE = function (initialValue) {
    var _a = useState(initialValue || false), isIE = _a[0], setIE = _a[1];
    useEffect(function () {
        setIE(document.body.style.msTouchAction !== undefined);
    }, []);
    return isIE;
};
export default useIE;
//# sourceMappingURL=useIE.js.map