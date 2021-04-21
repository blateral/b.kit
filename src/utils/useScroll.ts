import { useEffect, useRef, useState } from 'react';

export enum ScrollDirection {
    UP,
    DOWN,
}

export const useScroll = ({
    initialTopOffset = 0,
    onLeftOffset,
    onEnterOffset,
}: {
    initialTopOffset?: number;
    onLeftOffset?: () => void;
    onEnterOffset?: () => void;
}) => {
    const [topOffset, setTopOffset] = useState<number>(initialTopOffset);
    const [isTop, setIsTop] = useState<boolean>(true);
    const [isInOffset, setIsInOffset] = useState<boolean>(true);
    const [scrollDirection, setScrollDirection] = useState<ScrollDirection>(
        ScrollDirection.DOWN
    );
    const lastScrollPos = useRef<number>(0);

    useEffect(() => {
        if (typeof window === 'undefined') return;
        const handleScroll = () => {
            setIsTop(window.pageYOffset <= 1);

            if (lastScrollPos.current) {
                // check if top offset is left
                if (
                    window.pageYOffset > 1 + topOffset &&
                    lastScrollPos.current <= 1 + topOffset
                ) {
                    setIsInOffset(false);
                    onLeftOffset && onLeftOffset();
                }

                // check if top offset was joined
                if (
                    window.pageYOffset <= 1 + topOffset &&
                    lastScrollPos.current > 1 + topOffset
                ) {
                    setIsInOffset(true);
                    onEnterOffset && onEnterOffset();
                }

                setScrollDirection((prev) => {
                    if (window.pageYOffset <= 1) return ScrollDirection.DOWN;
                    return window.pageYOffset > lastScrollPos.current
                        ? ScrollDirection.DOWN
                        : window.pageYOffset < lastScrollPos.current
                        ? ScrollDirection.UP
                        : prev;
                });
            }
            lastScrollPos.current = window.pageYOffset;
        };

        setIsInOffset(window.pageYOffset <= 1 + topOffset);
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
        setTopOffset,
        topOffset,
    };
};
