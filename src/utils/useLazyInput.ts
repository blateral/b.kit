import { useEffect, useRef, useState } from 'react';

const useLazyInput = (props: {
    initialValue: string;
    onLazyChange?: (value: string) => void;
}) => {
    const [value, setValue] = useState<string>(props.initialValue);
    const lazyTimerRef = useRef<number | null>(null);
    const lastValueRef = useRef<string>(props.initialValue);

    useEffect(() => {
        if (lastValueRef.current === value) return;

        clearLazyTimer();
        const currentValue = value;
        lazyTimerRef.current = window.setTimeout(() => {
            lastValueRef.current = currentValue;
            props.onLazyChange?.(currentValue);
        }, 800);
    }, [props, value]);

    const clearLazyTimer = () => {
        if (lazyTimerRef.current !== null) {
            window.clearTimeout(lazyTimerRef.current);
        }
    };

    const forceChange = () => {
        clearLazyTimer();
        props.onLazyChange?.(value);
    };

    return {
        setValue,
        value,
        forceChange,
    };
};

export default useLazyInput;
