import React, { FC } from 'react';
import styled from 'styled-components';
import {
    Parallax as ReactParallax,
    ParallaxProvider,
} from 'react-scroll-parallax';

const View = styled.div`
    position: relative;
    width: 100vw;
    z-index: -1;
`;

const StyledParallax = styled(ReactParallax)`
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
    className?: string;
}> = ({ image, hAlign = 'left', contentWidth = 1, className }) => {
    return (
        <ParallaxProvider>
            <View>
                <StyledParallax
                    className={className}
                    y={[20, -20]}
                    tagOuter="figure"
                >
                    <Content hAlign={hAlign} contentWidth={contentWidth}>
                        {image}
                    </Content>
                </StyledParallax>
            </View>
        </ParallaxProvider>
    );
};

export default ParallaxBackground;
