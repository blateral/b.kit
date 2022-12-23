import React from 'react';
import styled from 'styled-components';

import Image, { ImageProps } from 'components/blocks/Image';
import { HeaderFocus } from './Header';

const PosterView = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;

const BgImage = styled(Image)<{ focus?: HeaderFocus }>`
    height: 100%;

    img {
        height: 100%;
        object-position: ${({ focus }) =>
            `${focus?.[0] || 'center'} ${focus?.[1] || 'center'}`};
    }
`;

const HeaderPoster: React.FC<{
    isInverted?: boolean;
    bgImage?: Omit<ImageProps, 'ratios' | 'coverSpace'>;
    focus?: HeaderFocus;
    className?: string;
    children?: React.ReactNode;
}> = ({ isInverted, bgImage, focus, className, children }) => {
    return (
        <PosterView className={className}>
            {bgImage && (
                <BgImage
                    {...bgImage}
                    coverSpace
                    ratios={undefined}
                    isInverted={isInverted}
                    focus={focus}
                />
            )}
            {children}
        </PosterView>
    );
};

export default HeaderPoster;
