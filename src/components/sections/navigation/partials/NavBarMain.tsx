import React, { FC } from 'react';
import styled from 'styled-components';

import MenuBurger from 'components/base/icons/MenuBurger';
import { NavBarStates } from '../Navigation';
import * as Skeletons from 'components/sections/navigation/skeletons/index';
import { spacings, mq } from 'utils/styles';
import { LinkProps } from 'components/typography/Link';
import { isValidArray } from 'utils/arrays';
import LanguageSwitcher, { Language } from 'components/blocks/LanguageSwitcher';

const ToggleColumn = styled(Skeletons.Column)`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const LogoColumn = styled(Skeletons.Column)`
    display: flex;
    align-items: center;
    padding: ${spacings.nudge}px 0;
`;

const ActionsColumn = styled(Skeletons.Column)`
    display: flex;
    justify-content: flex-end;
    align-items: center;

    & > * + * {
        margin-left: ${spacings.nudge}px;
    }

    @media ${mq.medium} {
        & > * + * {
            margin-left: ${spacings.nudge * 2}px;
        }
    }
`;

const LanguageWrapper = styled.div`
    display: none;

    @media ${mq.semilarge} {
        display: block;
        margin-left: ${spacings.nudge * 3}px;
        margin-top: 2px;
    }
`;

const NavBarMain: FC<{
    isInverted?: boolean;
    logo?: {
        desktop?: { src: string; alt?: string };
        desktopInverted?: { src: string; alt?: string };
        mobile?: { src: string; alt?: string };
        mobileInverted?: { src: string; alt?: string };
        link?: Omit<LinkProps, 'coverSpace' | 'ratios'>;
    };
    customToggle?: (props: { isInverted?: boolean }) => React.ReactNode;
    langs?: Language[];
    primaryAction?: (
        props: { isInverted?: boolean } & NavBarStates
    ) => React.ReactNode;
    secondaryAction?: (
        props: { isInverted?: boolean } & NavBarStates
    ) => React.ReactNode;
    navStates: NavBarStates;
}> = ({
    logo,
    navStates,
    customToggle,
    langs,
    primaryAction,
    secondaryAction,
}) => {
    const isInverted =
        navStates?.size === 'large' && navStates?.pageFlow === 'overContent';

    return (
        <React.Fragment>
            <ToggleColumn takeSpace vAlign="center" isInverted={isInverted}>
                <Skeletons.MenuToggle
                    isInverted={isInverted}
                    isExpanded={navStates?.isMenuOpen}
                    onClick={navStates?.openMenu}
                >
                    {customToggle ? (
                        customToggle({ isInverted })
                    ) : (
                        <MenuBurger ariaHidden={true} />
                    )}
                </Skeletons.MenuToggle>
                {isValidArray(langs, false) && (
                    <LanguageWrapper>
                        <LanguageSwitcher
                            isInverted={isInverted}
                            langs={langs}
                        />
                    </LanguageWrapper>
                )}
            </ToggleColumn>
            {logo?.desktop?.src && (
                <LogoColumn isInverted={isInverted}>
                    <Skeletons.Logo
                        link={logo.link}
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
            <ActionsColumn takeSpace vAlign="center">
                {secondaryAction
                    ? secondaryAction({
                          isInverted,
                          ...navStates,
                      })
                    : undefined}
                {primaryAction
                    ? primaryAction({
                          isInverted,
                          ...navStates,
                      })
                    : undefined}
            </ActionsColumn>
        </React.Fragment>
    );
};

export default NavBarMain;
