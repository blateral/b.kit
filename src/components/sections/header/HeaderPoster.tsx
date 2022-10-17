import Image from 'components/blocks/Image';
import * as React from 'react';
import styled from 'styled-components';
import { HeaderFocus } from './Header';

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

const BackgroundImg = styled(Image)<{ focus?: HeaderFocus }>`
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: ${({ focus }) =>
        `${focus?.[0] || 'center'} ${focus?.[1] || 'center'}`};
`;

const HeaderPoster: React.FC<{
    bgImage: HeaderPosterImageProps;
    className?: string;
    focus?: HeaderFocus;
}> = ({ bgImage, className, children, focus }) => {
    return (
        <PosterView className={className}>
            <BackgroundImg {...bgImage} alt="" focus={focus} />
            {children}
        </PosterView>
    );
};

export default HeaderPoster;
