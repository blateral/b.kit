import React, { FC } from 'react';
import styled, { css } from 'styled-components';

import { CalloutTag } from 'components/typography/Callout';
import { mq, spacings, withRange } from 'utils/styles';
import { useLibTheme, withLibTheme } from 'utils/LibThemeProvider';
import HeaderKenBurns from './HeaderKenBurns';
import HeaderPoster from './HeaderPoster';
import Actions from 'components/blocks/Actions';
import HeaderVideo from './HeaderVideo';
import Copy from 'components/typography/Copy';
import Heading from 'components/typography/Heading';
import Section, { mapToBgMode } from 'components/base/Section';
import { ImageProps } from 'components/blocks/Image';
import {
    generateNavbarIdent as genIdent,
    getFullNavbarHeights as getNavHeight,
} from '../navigation/Navigation';

const Poster: FC<{
    isInverted?: boolean;
    videoUrl?: string;
    images?: Omit<ImageProps, 'ratios' | 'coverSpace'>[];
    focus?: HeaderFocus;
    kenBurnsZoom?: number;
    kenBurnsZoomPoint?: [number, number];
    kenBurnsInterval?: number;
    onImageChange?: (image?: Omit<ImageProps, 'ratios' | 'coverSpace'>) => void;
    className?: string;
    children?: React.ReactNode;
}> = ({
    isInverted,
    videoUrl,
    images,
    focus,
    kenBurnsZoom,
    kenBurnsZoomPoint,
    kenBurnsInterval,
    onImageChange,
    className,
    children,
}) => {
    switch (true) {
        case !!videoUrl: {
            return (
                <HeaderVideo
                    isInverted={isInverted}
                    videoUrl={videoUrl}
                    focus={focus}
                    placeholderImg={images?.[0]}
                    className={className}
                >
                    {children}
                </HeaderVideo>
            );
        }

        case images && images.length > 1: {
            return (
                <HeaderKenBurns
                    images={images || []}
                    zoom={kenBurnsZoom}
                    zoomPoint={kenBurnsZoomPoint}
                    interval={kenBurnsInterval}
                    onImageChange={onImageChange}
                    className={className}
                >
                    {children}
                </HeaderKenBurns>
            );
        }

        // single image
        case images && images.length === 1: {
            return (
                <HeaderPoster
                    isInverted={isInverted}
                    bgImage={images?.[0]}
                    focus={focus}
                    className={className}
                >
                    {children}
                </HeaderPoster>
            );
        }

        default: {
            return <div>{children}</div>;
        }
    }
};

const genHeightStyles = (isFull: boolean) => css`
    // Doing some crazy shit to calculate curent navbar height in CSS
    ${({ theme }) => {
        // navbar main only
        const mainIdent = genIdent({
            pageFlow: 'beforeContent',
            hasMain: true,
        });

        // navbar main and top
        const mainTopIdent = genIdent({
            pageFlow: 'beforeContent',
            hasMain: true,
            hasTop: true,
        });

        // navbar main and bottom
        const mainBottomIdent = genIdent({
            pageFlow: 'beforeContent',
            hasMain: true,
            hasBottom: true,
        });

        // full navbar with all bars
        const fullIdent = genIdent({
            pageFlow: 'beforeContent',
            hasTop: true,
            hasMain: true,
            hasBottom: true,
        });

        const navMainHeight = getNavHeight(theme, mainIdent).large;
        const navMainTopHeight = getNavHeight(theme, mainTopIdent).large;
        const navMainBottomHeight = getNavHeight(theme, mainBottomIdent).large;
        const navFullHeight = getNavHeight(theme, fullIdent).large;

        const mapToSelector = (idents: string[]) => {
            return idents.map((id) => `[data-navbar-ident*='${id}']`).join('');
        };

        const refHeight = isFull ? '100vh' : '80vh';

        return css`
            & > ${StyledPoster} {
                min-height: 500px;
                height: ${refHeight};
            }

            // with main navbar element
            header${mapToSelector(mainIdent.split('-'))} + & {
                & > ${StyledPoster} {
                    height: calc(${refHeight} - ${navMainHeight[0]}px);
                }
            }

            // with main and top navbar elements
            header${mapToSelector(mainTopIdent.split('-'))} + & {
                & > ${StyledPoster} {
                    height: calc(${refHeight} - ${navMainTopHeight[0]}px);
                }
            }

            // with main and bottom navbar elements
            header${mapToSelector(mainBottomIdent.split('-'))} + & {
                & > ${StyledPoster} {
                    height: calc(${refHeight} - ${navMainBottomHeight[0]}px);
                }
            }

            // with all navbar elements
            header${mapToSelector(fullIdent.split('-'))} + & {
                & > ${StyledPoster} {
                    height: calc(${refHeight} - ${navFullHeight[0]}px);
                }
            }

            @media ${mq.semilarge} {
                // with main navbar element
                header${mapToSelector(mainIdent.split('-'))} + & {
                    & > ${StyledPoster} {
                        height: calc(${refHeight} - ${navMainHeight[1]}px);
                    }
                }

                // with main and top navbar elements
                header${mapToSelector(mainTopIdent.split('-'))} + & {
                    & > ${StyledPoster} {
                        height: calc(${refHeight} - ${navMainTopHeight[1]}px);
                    }
                }

                // with main and bottom navbar elements
                header${mapToSelector(mainBottomIdent.split('-'))} + & {
                    & > ${StyledPoster} {
                        height: calc(
                            ${refHeight} - ${navMainBottomHeight[1]}px
                        );
                    }
                }

                // with all navbar elements
                header${mapToSelector(fullIdent.split('-'))} + & {
                    & > ${StyledPoster} {
                        height: calc(${refHeight} - ${navFullHeight[1]}px);
                    }
                }
            }
        `;
    }}
`;

