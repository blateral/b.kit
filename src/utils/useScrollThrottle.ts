import { useEffect, useRef, useState } from 'react';

export interface ScrollState {
    scrollY: number;
    scrollX: number;
}

const useScrollThrottle = (
    timeout = 0,
    callback?: (state: ScrollState) => void
) => {
    const [throttledState, setThrottledState] =
        useState<ScrollState | null>(null);

    const timeoutRef = useRef<number>(-1);
    const lastState = useRef<ScrollState>({
        scrollX: 0,
        scrollY: 0,
    });

    const updateScrollState = () => {
        if (typeof window === 'undefined') return;

        lastState.current = {
            scrollX: window.scrollX,
            scrollY: window.scrollY,
        };
    };

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const handleScroll = () => {
            updateScrollState();

            if (timeoutRef.current === -1) {
                timeoutRef.current = window.setTimeout(() => {
                    callback?.(lastState.current);
                    setThrottledState(lastState.current);
                    timeoutRef.current = -1;
                }, timeout);
            }
        };

        updateScrollState();
        callback?.(lastState.current);
        setThrottledState(lastState.current);

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [callback, timeout]);

    return throttledState;
};

export default useScrollThrottle;
