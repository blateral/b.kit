import React, { FC, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import Image, { ImageProps } from 'components/blocks/Image';

const View = styled.div`
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

    width: ${({ contentWidth }) => contentWidth && contentWidth * 100 + '%'};

    & > * {
        width: 100%;
    }
`;

const StyledImage = styled(Image)`
    width: 100%;
`;

export type ParallaxWidth = '1/4' | 'half' | '3/4' | 'full';

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
    const [yTransform, setYTransform] = useState<number>(0);
    const cRef = useRef<HTMLDivElement>(null);
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
        const handleScroll = () => {
            if (!cRef.current) return;

            const containerPos = cRef.current.getBoundingClientRect().top;
            const ratio = containerPos * moveRatio;
            const offset = ratio * (direction === 'up' ? 1 : -1);

            setYTransform(offset);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    return (
        <View ref={cRef}>
            <Parallax
                ref={parallaxRef}
                style={{
                    transform: `translate3d(0px, ${yTransform}px, 0px)`,
                }}
                className={className}
            >
                <Content hAlign={hAlign} contentWidth={width}>
                    {image && <StyledImage {...image} />}
                </Content>
            </Parallax>
        </View>
    );
};

export default ParallaxBackground;
