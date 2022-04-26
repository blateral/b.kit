import AngleRight from 'components/base/icons/AngleRight';
import { copyStyle } from 'components/typography/Copy';
import Link, { LinkProps } from 'components/typography/Link';
import React, {
    FC,
    useState,
    useMemo,
    useRef,
    useEffect,
    forwardRef,
} from 'react';
import styled, { DefaultTheme } from 'styled-components';
import { clampValue } from 'utils/clamp';
import { useLibTheme } from 'utils/LibThemeProvider';
import { getCurrentNavItem } from 'utils/navigation';
import {
    mq,
    spacings,
    getColors as color,
    getFonts as font,
    getGlobals as global,
} from 'utils/styles';
import { NavBarSize } from '../../NavBar';
import MenuHeader from '../../partials/MenuHeader';
import { MenuBaseProps, NavItem } from '../Menu';

const Backdrop = styled.div<{ isOpen?: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
    pointer-events: ${({ isOpen }) => (isOpen ? 'all' : 'none')};
    z-index: 101;

    transition: opacity 0.3s ease-in-out;

    @supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
        backdrop-filter: grayscale(1);
    }
`;

const Stage = styled.div<{ isOpen?: boolean; clampWidth?: 'content' | 'full' }>`
    position: fixed;
    top: 0;
    left: ${({ isOpen }) => (isOpen ? '50%' : '0px')};
    height: 100vh;
    width: 100vw;
    max-width: ${({ clampWidth }) =>
        clampWidth === 'content' ? spacings.wrapper : spacings.wrapperLarge}px;
    pointer-events: none;

    z-index: 102;

    transform: translate(${({ isOpen }) => (isOpen ? '-50%' : '-100%')}, 0px);

    transition: transform 0.4s ease-in-out, left 0.4s ease-in-out;
    will-change: transform;
`;

const Flyout = styled.div<{ isOpen?: boolean }>`
    display: flex;
    flex-direction: column;
    visibility: visible;

    position: relative;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => color(theme).elementBg.light};

    pointer-events: ${({ isOpen }) => (isOpen ? 'all' : 'none')};

    /** Animation to disable keyboard tabbing if flyout is closed */
    animation: ${({ isOpen }) => !isOpen && 'hideAnim 0s ease-in 2s forwards'};

    @media ${mq.medium} {
        width: 384px;
    }

    @media ${mq.large} {
        width: 460px;
    }

    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 2px;
        height: 100%;
        width: 40vw;
        background-color: ${({ theme }) => color(theme).elementBg.light};
        z-index: -1;

        transform: translateX(-100%);
    }

    @keyframes hideAnim {
        to {
            visibility: hidden;
        }
    }
`;

export const getMenuHeaderHeights = (
    theme: DefaultTheme,
    size?: NavBarSize
): [number, number] => {
    const heights =
        size === 'large'
            ? global(theme).navigation.menu.headerHeight.large
            : global(theme).navigation.menu.headerHeight.small;

    // if second value is not defined use first array index value for both
    return [
        clampValue(heights[0], 0),
        clampValue(heights?.[1] === undefined ? heights[0] : heights[1], 0),
    ];
};

export const hasMenuHeader = (theme: DefaultTheme) => {
    const largeHeights = getMenuHeaderHeights(theme, 'large');
    const smallHeights = getMenuHeaderHeights(theme, 'small');

    return (
        largeHeights[0] > 0 ||
        largeHeights[1] > 0 ||
        smallHeights[0] > 0 ||
        smallHeights[1] > 0
    );
};

const Header = styled.div<{ navBarSize?: NavBarSize }>`
    flex: 0 0
        ${({ theme, navBarSize }) =>
            getMenuHeaderHeights(theme, navBarSize)[0]}px;
    height: ${({ theme, navBarSize }) =>
        getMenuHeaderHeights(theme, navBarSize)[0]}px;

    @media ${mq.semilarge} {
        height: ${({ theme, navBarSize }) =>
            getMenuHeaderHeights(theme, navBarSize)[1]}px;
    }
`;

const ScrollContainer = styled.div`
    display: block;
    max-height: 100%;
    min-height: 0;
