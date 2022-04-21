import React, { FC } from 'react';
import styled from 'styled-components';

import MenuBurger from 'components/base/icons/MenuBurger';
import { NavBarStates } from '../Navigation';
import Skeletons from 'components/sections/navigation/skeletons/Skeletons';
import { spacings } from 'utils/styles';

const LogoColumn = styled(Skeletons.Col)`
    display: flex;
    align-items: center;
    padding: ${spacings.nudge}px 0;
`;

const NavBarMain: FC<{
    isInverted?: boolean;
    logo?: {
        desktop?: { src: string; alt?: string };
        desktopInverted?: { src: string; alt?: string };
        mobile?: { src: string; alt?: string };
        mobileInverted?: { src: string; alt?: string };
    };
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
            <Skeletons.Col takeSpace vAlign="center" isInverted={isInverted}>
                <Skeletons.Toggle
                    isInverted={isInverted}
                    isExpanded={navStates?.isMenuOpen}
                    onClick={navStates?.openMenu}
                >
                    {customToggle ? (
                        customToggle({ isInverted })
                    ) : (
                        <MenuBurger ariaHidden={true} />
                    )}
                </Skeletons.Toggle>
            </Skeletons.Col>
            {logo?.desktop?.src && (
                <LogoColumn isInverted={isInverted}>
                    <Skeletons.Logo
                        logo={{
                            small: isInverted
                                ? logo?.mobileInverted?.src || ''
                                : logo?.mobile?.src || '',
                            semilarge: isInverted
                                ? logo?.desktopInverted?.src || ''
                                : logo?.desktop?.src || '',
                            alt: logo?.desktop?.alt,
                        }}
                    />
                </LogoColumn>
            )}
            <Skeletons.Col takeSpace vAlign="center">
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
            </Skeletons.Col>
        </React.Fragment>
    );
};

export default NavBarMain;
