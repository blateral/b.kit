// import styled from 'styled-components';
import React, { FC } from 'react';

// import { mq, spacings } from 'utils/styles';
import { NavBarStates } from '../Navigation';
import Skeletons from '../skeletons/Skeletons';
import { LinkProps } from 'components/typography/Link';

const NavBarBottom: FC<{
    rootLink?: LinkProps;
    rootLabel?: string;
    navStates: NavBarStates;
}> = ({ rootLink, rootLabel, navStates }) => {
    const isInverted =
        navStates?.size === 'large' && navStates?.pageFlow === 'overContent';

    return (
        <React.Fragment>
            <Skeletons.Col>
                <Skeletons.Breadcrumbs
                    isInverted={isInverted}
                    rootLink={rootLink}
                    rootLabel={rootLabel}
                    navItems={navStates.mainNavigation}
                />
            </Skeletons.Col>
        </React.Fragment>
    );
};

export default NavBarBottom;