`;

const ScrollArea = styled.div`
    display: block;
    width: 100vw;
    max-height: 100%;
    overflow: auto;
    -ms-overflow-style: none; /* for Internet Explorer, Edge */
    scrollbar-width: none; /* for Firefox */
    overflow-y: scroll;

    &::-webkit-scrollbar {
        display: none; /* for Chrome, Safari, and Opera */
    }

    & > *:last-child {
        margin-bottom: ${spacings.nudge * 3}px;
    }

    @media ${mq.medium} {
        max-width: 100%;
    }
`;

//#region NAVIGATION
//#region NAVIGATION.Containers
const Navigation: FC = ({ children }) => {
    return <nav aria-label="menu">{children}</nav>;
};

const NavList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    margin: ${spacings.nudge * 2}px 0;
`;

// #endregion
// #region NAVIGATION.NavItem
const NavItemView = styled.li<{ isActive?: boolean }>`
    flex: 0 0 80px;

    height: 100%;
    background-color: ${({ theme, isActive }) =>
        isActive
            ? color(theme).elementBg.medium
            : color(theme).elementBg.light};

    transition: background-color 0.2s ease-in-out;

    li + &:not([data-featured='true']) {
        border-top: solid 2px ${({ theme }) => color(theme).elementBg.medium};
    }

    li[data-featured='true'] + &:not([data-featured='true']) {
        margin-top: ${spacings.spacer}px;
    }

    &:not([data-featured='true']):first-child {
        border-top: solid 2px ${({ theme }) => color(theme).elementBg.medium};
    }

    &:last-child {
        border-bottom: solid 2px ${({ theme }) => color(theme).elementBg.medium};
    }

    @media ${mq.semilarge} {
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
    }

    @media (hover: hover) and (pointer: fine) {
        &:hover {
            background-color: ${({ theme }) => color(theme).elementBg.medium};
        }
    }
`;

const NavItemContent = styled.span<{ isCurrent?: boolean }>`
    display: flex;
    align-items: center;
    position: relative;
    min-height: 80px;

    padding: 0 ${spacings.nudge * 2}px;

    ${copyStyle('copy-b', 'medium')}
    color: ${({ theme }) => font(theme)['copy-b'].medium.color};
    text-decoration: ${({ isCurrent }) => (isCurrent ? 'underline' : 'none')};
`;

const NavItemIcon = styled.span`
    display: block;
    width: 48px;
    max-width: 48px;

    * {
        width: 100%;
        max-width: 48px;
    }
`;

const NavItemLabel = styled.span`
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    &:not(:first-child) {
        margin-left: ${spacings.nudge * 2}px;
    }
`;

const NavItemCollapse = styled.span`
    display: block;
    margin-left: auto;
    padding-left: ${spacings.nudge * 3}px;
`;

const NavItemCollapseIcon = styled(AngleRight)<{ isCollapsed?: boolean }>`
    transform: ${({ isCollapsed }) => !isCollapsed && 'rotate(90deg)'};

    transition: transform 0.2s ease-in-out;

    @media ${mq.semilarge} {
        transform: rotate(0deg);
    }
`;

const NavItemLink = styled(Link)`
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    &:focus {
        outline: solid 2px
            ${({ theme, isInverted }) =>
                isInverted
                    ? color(theme).primary.inverted
                    : color(theme).primary.default};
    }

    &:focus:not(:focus-visible) {
        outline: none;
    }
`;

const NavItemButton = styled.button`
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    background: none;
    border: none;
    border-bottom: solid 2px ${({ theme }) => color(theme).elementBg.light};
    width: 100%;
    cursor: pointer;
    outline: none;
    border-radius: 0px;

    &:focus {
        outline: solid 2px ${({ theme }) => color(theme).primary.default};
    }

    &:focus:not(:focus-visible) {
        outline: none;
    }

    @media ${mq.semilarge} {
        border-bottom: none;
    }
`;

const SubNavList = styled.ul<{ isActive?: boolean; isIndented?: boolean }>`
    display: ${({ isActive }) => !isActive && 'none'};
    position: relative;
    margin: 0;
    padding: 0;
    padding-left: ${({ isIndented }) =>
        isIndented ? 48 + spacings.nudge * 4 : spacings.nudge * 2}px;
    padding-right: ${spacings.nudge * 2}px;
    list-style: none;

    max-height: 100%;
    overflow: auto;
    -ms-overflow-style: none; /* for Internet Explorer, Edge */
    scrollbar-width: none; /* for Firefox */
    overflow-y: scroll;

    &::-webkit-scrollbar {
        display: none; /* for Chrome, Safari, and Opera */
    }

    background-color: ${({ theme }) => color(theme).elementBg.medium};

    @media ${mq.semilarge} {
        position: absolute;
        top: 0;
        left: calc(100% - 1px);
        width: 100vw;
        height: 100%;
        max-width: 384px;
        padding-left: ${spacings.nudge * 3}px;
    }
`;

