import { useEffect, useRef, useState } from 'react';
import useScrollThrottle from './useScrollThrottle';

export enum PageScrollDirection {
    UP,
    DOWN,
}

interface ScrollSettings {
    /** Direction state change delay in pixels */
    directionOffset?: {
        up?: number;
        down?: number;
    };
    /** Set top offset area */
    offset?: number;
    /** On leave top offset callback */
    onLeftOffset?: (dir: PageScrollDirection) => void;
    /** Throttle timeout of resize event. Default: 200ms */
    resizeThrottleTimeout?: number;
}

const usePageScroll = (settings?: ScrollSettings) => {
    const [isTop, setIsTop] = useState<boolean>(true);
    const [isInOffset, setIsInOffset] = useState<boolean>(true);
    const [leftOffsetFromTop, setLeftOffsetFromTop] = useState<boolean>(false);

    const lastScrollPos = useRef<number>(0);
    const pxSinceLastSwitch = useRef<number>(0);

    const [scrollDirection, setScrollDirection] = useState<PageScrollDirection>(
        PageScrollDirection.DOWN
    );

    const directionDownOffset = settings?.directionOffset?.down || 0;
    const directionUpOffset = settings?.directionOffset?.up || 0;

    // Throttle scroll event for perfomance
    const scrollState = useScrollThrottle(
        settings?.resizeThrottleTimeout !== undefined
            ? settings.resizeThrottleTimeout
            : 200
    );

    useEffect(() => {
        if (!scrollState) return;
        if (typeof window === 'undefined') return;

        const scrollY = scrollState.scrollY;
        const isTop = scrollY <= 0;

        // check if page is scroll on top
        setIsTop(isTop);

        // check offset
        if (settings?.offset && scrollY <= settings.offset) {
            setIsInOffset(true);
        } else {
            setIsInOffset((prev) => {
                if (prev) {
                    settings?.onLeftOffset?.(scrollDirection);
                    setLeftOffsetFromTop(true);
                }
                return false;
            });
        }

        /**
         * calculate direction changes
         */

        // get difference between current and last scrollY position
        const diff = scrollY - lastScrollPos.current;
        // get accumulated pixels since last direction change
        let absAccPx = Math.abs(pxSinceLastSwitch.current);

        // check if direction changed. if not iterate accumulated pixels value
        if (diff < 0 && pxSinceLastSwitch.current > 0) {
            pxSinceLastSwitch.current = 0;
        } else if (diff > 0 && pxSinceLastSwitch.current < 0) {
            pxSinceLastSwitch.current = 0;
        } else {
            pxSinceLastSwitch.current += diff;
        }

        // set current accumulated value
        absAccPx = Math.abs(pxSinceLastSwitch.current);

        // set direction states
        if (isTop) {
            setScrollDirection(PageScrollDirection.DOWN);
        } else if (diff < 0 && absAccPx >= directionUpOffset) {
            setScrollDirection(PageScrollDirection.UP);
        } else if (diff > 0 && absAccPx >= directionDownOffset) {
            setScrollDirection(PageScrollDirection.DOWN);
        }

        // save last scroll position
        lastScrollPos.current = scrollY;
    }, [
        directionDownOffset,
        directionUpOffset,
        scrollDirection,
        scrollState,
        settings,
    ]);

    useEffect(() => {
        // reset left offset flag on top
        if (isTop) setLeftOffsetFromTop(false);
    }, [isTop]);

    return {
        isTop,
        scrollDirection,
        isInOffset,
        leftOffsetFromTop,
    };
};

export default usePageScroll;
