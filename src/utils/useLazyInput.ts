import { useCallback, useState } from 'react';
import useDebounce from './useDebounce';

const useLazyInput = (
    callback: (value: string) => void,
    initial: string,
    delay = 600
) => {
    const [value, setValue] = useState<string>(initial);
    const { clear } = useDebounce(() => callback?.(value), delay, [value]);

    const update = useCallback((value: string, withoutDelay = false) => {
        setValue(value);
        if (withoutDelay) {
            clear();
            callback?.(value);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const forceUpdate = useCallback(() => {
        clear();
        callback?.(value);
    }, [callback, clear, value]);

    return {
        update,
        value,
        forceUpdate,
    };
};

export default useLazyInput;
