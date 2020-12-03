import React, { FC } from 'react';
import styled from 'styled-components';

import Grid from 'components/base/Grid';
import Section from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import Image, { ImageProps } from 'components/blocks/Image';
import { spacings } from 'utils/styles';
import { colors } from '../../../theme';

const StyledImage = styled(Image)`
    width: 100%;
`;

const Gallery: FC<{
    isInverted?: boolean;
    hasBack?: boolean;
    images?: Array<ImageProps & { size?: 'half' | 'full' }>;
    className?: string;
}> = ({ isInverted, hasBack, images, className }) => {
    return (
        <Section
            addSeperation
            bgClamp="normal"
            bgColor={
                isInverted
                    ? colors.black
                    : hasBack
                    ? colors.mono.light
                    : 'transparent'
            }
            className={className}
        >
            <Wrapper clampWidth="normal" addWhitespace>
                <Grid.Row
                    gutter={
                        images && (images.length <= 1 ? 0 : spacings.nudge * 2)
                    }
                >
                    {images &&
                        images.map((image, i) => (
                            <Grid.Col
                                medium={{
                                    span:
                                        (image.size === 'half' ? 14 : 28) / 28,
                                }}
                                key={i}
                            >
                                <StyledImage {...image} />
                            </Grid.Col>
                        ))}
                </Grid.Row>
            </Wrapper>
        </Section>
    );
};

export default Gallery;
