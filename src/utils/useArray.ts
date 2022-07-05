import { useState } from 'react';

const useArray = <T>(defaultValue?: Array<T>) => {
    const [array, setArray] = useState<Array<T>>(defaultValue || []);

    const push = (element: T | T[]) => {
        if (Array.isArray(element)) {
            setArray((prev) => [...prev, ...element]);
        } else {
            setArray((prev) => [...prev, element]);
        }
    };

    const pop = () => {
        let lastEl: T | undefined;

        setArray((prev) => {
            const copy = [...prev];
            lastEl = copy.pop();
            return copy;
        });
        return lastEl;
    };

    const filter = (
        callback: (value: T, index: number, array: T[]) => void
    ) => {
        setArray((prev) => prev.filter(callback));
    };

    const update = (index: number, newEl: T) => {
        setArray((prev) => [
            ...prev.slice(0, index),
            newEl,
            ...prev.slice(index + 1, prev.length),
        ]);
    };

    const remove = (index: number) => {
        setArray((prev) => [
            ...prev.slice(0, index),
            ...prev.slice(index + 1, prev.length),
        ]);
    };

    const clear = () => {
        setArray([]);
    };

    return {
        array,
        set: setArray,
        push,
        filter,
        update,
        remove,
        clear,
        pop,
    };
};

export default useArray;
