import { useCallback, useEffect, useState } from 'react';

const isSupported =
    typeof window !== 'undefined' && 'URLSearchParams' in window;

const getParamsObj = (params?: URLSearchParams) => {
    const obj: Record<string, string> = {};

    const paramsObj = Object.fromEntries(
        params || new URLSearchParams(window.location.search)
    );

    for (const param in paramsObj) {
        let value = paramsObj[param];
        if (typeof value === 'string') {
            value = decodeURIComponent(value);
        }
        obj[param] = value;
    }

    return obj;
};

const useParams = () => {
    const [params, setParams] = useState<Record<string, string>>({});

    useEffect(() => {
        if (!isSupported) return;

        setParams(getParamsObj());
    }, []);

    const update = useCallback(
        (key: string, value: string) => {
            if (!isSupported) return;

            const newParams = { ...params };
            newParams[key] = value;

            const currentParams = new URLSearchParams(window.location.search);
            for (const param in newParams) {
                currentParams.set(param, encodeURIComponent(newParams[param]));
            }

            setParams(getParamsObj(currentParams));

            window.history.replaceState(
                {},
                '',
                `${location.pathname}?${
                    currentParams.toString() + location.hash
                }`
            );
        },
        [params]
    );

    return { params, update };
};

export default useParams;
