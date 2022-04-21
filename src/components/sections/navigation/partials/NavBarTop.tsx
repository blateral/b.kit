import styled from 'styled-components';
import LanguageSwitcher, { Language } from 'components/blocks/LanguageSwitcher';
import React, { FC } from 'react';
import { mq, spacings } from 'utils/styles';
import { NavBarStates } from '../Navigation';
import Skeletons from '../skeletons/Skeletons';
import { NavItem } from '../menu/Menu';

const StyledCol = styled(Skeletons.Col)`
    &:not(:first-child) {
        margin-left: ${spacings.spacer}px;
    }
`;

const StyledNavList = styled(Skeletons.NavList)`
    display: none;

    @media ${mq.semilarge} {
        display: inline-flex;
    }
`;

const NavBarTop: FC<{
    navLinks?: Array<NavItem>;
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
