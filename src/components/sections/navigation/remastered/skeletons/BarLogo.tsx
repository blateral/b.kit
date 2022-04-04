import React, { FC } from 'react';
import styled from 'styled-components';

import Link, { LinkProps } from 'components/typography/Link';
import Image, { ImageProps } from 'components/blocks/Image';

const View = styled(Link)`
    display: flex;
    min-width: 60px;
    max-width: 100%;
    max-height: 100%;
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
