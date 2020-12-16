import * as React from 'react';
import styled from 'styled-components';

import { usePoster } from 'utils/usePoster';

interface HeaderPosterImageProps {
    small: string;
    medium?: string;
    semilarge?: string;
    large?: string;
    xlarge?: string;
    webp?: {
        small: string;
        medium?: string;
        semilarge?: string;
        large?: string;
        xlarge?: string;
    };
}

const PosterView = styled.div`
    position: relative;
    width: 100%;
    height: 100%;

    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    /* required to align items at flex-end in ie11 */
    &:before {
        content: '';
        min-height: 200px;
        display: block;
        flex: 1 0 0px;
    }
`;

const HeaderPoster: React.FC<{
    bgImage: HeaderPosterImageProps;
    className?: string;
}> = ({ bgImage, className, children }) => {
    const currentImage = usePoster(bgImage);
    return (
        <PosterView
            style={
                currentImage ? { backgroundImage: `url(${currentImage})` } : {}
            }
            className={className}
        >
            {children}
        </PosterView>
    );
};

export default HeaderPoster;
