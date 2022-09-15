const isSupported =
    typeof window !== 'undefined' && 'URLSearchParams' in window;

export const getUrlParams = () => {
    const obj: Record<string, string> = {};
    if (!isSupported) return obj;

    const paramsObj = Object.fromEntries(
        new URLSearchParams(window.location.search)
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

export const setUrlParam = (key: string, value: string) => {
    if (!isSupported) return;
    const params = getUrlParams();

    params[key] = value;

    const currentParams = new URLSearchParams(window.location.search);
    for (const param in params) {
        currentParams.set(param, encodeURIComponent(params[param]));
    }

    window.history.replaceState(
        {},
        '',
        `${location.pathname}?${currentParams.toString() + location.hash}`
    );
};

export const deleteUrlParam = (key: string) => {
    if (!isSupported) return;
    const currentParams = new URLSearchParams(window.location.search);
    currentParams.delete(key);

    window.history.replaceState(
        {},
        '',
        `${location.pathname}?${currentParams.toString() + location.hash}`
    );
};
