import { useCallback, useEffect, useRef } from 'react';

export default function useInterval(callback: () => void, delay: number) {
    const callbackRef = useRef(callback);
    const intervalRef = useRef<number>();

    // Remember the latest callback.
    useEffect(() => {
        callbackRef.current = callback;
    }, [callback]);

    const set = useCallback(() => {
        intervalRef.current = window.setInterval(
            () => callbackRef.current?.(),
            delay
        );
    }, [delay]);

    const clear = useCallback(() => {
        intervalRef.current && window.clearInterval(intervalRef.current);
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
}
