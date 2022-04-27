import Image from 'components/blocks/Image';
import * as React from 'react';
import styled from 'styled-components';

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
`;

const BackgroundImg = styled(Image)`
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
`;

const HeaderPoster: React.FC<{
    bgImage: HeaderPosterImageProps;
    className?: string;
    children?: React.ReactNode;
}> = ({ bgImage, className, children }) => {
    return (
        <PosterView className={className}>
            <BackgroundImg {...bgImage} alt="" />
            {children}
        </PosterView>
    );
};

export default HeaderPoster;