const NavigationItem = forwardRef<
    HTMLLIElement,
    {
        isCurrent?: boolean;
        isActive?: boolean;
        isFeatured?: boolean;
        label?: string;
        link?: LinkProps;
        icon?: React.ReactNode;

        subNavTitle?: string;

        navBarSize?: NavBarSize;
        onItemClick?: () => void;
        collapseIcon?: (props: { isCollapsed?: boolean }) => React.ReactNode;
        canFocus?: boolean;
        children?: React.ReactNode;
    }
>(
    (
        {
            isCurrent,
            isActive,
            isFeatured,
            label,
            link,
            icon,
            subNavTitle,
            navBarSize,
            onItemClick,
            collapseIcon,
            canFocus,
            children,
        },
        ref
    ) => {
        const hasSubItems = !!children && React.Children.count(children) > 0;

        return (
            <NavItemView
                ref={ref}
                isActive={isActive}
                data-featured={isFeatured}
            >
                <NavItemContent isCurrent={isCurrent}>
                    {icon && <NavItemIcon>{icon}</NavItemIcon>}
                    {label && <NavItemLabel>{label}</NavItemLabel>}
                    {hasSubItems && (
                        <NavItemCollapse>
                            {collapseIcon ? (
                                collapseIcon({
                                    isCollapsed: !isActive,
                                })
                            ) : (
                                <NavItemCollapseIcon
                                    ariaHidden
                                    isCollapsed={!isActive}
                                />
                            )}
                        </NavItemCollapse>
                    )}
                    {!hasSubItems && link?.href && (
                        <NavItemLink
                            {...link}
                            ariaLabel={label}
                            tabIndex={!canFocus ? -1 : undefined}
                        />
                    )}
                    {hasSubItems && (
                        <React.Fragment>
                            <NavItemButton
                                aria-label={label}
                                aria-expanded={isActive}
                                onClick={onItemClick}
                                tabIndex={!canFocus ? -1 : undefined}
                            />
                        </React.Fragment>
                    )}
                </NavItemContent>
                {hasSubItems && (
                    <SubNavList isActive={isActive} isIndented={!!icon}>
                        {link?.href && (
                            <MenuNav.SubItem
                                key="overview"
                                link={link}
                                label={subNavTitle || 'Overview'}
                                navBarSize={navBarSize}
                                canFocus={canFocus}
                            />
                        )}
                        {children}
                    </SubNavList>
                )}
            </NavItemView>
        );
    }
);

NavigationItem.displayName = 'NavigationItem';

//#endregion NAVIGATION.NavItem
//#region NAVIGATION.SubNavItem
const SubNavItem = styled.li<{ navBarSize?: NavBarSize }>`
    display: flex;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
    height: 56px;

    ${copyStyle('copy-b', 'medium')}
    color: ${({ theme }) => font(theme)['copy-b'].medium.color};

    @media ${mq.semilarge} {
        &:first-child {
            margin-top: ${({ theme, navBarSize }) =>
                getMenuHeaderHeights(theme, navBarSize)[1] +
                spacings.nudge * 2}px;
        }

        &:last-child {
            margin-bottom: ${spacings.spacer}px;
        }
    }
`;

const SubNavLink = styled(Link)<{ isCurrent?: boolean }>`
    width: 100%;
    padding: ${spacings.nudge}px 0;
    outline-color: ${({ theme }) => color(theme).primary.default};
    vertical-align: middle;

    ${copyStyle('copy-b', 'medium')}
    color: ${({ theme }) => font(theme)['copy-b'].medium.color};
    text-decoration: ${({ isCurrent }) => (isCurrent ? 'underline' : 'none')};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    &:focus {
        outline: solid 2px
            ${({ theme, isInverted }) =>
                isInverted
                    ? color(theme).primary.inverted
                    : color(theme).primary.default};
        outline-offset: 4px;
    }

    &:focus:not(:focus-visible) {
        outline: none;
    }
`;

