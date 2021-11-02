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
    clampToElementHeight?: boolean;
    className?: string;
}> = ({
    image,
    hAlign = 'left',
    contentWidth = 1,
    moveRatio = 0.3,
    direction = 'up',
    clampToElementHeight,
    className,
}) => {
    const [yTransform, setYTransform] = useState<number>(0);
    const parallaxRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.pageYOffset;
            const ratio = scrolled * moveRatio;
            const offset = ratio * (direction === 'up' ? -1 : 1);

            if (clampToElementHeight && parallaxRef.current) {
                const maxOffset = parallaxRef.current.getBoundingClientRect()
                    .height;

                if (Math.abs(offset) > maxOffset) return;
                else setYTransform(offset);
            } else setYTransform(offset);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    return (
        <View>
            <Parallax
                ref={parallaxRef}
                style={{ transform: `translate3d(0px, ${yTransform}px, 0px)` }}
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
