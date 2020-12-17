import React, { FC, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

import { HeadlineTag } from 'components/typography/Heading';
import { getColors as color, mq, spacings, withRange } from 'utils/styles';
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

const View = styled.header<{ size?: number }>`
    position: relative;
    height: ${({ size }) => (size ? size * 100 + 'vh' : '100vh')};
`;

const HeaderWrapper = styled(Wrapper)`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

const PosterContent = styled.div`
    max-width: 270px;
    width: 100%;
    margin: auto;
    position: relative;
    z-index: 3;
    text-align: center;

    @media ${mq.medium} {
        max-width: none;
        margin-left: 0;
        text-align: left;
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

const StyledPoster = styled(Poster)<{ gradient?: string }>`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;

    ${withRange([spacings.spacer * 2, spacings.spacer * 4.5], 'padding-top')};
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
    ${withRange([spacings.spacer, spacings.spacer * 2], 'margin-top')};

    @media ${mq.semilarge} {
        max-width: 600px;
    }
`;

const Header: FC<{
    size?: 'full' | 'small';
    title?: string;
    titleAs?: HeadlineTag;
    primaryCta?: React.ReactNode;
    secondaryCta?: React.ReactNode;
    menu?: {
        isLarge?: boolean;
        isTopInverted?: boolean;
        isNavInverted?: boolean;
        toggleIcons?: ToggleIconProps;
        logo?: LogoProps;
        primaryCta?: (
            isInverted?: boolean,
            href?: string,
            label?: string
        ) => React.ReactNode;
        secondaryCta?: (isInverted?: boolean) => React.ReactNode;
        activeNavItem?: string;
        navItems?: NavGroup[];
        socials?: Array<{ icon: React.ReactNode; href: string }>;
    };
    images?: HeaderImageProps[];
}> = ({
    size = 'full',
    title,
    titleAs,
    primaryCta,
    secondaryCta,
    menu,
    images,
}) => {
    const theme = useContext(ThemeContext);
    const gradient =
        title || primaryCta || secondaryCta
            ? 'linear-gradient(3deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.15) 45%, rgba(0, 0, 0, 0) 60%), linear-gradient(179deg,rgba(0,0,0,.4) 0%,rgba(0,0,0,0) 40%)'
            : 'linear-gradient(179deg,rgba(0,0,0,.4) 0%,rgba(0,0,0,0) 40%)';

    return (
        <View size={size === 'small' ? 0.7 : 1}>
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
                <StyledPoster images={images} gradient={gradient}>
                    <PosterContent>
                        <Wrapper addWhitespace>
                            <Grid.Row gutter={0}>
                                <Grid.Col
                                    medium={{ span: 20 / 28 }}
                                    large={{ span: 18 / 28 }}
                                >
                                    {title && (
                                        <Callout
                                            size="medium"
                                            as={titleAs}
                                            hasShadow
                                            textColor={color(theme).white}
                                        >
                                            {title}
                                        </Callout>
                                    )}
                                    {(primaryCta || secondaryCta) && (
                                        <StyledActions
                                            primary={primaryCta}
                                            secondary={secondaryCta}
                                        />
                                    )}
                                </Grid.Col>
                            </Grid.Row>
                        </Wrapper>
                    </PosterContent>
                </StyledPoster>
            </HeaderWrapper>
        </View>
    );
};

export default Header;
