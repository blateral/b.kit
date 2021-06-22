import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

import Section from 'components/base/Section';
import { getColors as color, spacings } from 'utils/styles';
import Intro from 'components/blocks/Intro';
import Wrapper from 'components/base/Wrapper';
import { ImageProps } from 'components/blocks/Image';

import VideoCard from 'components/blocks/VideoCard';
import { HeadlineTag } from 'components/typography/Heading';

const StyledIntro = styled(Intro)`
    padding-bottom: ${spacings.spacer * 2}px;
`;

const Video: React.FC<{
    title?: string;
    titleAs?: HeadlineTag;
    superTitle?: string;
    superTitleAs?: HeadlineTag;
    text?: string;

    bgImage: ImageProps;
    embedId: string;
    playIcon?: React.ReactChild;

    primaryAction?: (isInverted?: boolean) => React.ReactNode;
    secondaryAction?: (isInverted?: boolean) => React.ReactNode;

    isInverted?: boolean;
    hasBack?: boolean;
}> = ({
    title,
    titleAs,
    superTitle,
    superTitleAs,
    text,
    primaryAction,
    secondaryAction,
    isInverted = false,
    hasBack = false,
    bgImage,
    embedId,
    playIcon,
}) => {
    const theme = useContext(ThemeContext);

    return (
        <Section
            bgColor={
                isInverted
                    ? color(theme).dark
                    : hasBack
                    ? color(theme).mono.light
                    : 'transparent'
            }
            addSeperation
        >
            {title && (
                <Wrapper addWhitespace>
                    <StyledIntro
                        title={title}
                        titleAs={titleAs}
                        superTitle={superTitle}
                        superTitleAs={superTitleAs}
                        text={text}
                        primaryAction={primaryAction}
                        secondaryAction={secondaryAction}
                        colorMode={isInverted ? 'inverted' : 'default'}
                    />
                </Wrapper>
            )}
            <Wrapper>
                <VideoCard
                    bgImage={bgImage}
                    embedId={embedId}
                    playIcon={playIcon}
                />
            </Wrapper>
        </Section>
    );
};

export default Video;
