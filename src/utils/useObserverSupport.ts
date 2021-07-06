import { useEffect, useState } from 'react';

export const useObserverSupport = (inital?: boolean) => {
    const [observerSupported, setObserverSupport] = useState(inital || false);

    useEffect(() => {
        if (
            !('IntersectionObserver' in window) ||
            !('IntersectionObserverEntry' in window) ||
            !('intersectionRatio' in window.IntersectionObserverEntry.prototype)
        ) {
            setObserverSupport(false);
        } else {
            setObserverSupport(true);
        }
    }, []);

    return observerSupported;
};
