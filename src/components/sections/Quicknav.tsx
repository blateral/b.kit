import { spacings, getColors as color } from 'utils/styles';
import QuicknavButton from 'components/buttons/QuicknavButton';
import * as React from 'react';
import styled from 'styled-components';
import Section from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';

const StyledSection = styled(Section)`
    padding-top: 55px;
`;

const NavList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    position: relative;

    margin-left: -${spacings.spacer}px;

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

    padding: 20px;
    padding-top: 0;
`;

const Test = styled.div`
    width: 100%;
    height: 1px;

    background: rgba(0, 0, 0, 0.1);
`;

const Slider = styled.div<{ isActive?: boolean }>`
    /* display: ${({ isActive }) => (isActive ? 'block' : 'block')}; */
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

            setWidth(Box.width - spacings.spacer);
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
                    <div
                        style={{
                            paddingTop: '35px',
                        }}
                    >
                        <Slider
                            style={{
                                transform: `translateX(${pos}px)`,
                                transition: `.2s ease-in-out`,
                                width: `${width}px`,
                            }}
                        />
                    </div>
                </NavList>
            </Wrapper>
            <Test />
        </StyledSection>
    );
};

export default Quicknav;
