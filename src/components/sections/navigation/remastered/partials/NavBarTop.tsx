import styled from 'styled-components';
import LanguageSwitcher, { Language } from 'components/blocks/LanguageSwitcher';
import React, { FC } from 'react';
import { mq, spacings } from 'utils/styles';
import NavBarGrid, { NavBarNavigationItem } from '../skeletons/NavBarGrid';
import { NavBarStates } from '../Navigation';

const StyledCol = styled(NavBarGrid.Col)`
    &:not(:first-child) {
        margin-left: ${spacings.spacer}px;
    }
`;

const StyledNavList = styled(NavBarGrid.Nav)`
    display: none;

    @media ${mq.semilarge} {
        display: inline-flex;
    }
`;

const NavBarTop: FC<{
    navLinks?: Array<NavBarNavigationItem>;
    languages?: Array<Language>;
    navStates: NavBarStates;
}> = ({ navLinks, languages, navStates }) => {
    const isInverted =
        navStates?.size === 'large' && navStates?.pageFlow === 'overContent';

    return (
        <React.Fragment>
            <StyledCol>
                <StyledNavList isInverted={isInverted} navLinks={navLinks} />
            </StyledCol>
            <StyledCol>
                <LanguageSwitcher isInverted={isInverted} langs={languages} />
            </StyledCol>
        </React.Fragment>
    );
};

export default NavBarTop;
