import styled from '@emotion/styled';
import LanguageSwitcher, { Language } from 'components/blocks/LanguageSwitcher';
import React, { FC } from 'react';
import { spacings } from 'utils/styles';
import BarGrid, { NavBarNavigationItem } from '../skeletons/BarGrid';

const StyledCol = styled(BarGrid.Col)`
    &:not(:first-child) {
        margin-left: ${spacings.spacer}px;
    }
`;

const NavBarTopPartial: FC<{
    isInverted?: boolean;
    navLinks?: Array<NavBarNavigationItem>;
    languages?: Array<Language>;
}> = ({ isInverted, navLinks, languages }) => {
    return (
        <React.Fragment>
            <StyledCol>
                <BarGrid.Nav isInverted={isInverted} navLinks={navLinks} />
            </StyledCol>
            <StyledCol>
                <LanguageSwitcher isInverted={isInverted} langs={languages} />
            </StyledCol>
        </React.Fragment>
    );
};

export default NavBarTopPartial;
