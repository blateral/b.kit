import React, { FC, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

import Wrapper from 'components/base/Wrapper';
import Link, { LinkProps } from 'components/typography/Link';
import {
    getColors as color,
    getFonts as font,
    mq,
    spacings,
    withRange,
} from 'utils/styles';
import Cross from 'components/base/icons/Cross';
import { useMediaQuery } from 'utils/useMediaQuery';
import { LogoProps } from '../Navigation';

const View = styled.div<{ isOpen?: boolean }>`
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    overflow: hidden;
    pointer-events: none;

    transform: translate(${({ isOpen }) => (isOpen ? '0%' : '-100%')});

    transition: transform 0.2s cubic-bezier(0.71, 0, 0.29, 1);
    will-change: transform;
`;

const StyledWrapper = styled(Wrapper)`
    height: 100%;
`;

const Stage = styled.div<{
    isOpen?: boolean;
    isLarge?: boolean;
    isInverted?: boolean;
}>`
    height: 100%;
    width: 100%;

    background-color: ${({ theme, isInverted }) =>
        isInverted ? color(theme).dark : color(theme).light};
    pointer-events: all;

    @media ${mq.semilarge} {
        width: ${({ isLarge }) => !isLarge && '40vw'};
        max-width: ${({ isLarge }) => (isLarge ? undefined : '500px')};
    }

    &:after {
        content: ${({ isLarge }) => !isLarge && `""`};
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        width: 40vw;

        transform: translateX(-100%);

        background-color: ${({ theme, isInverted }) =>
            isInverted ? color(theme).dark : color(theme).light};
    }
`;

const Header = styled.div`
    display: flex;
    max-width: ${spacings.wrapper}px;

    padding-top: ${spacings.spacer}px;
    padding-bottom: ${spacings.nudge * 2}px;

    @media ${mq.medium} {
        padding: ${spacings.nudge * 7}px 0 ${spacings.nudge * 3}px 0;
    }
`;

const Content = styled.div<{ isLarge?: boolean }>`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    max-width: ${spacings.wrapper}px;
    margin: 0 auto;
    padding-left: ${spacings.spacer}px;
    padding-bottom: ${spacings.nudge * 3}px;

    @media ${mq.semilarge} {
        padding-left: ${(1 / 28) * 100}%;
        padding-left: max(${spacings.spacer}px, ${(1 / 28) * 100}vw);
        padding-right: ${({ isLarge }) => isLarge && spacings.spacer + 'px'};
    }

    @media ${mq.xlarge} {
        padding-left: ${(1 / 28) * spacings.wrapper}px;
    }
`;

const HeaderCol = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    position: relative;
    color: ${({ theme }) => color(theme).light};

    transition: padding-top 0.2s ease-in-out;
`;

const LeftCol = styled(HeaderCol)`
    flex: 1;
    justify-content: flex-start;
    align-self: flex-start;
    text-align: left;

    ${withRange([spacings.nudge, spacings.nudge * 1.5], 'padding-top')}
`;

const CenterCol = styled(HeaderCol)`
    padding: 0 ${spacings.nudge * 2}px;
    text-align: center;
`;

const RightCol = styled(HeaderCol)`
    flex: 1;
    justify-content: flex-end;
    text-align: right;

    ${withRange([spacings.nudge, spacings.nudge * 1.5], 'padding-top')}

    & > * {
        min-width: auto;
    }

    & > * + * {
        margin-left: ${spacings.nudge * 3}px;
    }

    @media ${mq.semilarge} {
        & > * + * {
            margin-left: ${spacings.spacer}px;
        }
    }
`;

const ToggleContainer = styled.div<{ iconColor?: string }>`
    cursor: pointer;
    padding: ${spacings.nudge * 2}px;
    margin: -${spacings.nudge * 2}px;

    color: ${({ iconColor }) => iconColor && iconColor};
`;

const StyledMenuClose = styled(Cross)`
    margin-top: ${spacings.nudge}px;
`;

const SearchContainer = styled.div<{ isLarge?: boolean }>`
    display: flex;
    justify-content: center;
    width: 100%;
    padding-right: ${spacings.spacer}px;
    padding-left: ${spacings.spacer}px;

    @media ${mq.semilarge} {
        & > * {
            max-width: ${({ isLarge }) => isLarge && '355px'};
        }
    }
`;

const LogoLink = styled(Link)`
    display: flex;
    justify-content: center;
    position: relative;

    color: ${({ theme }) => color(theme).light};
    transition: height 0.2s ease-in-out, width 0.2s ease-in-out;
    will-change: height, width;

    & > * {
        max-height: 100%;
        height: 100%;
    }
`;

const ScrollArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    overflow-y: auto;

    ${withRange([spacings.spacer, spacings.spacer * 2], 'padding-top')};
    margin-left: -${spacings.spacer}px;
    padding-left: ${spacings.spacer}px;

    & > * {
        flex: 1 1 auto;
        flex-shrink: 0;
    }
`;

type FlyoutMq = 'semilarge' | 'large';

const Flyout: FC<{
    isOpen?: boolean;
    isLarge?: boolean;
    isInverted?: boolean;
    toggleIcon?: (isInverted?: boolean) => React.ReactNode;
    logo?: LogoProps;
    primaryAction?: (props: {
        isInverted?: boolean;
        size?: 'desktop' | 'mobile';
        name?: string;
    }) => React.ReactNode;
    secondaryAction?: (props: {
        isInverted?: boolean;
        size?: 'desktop' | 'mobile';
        name?: string;
    }) => React.ReactNode;
    search?: (isInverted?: boolean) => React.ReactNode;
    onCloseClick?: () => void;
    className?: string;
}> = ({
    isOpen = false,
    isLarge = false,
    isInverted = false,
    toggleIcon,
    logo,
    primaryAction,
    secondaryAction,
    search,
    onCloseClick,
    className,
    children,
}) => {
    const theme = useContext(ThemeContext);
    const mqs: FlyoutMq[] = ['semilarge', 'large'];
    const currentMq = useMediaQuery(mqs) as FlyoutMq | undefined;

    return (
        <View isOpen={isOpen} className={className}>
            <StyledWrapper clampWidth={isLarge ? 'large' : 'normal'}>
                <Stage
                    isOpen={isOpen}
                    isLarge={isLarge}
                    isInverted={isInverted}
                >
                    <Content isLarge={isLarge}>
                        <Header>
                            <LeftCol>
                                <ToggleContainer
                                    onClick={onCloseClick}
                                    iconColor={
                                        isInverted
                                            ? color(theme).light
                                            : color(theme).dark
                                    }
                                >
                                    {toggleIcon ? (
                                        toggleIcon(isInverted)
                                    ) : (
                                        <StyledMenuClose
                                            iconColor={
                                                isInverted
                                                    ? color(theme).light
                                                    : color(theme).dark
                                            }
                                        />
                                    )}
                                </ToggleContainer>
                                {search && (
                                    <SearchContainer isLarge={isLarge}>
                                        {search(isInverted)}
                                    </SearchContainer>
                                )}
                            </LeftCol>
                            {isLarge &&
                                (currentMq === 'semilarge' ||
                                    currentMq === 'large') && (
                                    <>
                                        <CenterCol>
                                            {logo && (
                                                <LogoLink href={logo.link}>
                                                    {logo.icon &&
                                                        logo.icon({
                                                            isInverted: isInverted,
                                                            name: 'menu_logo',
                                                            size:
                                                                currentMq !==
                                                                'large'
                                                                    ? 'small'
                                                                    : 'full',
                                                        })}
                                                </LogoLink>
                                            )}
                                        </CenterCol>
                                        <RightCol>
                                            {secondaryAction &&
                                                secondaryAction({
                                                    isInverted,
                                                    name: 'menu_secondaryCta',
                                                    size:
                                                        currentMq === 'large'
                                                            ? 'desktop'
                                                            : 'mobile',
                                                })}
                                            {primaryAction &&
                                                primaryAction({
                                                    isInverted,
                                                    name: 'menu_primaryCta',
                                                    size:
                                                        currentMq === 'large'
                                                            ? 'desktop'
                                                            : 'mobile',
                                                })}
                                        </RightCol>
                                    </>
                                )}
                        </Header>
                        <ScrollArea>{children}</ScrollArea>
                    </Content>
                </Stage>
            </StyledWrapper>
        </View>
    );
};

export interface NavGroup {
    id: string;
    name?: string;
    isSmall?: boolean;
    items?: NavItem[];
}

export interface NavItem {
    id?: string;
    label?: string;
    link?: LinkProps;
    onClick?: (id?: string, fullId?: string) => void;
}

const NavListView = styled.ul<{ isLarge?: boolean }>`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    list-style: none;
    padding: 0;
    margin: 0;

    & > * {
        ${withRange([spacings.nudge * 3, spacings.spacer], 'margin-top')};
    }

    @media ${mq.medium} {
        flex-direction: ${({ isLarge }) => (isLarge ? 'row' : 'column')};

        & > * {
            flex: ${({ isLarge }) => (isLarge ? '1 0 260px' : '1')};
        }
    }
`;

const Nav = styled.nav<{ isInverted?: boolean }>`
    display: block;
    width: calc(100% + ${spacings.spacer}px);
    margin-left: -${spacings.spacer}px;
    padding-left: ${spacings.spacer}px;

    color: ${({ theme, isInverted }) =>
        isInverted ? color(theme).light : color(theme).dark};
`;

const Group = styled.li`
    flex: 1 1 auto;
    font-family: ${({ theme }) => font(theme).copy.medium.family};
    ${({ theme }) => withRange(font(theme).copy.medium.size, 'font-size')}
    font-weight: 300;
    line-height: ${({ theme }) => font(theme).copy.medium.lineHeight};

    ${withRange([spacings.spacer, spacings.spacer * 2], 'margin-right')};

    hyphens: auto;
    overflow-wrap: break-word;

    &:not(:last-child) {
        ${withRange([spacings.nudge * 3, spacings.spacer], 'margin-bottom')};
    }
`;

const GroupLabel = styled.label`
    display: block;
    height: 30px;
    padding-bottom: ${spacings.nudge * 2}px;
`;

const GroupLabelSpacer = styled.label`
    display: none;
    height: 30px;

    @media ${mq.medium} {
        display: block;
    }
`;

const ItemContainer = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    color: inherit;
`;

const NavItem = styled.li<{ isSmall?: boolean }>`
    position: relative;
    margin: 0;
    padding-bottom: ${spacings.nudge}px;

    font-family: ${({ theme }) => font(theme)['heading-3'].family};
    ${({ theme, isSmall }) =>
        withRange(
            isSmall
                ? font(theme)['heading-4'].size
                : font(theme)['heading-3'].size,
            'font-size'
        )}
    font-weight: 700;
    line-height: ${({ theme, isSmall }) =>
        isSmall
            ? font(theme)['heading-4'].lineHeight
            : font(theme)['heading-3'].lineHeight};

    color: inherit;
    hyphens: auto;
    overflow-wrap: break-word;
    cursor: pointer;
    user-select: none;

    & + & {
        padding-top: ${spacings.nudge}px;
    }

    & > li {
        list-style: none;
        margin: 0;
        padding: 0;
    }
`;

const ItemLink = styled(Link)`
    display: inline-block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`;

const ItemLabel = styled.label<{ isActive?: boolean; isInverted?: boolean }>`
    display: inline-block;
    position: relative;
    border-bottom: solid 2px transparent;
    pointer-events: none;

    transition: border 0.2s ease-in-out;

    ${ItemLink}:hover + & {
        border-bottom: solid 2px ${({ theme }) => color(theme).primary.medium};
    }

    &:before {
        content: ${({ isActive }) => (isActive ? `""` : undefined)};
        position: absolute;
        left: -13px;
        top: 50%;
        height: 6px;
        width: 6px;

        background-color: ${({ theme, isInverted }) =>
            isInverted ? color(theme).light : color(theme).dark};
        border-radius: 4px;

        transform: translateY(-50%);
    }
`;

const NavList: FC<{
    isInverted?: boolean;
    activeNavItem?: string;
    navGroups?: NavGroup[];
    isLarge?: boolean;
    className?: string;
}> = ({
    isInverted = false,
    activeNavItem,
    navGroups,
    isLarge = false,
    className,
}) => {
    const [activeGroup, activeItem] = activeNavItem
        ? activeNavItem?.split('.')
        : [];

    return (
        <Nav isInverted={isInverted}>
            <NavListView isLarge={isLarge} className={className}>
                {navGroups &&
                    navGroups.map((group, i) => (
                        <Group key={i}>
                            {group.name ? (
                                <GroupLabel>{group.name}</GroupLabel>
                            ) : (
                                isLarge && <GroupLabelSpacer />
                            )}
                            <ItemContainer>
                                {group.items &&
                                    group.items
                                        .filter((item) => {
                                            return item.label && item.link;
                                        })
                                        .map((item, itemIndex) => (
                                            <NavItem
                                                key={itemIndex}
                                                isSmall={group.isSmall}
                                                onClick={() =>
                                                    item.onClick &&
                                                    item.onClick(
                                                        item.id,
                                                        group.id + '.' + item.id
                                                    )
                                                }
                                            >
                                                <ItemLink {...item.link} />
                                                <ItemLabel
                                                    isActive={
                                                        activeGroup ===
                                                            group.id &&
                                                        activeItem === item.id
                                                    }
                                                    isInverted={isInverted}
                                                >
                                                    {item.label}
                                                </ItemLabel>
                                            </NavItem>
                                        ))}
                            </ItemContainer>
                        </Group>
                    ))}
            </NavListView>
        </Nav>
    );
};

export default {
    View: Flyout,
    NavList: NavList,
};
