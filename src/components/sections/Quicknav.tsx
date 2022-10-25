import { spacings, getColors as color, mq } from 'utils/styles';
import QuicknavButton from 'components/buttons/QuicknavButton';
import * as React from 'react';
import styled from 'styled-components';
import Section from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import Copy from 'components/typography/Copy';

const StyledSection = styled(Section)`
    padding-top: 55px;
`;

const NavList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    position: relative;

    margin-left: -${spacings.spacer}px;
    padding-right: ${spacings.spacer}px;

    @media ${mq.semilarge} {
        margin-left: -${spacings.nudge * 3}px;
    }

    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;

    ::-webkit-scrollbar {
        display: none;
    }
`;

const NavItem = styled.li`
    display: inline-block;
    position: relative;

    cursor: pointer;
`;

const NavItemContainer = styled(Copy)`
    display: inline-block;
    padding: ${spacings.nudge * 3}px;
`;

const SliderTrack = styled.div`
    width: 100%;
    height: 1px;

    background: rgba(0, 0, 0, 0.1);
`;

const SliderContainer = styled.div`
    padding-top: 35px;
`;

const Slider = styled.div<{ isActive?: boolean }>`
    height: ${({ isActive }) => (isActive ? '4px' : '0')};
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: ${({ theme }) => color(theme).primary.light};

    width: 100%;
`;

const Quicknav: React.FC<{
    navItems: { label: string; link?: string }[];
    activeNavItem?: string;
    onNavClick?: (index: number, label: string) => void;
    className?: string;
}> = ({ navItems, activeNavItem, onNavClick, className }) => {
    const parentRef = React.useRef<HTMLUListElement>(null);
    const itemRef = React.useRef<HTMLLIElement>(null);
    const [activeItem, setActiveItem] = React.useState<number>(
        activeNavItem
            ? navItems?.findIndex(
                  (item) =>
                      item.label === activeNavItem ||
                      item.link?.indexOf(activeNavItem) !== -1
              )
            : -1
    );

    React.useEffect(() => {
        setActiveItem(
            navItems.findIndex(
                (item) =>
                    item.label === activeNavItem ||
                    (activeNavItem && item.link?.indexOf(activeNavItem) !== -1)
            )
        );
    }, [activeNavItem, navItems]);

    const updateNavItemScroll = React.useCallback(() => {
        const element = document.querySelector(
            `[data-index=tabnav-${activeItem}]`
        );

        const parent = parentRef.current;

        if (element && parent) {
            const elWidth = element.getBoundingClientRect().width;
            const leftOffset = (element as HTMLElement).offsetLeft;

            // scroll to active item
            parent?.scrollTo({ left: leftOffset - elWidth / 2 });
        }
    }, [activeItem]);

    React.useEffect(() => {
        updateNavItemScroll();
    }, [activeItem, updateNavItemScroll]);

    React.useEffect(() => {
        const handleResize = () => {
            updateNavItemScroll();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [updateNavItemScroll]);

    return (
        <StyledSection addSeperation className={className}>
            <Wrapper addWhitespace>
                <NavList ref={parentRef}>
                    {navItems.map((item, i) => {
                        return (
                            <NavItem
                                ref={itemRef}
                                data-index={`tabnav-${i}`}
                                key={i}
                                onClick={() => {
                                    if (!onNavClick) {
                                        setActiveItem(i);
                                    } else {
                                        onNavClick(i, item.label);
                                    }
                                }}
                            >
                                <NavItemContainer>
                                    <QuicknavButton
                                        label={item.label}
                                        link={item.link}
                                        isActive={activeItem === i}
                                    />
                                    <SliderContainer>
                                        <Slider isActive={activeItem === i} />
                                    </SliderContainer>
                                </NavItemContainer>
                            </NavItem>
                        );
                    })}
                </NavList>
            </Wrapper>
            <SliderTrack />
        </StyledSection>
    );
};

export default Quicknav;
