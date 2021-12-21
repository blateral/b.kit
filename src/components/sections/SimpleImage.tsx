import React, { FC } from 'react';
import styled from 'styled-components';

import Section from 'components/base/Section';
import Image, { ImageProps } from 'components/blocks/Image';
import Wrapper from 'components/base/Wrapper';

const StyledImage = styled(Image)<{ hAlign?: 'left' | 'center' | 'right' }>`
    margin-right: ${({ hAlign }) =>
        hAlign === 'left' || hAlign === 'center' ? 'auto' : 0};
    margin-left: ${({ hAlign }) =>
        hAlign === 'right' || hAlign === 'center' ? 'auto' : 0};
`;

const SimpleImage: FC<{
    image?: ImageProps;
    hAlign?: 'left' | 'center' | 'right';
}> = ({ image, hAlign = 'left' }) => {
    return (
        <Section bgColor="undefined" bgMode="full">
            <Wrapper>
                {image && <StyledImage hAlign={hAlign} {...image} />}
            </Wrapper>
        </Section>
    );
};

export default SimpleImage;
