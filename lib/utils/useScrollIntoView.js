import { useEffect, useRef, useState } from 'react';
export var useScrollIntoView = function (duration, delay) {
    var _a = useState(null), activeElement = _a[0], setActiveElement = _a[1];
    var startTime = useRef(-1);
    var firstPos = useRef(0);
    var _b = useState(0), targetPos = _b[0], setTargetPos = _b[1];
    var _c = useState(true), isSmoothScrollSupported = _c[0], setIsSmoothScrollSupported = _c[1];
    var outQuad = function (n) {
        return n * (2 - n);
    };
    useEffect(function () {
        setIsSmoothScrollSupported('scrollBehavior' in document.documentElement.style);
    }, []);
    useEffect(function () {
        if (activeElement) {
            window.setTimeout(function () {
                if (isSmoothScrollSupported) {
                    activeElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                    });
                }
                else {
                    setTargetPos(activeElement.getBoundingClientRect().top);
                }
            }, delay || 0);
        }
    }, [activeElement, delay, isSmoothScrollSupported]);
    useEffect(function () {
        if (isSmoothScrollSupported)
            return;
        var animate = function (timestamp) {
            if (startTime.current === -1) {
                startTime.current = timestamp || new Date().getTime();
            }
            var elapsed = timestamp - startTime.current;
            var progress = elapsed / duration;
            var easeProgress = +outQuad(progress).toFixed(2);
            var newPos = targetPos === 0
                ? firstPos.current - firstPos.current * easeProgress
                : firstPos.current + targetPos * easeProgress;
            // scroll to new position
            window.scrollTo(0, newPos);
            if ((targetPos > 0 && newPos >= firstPos.current + targetPos) ||
                (targetPos < 0 && newPos <= firstPos.current + targetPos) ||
                (targetPos === 0 && newPos <= 0)) {
                cancelAnimationFrame(startTime.current);
                startTime.current = -1;
            }
            else {
                window.requestAnimationFrame(animate);
            }
        };
        cancelAnimationFrame(startTime.current);
        startTime.current = -1;
        firstPos.current =
            window.pageYOffset || document.documentElement.scrollTop;
        window.requestAnimationFrame(animate);
    }, [duration, isSmoothScrollSupported, targetPos]);
    return {
        setActiveElement: setActiveElement,
    };
};
//# sourceMappingURL=useScrollIntoView.js.map