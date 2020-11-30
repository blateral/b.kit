import { useEffect, useState } from 'react';
import { isBrowser, useMediaQuery } from './useMediaQuery';

// *****************
// usePoster
// *****************

interface PosterImage {
    small: string;
    medium?: string;
    semilarge?: string;
    large?: string;
    xlarge?: string;
}

export const canUseWebP = () => {
    if (!isBrowser) return false;

    const elem = document.createElement('canvas');

    if (!(elem.getContext && elem.getContext('2d'))) {
        // was able or not to get WebP representation
        return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0;
    }

    // very old browser like IE 8, canvas not supported
    return false;
};

export type PosterMq = 'small' | 'medium' | 'semilarge' | 'large' | 'xlarge';

export const usePoster = (
    posterImage: PosterImage & {
        webp?: PosterImage;
    },
    mqs?: PosterMq[]
) => {
    const [currentImage, setCurrentImage] = useState<string | undefined>();

    const workingImage =
        posterImage.webp && canUseWebP() ? posterImage.webp : posterImage;
    const currentMq = useMediaQuery(
        mqs || ['small', 'medium', 'semilarge', 'large', 'xlarge']
    ) as PosterMq | undefined;

    useEffect(() => {
        if (
            currentMq &&
            workingImage[currentMq] &&
            workingImage[currentMq] !== currentImage
        ) {
            setCurrentImage(workingImage[currentMq]);
        }
    }, [currentImage, currentMq, workingImage]);

    return currentImage;
};
