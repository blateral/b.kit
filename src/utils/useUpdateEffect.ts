import { DependencyList, EffectCallback, useEffect, useRef } from 'react';

/** useEffect function that runs only on update (not on first render) */
const useUpdateEffect = (effect: EffectCallback, deps?: DependencyList) => {
    const firstRenderRef = useRef<boolean>(true);

    useEffect(() => {
        if (firstRenderRef.current) {
            firstRenderRef.current = false;
            return;
        }
        effect?.();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);
};

export default useUpdateEffect;
