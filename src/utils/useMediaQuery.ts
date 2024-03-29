import { useEffect, useMemo, useState } from 'react';
import { MediaQueryType, mq } from './styles';

export const isBrowser =
    typeof window !== 'undefined' && typeof window.document !== 'undefined';

// *****************
// useBreakpoint
// *****************
const checkMq = (cmq: MediaQueryType, checkMqs: MediaQueryType[]) => {
    return (
        isBrowser &&
        (checkMqs.length <= 0 || checkMqs.indexOf(cmq) > -1) &&
        (cmq !== 'small' ? window.matchMedia(mq[cmq]).matches : true)
    );
};

export const getMediaQuery = (checkMqs: MediaQueryType[]): MediaQueryType => {
    if (checkMq('xxlarge', checkMqs)) {
        return 'xxlarge';
    } else if (checkMq('xlarge', checkMqs)) {
        return 'xlarge';
    } else if (checkMq('large', checkMqs)) {
        return 'large';
    } else if (checkMq('semilarge', checkMqs)) {
        return 'semilarge';
    } else if (checkMq('medium', checkMqs)) {
        return 'medium';
    } else {
        return 'small';
    }
};

export const getMediaQueries = (): { [key in MediaQueryType]: boolean } => {
    return {
        small: true,
        medium: window.matchMedia(mq['medium']).matches,
        semilarge: window.matchMedia(mq['semilarge']).matches,
        large: window.matchMedia(mq['large']).matches,
        xlarge: window.matchMedia(mq['xlarge']).matches,
        xxlarge: window.matchMedia(mq['xxlarge']).matches,
    };
};

const isEqual = (
    currentMqs: { [key in MediaQueryType]: boolean },
    newMqs: { [key in MediaQueryType]: boolean }
) => {
    let isDifferent = false;

    for (const key in mq) {
        if (currentMqs[key] !== newMqs[key]) {
            isDifferent = true;
            break;
        }
    }

    return !isDifferent;
};

export const useMediaQueries = () => {
    const [mediaQueries, setMediaQueries] = useState<
        { [key in MediaQueryType]: boolean }
    >({
        small: true,
        medium: false,
        semilarge: false,
        large: false,
        xlarge: false,
        xxlarge: false,
    });

    useEffect(() => {
        const handleResize = () => {
            const newMediaQueries = getMediaQueries();
            setMediaQueries((prev) => {
                if (!isEqual(prev, newMediaQueries)) {
                    return newMediaQueries;
                } else return prev;
            });
        };

        window.addEventListener('resize', handleResize);
        setMediaQueries(getMediaQueries());

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return mediaQueries;
};

export const useMediaQuery = (mqs?: MediaQueryType[]) => {
    const checkMqs = useMemo(() => mqs || [], [mqs]);
    const [mediaQuery, setMediaQuery] = useState<MediaQueryType | undefined>();

    useEffect(() => {
        const handleResize = () => {
            const newMediaQuery = getMediaQuery(checkMqs);

            if (newMediaQuery !== mediaQuery) {
                setMediaQuery(newMediaQuery);
            }
        };

        window.addEventListener('resize', handleResize);
        setMediaQuery(getMediaQuery(checkMqs));

        return () => window.removeEventListener('resize', handleResize);
    }, [checkMqs, mediaQuery]);

    return mediaQuery;
};

export interface MediaQueries {
    [key: string]: string;
}

export const useDynamicMediaQueries = <QueryMap extends MediaQueries>(
    mq: QueryMap
) => {
    const [mediaQueries, setMediaQueries] = useState<
        { [key in keyof QueryMap]: boolean }
    >(() => {
        return Object.keys(mq).reduce((acc, current) => {
            const copy = { ...acc };
            copy[current] = false;
            return copy;
        }, {}) as Record<keyof QueryMap, boolean>;
    });

    useEffect(() => {
        const getMq = () => {
            const newQueryState = {};

            for (const key in mq) {
                newQueryState[key as string] = window.matchMedia(
                    mq[key]
                ).matches;
            }
            return newQueryState as Record<keyof QueryMap, boolean>;
        };

        const setQueries = (newQueries: Record<keyof QueryMap, boolean>) => {
            setMediaQueries((prev) => {
                for (const key in newQueries) {
                    if (prev[key] === undefined) return newQueries;
                    if (newQueries[key] !== prev[key]) {
                        return newQueries;
                    }
                }
                return prev;
            });
        };

        const handleResize = () => {
            setQueries(getMq());
        };

        window.addEventListener('resize', handleResize);
        setQueries(getMq());

        return () => window.removeEventListener('resize', handleResize);
    }, [mq, mediaQueries]);

    return mediaQueries;
};
