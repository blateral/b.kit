import { spacings, getColors as color } from 'utils/styles';
import QuicknavButton from 'components/buttons/QuicknavButton';
import * as React from 'react';
import styled from 'styled-components';
import Section from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';

const NavList = styled.ul`
    list-style: none;
    margin: -${spacings.nudge * 5}px -${spacings.nudge * 3}px;
    padding: 0;
    position: relative;

    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;

    margin: -${spacings.nudge * 3}px;
    padding-right: ${spacings.spacer}px;

    ::-webkit-scrollbar {
        display: none;
    }
`;

const NavItem = styled.li`
    display: inline-block;
    position: relative;

    cursor: pointer;
`;

const Slider = styled.div<{ isActive?: boolean }>`
    height: 4px;
    position: absolute;
    bottom: 0;
    background-color: ${({ theme }) => color(theme).primary.light};
`;

const Quicknav: React.FC<{
    navItems: { label: string; link?: string }[];
    activeNavItem?: string;
    onNavClick?: (index: number, label: string) => void;
    className?: string;
}> = ({ navItems, activeNavItem, onNavClick, className }) => {
    const [isActiveItem, setIsActiveItem] = React.useState<number>(
        activeNavItem
            ? navItems?.findIndex(
                  (item) =>
                      item.label === activeNavItem ||
                      item.link?.indexOf(activeNavItem) !== -1
              )
            : -1
    );

    const [pos, setPos] = React.useState(0);
    const [width, setWidth] = React.useState(0);
    const parentRef = React.useRef(null);

    const itemRef = React.useRef<any>();

    React.useEffect(() => {
        setIsActiveItem(
            navItems.findIndex(
                (item) =>
                    item.label === activeNavItem ||
                    (activeNavItem && item.link?.indexOf(activeNavItem) !== -1)
            )
        );
    }, [activeNavItem, navItems]);

    React.useEffect(() => {
        const element = document.querySelector(
            `[data-index=tabnav-${isActiveItem}]`
        );

        const parent = parentRef.current;

        if (element && parent) {
            const Box = element.getBoundingClientRect();
            const ParentBox = (parent as Element).getBoundingClientRect();

            setWidth(Box.width - spacings.spacer * 1.5);
            setPos(
                Box.left -
                    ParentBox.left +
                    (parent as HTMLElement).scrollLeft +
                    spacings.nudge * 3
            );
        }
    }, [isActiveItem]);

    React.useEffect(() => {
        if (itemRef && itemRef.current && isActiveItem) {
            itemRef.current.scrollIntoView();
        }
    }, [isActiveItem]);

    return (
        <Section className={className}>
            <Wrapper>
                <NavList ref={parentRef}>
                    {navItems.map((item, i) => {
                        return (
                            <NavItem
                                ref={itemRef}
                                data-index={`tabnav-${i}`}
                                key={i}
                                onClick={() => {
                                    if (!onNavClick) {
                                        setIsActiveItem(i);
                                    } else {
                                        onNavClick(i, item.label);
                                    }
                                }}
                            >
                                <QuicknavButton
                                    label={item.label}
                                    link={item.link}
                                    isActive={isActiveItem === i}
                                />
                            </NavItem>
                        );
                    })}
                    <Slider
                        style={{
                            transform: `translateX(${pos}px)`,
                            transition: `.2s ease-in-out`,
                            width: `${width}px`,
                        }}
                    />
                </NavList>
            </Wrapper>
        </Section>
    );
};

export default Quicknav;
