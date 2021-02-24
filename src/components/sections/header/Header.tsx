import React, { FC } from 'react';
import styled from 'styled-components';

import { CalloutTag } from 'components/typography/Callout';
import { mq, spacings, withRange } from 'utils/styles';
import Grid from 'components/base/Grid';
import Wrapper from 'components/base/Wrapper';
import HeaderKenBurns, { HeaderKenBurnsImageProps } from './HeaderKenBurns';
import HeaderPoster from './HeaderPoster';
import Menu, {
    LogoProps,
    ToggleIconProps,
} from 'components/sections/header/menu/Menu';
import { NavGroup } from './menu/Flyout';
import Actions from 'components/blocks/Actions';
import Callout from 'components/typography/Callout';

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
    images?: HeaderImageProps[];
    className?: string;
}> = ({ images, className, children }) => {
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
};

const StyledPoster = styled(Poster)<{ gradient?: string; size?: number }>`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    min-height: ${({ size }) => (size ? size * 100 + 'vh' : '100vh')};

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

export interface HeaderMenuProps {
    isLarge?: boolean;
    isTopInverted?: boolean;
    isNavInverted?: boolean;
    toggleIcons?: ToggleIconProps;
    logo?: LogoProps;
    primaryCta?: (isInverted?: boolean) => React.ReactNode;
    secondaryCta?: (isInverted?: boolean) => React.ReactNode;
    activeNavItem?: string;
    navItems?: NavGroup[];
    socials?: Array<{ icon: React.ReactNode; href: string }>;
}

const Header: FC<{
    size?: 'full' | 'small';
    title?: string;
    titleAs?: CalloutTag;
    primaryCta?: (isInverted?: boolean) => React.ReactNode;
    secondaryCta?: (isInverted?: boolean) => React.ReactNode;
    menu?: HeaderMenuProps;
    images?: HeaderImageProps[];
    badge?: {
        content: React.ReactNode;
        showOnMobile?: boolean;
    };
}> = ({
    size = 'full',
    title,
    titleAs,
    primaryCta,
    secondaryCta,
    menu,
    images,
    badge,
}) => {
    const gradient =
        title || primaryCta || secondaryCta
            ? 'linear-gradient(3deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.15) 45%, rgba(0, 0, 0, 0) 60%), linear-gradient(179deg,rgba(0,0,0,.4) 0%,rgba(0,0,0,0) 40%)'
            : 'linear-gradient(179deg,rgba(0,0,0,.4) 0%,rgba(0,0,0,0) 40%)';

    return (
        <View>
            {menu && (
                <Menu
                    size={menu?.isLarge ? 'full' : 'small'}
                    isTopInverted={menu?.isTopInverted}
                    isNavInverted={menu?.isNavInverted}
                    hideOnScrollDown
                    withTopOffset
                    toggleIcons={menu?.toggleIcons}
                    logo={menu?.logo}
                    primaryAction={menu?.primaryCta}
                    secondaryAction={menu?.secondaryCta}
                    activeNavItem={menu?.activeNavItem}
                    navItems={menu?.navItems}
                    socials={menu?.socials}
                />
            )}
            <HeaderWrapper clampWidth="large">
                <StyledPoster
                    images={images}
                    gradient={gradient}
                    size={size === 'small' ? 0.8 : 1}
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
                                            isInverted
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
