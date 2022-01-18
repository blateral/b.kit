import React, { FC, useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';

import Image, { ImageProps } from 'components/blocks/Image';
import { spacings } from 'utils/styles';

const View = styled.section`
    position: relative;
    width: 100vw;
    z-index: -1;
`;

const Parallax = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    margin-left: 0;
    width: 100%;
`;

const Content = styled.div<{
    contentWidth?: number;
    hAlign?: 'left' | 'center' | 'right';
}>`
    margin-left: ${({ hAlign }) =>
        (hAlign === 'right' || hAlign === 'center') && 'auto'};
    margin-right: ${({ hAlign }) =>
        (hAlign === 'left' || hAlign === 'center') && 'auto'};

    width: ${({ contentWidth }) =>
        contentWidth
            ? contentWidth === -1
                ? 'auto'
                : contentWidth * 100 + '%'
            : undefined};

    max-width: ${spacings.wrapperLarge}px;
    overflow: hidden;

    & > * {
        width: ${({ contentWidth }) => contentWidth !== -1 && '100%'};
    }
`;

const StyledImage = styled(Image)<{
    coverSpace?: boolean;
    hAlign?: 'left' | 'center' | 'right';
}>`
    max-width: ${({ coverSpace }) => !coverSpace && 'none'};
    float: ${({ hAlign }) =>
        hAlign === 'left' || hAlign === 'right' ? hAlign : undefined};
    ${({ coverSpace, hAlign }) =>
        !coverSpace &&
        hAlign === 'center' &&
        css`
            transform: translateX(-50%);
            margin-left: 50%;
        `}
`;

export type ParallaxWidth = '1/4' | 'half' | '3/4' | 'full' | 'auto';

const ParallaxBackground: FC<{
    image?: ImageProps;
    hAlign?: 'left' | 'center' | 'right';
    contentWidth?: ParallaxWidth | number;
    moveRatio?: number;
    direction?: 'down' | 'up';
    className?: string;
}> = ({
    image,
    hAlign = 'left',
    contentWidth = 1,
    moveRatio = 0.2,
    direction = 'up',
    className,
}) => {
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const [yTransform, setYTransform] = useState<number>(0);
    // const cRef = useRef<HTMLDivElement>(null);
    const [cRef, setContainerRef] = useState<HTMLElement | null>(null);
    const parallaxRef = useRef<HTMLDivElement>(null);

    let width = 1;
    if (typeof contentWidth === 'string') {
        switch (contentWidth) {
            case '1/4': {
                width = 0.25;
                break;
            }

            case 'half': {
                width = 0.5;
                break;
            }

            case '3/4': {
                width = 0.75;
                break;
            }

            case 'auto': {
                width = -1;
                break;
            }

            default:
            case 'full': {
                width = 1;
                break;
            }
        }
    } else if (!isNaN(contentWidth)) {
        width = contentWidth;
    }

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    useEffect(() => {
        const prevEl = cRef?.previousElementSibling;
        if (prevEl) {
            const bgIdent = (prevEl as HTMLElement).dataset.bgIdent;
            const stackIdent = (prevEl as HTMLElement).dataset.stackIdent;

            if (bgIdent) {
                // set data background from previous element
                cRef?.setAttribute('data-bg-ident', bgIdent);
            }

            if (stackIdent) {
                // set data stack flag from previous element
                cRef?.setAttribute('data-stack-ident', stackIdent);
            }
        }
    }, [cRef]);

    useEffect(() => {
        const handleScroll = () => {
            if (!cRef) return;

            const containerPos = cRef.getBoundingClientRect().top;
            const ratio = containerPos * moveRatio;
            const offset = ratio * (direction === 'up' ? 1 : -1);

            setYTransform(offset);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [cRef, direction, moveRatio]);

    return (
        <>
            {isLoaded && (
                <View ref={setContainerRef}>
                    <Parallax
                        ref={parallaxRef}
                        style={{
                            transform: `translate3d(0px, ${yTransform}px, 0px)`,
                        }}
                        className={className}
                    >
                        <Content hAlign={hAlign} contentWidth={width}>
                            {image && (
                                <StyledImage
                                    hAlign={hAlign}
                                    coverSpace={width !== -1}
                                    {...image}
                                />
                            )}
                        </Content>
                    </Parallax>
                </View>
            )}
        </>
    );
};

export default ParallaxBackground;
