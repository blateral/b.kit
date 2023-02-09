import { DependencyList, useEffect } from 'react';
import useTimeout from './useTimeout';

const useDebounce = (
    callback: () => void,
    delay: number,
    deps: DependencyList
) => {
    const { clear, reset } = useTimeout(callback, delay);

    useEffect(reset, [...deps, reset]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(clear, []);

    return {
        clear,
        reset,
    };
};

export default useDebounce;
