import { useCallback, useEffect, useRef } from 'react';

const useTimeout = (callback: () => void, delay: number) => {
    const callbackRef = useRef(callback);
    const timeoutRef = useRef<number>();

    useEffect(() => {
        callbackRef.current = callback;
    }, [callback]);

    const set = useCallback(() => {
        timeoutRef.current = window.setTimeout(
            () => callbackRef.current?.(),
            delay
        );
    }, [delay]);

    const clear = useCallback(() => {
        timeoutRef.current && window.clearTimeout(timeoutRef.current);
    }, []);

    useEffect(() => {
        set();
        return clear;
    }, [delay, set, clear]);

    const reset = useCallback(() => {
        clear();
        set();
    }, [clear, set]);

    return { clear, reset };
};

export default useTimeout;
