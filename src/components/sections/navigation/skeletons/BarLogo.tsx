import React, { FC } from 'react';
import styled from 'styled-components';

import Link, { LinkProps } from 'components/typography/Link';
import Image, { ImageProps } from 'components/blocks/Image';
import { getColors } from 'utils/styles';

const View = styled(Link)`
    display: block;
    display: flex;
    justify-content: center;
    min-width: 60px;
    max-width: 100%;
    max-height: 100%;

    &:focus {
        outline: 2px solid ${({ theme }) => getColors(theme).primary.default};
        outline-offset: 1px;
    }

    &:focus:not(:focus-visible) {
        outline: none;
    }
`;

const Logo = styled(Image)`
    width: auto;
    height: 100%;
    object-fit: contain;
`;

export interface Logo {
    src?: string;
    alt?: string;
}

const BarLogo: FC<{
    link?: Omit<LinkProps, 'coverSpace' | 'ratios'>;
    logo?: ImageProps;
    className?: string;
}> = ({ link, logo, className }) => {
    return (
        <View {...link} className={className}>
            {logo?.small && (
                <Logo
                    {...logo}
                    coverSpace={false}
                    ratios={undefined}
                    showPlaceholder={false}
                />
            )}
        </View>
    );
};

export default BarLogo;
