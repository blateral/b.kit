import { useEffect, useState } from 'react';
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

export const useMediaQuery = (mqs?: MediaQueryType[]) => {
    const checkMqs = mqs || [];
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
