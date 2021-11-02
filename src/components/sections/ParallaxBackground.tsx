import React, { FC, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

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

const ParallaxBackground: FC<{
    image?: React.ReactNode;
    hAlign?: 'left' | 'center' | 'right';
    contentWidth?: number;
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
                <Content hAlign={hAlign} contentWidth={contentWidth}>
                    {image}
                </Content>
            </Parallax>
        </View>
    );
};

export default ParallaxBackground;
