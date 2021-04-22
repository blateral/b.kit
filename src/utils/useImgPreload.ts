import { ImageProps } from 'components/blocks/Image';
import { useEffect, useState } from 'react';
import { MediaQueryType } from './styles';
import { useMediaQuery } from './useMediaQuery';

export const useImgPreload = (
    imageUrls: ImageProps[],
    mqs: MediaQueryType[] = ['semilarge', 'large']
) => {
    const [isReady, setReady] = useState(false);
    const [isLoaded, setLoaded] = useState(false);
    const currentMq = useMediaQuery(mqs as MediaQueryType[]);
    const [loadedImages, setLoadedImages] = useState<{
        [key: string]: { id: number | string; image: string }[];
    }>({
        small: [],
        medium: [],
        semilarge: [],
        large: [],
        xlarge: [],
        xxlarge: [],
        xxxLarge: [],
    });

    const preloadImages = (imageUrls: (string | undefined)[]) => {
        const images = (imageUrls.filter((img) => img) as string[]).map(
            (src, i) => {
                return new Promise((res) => {
                    const img = new window.Image();
                    img.src = src;
                    img.onload = () => res({ url: src, i });
                });
            }
        );

        return images;
    };

    useEffect(() => {
        if (isReady && loadedImages && currentMq) {
            const loadedForMq = loadedImages[currentMq];

            if (loadedForMq.length < imageUrls.length && imageUrls.length > 0) {
                const requestedImages = imageUrls.map((img) => img[currentMq]);

                const resolve = async (items: any) => {
                    for (const item of items) {
                        const x = await item;

                        setLoadedImages((prev) => {
                            // check if image id already exists in array
                            if (!prev[currentMq].find((e) => e.id === x.i)) {
                                return {
                                    ...prev,
                                    [currentMq]: [
                                        ...prev[currentMq],
                                        {
                                            id: x.i,
                                            image: x.url,
                                        },
                                    ],
                                };
                            } else return prev;
                        });
                    }
                };

                resolve(preloadImages(requestedImages));
            }
        }
    }, [currentMq, imageUrls, isReady, loadedImages]);

    useEffect(() => {
        if (loadedImages && currentMq) {
            const imgCount = imageUrls.filter((img) => img[currentMq]).length;
            setLoaded(loadedImages[currentMq].length >= imgCount);
        }
    }, [currentMq, imageUrls, loadedImages]);

    return {
        loadedImages: currentMq && loadedImages[currentMq],
        isLoaded,
        setReady,
    };
};
