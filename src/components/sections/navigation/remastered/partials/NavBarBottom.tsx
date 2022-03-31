// import styled from 'styled-components';
import React, { FC } from 'react';

// import { mq, spacings } from 'utils/styles';
import { NavBarStates } from '../Navigation';
import Skeletons from '../skeletons/Skeletons';
import { NavItem } from '../menu/Menu';

const NavBarBottom: FC<{
    startItem?: NavItem;
    navStates: NavBarStates;
}> = ({ startItem, navStates }) => {
    const isInverted =
        navStates?.size === 'large' && navStates?.pageFlow === 'overContent';

    return (
        <React.Fragment>
            <Skeletons.Col>
                <Skeletons.Breadcrumbs
                    isInverted={isInverted}
                    startItem={startItem}
                    navItems={navStates.mainNavigation}
                />
            </Skeletons.Col>
        </React.Fragment>
    );
};

export default NavBarBottom;
