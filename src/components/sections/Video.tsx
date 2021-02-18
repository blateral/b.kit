import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

import Section from 'components/base/Section';
import { getColors as color, mq, spacings } from 'utils/styles';
import Intro from 'components/blocks/Intro';
import Wrapper from 'components/base/Wrapper';
import { ImageProps } from 'components/blocks/Image';

import VideoCard from 'components/blocks/VideoCard';
import { HeadlineTag } from 'components/typography/Heading';

const IntroBlock = styled.div`
    padding-left: ${spacings.nudge * 2}px;
    padding-right: ${spacings.nudge * 2}px;
    padding-bottom: ${spacings.spacer * 2}px;

    @media ${mq.medium} {
        padding-left: ${(1 / 28) * spacings.wrapper}px;
    }
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
}> = ({
    title,
    titleAs,
    superTitle,
    superTitleAs,
    text,
    primaryAction,
    secondaryAction,
    isInverted = false,
    bgImage,
    embedId,
    playIcon,
}) => {
    const theme = useContext(ThemeContext);

    return (
        <Section
            bgColor={isInverted ? color(theme).dark : 'transparent'}
            addSeperation
        >
            <Wrapper>
                {title && (
                    <IntroBlock>
                        <Intro
                            title={title}
                            titleAs={titleAs}
                            superTitle={superTitle}
                            superTitleAs={superTitleAs}
                            text={text}
                            primaryAction={primaryAction}
                            secondaryAction={secondaryAction}
                            isInverted={isInverted}
                        />
                    </IntroBlock>
                )}
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