const HeaderSection = styled(Section)`
    position: relative;
    ${genHeightStyles(true)}

    header + & {
        ${withRange([0], 'padding-top')}
        ${withRange([0], 'margin-top')}
    }
`;

const HeaderSectionSmall = styled(Section)`
    position: relative;
    ${genHeightStyles(false)}

    header + & {
        ${withRange([0], 'padding-top')}
        ${withRange([0], 'margin-top')}
    }
`;

const StyledPoster = styled(Poster)`
    position: relative;
    height: 100vh;
    max-height: 1300px;
    max-width: ${spacings.wrapperLarge}px;
    margin: 0 auto;
`;

const Overlay = styled.div<{ bgValue?: string; textOnImage?: boolean }>`
    display: ${({ textOnImage }) => (textOnImage ? 'block' : 'none')};
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: ${({ bgValue }) => bgValue && bgValue};
    z-index: 2;

    @media ${mq.medium} {
        display: block;
    }
`;

const Content = styled.div<{ isCentered?: boolean; textOnImage?: boolean }>`
    display: none;
    max-width: ${spacings.wrapper}px;
    margin: 0 auto;

    ${({ textOnImage, isCentered }) =>
        textOnImage &&
        css`
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: ${isCentered && 'center'};
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            padding: ${spacings.spacer * 2}px;
            z-index: 2;

            & > * {
                margin-top: ${spacings.spacer}px;
                max-width: 880px;
            }
        `}

    @media ${mq.medium} {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: ${({ isCentered }) => isCentered && 'center'};
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        padding: ${spacings.spacer * 2}px;
        z-index: 2;

        & > * {
            margin-top: ${spacings.spacer}px;
            max-width: 880px;
        }
    }
`;

const ContentMobile = styled.div`
    padding: ${spacings.spacer}px ${spacings.nudge * 2}px;

    & > * + * {
        margin-top: ${spacings.spacer}px;
    }

    @media ${mq.medium} {
        display: none;
    }
`;

const Title = styled(Heading)<{ isCentered?: boolean }>`
    text-align: ${({ isCentered }) => isCentered && 'center'};

    @media ${mq.medium} {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3; /* number of lines to show */
        line-clamp: 3;
        -webkit-box-orient: vertical;
    }
`;

const Text = styled(Copy)<{ isCentered?: boolean }>`
    text-align: ${({ isCentered }) => isCentered && 'center'};

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4; /* number of lines to show */
    line-clamp: 4;
    -webkit-box-orient: vertical;
`;

const StyledActions = styled(Actions)<{ isCentered?: boolean }>`
    @media ${mq.medium} {
        display: block;
        text-align: ${({ isCentered }) => isCentered && 'center'};
    }
`;

export type HeaderSize = 'full' | 'small';
export type HeaderImage = Omit<ImageProps, 'ratios' | 'coverSpace'> & {
    zoomPoint?: [number, number];
    zoom?: number;
};
export type HeaderFocus = [
    'left' | 'center' | 'right',
    'top' | 'center' | 'bottom'
];

