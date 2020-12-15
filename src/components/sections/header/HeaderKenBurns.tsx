import * as React from 'react';
import styled from 'styled-components';

import { useMediaQuery } from '../../../utils/useMediaQuery';
import { getBgImage } from '../../../utils/backgroundImage';
import useInterval from '../../../utils/useInterval';
import { AnimatePresence, motion, usePresence } from 'framer-motion';
import { canUseWebP } from '../../../utils/usePoster';

export interface HeaderKenBurnsImageProps {
    small: string;
    medium: string;
    large: string;
    xlarge: string;
    webp?: {
        small: string;
        medium: string;
        large: string;
        xlarge: string;
    };
}

const AnimationContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

const PosterImage = styled(motion.div)`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`;

const ScalingImage: React.FC<{ image: string }> = ({ image }) => {
    const [isPresent, safeToRemove] = usePresence();

    React.useEffect(() => {
        !isPresent && setTimeout(safeToRemove, 3000);
    }, [isPresent]);

    return (
        <PosterImage
            initial={{ scale: 1, rotate: 0.04 }} // rotate fixes render performance in ff -> prevents ff from optimizing animation
            animate={{ scale: 1.08, rotate: 0.04 }}
            transition={{
                duration: 13,
                ease: 'linear',
            }}
            style={{
                backgroundImage: `url(${image})`,
            }}
        />
    );
};

const FadingImages: React.FC<{
    images: { id: string | number; image: string }[];
}> = ({ images }) => {
    const [index, setIndex] = React.useState(0);
    const [initialized, setInitialized] = React.useState(false);
    useInterval(() => {
        setIndex((i) => (i + 1) % images.length);
        if (!initialized) {
            setInitialized(true);
        }
    }, 10000);

    return (
        <AnimatePresence>
            {images.map(
                ({ image }, i) =>
                    i === index && (
                        <motion.div
                            key={i}
                            initial={{
                                opacity: initialized ? 0 : 1,
                                zIndex: 1,
                            }} // translate fixes render performance in ff -> prevents ff from optimizing animation
                            animate={{ opacity: 1, zIndex: 1 }}
                            exit={{ opacity: 0, zIndex: 2 }}
                            transition={{ duration: 3, ease: 'anticipate' }}
                            style={{ willChange: 'opacity' }}
                        >
                            <ScalingImage image={image} />
                        </motion.div>
                    )
            )}
        </AnimatePresence>
    );
};

const preloadImages = (imageUrls: string[]) => {
    const images = imageUrls.map((src, i) => {
        return new Promise((res) => {
            const img = new Image();
            img.src = src;
            img.onload = () => res({ url: src, i });
        });
    });

    return images;
};

type KenBurnsMq = 'small' | 'medium' | 'large' | 'xlarge';

const HeaderKenBurns: React.FC<{
    images: HeaderKenBurnsImageProps[];
    className?: string;
}> = ({ images, className, children }) => {
    const mqs: KenBurnsMq[] = ['small', 'medium', 'large', 'xlarge'];
    const currentMq = useMediaQuery(mqs) as KenBurnsMq | undefined;

    const [loadedImages, setLoadedImages] = React.useState<{
        [key: string]: { id: string | number; image: string }[];
    }>({
        small: [],
        medium: [],
        large: [],
        xlarge: [],
    });

    React.useEffect(() => {
        if (currentMq) {
            const loadedForMq = loadedImages[currentMq];
            const useWebp = canUseWebP();

            if (loadedForMq.length < images.length && images.length >= 2) {
                const requestedImages = images.map((img) =>
                    img.webp && useWebp ? img.webp[currentMq] : img[currentMq]
                );

                const resolve = async (items: any) => {
                    for (const item of items) {
                        const x = await item;

                        setLoadedImages((prev) => ({
                            ...prev,
                            [currentMq]: [
                                ...prev[currentMq],
                                {
                                    id: x.i,
                                    image: x.url,
                                },
                            ],
                        }));
                    }
                };

                resolve(preloadImages(requestedImages));
            }
        }
    }, [currentMq]);

    return (
        <AnimationContainer className={className}>
            {currentMq && loadedImages[currentMq].length >= 2 ? (
                <FadingImages images={loadedImages[currentMq]} />
            ) : (
                <PosterImage
                    style={{
                        backgroundImage: `url(${getBgImage(
                            images[0],
                            currentMq
                        )})`,
                    }}
                />
            )}
            {children}
        </AnimationContainer>
    );
};

export default HeaderKenBurns;
