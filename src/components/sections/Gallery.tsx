import React, { FC, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

import Grid from 'components/base/Grid';
import Section from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import Image, { ImageProps } from 'components/blocks/Image';
import { getColors as color, spacings } from 'utils/styles';
import Intro from 'components/blocks/Intro';

const IntroBlock = styled.div`
    padding-bottom: ${spacings.spacer * 2}px;
`;

const StyledImage = styled(Image)`
    width: 100%;
`;

const Gallery: FC<{
    title?: string;
    superTitle?: string;
    text?: string;

    primaryAction?: (isInverted?: boolean) => React.ReactNode;
    secondaryAction?: (isInverted?: boolean) => React.ReactNode;

    isInverted?: boolean;
    hasBack?: boolean;
    images?: Array<ImageProps & { size?: 'half' | 'full' }>;
    className?: string;
}> = ({
    isInverted = false,
    hasBack = false,
    images,
    className,
    title,
    superTitle,
    text,
    primaryAction,
    secondaryAction,
}) => {
    const theme = useContext(ThemeContext);

    return (
        <Section
            addSeperation
            bgMode="full"
            bgColor={
                isInverted
                    ? color(theme).black
                    : hasBack
                    ? color(theme).mono.light
                    : 'transparent'
            }
            className={className}
        >
            <Wrapper clampWidth="normal" addWhitespace>
                {title && (
                    <IntroBlock>
                        <Intro
                            title={title}
                            superTitle={superTitle}
                            text={text}
                            isInverted={isInverted}
                            secondaryAction={secondaryAction}
                            primaryAction={primaryAction}
                        />
                    </IntroBlock>
                )}
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
