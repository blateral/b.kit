import Cross from 'components/base/icons/Cross';
import React, { FC } from 'react';

import styled from 'styled-components';
import { spacings } from 'utils/styles';
import { NavMenuStates } from '../Navigation';
import * as Skeletons from 'components/sections/navigation/skeletons/index';
import LanguageSwitcher, { Language } from 'components/blocks/LanguageSwitcher';
import { isValidArray } from 'utils/arrays';

const Header = styled.div`
    display: flex;
    align-items: center;

    padding: 0 ${spacings.nudge * 2}px;
    padding-top: ${spacings.nudge * 5}px;
`;

const LanguageCol = styled.div`
    display: block;
    margin-left: ${spacings.nudge * 3}px;
    margin-top: 2px;
`;

const MenuHeader: FC<{
    isInverted?: boolean;
    menuStates?: NavMenuStates;
    customToggle?: (props: { isInverted?: boolean }) => React.ReactNode;
    langs?: Language[];
    action?: (
        props: { isInverted?: boolean } & NavMenuStates
    ) => React.ReactNode;
}> = ({ isInverted, customToggle, menuStates, langs, action }) => {
    return (
        <React.Fragment>
            <Header>
                <Skeletons.MenuToggle
                    isInverted={isInverted}
                    isExpanded={true}
                    onClick={menuStates?.closeMenu}
                >
                    {customToggle ? (
                        customToggle({ isInverted })
                    ) : (
                        <Cross ariaHidden={true} />
                    )}
                </Skeletons.MenuToggle>
                {isValidArray(langs, false) && (
                    <LanguageCol>
                        <LanguageSwitcher
                            isInverted={isInverted}
                            langs={langs}
                        />
                    </LanguageCol>
                )}
                {action && action({ isInverted, ...menuStates })}
            </Header>
        </React.Fragment>
    );
};

export default MenuHeader;
