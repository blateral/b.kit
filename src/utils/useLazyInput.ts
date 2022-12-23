import { useState } from 'react';
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

    return {
        setValue,
        value,
        forceUpdate,
    };
};

export default useLazyInput;
