import React, { FC } from 'react';
import styled from 'styled-components';

import Wrapper from 'components/base/Wrapper';
import Link, { LinkProps } from 'components/typography/Link';
import {
    getColors as color,
    getFonts as font,
    mq,
    spacings,
    withRange,
} from 'utils/styles';

const View = styled.div<{ isOpen?: boolean }>`
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    overflow: hidden;
    pointer-events: none;

    transform: translate(${({ isOpen }) => (isOpen ? 0 : -100)}%);
    transition: transform 0.2s ease-in-out;
    will-change: transform;
`;

const StyledWrapper = styled(Wrapper)`
    height: 100%;
`;

const Stage = styled.div<{
    isOpen?: boolean;
    isLarge?: boolean;
    topSpace?: number;
    isInverted?: boolean;
}>`
    height: 100%;
    width: 100%;

    background-color: ${({ theme, isInverted }) =>
        isInverted ? color(theme).dark : color(theme).light};

    padding: ${spacings.spacer}px;
    padding-top: ${({ topSpace }) =>
        topSpace ? topSpace * 0.85 : spacings.spacer}px;

    pointer-events: all;

    @media ${mq.medium} {
        margin-top: ${({ isLarge }) => isLarge && 0};
    }

    @media ${mq.semilarge} {
        width: ${({ isLarge }) => !isLarge && '40vw'};
        max-width: ${({ isLarge }) => (isLarge ? undefined : '500px')};

        padding-top: ${({ topSpace }) =>
            topSpace ? topSpace : spacings.spacer}px;
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

const Content = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    max-width: ${spacings.wrapper}px;
    margin: 0 auto;
`;

const Flyout: FC<{
    isOpen?: boolean;
    isLarge?: boolean;
    isInverted?: boolean;
    contentTopSpace?: number;
    className?: string;
}> = ({
    isOpen = false,
    contentTopSpace,
    isLarge = false,
    isInverted = false,
    className,
    children,
}) => {
    return (
        <View isOpen={isOpen} className={className}>
            <StyledWrapper clampWidth={isLarge ? 'large' : 'normal'}>
                <Stage
                    isOpen={isOpen}
                    isLarge={isLarge}
                    isInverted={isInverted}
                    topSpace={contentTopSpace}
                >
                    <Content>{children}</Content>
                </Stage>
            </StyledWrapper>
        </View>
    );
};

export interface NavGroup {
    id: string;
    name?: string;
    isSmall?: boolean;
    items?: {
        id?: string;
        label?: string;
        link?: LinkProps;
        onClick?: (id?: string, fullId?: string) => void;
    }[];
}

const NavListView = styled.ul`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    list-style: none;
    padding: 0;
    margin: 0;
    ${withRange([spacings.nudge * 3, spacings.spacer], 'padding-top')};

    & > * {
        ${withRange([spacings.nudge * 3, spacings.spacer], 'margin-top')};
    }

    @media ${mq.medium} {
        flex-direction: row;

        & > * {
            flex: 1 0 260px;
        }
    }
`;

const Nav = styled.div<{ isInverted?: boolean }>`
    width: calc(100% + ${spacings.spacer}px);
    height: 100%;
    overflow-y: auto;
    margin-left: -${spacings.spacer}px;
    padding-left: ${spacings.spacer}px;

    color: ${({ theme, isInverted }) =>
        isInverted ? color(theme).light : color(theme).dark};
`;

const Group = styled.li`
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
            <NavListView className={className}>
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
