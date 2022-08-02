import { useCallback, useEffect, useState } from 'react';

const isSupported =
    typeof window !== 'undefined' && 'URLSearchParams' in window;

const useParams = () => {
    const [params, setParams] = useState<Record<string, string>>({});

    useEffect(() => {
        if (!isSupported) return;

        const params = Object.fromEntries(
            new URLSearchParams(window.location.search)
        );
        if (params) {
            setParams(params);
        }
    }, []);

    const update = useCallback(
        (key: string, value: string) => {
            if (!isSupported) return;

            const newParams = { ...params };
            newParams[key] = encodeURIComponent(value);

            const currentParams = new URLSearchParams(window.location.search);
            for (const param in newParams) {
                currentParams.set(param, newParams[param]);
            }

            const newParamObj = Object.fromEntries(currentParams);
            if (newParamObj) {
                setParams(newParamObj);
            }

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
