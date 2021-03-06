import { useEffect, useRef } from 'react';

export default function useInterval(callback: any, delay?: number) {
    const savedCallback: any = useRef();

    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            const id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}