const Header: FC<{
    /** ID value for targeting section with anchor hashes */
    anchorId?: string;

    /** Header image height size (full=100vh, small=80vh) */
    size?: HeaderSize;

    /** Focus point of header image / video  */
    focusPoint?: HeaderFocus;

    /** Center content */
    isCentered?: boolean;

    /** Header title on image */
    title?: string;

    /** Header title HTML tag type (h2, h3, h4...) */
    titleAs?: CalloutTag;

    /** Header text on image */
    text?: string;

    /** Function to inject custom primary button */
    primaryAction?: (isInverted?: boolean) => React.ReactNode;

    /** Function to inject custom secondary button */
    secondaryAction?: (isInverted?: boolean) => React.ReactNode;

    /** Array of image settings */
    images?: HeaderImage[];

    /** CSS value of custom image overlay to help seperate the text from the background */
    customImgOverlay?: string;

    /** URL to header video. First image in images array can be used as fallback */
    videoUrl?: string;

    /** Ken burns effect zoom */
    kenBurnsZoom?: number;

    /** Global zoom point for all images with ken burns effect. x and y values in the range from 0 - 1 */
    kenBurnsZoomPoint?: [number, number];

    /** Time between each image in ken burns mode */
    kenBurnsInterval?: number;

    /** Callback called on image change */
    onImageChange?: (image?: Omit<ImageProps, 'ratios' | 'coverSpace'>) => void;

    /** Section background */
    bgMode?: 'full' | 'inverted';
    textOnImage?: boolean;
}> = ({
    anchorId,
    size = 'full',
    focusPoint = ['center', 'center'],
    isCentered,
    title,
    titleAs,
    text,
    primaryAction,
    secondaryAction,
    videoUrl,
    images,
    customImgOverlay,
    kenBurnsZoom = 1.08,
    kenBurnsZoomPoint = [0.5, 0.5],
    kenBurnsInterval = 10000,
    onImageChange,
    bgMode,
    textOnImage,
}) => {
    const { globals, colors } = useLibTheme();
    const isInverted = bgMode === 'inverted';
    const hasContent = title || text || primaryAction || secondaryAction;

    const overlay = hasContent
        ? customImgOverlay || globals.sections.imageTextGradient
        : undefined;

    const Section = size === 'full' ? HeaderSection : HeaderSectionSmall;

    return (
        <Section
            addSeperation
            anchorId={anchorId}
            bgColor={
                isInverted
                    ? colors.sectionBg.dark
                    : bgMode
                    ? colors.sectionBg.medium
                    : colors.sectionBg.light
            }
            bgMode={mapToBgMode(bgMode, true)}
        >
            <StyledPoster
                isInverted={isInverted}
                images={images}
                videoUrl={videoUrl}
                kenBurnsInterval={kenBurnsInterval}
                kenBurnsZoom={kenBurnsZoom}
                kenBurnsZoomPoint={kenBurnsZoomPoint}
                onImageChange={onImageChange}
                focus={focusPoint}
            >
                {hasContent && (
                    <React.Fragment>
                        <Overlay bgValue={overlay} textOnImage={textOnImage} />
                        <Content
                            isCentered={isCentered}
                            textOnImage={textOnImage}
                        >
                            {title && (
                                <Title
                                    isInverted
                                    size="heading-1"
                                    isCentered={isCentered}
                                    renderAs={titleAs}
                                    innerHTML={title}
                                />
                            )}
                            {text && (
                                <Text
                                    isInverted
                                    isCentered={isCentered}
                                    type="copy-b"
                                    size="big"
                                    innerHTML={text}
                                />
                            )}
                            {(primaryAction || secondaryAction) && (
                                <StyledActions
                                    isCentered={isCentered}
                                    primary={
                                        primaryAction && primaryAction(true)
                                    }
                                    secondary={
                                        secondaryAction && secondaryAction(true)
                                    }
                                />
                            )}
                        </Content>
                    </React.Fragment>
                )}
            </StyledPoster>
            {hasContent && !textOnImage && (
                <ContentMobile>
                    {title && (
                        <Title
                            size="heading-1"
                            isCentered={isCentered}
                            renderAs={titleAs}
                            innerHTML={title}
                            isInverted={isInverted}
                        />
                    )}
                    {text && (
                        <Text
                            type="copy-b"
                            size="big"
                            isCentered={isCentered}
                            innerHTML={text}
                            isInverted={isInverted}
                        />
                    )}
                    {(primaryAction || secondaryAction) && (
                        <StyledActions
                            isCentered={isCentered}
                            primary={primaryAction && primaryAction(isInverted)}
                            secondary={
                                secondaryAction && secondaryAction(isInverted)
                            }
                        />
                    )}
                </ContentMobile>
            )}
        </Section>
    );
};

export const HeaderComponent = Header;
export default withLibTheme(Header);
