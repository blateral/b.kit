import React, { FC } from 'react';

import { NavBarStates } from '../Navigation';
import * as Skeletons from 'components/sections/navigation/skeletons/index';
import { LinkProps } from 'components/typography/Link';

const NavBarBottom: FC<{
    rootLink?: LinkProps;
    rootLabel?: string;
    navStates: NavBarStates;
}> = ({ rootLink, rootLabel, navStates }) => {
    const isInverted =
        navStates?.size === 'large' && navStates?.pageFlow === 'overContent';

    return (
        <Skeletons.Breadcrumbs
            isInverted={isInverted}
            rootLink={rootLink}
            rootLabel={rootLabel}
            navItems={navStates.mainNavigation}
        />
    );
};

export default NavBarBottom;
