import { useEffect, useRef, useState } from 'react';

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
}

const usePageScroll = (settings?: ScrollSettings) => {
    const [isTop, setIsTop] = useState<boolean>(true);

    const lastScrollPos = useRef<number>(0);
    const pxSinceLastSwitch = useRef<number>(0);

    const [scrollDirection, setScrollDirection] = useState<PageScrollDirection>(
        PageScrollDirection.DOWN
    );

    const directionDownOffset = settings?.directionOffset?.down || 0;
    const directionUpOffset = settings?.directionOffset?.up || 0;

    useEffect(() => {
        const handleScroll = () => {
            if (typeof window === 'undefined') return;
            const scrollY = window.pageYOffset;

            // check if page is scroll on top
            setIsTop(scrollY <= 0);

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
            if (diff < 0 && absAccPx >= directionUpOffset) {
                setScrollDirection(PageScrollDirection.UP);
            } else if (diff > 0 && absAccPx >= directionDownOffset) {
                setScrollDirection(PageScrollDirection.DOWN);
            }

            // save last scroll position
            lastScrollPos.current = scrollY;
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [directionDownOffset, directionUpOffset]);

    return {
        isTop,
        scrollDirection,
    };
};

export default usePageScroll;
