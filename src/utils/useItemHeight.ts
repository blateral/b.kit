import { useEffect, useState } from 'react';

export const useItemHeight = () => {
    const [element, setElement] = useState<HTMLElement | null>(null);
    const [height, setHeight] = useState<number>(0);

    useEffect(() => {
        const calcHeight = () => {
            if (element) setHeight(element.offsetHeight);
        };

        if (element) {
            calcHeight();
            window.addEventListener('resize', calcHeight);
        }

        return () => {
            window.removeEventListener('resize', calcHeight);
        };
    }, [element]);

    return {
        setElement,
        height,
    };
};
