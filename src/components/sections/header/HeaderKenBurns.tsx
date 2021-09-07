import * as React from 'react';
import styled from 'styled-components';

import { useMediaQuery } from 'utils/useMediaQuery';
import { getBgImage } from 'utils/backgroundImage';
import { canUseWebP } from 'utils/usePoster';
import { FC, useEffect, useRef, useState } from 'react';

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

const PosterImage = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`;

const AnimationImage = styled.img<{ scale?: number; opacity?: number }>`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;

    object-fit: cover;
    object-position: center;

    transition-property: opacity, transform;
    transition-duration: ${({ scale }) => `2s, ${scale === 1 ? '0s' : '13s'}`};
    transition-delay: ${({ scale }) =>
        `${scale === 1 ? '1s' : '0s'}, ${scale === 1 ? '3s' : '0s'}`};

    opacity: ${({ opacity }) => opacity && opacity};
    transform: scale(${({ scale }) => scale || 1})
        rotate(${({ scale }) => (scale !== 1 ? 0.04 : 0)}deg);

    will-change: transform, opacity;
`;

const AnimationImages: FC<{
    zoom?: number;
    images: { id: number | string; image: string }[];
    onChange?: (imgId: number) => void;
}> = ({ zoom = 1.08, images, onChange }) => {
    const intervalRef = useRef<number | null>();
    const [activeImg, setActiveImg] = useState<number>(-1);

    useEffect(() => {
        const changeImage = () => {
            setActiveImg((prev) => {
                return (prev + 1) % images.length;
            });
        };

        // changeImage();
        window.setTimeout(changeImage, 200);
        if (intervalRef.current) window.clearInterval(intervalRef.current);
        intervalRef.current = window.setInterval(changeImage, 10000);

        return () => {
            if (intervalRef.current) window.clearInterval(intervalRef.current);
        };
    }, [images]);

    useEffect(() => {
        if (activeImg !== -1) onChange && onChange(activeImg);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeImg]);

    return (
        <>
            {images.map((img, i) => (
                <AnimationImage
                    key={i}
                    style={{
                        // backgroundImage: `url(${img.image})`,
                        zIndex: i === activeImg ? 1 : 0,
                    }}
                    src={img.image}
                    scale={i === activeImg ? zoom : 1}
                    opacity={i === activeImg ? 1 : 0}
                    alt=""
                />
            ))}
        </>
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
    onImageChange?: (currentImg: HeaderKenBurnsImageProps) => void;
    className?: string;
}> = ({ images, onImageChange, className, children }) => {
    const mqs: KenBurnsMq[] = ['small', 'medium', 'large', 'xlarge'];
    const currentMq = useMediaQuery(mqs) as KenBurnsMq | undefined;

    const [loadedImages, setLoadedImages] = React.useState<{
        [key: string]: { id: number | string; image: string }[];
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
    }, [currentMq, images, loadedImages]);

    return (
        <AnimationContainer className={className}>
            {currentMq && loadedImages[currentMq].length >= images.length ? (
                <AnimationImages
                    images={loadedImages[currentMq]}
                    onChange={(id) =>
                        images[id] && onImageChange && onImageChange(images[id])
                    }
                />
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
