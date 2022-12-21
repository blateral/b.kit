import { useEffect, useRef, useState } from 'react';

export interface ResizeState {
    clientWidth: number;
    clientHeight: number;
    innerHeight: number;
    innerWidth: number;
}

const useResizeThrottle = (
    timeout = 0,
    callback?: (state: ResizeState) => void
) => {
    const [throttledState, setThrottledState] =
        useState<ResizeState | null>(null);

    const timeoutRef = useRef<number>(-1);
    const lastState = useRef<ResizeState>({
        clientWidth: 0,
        clientHeight: 0,
        innerHeight: 0,
        innerWidth: 0,
    });

    const updateResizeState = () => {
        if (typeof window === 'undefined' || typeof document === 'undefined') {
            return;
        }

        lastState.current = {
            clientWidth: document.documentElement.clientWidth,
            clientHeight: document.documentElement.clientHeight,
            innerHeight: window.innerHeight,
            innerWidth: window.innerWidth,
        };
    };

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const handleResize = () => {
            updateResizeState();

            if (timeoutRef.current === -1) {
                timeoutRef.current = window.setTimeout(() => {
                    callback?.(lastState.current);
                    setThrottledState(lastState.current);
                    timeoutRef.current = -1;
                }, timeout);
            }
        };

        updateResizeState();
        callback?.(lastState.current);
        setThrottledState(lastState.current);

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [callback, timeout]);

    return throttledState;
};

export default useResizeThrottle;
