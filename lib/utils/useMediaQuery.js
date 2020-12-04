import { useEffect, useState } from 'react';
import { mq } from './styles';
export var isBrowser = typeof window !== 'undefined' && typeof window.document !== 'undefined';
// *****************
// useBreakpoint
// *****************
var checkMq = function (cmq, checkMqs) {
    return (isBrowser &&
        (checkMqs.length <= 0 || checkMqs.indexOf(cmq) > -1) &&
        (cmq !== 'small' ? window.matchMedia(mq[cmq]).matches : true));
};
export var getMediaQuery = function (checkMqs) {
    if (checkMq('xxxLarge', checkMqs)) {
        return 'xxxLarge';
    }
    else if (checkMq('xxlarge', checkMqs)) {
        return 'xxlarge';
    }
    else if (checkMq('xlarge', checkMqs)) {
        return 'xlarge';
    }
    else if (checkMq('large', checkMqs)) {
        return 'large';
    }
    else if (checkMq('semilarge', checkMqs)) {
        return 'semilarge';
    }
    else if (checkMq('medium', checkMqs)) {
        return 'medium';
    }
    else {
        return 'small';
    }
};
export var useMediaQuery = function (mqs) {
    var checkMqs = mqs || [];
    var _a = useState(), mediaQuery = _a[0], setMediaQuery = _a[1];
    useEffect(function () {
        var handleResize = function () {
            var newMediaQuery = getMediaQuery(checkMqs);
            if (newMediaQuery !== mediaQuery) {
                setMediaQuery(newMediaQuery);
            }
        };
        window.addEventListener('resize', handleResize);
        setMediaQuery(getMediaQuery(checkMqs));
        return function () { return window.removeEventListener('resize', handleResize); };
    }, [checkMqs, mediaQuery]);
    return mediaQuery;
};
//# sourceMappingURL=useMediaQuery.js.map