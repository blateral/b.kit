import React, { useContext, useState } from 'react';
import styled, { ThemeContext } from 'styled-components';

import Section from 'components/base/Section';
import { mq, getColors as color, spacings } from 'utils/styles';
import Intro from 'components/blocks/Intro';
import Wrapper from 'components/base/Wrapper';
import { ImageProps } from 'components/blocks/Image';

import Play from 'components/base/icons/Play';

const IntroBlock = styled.div`
    padding-bottom: ${spacings.spacer * 2}px;
`;

const VideoView = styled.div<{ bgImage?: ImageProps; isActive?: boolean }>`
    text-align: center;

    cursor: pointer;
    position: relative;

    padding-bottom: 56.25%;

    background-image: url("${({ bgImage }) => (bgImage ? bgImage.small : '')}");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    @media ${mq.medium} {
        text-align: left;

        background-image: ${({ bgImage }) =>
            bgImage ? `url("${bgImage.medium}")` : ''};
    }
 
    @media ${mq.semilarge}{
        background-image: ${({ bgImage }) =>
            bgImage ? `url("${bgImage.semilarge}")` : ''};
    }

    @media ${mq.large} {
        background-image: ${({ bgImage }) =>
            bgImage ? `url("${bgImage.large}")` : ''};
    }

    @media ${mq.xlarge} {
        background-image: ${({ bgImage }) =>
            bgImage ? `url("${bgImage.xlarge}")` : ''};
    }

    &:before {
        content: ${({ isActive, bgImage }) => !isActive && bgImage && '""'};
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color:${({ theme }) => color(theme).mono.medium};
        opacity:  ${({ bgImage }) => (bgImage ? '0.3' : '0')};
        

        pointer-events: none;
    }

    &:after {
        content: ${({ isActive, bgImage }) => !isActive && bgImage && '""'};
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        pointer-events: none;

        background: linear-gradient(358.19deg, rgba(29, 34, 35, 0.52) 12.37%, rgba(29, 34, 35, 0) 59.02%);

    }
`;

const VideoControls = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: ${({ theme }) => color(theme).black};

    & > * {
        transition: transform 0.2s ease-in-out;
    }

    ${VideoView}:hover > & > * {
        transform: scale(1.05);
    }

    ${VideoView}:active > & > * {
        transform: scale(0.95);
    }
`;

const Iframe = styled.iframe`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    border: none;
`;

const Video: React.FC<{
    title: string;
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
    const [isActive, setIsActive] = useState(false);
    const theme = useContext(ThemeContext);

    return (
        <Section
            bgColor={isInverted ? color(theme).black : 'transparent'}
            addSeperation
        >
            <Wrapper addWhitespace>
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
                <VideoView
                    onClick={() => setIsActive(true)}
                    bgImage={isActive ? undefined : bgImage}
                    isActive={isActive}
                >
                    {!isActive && (
                        <VideoControls>{playIcon || <Play />}</VideoControls>
                    )}
                    {isActive && (
                        <Iframe
                            id="ytplayer"
                            src={`https://www.youtube.com/embed/${embedId}?autoplay=1`}
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        />
                    )}
                </VideoView>
            </Wrapper>
        </Section>
    );
};

export default Video;
