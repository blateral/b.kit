import { useEffect, useRef, useState } from 'react';

export enum ScrollDirection {
    UP,
    DOWN,
}

export const useScroll = (
    topOffset = 0,
    onLeftOffset?: () => void,
    onEnterOffset?: () => void
) => {
    const [isTop, setIsTop] = useState<boolean>(true);
    const [isInOffset, setIsInOffset] = useState<boolean>(true);
    const [scrollDirection, setScrollDirection] = useState<ScrollDirection>(
        ScrollDirection.DOWN
    );
    const lastScrollPos = useRef<number>(0);

    useEffect(() => {
        const handleScroll = () => {
            setIsTop(window.scrollY <= 1);
            setIsInOffset(window.scrollY <= 1 + topOffset);

            if (lastScrollPos.current) {
                // check if top offset is left
                if (
                    window.scrollY > 1 + topOffset &&
                    lastScrollPos.current <= 1 + topOffset
                ) {
                    onLeftOffset && onLeftOffset();
                }

                // check if top offset was joined
                if (
                    window.scrollY <= 1 + topOffset &&
                    lastScrollPos.current > 1 + topOffset
                ) {
                    onEnterOffset && onEnterOffset();
                }

                setScrollDirection((prev) => {
                    if (window.scrollY <= 1) return ScrollDirection.DOWN;
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

        return () => {
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
        isTop,
        isInOffset,
        scrollDirection,
    };
};
