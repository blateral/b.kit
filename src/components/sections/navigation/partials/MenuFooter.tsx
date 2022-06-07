import React, { FC } from 'react';

import styled from 'styled-components';
import { spacings } from 'utils/styles';
import { NavMenuStates } from '../Navigation';

import SocialList, { SocialItem } from 'components/blocks/SocialList';
import LanguageSwitcher, { Language } from 'components/blocks/LanguageSwitcher';
import { isValidArray } from 'utils/arrays';

const Footer = styled.div`
    display: flex;
    flex-direction: column;

    padding: ${spacings.nudge * 2}px;
    margin-top: auto;

    & > * + * {
        margin-top: ${spacings.spacer}px;
    }
`;

const MenuFooter: FC<{
    isInverted?: boolean;
    langs?: Language[];
    socials?: SocialItem[];
    menuStates?: NavMenuStates;
}> = ({ isInverted, langs, socials }) => {
    return (
        <React.Fragment>
            {(isValidArray(socials, false) || isValidArray(langs, false)) && (
                <Footer>
                    {isValidArray(socials, false) && (
                        <SocialList isInverted={isInverted} items={socials} />
                    )}
                    {isValidArray(langs, false) && (
                        <LanguageSwitcher
                            isInverted={isInverted}
                            langs={langs}
                        />
                    )}
                </Footer>
            )}
        </React.Fragment>
    );
};

export default MenuFooter;
