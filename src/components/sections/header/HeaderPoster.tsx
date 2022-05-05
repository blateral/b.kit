import React from 'react';
import styled from 'styled-components';

import Image, { ImageProps } from 'components/blocks/Image';

const PosterView = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;

const BgImage = styled(Image)`
    height: 100%;

    img {
        height: 100%;
    }
`;

const HeaderPoster: React.FC<{
    isInverted?: boolean;
    bgImage?: Omit<ImageProps, 'ratios' | 'coverSpace'>;
    className?: string;
    children?: React.ReactNode;
}> = ({ isInverted, bgImage, className, children }) => {
    return (
        <PosterView className={className}>
            {bgImage && (
                <BgImage
                    {...bgImage}
                    coverSpace
                    ratios={undefined}
                    isInverted={isInverted}
                />
            )}
            {children}
        </PosterView>
    );
};

export default HeaderPoster;
