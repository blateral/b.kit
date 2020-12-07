import React, { FC, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

import Grid from '../base/Grid';
import Section from '../base/Section';
import Wrapper from '../base/Wrapper';
import Image, { ImageProps } from '../blocks/Image';
import { getColor, spacings } from '../../utils/styles';

const StyledImage = styled(Image)`
    width: 100%;
`;

const Gallery: FC<{
    isInverted?: boolean;
    hasBack?: boolean;
    images?: Array<ImageProps & { size?: 'half' | 'full' }>;
    className?: string;
}> = ({ isInverted, hasBack, images, className }) => {
    const theme = useContext(ThemeContext);

    return (
        <Section
            addSeperation
            bgClamp="normal"
            bgColor={
                isInverted
                    ? getColor(theme, 'black')
                    : hasBack
                    ? getColor(theme, 'mono', 'light')
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