const NavigationSubItem = forwardRef<
    HTMLLIElement,
    {
        isCurrent?: boolean;
        label: string;
        link?: LinkProps;
        navBarSize?: NavBarSize;
        canFocus?: boolean;
    }
>(({ isCurrent, label, link, navBarSize, canFocus }, ref) => {
    return (
        <SubNavItem ref={ref} navBarSize={navBarSize}>
            <SubNavLink
                tabIndex={!canFocus ? -1 : undefined}
                isCurrent={isCurrent}
                {...link}
            >
                {label}
            </SubNavLink>
        </SubNavItem>
    );
});

NavigationSubItem.displayName = 'NavigationSubItem';
//#endregion
//#region NAVIGATION.SecondaryNavigation
const SecondaryNavList = styled.ul`
    display: block;
    list-style: none;
    padding: 0 ${spacings.nudge * 2}px;
    margin: ${spacings.spacer}px 0;

    li {
        display: flex;
        margin: 0;
        padding; 0;
    }
`;

const SecondaryNavLink = styled(Link)<{ isCurrent?: boolean }>`
    display: inline-block;
    padding: ${spacings.nudge * 0.5}px 0;
    outline-color: ${({ theme }) => color(theme).primary.default};
    vertical-align: middle;

    ${copyStyle('copy', 'medium')}
    color: ${({ theme }) => font(theme)['copy-b'].medium.color};
    text-decoration: ${({ isCurrent }) => (isCurrent ? 'underline' : 'none')};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    &:focus {
        outline: solid 2px
            ${({ theme, isInverted }) =>
                isInverted
                    ? color(theme).primary.inverted
                    : color(theme).primary.default};
        outline-offset: 1px;
    }

    &:focus:not(:focus-visible) {
        outline: none;
    }
`;

const SecondaryNavigation: FC<{
    items?: NavItem[];
    canFocus?: boolean;
}> = ({ items, canFocus }) => {
    return items && items.length > 0 ? (
        <SecondaryNavList>
            {items
                ?.filter((n) => n.link?.href)
                .map((item, i) => (
                    <li key={i}>
                        <SecondaryNavLink
                            isCurrent={item.isCurrent}
                            href={item.link?.href}
                            tabIndex={!canFocus ? -1 : undefined}
                        >
                            {item.label}
                        </SecondaryNavLink>
                    </li>
                ))}
        </SecondaryNavList>
    ) : null;
};
//#endregion

const MenuNav = {
    View: Navigation,
    List: NavList,
    Item: NavigationItem,
    SubItem: NavigationSubItem,
    SubList: SecondaryNavigation,
};
// #endregion

export interface FlyoutMenuProps {
    type: 'flyout';
    collapseIcon?: (props: { isCollapsed?: boolean }) => React.ReactNode;
    subNavTitle?: string;
}

const menuFilter = (item: NavItem) =>
    !item.hideFromMenu && item.uid && item.label;

