import React, { FC, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { useMediaQuery } from 'utils/useMediaQuery';
import { canUseWebP } from 'utils/usePoster';
import Image from 'components/blocks/Image';

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

const PosterImage = styled(Image)`
    position: absolute;
    top: 0;
    left: 0;

    height: 100%;
    width: 100%;

    object-fit: cover;
    object-position: center;
`;

const AnimationImage = styled.img<{
    scale?: number;
    opacity?: number;
    zoomPoint?: [number, number];
}>`
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
    transform-origin: ${({ zoomPoint }) =>
        zoomPoint ? `${zoomPoint[0] * 100}% ${zoomPoint[1] * 100}%` : 'center'};

    will-change: transform, opacity;
`;

const AnimationImages: FC<{
    zoom?: number;
    zoomPoint?: [number, number];
    images: { id: number | string; image: string }[];
    interval?: number;
    onChange?: (imgId: number) => void;
}> = ({
    zoom = 1.08,
    zoomPoint = [0.5, 0.5],
    interval = 10000,
    images,
    onChange,
}) => {
    const intervalRef = useRef<number | null>();
    const initialTimeoutRef = useRef<number | null>();
    const [activeImg, setActiveImg] = useState<number>(-1);

    useEffect(() => {
        const changeImage = () => {
            setActiveImg((prev) => {
                return (prev + 1) % images.length;
            });
        };

        // changeImage();
        initialTimeoutRef.current = window.setTimeout(changeImage, 200);
        if (intervalRef.current) window.clearInterval(intervalRef.current);
        intervalRef.current = window.setInterval(changeImage, interval);

        return () => {
            if (initialTimeoutRef.current)
                window.clearTimeout(initialTimeoutRef.current);
            if (intervalRef.current) window.clearInterval(intervalRef.current);
        };
    }, [images, interval]);

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
                        zIndex: i === activeImg ? 1 : 0,
                    }}
                    src={img.image}
                    scale={i === activeImg ? zoom : 1}
                    opacity={i === activeImg ? 1 : 0}
                    zoomPoint={zoomPoint}
                    alt=""
                />
            ))}
        </>
    );
};

const preloadImages = (imageUrls: string[]) => {
    const images = imageUrls.map((src, i) => {
        return new Promise((res) => {
            const img = new window.Image();
            img.src = src;
            img.onload = () => res({ url: src, i });
        });
    });

    return images;
};

type KenBurnsMq = 'small' | 'medium' | 'large' | 'xlarge';

const HeaderKenBurns: React.FC<{
    images: HeaderKenBurnsImageProps[];
    zoom?: number;
    zoomPoint?: [number, number];
    interval?: number;
    onImageChange?: (currentImg: HeaderKenBurnsImageProps) => void;
    className?: string;
}> = ({
    images,
    zoom = 1.08,
    zoomPoint = [0.5, 0.5],
    interval = 10000,
    onImageChange,
    className,
    children,
}) => {
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
            <PosterImage {...images[0]} />
            {currentMq && loadedImages[currentMq].length >= images.length && (
                <AnimationImages
                    zoom={zoom}
                    zoomPoint={zoomPoint}
                    interval={interval}
                    images={loadedImages[currentMq]}
                    onChange={(id) =>
                        images[id] && onImageChange && onImageChange(images[id])
                    }
                />
            )}
            {children}
        </AnimationContainer>
    );
};

export default HeaderKenBurns;
