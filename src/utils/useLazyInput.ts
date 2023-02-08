import { useCallback, useState } from 'react';
import useDebounce from './useDebounce';

const useLazyInput = (
    callback: (value: string) => void,
    initial: string,
    delay = 600
) => {
    const [value, setValue] = useState<string>(initial);
    const { forceUpdate } = useDebounce(() => callback?.(value), delay, [
        value,
    ]);

    const update = useCallback((value: string, withoutDelay = false) => {
        setValue(value);
        if (withoutDelay) forceUpdate();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return {
        update,
        value,
        forceUpdate,
    };
};

export default useLazyInput;
