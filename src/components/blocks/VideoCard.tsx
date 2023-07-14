import React, { FC, useState } from 'react';
import styled from 'styled-components';

import { ImageProps } from 'components/blocks/Image';
import {
    mq,
    getColors as color,
    getGlobals as global,
    spacings,
} from 'utils/styles';
import Play from 'components/base/icons/Play';
import {
    CookieConsentData,
    selectors,
} from 'utils/cookie-consent/useCookieConsent';
import { Cookie, getCookie } from 'utils/cookie-consent/cookie';
import Copy from 'components/typography/Copy';
import ButtonGhost from 'components/buttons/ButtonGhost';
import { useLibTheme } from 'utils/LibThemeProvider';

const View = styled.div<{
    bgImage?: ImageProps;
    isActive?: boolean;
    onClick?: () => void;
}>`
    text-align: center;

    cursor: ${({ onClick }) => onClick && 'pointer'};
    position: relative;

    padding-bottom: 56.25%;

    background-image: url('${({ bgImage }) => (bgImage ? bgImage.small : '')}');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    border-radius: ${({ theme }) => global(theme).sections.edgeRadius};
    overflow: hidden;

    @media ${mq.medium} {
        text-align: left;

        background-image: ${({ bgImage }) =>
            bgImage?.medium && `url("${bgImage.medium}")`};
    }

    @media ${mq.semilarge} {
        background-image: ${({ bgImage }) =>
            bgImage?.semilarge && `url("${bgImage.semilarge}")`};
    }

    @media ${mq.large} {
        background-image: ${({ bgImage }) =>
            bgImage?.large && `url("${bgImage.large}")`};
    }

    @media ${mq.xlarge} {
        background-image: ${({ bgImage }) =>
            bgImage?.xlarge && `url("${bgImage.xlarge}")`};
    }

    &:before {
        content: ${({ isActive, bgImage }) => !isActive && bgImage && '""'};
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: ${({ theme }) => color(theme).elementBg.medium};
        opacity: ${({ bgImage }) => (bgImage ? '0.3' : '0')};

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

        background: linear-gradient(
            358.19deg,
            rgba(29, 34, 35, 0.52) 12.37%,
            rgba(29, 34, 35, 0) 59.02%
        );
    }
`;

const VideoControls = styled.button`
    display: block;
    border: none;
    background: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: ${({ theme }) => color(theme).elementBg.light};
    z-index: 1;
    padding: 0;

    cursor: pointer;

    & > * {
        opacity: 0.8;
        transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out;
        height: 80px;
        width: 80px;

        color: ${({ theme }) => color(theme).elementBg.dark};
    }

    ${View}:hover > & > * {
        transform: scale(1.05);
        opacity: 1;
    }

    ${View}:active > & > * {
        transform: scale(0.95);
        opacity: 1;
    }

    &:focus {
        outline: 2px solid ${({ theme }) => color(theme).primary.default};
        border-radius: 50%;
        opacity: 1;

        & > * {
            color: ${({ theme }) => color(theme).primary.default};
        }
    }

    &:focus:not(:focus-visible) {
        outline: none;
        box-shadow: none;
    }
`;

const ConsentOverlay = styled.div<{ isVisible?: boolean }>`
    display: ${({ isVisible }) => (isVisible ? 'flex' : 'none')};
    justify-content: center;
    align-items: center;

    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 2;
    background-color: rgba(0, 0, 0, 0.6);
    pointer-events: ${({ isVisible }) => (isVisible ? 'all' : 'none')};
`;

const ConsentContent = styled.div`
    max-width: 330px;
    text-align: center;

    & > * + * {
        margin-top: ${spacings.nudge * 3}px;
    }
`;

const ConsentText = styled(Copy)``;

const Iframe = styled.iframe`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    border: none;
`;

export interface VideoCardProps {
    bgImage: ImageProps;
    embedId: string;
    playIcon?: React.ReactNode;
    consentText?: string;
    consentAction?: (props: {
        handleClick?: () => void;
        consentProps: Record<string, string>;
    }) => React.ReactNode;
    /**
     * Custom handler for play button click
     * @returns true if video should be played
     */
    onPlayClick?: () => Promise<boolean>;
}

const VideoCard: FC<VideoCardProps & { className?: string }> = ({
    bgImage,
    embedId,
    playIcon,
    consentText = 'Für die Wiedergabe von Videos muss der Nutzung von Cookies & Daten zugestimmt werden.',
    consentAction,
    onPlayClick,
    className,
}) => {
    const { globals } = useLibTheme();
    const [isActive, setIsActive] = useState(false);
    const [showConsent, setShowConsent] = useState(false);

    const handlePlayClick = async () => {
        let isAccepted = false;

        if (onPlayClick) {
            isAccepted = await onPlayClick();
        } else {
            const cookie = getCookie(
                globals.cookie.name
            ) as Cookie<CookieConsentData>;

            isAccepted =
                globals.cookie.videoCookieTypeRestrictions.reduce<boolean>(
                    (acc, current) => {
                        if (!acc) return acc;
                        if (!cookie || !cookie?.data.types) return false;

                        // set acc to false if type is not defined or set to false
                        acc = !!cookie?.data?.types?.[current];
                        return acc;
                    },
                    true
                );
        }

        if (isAccepted) {
            setIsActive(true);
            setShowConsent(false);
        } else {
            setShowConsent(true);
        }
    };

    const handleConsentActionClick = () => {
        setShowConsent(false);
    };

    return (
        <View
            onClick={!showConsent ? handlePlayClick : undefined}
            bgImage={isActive ? undefined : bgImage}
            isActive={isActive}
            className={className}
        >
            {!isActive && !showConsent && (
                <VideoControls>
                    {playIcon || <Play iconColor="#000" />}
                </VideoControls>
            )}
            {isActive && (
                <Iframe
                    id="ytplayer"
                    src={`https://www.youtube.com/embed/${embedId}?autoplay=1`}
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                />
            )}
            <ConsentOverlay isVisible={showConsent}>
                <ConsentContent>
                    {consentText && (
                        <ConsentText isInverted>{consentText}</ConsentText>
                    )}
                    {consentAction ? (
                        consentAction({
                            handleClick: handleConsentActionClick,
                            consentProps: {
                                [selectors.buttons.attribute]: '',
                            },
                        })
                    ) : (
                        <ButtonGhost.View
                            as="button"
                            isInverted
                            onClick={handleConsentActionClick}
                            className={selectors.buttons.class}
                        >
                            <ButtonGhost.Label>
                                Zustimmung ändern
                            </ButtonGhost.Label>
                        </ButtonGhost.View>
                    )}
                </ConsentContent>
            </ConsentOverlay>
        </View>
    );
};

export default VideoCard;
