import React, { FC, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

import { CalloutTag } from 'components/typography/Callout';
import {
    mq,
    spacings,
    withRange,
    getGlobalSettings as global,
} from 'utils/styles';
import Grid from 'components/base/Grid';
import Wrapper from 'components/base/Wrapper';
import HeaderKenBurns, { HeaderKenBurnsImageProps } from './HeaderKenBurns';
import HeaderPoster from './HeaderPoster';
import Actions from 'components/blocks/Actions';
import Callout from 'components/typography/Callout';
import HeaderVideo from './HeaderVideo';

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
    className?: string;
}> = ({ videoUrl, images, className, children }) => {
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

const StyledPoster = styled(Poster)<{ gradient?: string; size?: number }>`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    height: ${({ size }) => (size ? size * 100 + 'vh' : '100vh')};
    max-height: 1100px;

    ${withRange([spacings.spacer * 7, spacings.spacer * 8], 'padding-top')};
    ${withRange(
        [spacings.spacer * 2, spacings.spacer * 4.5],
        'padding-bottom'
    )};

    &:after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: ${({ gradient }) => gradient || undefined};
        pointer-events: none;
        z-index: 2;
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

const Header: FC<{
    size?: 'full' | 'small';
    /** Optional explicit height scale value: 100vh * [0...1] */
    sizeScale?: number;
    title?: string;
    titleAs?: CalloutTag;
    primaryCta?: (isInverted?: boolean) => React.ReactNode;
    secondaryCta?: (isInverted?: boolean) => React.ReactNode;
    videoUrl?: string;
    images?: HeaderImageProps[];
    withTopGradient?: boolean;
    customTopGradient?: string;
    customBottomGradient?: string;
    badge?: {
        content: React.ReactNode;
        showOnMobile?: boolean;
    };
}> = ({
    size = 'full',
    sizeScale,
    title,
    titleAs,
    primaryCta,
    secondaryCta,
    videoUrl,
    images,
    withTopGradient = true,
    customTopGradient,
    customBottomGradient,
    badge,
}) => {
    const theme = useContext(ThemeContext);
    const topGradient = withTopGradient
        ? customTopGradient ||
          'linear-gradient(179deg,rgba(0,0,0,.4) 0%,rgba(0,0,0,0) 40%)'
        : undefined;

    const bottomGradient =
        title || primaryCta || secondaryCta
            ? customBottomGradient || global(theme).sections.imageTextGradient
            : undefined;

    const gradient = `${bottomGradient ? bottomGradient + ', ' : ''}${
        topGradient || ''
    }`;
    return (
        <View>
            <HeaderWrapper clampWidth="large">
                <StyledPoster
                    videoUrl={videoUrl}
                    images={images}
                    gradient={withTopGradient ? gradient : undefined}
                    size={
                        sizeScale === undefined
                            ? size === 'small'
                                ? 0.8
                                : 1
                            : sizeScale
                    }
                >
                    <Wrapper>
                        <PosterContent>
                            <Grid.Row gutter={0}>
                                <Grid.Col
                                    medium={{ span: 16 / 28 }}
                                    large={{ span: 15 / 28 }}
                                >
                                    {title && (
                                        <Callout
                                            size="medium"
                                            as={titleAs}
                                            hasShadow
                                            textColor="#fff"
                                        >
                                            {title}
                                        </Callout>
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
            <PosterContentMobile>
                <Wrapper addWhitespace>
                    {title && (
                        <Callout size="small" as={titleAs} isInverted={false}>
                            {title}
                        </Callout>
                    )}
                    {(primaryCta || secondaryCta) && (
                        <StyledActions
                            primary={primaryCta && primaryCta(false)}
                            secondary={secondaryCta && secondaryCta(false)}
                        />
                    )}
                </Wrapper>
            </PosterContentMobile>
        </View>
    );
};

export default Header;
