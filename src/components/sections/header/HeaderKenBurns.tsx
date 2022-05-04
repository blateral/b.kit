import React, { FC, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { useMediaQuery } from 'utils/useMediaQuery';
import Image from 'components/blocks/Image';
import { clampValue } from 'utils/clamp';
import { HeaderImage } from './Header';

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

    img {
        height: 100%;
    }
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
    images: KenBurnsImage[];
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
        <React.Fragment>
            {images.map((img, i) => {
                let imgZoom = 1;
                let imgZoomPoint = zoomPoint;

                if (i === activeImg) {
                    imgZoom = img.zoom !== undefined ? img.zoom : zoom;
                }

                if (img.zoomPoint) {
                    imgZoomPoint = getValidZoomPoint(img.zoomPoint);
                }

                return (
                    <AnimationImage
                        key={i}
                        style={{
                            zIndex: i === activeImg ? 1 : 0,
                        }}
                        src={img.image}
                        scale={imgZoom}
                        opacity={i === activeImg ? 1 : 0}
                        zoomPoint={imgZoomPoint}
                        alt={img.alt || ''}
                    />
                );
            })}
        </React.Fragment>
    );
};

const preloadImages = (images: KenBurnsImage[]): Promise<KenBurnsImage>[] => {
    const loadedImages: Promise<KenBurnsImage>[] = images.map((req) => {
        return new Promise((resolve) => {
            const img = new window.Image();
            img.src = req.image;
            img.onload = () => resolve(req);
        });
    });

    return loadedImages;
};

type KenBurnsMq = 'small' | 'medium' | 'large' | 'xlarge';

interface KenBurnsImage {
    id: number | string;
    image: string;
    alt?: string;
    zoom?: number;
    zoomPoint?: [number, number];
}

const getValidZoomPoint = (point: [number, number]) => {
    return [clampValue(point[0], 0, 1), clampValue(point[1], 0, 1)] as [
        number,
        number
    ];
};

const HeaderKenBurns: React.FC<{
    images: HeaderImage[];
    zoom?: number;
    zoomPoint?: [number, number];
    interval?: number;
    onImageChange?: (currentImg: HeaderImage) => void;
    className?: string;
    children?: React.ReactNode;
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

    const [loadedImages, setLoadedImages] = useState<{
        [key: string]: KenBurnsImage[];
    }>({
        small: [],
        medium: [],
        large: [],
        xlarge: [],
    });

    useEffect(() => {
        if (currentMq) {
            const loadedForMq = loadedImages[currentMq];

            if (loadedForMq.length < images.length && images.length >= 2) {
                const requestedImages: KenBurnsImage[] = images.map(
                    (img, i) => ({
                        id: i,
                        image: img[currentMq] as string,
                        zoom: img.zoom || zoom,
                        zoomPoint: img.zoomPoint || zoomPoint,
                        alt: img.alt,
                    })
                );

                const resolve = async (
                    imagePromises: Promise<KenBurnsImage>[]
                ) => {
                    for (const promise of imagePromises) {
                        const loadedImg = await promise;

                        setLoadedImages((prev) => {
                            // check if image id already exists in array
                            if (
                                !prev[currentMq].find(
                                    (e) => e.id === loadedImg.id
                                )
                            ) {
                                return {
                                    ...prev,
                                    [currentMq]: [
                                        ...prev[currentMq],
                                        loadedImg,
                                    ],
                                };
                            } else return prev;
                        });
                    }
                };

                resolve(preloadImages(requestedImages));
            }
        }
    }, [currentMq, images, loadedImages, zoom, zoomPoint]);

    return (
        <AnimationContainer className={className}>
            <PosterImage {...images[0]} coverSpace ratios={undefined} />
            {currentMq && loadedImages[currentMq].length >= images.length && (
                <AnimationImages
                    zoom={zoom}
                    zoomPoint={getValidZoomPoint(zoomPoint)}
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
