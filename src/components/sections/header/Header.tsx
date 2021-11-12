import React, { FC, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

import { CalloutTag } from 'components/typography/Callout';
import {
    mq,
    spacings,
    withRange,
    getGlobalSettings as global,
} from 'utils/styles';
import { withLibTheme } from 'utils/LibThemeProvider';
import Grid from 'components/base/Grid';
import Wrapper from 'components/base/Wrapper';
import HeaderKenBurns, { HeaderKenBurnsImageProps } from './HeaderKenBurns';
import HeaderPoster from './HeaderPoster';
import Actions from 'components/blocks/Actions';
import Callout from 'components/typography/Callout';
import HeaderVideo from './HeaderVideo';
import Copy from 'components/typography/Copy';
import Heading from 'components/typography/Heading';

interface HeaderImageProps {
    small: string;
    medium?: string;
    semilarge?: string;
    large?: string;
    xlarge?: string;
    webp?: {
        small: string;
        medium?: string;
        semilarge?: string;
        large?: string;
        xlarge?: string;
    };
}

const View = styled.header`
    position: relative;
`;

const HeaderWrapper = styled(Wrapper)`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

const PosterContent = styled.div`
    position: relative;
    display: none;
    width: 100%;
    margin: auto;
    z-index: 3;
    text-align: center;
    padding: 0 ${spacings.spacer}px;

    @media ${mq.semilarge} {
        display: block;
        max-width: none;
        margin-left: 0;
        text-align: left;
        padding-left: ${(1 / 28) * 100}%;
    }

    @media ${mq.xlarge} {
        padding-left: ${(1 / 28) * spacings.wrapper}px;
    }
`;

const PosterContentMobile = styled(PosterContent)`
    display: block;
    padding-top: ${spacings.spacer * 2}px;
    ${withRange([spacings.spacer * 2, spacings.spacer * 4], 'padding-bottom')}

    @media ${mq.semilarge} {
        display: none;
    }
`;

const Badge = styled.div<{ showOnMobile?: boolean }>`
    display: ${({ showOnMobile }) => (showOnMobile ? 'block' : 'none')};
    position: relative;
    height: 234px;
    width: 234px;
    margin-left: auto;
    margin-right: ${spacings.spacer}px;
    margin-top: -173px;
    z-index: 3;

    @media ${mq.semilarge} {
        display: block;
        margin-right: ${spacings.spacer * 4}px;
    }

    @media ${mq.xlarge} {
        width: 392px;
        height: 392px;
        margin-left: 0;
        margin-top: -300px;

        right: -50%;
        transform: translate(
            ${spacings.wrapper / 2 - (392 + spacings.spacer * 3)}px
        );
    }
`;

const Poster: FC<{
    videoUrl?: string;
    images?: HeaderImageProps[];
    kenBurnsZoom?: number;
    kenBurnsZoomPoint?: [number, number];
    kenBurnsInterval?: number;
    className?: string;
}> = ({
    videoUrl,
    images,
    kenBurnsZoom,
    kenBurnsZoomPoint,
    kenBurnsInterval,
    className,
    children,
}) => {
    if (!videoUrl) {
        if (!images || images.length === 0) return <div>{children}</div>;
        else if (images.length === 1)
            return (
                <HeaderPoster bgImage={images[0]} className={className}>
                    {children}
                </HeaderPoster>
            );
        else
            return (
                <HeaderKenBurns
                    images={images.map((img) => {
                        return {
                            ...img,
                        } as HeaderKenBurnsImageProps;
                    })}
                    zoom={kenBurnsZoom}
                    zoomPoint={kenBurnsZoomPoint}
                    interval={kenBurnsInterval}
                    className={className}
                >
                    {children}
                </HeaderKenBurns>
            );
    } else {
        return (
            <HeaderVideo
                videoUrl={videoUrl}
                placeholderImg={images?.[0]}
                className={className}
            >
                {children}
            </HeaderVideo>
        );
    }
};

const StyledPoster = styled(Poster)<{
    gradientBottom?: string;
    size?: string;
}>`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    height: ${({ size }) => size && size};
    max-height: 1100px;

    ${withRange([spacings.spacer * 7, spacings.spacer * 8], 'padding-top')};
    ${withRange(
        [spacings.spacer * 2, spacings.spacer * 4.5],
        'padding-bottom'
    )};

    @media ${mq.semilarge} {
        &:after {
            content: '';
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-image: ${({ gradientBottom }) =>
                gradientBottom || undefined};
            pointer-events: none;
            z-index: 2;

            *[data-type='overflow'] ~ ${View} & {
                background-image: ${({ gradientBottom }) =>
                    gradientBottom || undefined};
            }
        }
    }

    /* required to align items at flex-end in ie11 */
    &:before {
        content: '';
        min-height: 1px; // before: 200px
        display: block;
        flex: 1 0 0px;
    }
`;

const StyledActions = styled(Actions)`
    ${withRange([spacings.spacer, spacings.spacer * 2], 'padding-top')};

    @media ${mq.semilarge} {
        max-width: 600px;
    }
`;

const IntroBlock = styled.div<{ noTitle?: boolean }>`
    margin-top: ${({ noTitle }) => noTitle && spacings.spacer}px;

    & > * + * {
        margin-top: ${spacings.spacer}px;
    }
`;

const Header: FC<{
    size?: 'full' | 'small';
    /** Optional explicit CSS height value */
    height?: string;
    title?: string;
    titleAs?: CalloutTag;

    intro?: {
        text?: string;
        title?: string;
    };

    primaryCta?: (isInverted?: boolean) => React.ReactNode;
    secondaryCta?: (isInverted?: boolean) => React.ReactNode;
    videoUrl?: string;
    images?: HeaderImageProps[];
    customBottomGradient?: string;
    badge?: {
        content: React.ReactNode;
        showOnMobile?: boolean;
    };
    kenBurnsZoom?: number;
    /** Zoom point of ken burns effect. x and y values in the range from 0 - 1 */
    kenBurnsZoomPoint?: [number, number];
    kenBurnsInterval?: number;
}> = ({
    size = 'full',
    height,
    title,
    titleAs,
    intro,
    primaryCta,
    secondaryCta,
    videoUrl,
    images,
    customBottomGradient,
    badge,
    kenBurnsZoom = 1.08,
    kenBurnsZoomPoint = [0.5, 0.5],
    kenBurnsInterval = 10000,
}) => {
    const theme = useContext(ThemeContext);

    const bottomGradient =
        title || primaryCta || secondaryCta
            ? customBottomGradient || global(theme).sections.imageTextGradient
            : undefined;

    return (
        <View>
            <HeaderWrapper clampWidth="large">
                <StyledPoster
                    videoUrl={videoUrl}
                    images={images}
                    gradientBottom={bottomGradient}
                    size={
                        !height ? (size === 'small' ? '80vh' : '100vh') : height
                    }
                    kenBurnsZoom={kenBurnsZoom}
                    kenBurnsZoomPoint={kenBurnsZoomPoint}
                    kenBurnsInterval={kenBurnsInterval}
                >
                    <Wrapper>
                        <PosterContent>
                            <Grid.Row gutter={0}>
                                <Grid.Col
                                    span={26 / 28}
                                    large={{ span: 20 / 28 }}
                                    xlarge={{ span: 15 / 28 }}
                                >
                                    {!intro?.title && title && (
                                        <Callout
                                            hyphens
                                            size="medium"
                                            renderAs={titleAs}
                                            hasShadow
                                            textColor="#fff"
                                            innerHTML={title}
                                        />
                                    )}
                                    {/** #TODO: Title und Intro Logik zusammen mit Markus abklären (siehe auch b.kit-prismic slice)*/}
                                    {intro && intro.title && (
                                        <IntroBlock
                                            noTitle={!intro.title && !!title}
                                        >
                                            {intro.title && (
                                                <Heading
                                                    renderAs="h1"
                                                    size="heading-1"
                                                    hasShadow
                                                    textColor="#fff"
                                                    hyphens
                                                >
                                                    {intro.title}
                                                </Heading>
                                            )}
                                            {intro.text && (
                                                <Copy textColor="#fff">
                                                    {intro.text}
                                                </Copy>
                                            )}
                                        </IntroBlock>
                                    )}
                                    {(primaryCta || secondaryCta) && (
                                        <StyledActions
                                            primary={
                                                primaryCta && primaryCta(true)
                                            }
                                            secondary={
                                                secondaryCta &&
                                                secondaryCta(true)
                                            }
                                        />
                                    )}
                                </Grid.Col>
                            </Grid.Row>
                        </PosterContent>
                    </Wrapper>
                </StyledPoster>
                {badge && badge.content && (
                    <Badge showOnMobile={badge.showOnMobile}>
                        {badge.content}
                    </Badge>
                )}
            </HeaderWrapper>
            {(title || primaryCta || secondaryCta) && (
                <PosterContentMobile>
                    <Wrapper addWhitespace>
                        {title && (
                            <Heading
                                hyphens
                                size="heading-2"
                                renderAs={titleAs}
                                isInverted={false}
                                innerHTML={title}
                            />
                        )}
                        {(primaryCta || secondaryCta) && (
                            <StyledActions
                                primary={primaryCta && primaryCta(false)}
                                secondary={secondaryCta && secondaryCta(false)}
                            />
                        )}
                    </Wrapper>
                </PosterContentMobile>
            )}
        </View>
    );
};

export const HeaderComponent = Header;
export default withLibTheme(Header);
