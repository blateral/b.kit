import React, { FC } from 'react';
import MenuBurger from 'components/base/icons/MenuBurger';
import { NavBarStates } from '../Navigation';
import NavBarGrid from '../skeletons/NavBarGrid';

const NavBarMain: FC<{
    isInverted?: boolean;
    logo?: { src: string; alt?: string };
    customToggle?: (props: { isInverted?: boolean }) => React.ReactNode;
    primaryAction?: (
        props: { isInverted?: boolean } & NavBarStates
    ) => React.ReactNode;
    secondaryAction?: (
        props: { isInverted?: boolean } & NavBarStates
    ) => React.ReactNode;
    navStates: NavBarStates;
}> = ({ logo, navStates, customToggle, primaryAction, secondaryAction }) => {
    const isInverted =
        navStates?.size === 'large' && navStates?.pageFlow === 'overContent';

    return (
        <React.Fragment>
            <NavBarGrid.Col takeSpace vAlign="center" isInverted={isInverted}>
                <NavBarGrid.Toggle
                    isInverted={isInverted}
                    isExpanded={navStates?.isMenuOpen}
                    onClick={navStates?.openMenu}
                >
                    {customToggle ? (
                        customToggle({ isInverted })
                    ) : (
                        <MenuBurger />
                    )}
                </NavBarGrid.Toggle>
            </NavBarGrid.Col>
            {logo?.src && (
                <NavBarGrid.Col isInverted={isInverted}>
                    <NavBarGrid.Logo src={logo.src} alt={logo?.alt} />
                </NavBarGrid.Col>
            )}
            <NavBarGrid.Col takeSpace vAlign="center">
                {primaryAction
                    ? primaryAction({
                          isInverted,
                          ...navStates,
                      })
                    : undefined}
                {secondaryAction
                    ? secondaryAction({
                          isInverted,
                          ...navStates,
                      })
                    : undefined}
            </NavBarGrid.Col>
        </React.Fragment>
    );
};

export default NavBarMain;
