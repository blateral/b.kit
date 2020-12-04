import { useEffect, useRef, useState } from 'react';
export var ScrollDirection;
(function (ScrollDirection) {
    ScrollDirection[ScrollDirection["UP"] = 0] = "UP";
    ScrollDirection[ScrollDirection["DOWN"] = 1] = "DOWN";
})(ScrollDirection || (ScrollDirection = {}));
export var useScroll = function (topOffset, onLeftOffset, onEnterOffset) {
    if (topOffset === void 0) { topOffset = 0; }
    var _a = useState(true), isTop = _a[0], setIsTop = _a[1];
    var _b = useState(true), isInOffset = _b[0], setIsInOffset = _b[1];
    var _c = useState(ScrollDirection.DOWN), scrollDirection = _c[0], setScrollDirection = _c[1];
    var lastScrollPos = useRef(0);
    useEffect(function () {
        var handleScroll = function () {
            setIsTop(window.scrollY <= 1);
            setIsInOffset(window.scrollY <= 1 + topOffset);
            if (lastScrollPos.current) {
                // check if top offset is left
                if (window.scrollY > 1 + topOffset &&
                    lastScrollPos.current <= 1 + topOffset) {
                    onLeftOffset && onLeftOffset();
                }
                // check if top offset was joined
                if (window.scrollY <= 1 + topOffset &&
                    lastScrollPos.current > 1 + topOffset) {
                    onEnterOffset && onEnterOffset();
                }
                setScrollDirection(function (prev) {
                    if (window.scrollY <= 1)
                        return ScrollDirection.DOWN;
                    return window.scrollY > lastScrollPos.current
                        ? ScrollDirection.DOWN
                        : window.scrollY < lastScrollPos.current
                            ? ScrollDirection.UP
                            : prev;
                });
            }
            lastScrollPos.current = window.scrollY;
        };
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return function () {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [
        lastScrollPos,
        onLeftOffset,
        onEnterOffset,
        scrollDirection,
        topOffset,
    ]);
    return {
        isTop: isTop,
        isInOffset: isInOffset,
        scrollDirection: scrollDirection,
    };
};
//# sourceMappingURL=useScroll.js.map