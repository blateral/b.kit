import Cross from 'components/base/icons/Cross';
import React, { FC } from 'react';

import styled from 'styled-components';
import { spacings } from 'utils/styles';
import { NavMenuStates } from '../Navigation';
import Skeletons from '../skeletons/Skeletons';

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 ${spacings.nudge * 2}px;
    padding-top: ${spacings.nudge * 5}px;
`;

const MenuHeader: FC<{
    isInverted?: boolean;
    menuStates?: NavMenuStates;
    customToggle?: (props: { isInverted?: boolean }) => React.ReactNode;
    action?: (
        props: { isInverted?: boolean } & NavMenuStates
    ) => React.ReactNode;
}> = ({ isInverted, customToggle, menuStates, action }) => {
    return (
        <React.Fragment>
            <Header>
                <Skeletons.Toggle
                    isInverted={isInverted}
                    isExpanded={true}
                    onClick={menuStates?.closeMenu}
                >
                    {customToggle ? (
                        customToggle({ isInverted })
                    ) : (
                        <Cross ariaHidden={true} />
                    )}
                </Skeletons.Toggle>
                {action && action({ isInverted, ...menuStates })}
            </Header>
        </React.Fragment>
    );
};

export default MenuHeader;
