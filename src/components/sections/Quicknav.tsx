import { spacings, getColors as color, mq } from 'utils/styles';
import QuicknavButton from 'components/buttons/QuicknavButton';
import * as React from 'react';
import styled, { ThemeContext } from 'styled-components';
import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import { withLibTheme } from 'utils/LibThemeProvider';

const StyledSection = styled(Section)`
    position: relative;
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

const NavItemContainer = styled.div`
    position: relative;
    display: inline-block;
    padding: ${spacings.nudge * 3}px;
`;

const SliderBorder = styled.div<{ isInverted?: boolean }>`
    position: relative;
    width: 100%;
    height: 1px;

    background: ${({ isInverted }) =>
        isInverted ? `rgba(255, 255, 255, 0.2)` : `rgba(0, 0, 0, 0.1)`};
`;

const Slider = styled.div<{ isActive?: boolean; isInverted?: boolean }>`
    height: 4px;
    position: absolute;
    bottom: 0;
    background-color: ${({ theme, isInverted }) =>
        isInverted ? color(theme).light : color(theme).dark};
    left: 15px;
    right: 15px;
`;

const Quicknav: React.FC<{
    navItems: { label: string; link?: string }[];
    activeNavItem?: string;
    onNavClick?: (index: number, label: string) => void;
    className?: string;
    bgMode?: 'inverted';
}> = ({ navItems, activeNavItem, onNavClick, className, bgMode }) => {
    const [isActiveItem, setIsActiveItem] = React.useState<number>(
        activeNavItem
            ? navItems?.findIndex(
                  (item) =>
                      item.label === activeNavItem ||
                      item.link?.indexOf(activeNavItem) !== -1
              )
            : -1
    );
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
        if (itemRef && itemRef.current && isActiveItem) {
            itemRef.current.scrollIntoView();
        }
    }, [isActiveItem]);

    const isInverted = bgMode === 'inverted';
    const theme = React.useContext(ThemeContext);

    return (
        <StyledSection
            bgColor={
                isInverted
                    ? color(theme).new.bg.inverted
                    : color(theme).new.bg.default
            }
            bgMode={mapToBgMode(bgMode, true)}
            addSeperation
            className={className}
        >
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
                                <NavItemContainer>
                                    <QuicknavButton
                                        label={item.label}
                                        link={item.link}
                                        isActive={isActiveItem === i}
                                        isInverted={isInverted}
                                    />
                                    <div
                                        style={{
                                            paddingTop: '40px',
                                        }}
                                    />
                                    {isActiveItem === i && (
                                        <Slider isInverted={isInverted} />
                                    )}
                                </NavItemContainer>
                            </NavItem>
                        );
                    })}
                </NavList>
            </Wrapper>
            <SliderBorder isInverted={isInverted} />
        </StyledSection>
    );
};

export const QuicknavComponent = Quicknav;
export default withLibTheme(Quicknav);
