import * as React from 'react';
import Section from '../base/Section';
import styled, { ThemeContext, css } from 'styled-components';
import {
    mq,
    getColors as color,
    withRange,
    spacings,
} from '../../utils/styles';
import Intro from '../blocks/Intro';
import Wrapper from '../base/Wrapper';

interface ImageProps {
    small: string;
    medium?: string;
    semilarge?: string;
    large?: string;
    xlarge?: string;
    alt?: string;
}

const IntroBlock = styled.div`
    padding-bottom: ${spacings.spacer * 2}px;
`;

const VideoView = styled.div<{ bgImage?: ImageProps; isActive?: boolean }>`
    text-align: center;

    cursor: pointer;
    position: relative;

    /* ${withRange([spacings.spacer * 3, 250], 'padding-top')}
    ${withRange([spacings.spacer * 3, 250], 'padding-bottom')} */

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

    ${({ isActive, bgImage }) =>
        !isActive &&
        bgImage &&
        css`
            &:before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                bottom: 0;
                right: 0;
                background-color: ${({ theme }) => color(theme).mono.medium};
                opacity: ${bgImage ? '0.3' : '0'};

                pointer-events: none;
            }

            &:after {
                content: '';
                display: block;
                position: absolute;
                top: 0;
                left: 0;
                bottom: 0;
                right: 0;
                pointer-events: none;

                background: linear-gradient(
                    358.19deg,
                    rgba(29, 34, 35, 0.52) 12.37%,
                    rgba(29, 34, 35, 0) 59.02%
                );
            }
        `}

    
`;

const VideoControls = styled.div`
    position: absolute;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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

    primaryAction?: (isInverted?: boolean) => React.ReactNode;
    secondaryAction?: (isInverted?: boolean) => React.ReactNode;

    isInverted?: boolean;
}> = ({
    title,
    superTitle,
    text,
    primaryAction,
    secondaryAction,
    isInverted,
    bgImage,
    embedId,
}) => {
    const [isActive, setIsActive] = React.useState(false);
    console.log(isActive);

    const theme = React.useContext(ThemeContext);

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
                    {!isActive && <VideoControls>Icon</VideoControls>}
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
