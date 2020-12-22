import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

import Section from 'components/base/Section';
import { getColors as color, spacings } from 'utils/styles';
import Intro from 'components/blocks/Intro';
import Wrapper from 'components/base/Wrapper';
import { ImageProps } from 'components/blocks/Image';

import VideoCard from 'components/blocks/VideoCard';

const IntroBlock = styled.div`
    padding-bottom: ${spacings.spacer * 2}px;
`;

const Video: React.FC<{
    title?: string;
    superTitle?: string;
    text?: string;

    bgImage: ImageProps;
    embedId: string;
    playIcon?: React.ReactChild;

    primaryAction?: (isInverted?: boolean) => React.ReactNode;
    secondaryAction?: (isInverted?: boolean) => React.ReactNode;

    isInverted?: boolean;
}> = ({
    title,
    superTitle,
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
            bgColor={isInverted ? color(theme).black : 'transparent'}
            addSeperation
        >
            <Wrapper addWhitespace>
                {title && (
                    <IntroBlock>
                        <Intro
                            title={title}
                            superTitle={superTitle}
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