const MenuFlyout: FC<MenuBaseProps & FlyoutMenuProps> = ({
    isOpen,
    clampWidth,
    isIndexPage,
    mainNavigation,
    subNavigation,
    navBarSize,
    subNavTitle,
    header,
    footer,
    onClose,
    collapseIcon,
}) => {
    const { theme } = useLibTheme();
    const flyoutRef = useRef<HTMLDivElement>(null);
    const hasHeader = useMemo(() => hasMenuHeader(theme), [theme]);

    const mainList = useMemo(() => {
        const featured = mainNavigation?.filter((n) => n.isFeatured) || [];
        const main = mainNavigation?.filter((n) => !n.isFeatured) || [];

        return [...featured, ...main];
    }, [mainNavigation]);

    const [activeItems, setActiveItems] = useState<string[]>(() => {
        const initial = getCurrentNavItem(mainList, true)?.root?.uid;
        return initial ? [initial] : [''];
    });
    const [currentNavEl, setCurrentNavEl] =
        useState<HTMLLIElement | null>(null);
    const [currentSubNavEl, setCurrentSubNavEl] =
        useState<HTMLLIElement | null>(null);

    const toggleActiveItem = (uid: string) => {
        setActiveItems((prev) => (prev.includes(uid) ? [] : [uid]));

        // if multiple nav items can be selected:
        // setActiveItems((prev) => {
        //     const copy = [...prev];
        //     const activeIndex = activeItems.indexOf(index);
        //     if (activeIndex !== -1) {
        //         copy.splice(activeIndex, 1);
        //     } else {
        //         copy.push(index);
        //     }
        //     return copy;
        // });
    };

    // check if flyout lost focus
    useEffect(() => {
        const handleFocus = (ev: FocusEvent) => {
            if (!flyoutRef.current || !ev.target) return;
            const isFlyoutChild = flyoutRef.current.contains(
                ev.target as Element
            );

            if (!isFlyoutChild) onClose && onClose();
        };

        if (isOpen) {
            document.addEventListener('focusin', handleFocus);
        } else {
            document.removeEventListener('focusin', handleFocus);
        }

        return () => {
            document.removeEventListener('focusin', handleFocus);
        };
    }, [isOpen, onClose]);

    // scroll to current nav items
    useEffect(() => {
        try {
            currentNavEl?.scrollIntoView({
                block: 'center',
                inline: 'start',
            });
            currentSubNavEl?.scrollIntoView({
                block: 'center',
                inline: 'start',
            });
        } catch (e) {
            // console.log(e);
        }
    }, [currentNavEl, currentSubNavEl]);

    return (
        <React.Fragment>
            <Backdrop isOpen={isOpen} onClick={onClose} />
            <Stage isOpen={isOpen} clampWidth={clampWidth}>
                <Flyout ref={flyoutRef} isOpen={isOpen}>
                    {hasHeader && (
                        <Header navBarSize={navBarSize}>
                            {header ? (
                                header({
                                    isOpen,
                                    mainNavigation,
                                    subNavigation,
                                    isIndexPage,
                                    navBarSize,
                                })
                            ) : (
                                <MenuHeader
                                    menuStates={{
                                        isOpen,
                                        mainNavigation,
                                        subNavigation,
                                        isIndexPage,
                                        navBarSize,
                                    }}
                                />
                            )}
                        </Header>
                    )}
                    {mainList && mainList.length > 0 && (
                        <ScrollContainer>
                            <ScrollArea>
                                <MenuNav.View>
                                    <MenuNav.List id="mainMenu">
                                        {mainList
                                            ?.filter(menuFilter)
                                            .map((item) => {
                                                const isActive =
                                                    activeItems.includes(
                                                        item.uid
                                                    );
                                                const hasCurrentSubItem =
                                                    item?.subItems
                                                        ? item.subItems.findIndex(
                                                              (n) => n.isCurrent
                                                          ) >= 0
                                                        : false;

                                                const isCurrent =
                                                    item.isCurrent ||
                                                    hasCurrentSubItem;

                                                return (
                                                    <MenuNav.Item
                                                        key={item.uid}
                                                        {...item}
                                                        ref={
                                                            isCurrent
                                                                ? setCurrentNavEl
                                                                : undefined
                                                        }
                                                        isActive={isActive}
                                                        isCurrent={isCurrent}
                                                        subNavTitle={
                                                            subNavTitle
                                                        }
                                                        navBarSize={navBarSize}
                                                        collapseIcon={
                                                            collapseIcon
                                                        }
                                                        onItemClick={() =>
                                                            toggleActiveItem(
                                                                item.uid
                                                            )
                                                        }
                                                        canFocus={isOpen}
                                                    >
                                                        {item?.subItems
                                                            ?.filter(menuFilter)
                                                            .map((subItem) => (
                                                                <MenuNav.SubItem
                                                                    key={
                                                                        subItem.uid
                                                                    }
                                                                    ref={
                                                                        subItem.isCurrent
                                                                            ? setCurrentSubNavEl
                                                                            : undefined
                                                                    }
                                                                    {...subItem}
                                                                    navBarSize={
                                                                        navBarSize
                                                                    }
                                                                    canFocus={
                                                                        isOpen
                                                                    }
                                                                />
                                                            ))}
                                                    </MenuNav.Item>
                                                );
                                            })}
                                    </MenuNav.List>
                                    <MenuNav.SubList
                                        items={subNavigation}
                                        canFocus={isOpen}
                                    />
                                </MenuNav.View>
                                {footer
                                    ? footer({
                                          isOpen,
                                          mainNavigation,
                                          subNavigation,
                                          isIndexPage,
                                      })
                                    : ''}
                            </ScrollArea>
                        </ScrollContainer>
                    )}
                </Flyout>
            </Stage>
        </React.Fragment>
    );
};

export default MenuFlyout;
