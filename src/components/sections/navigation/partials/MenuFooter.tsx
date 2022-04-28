import React, { FC } from 'react';

import styled from 'styled-components';
import { spacings } from 'utils/styles';
import { NavMenuStates } from '../Navigation';

import SocialList, { SocialItem } from 'components/blocks/SocialList';
import LanguageSwitcher, { Language } from 'components/blocks/LanguageSwitcher';

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
        <Footer>
            {socials && socials.length > 0 && (
                <SocialList isInverted={isInverted} items={socials} />
            )}
            {langs && langs.length > 0 && (
                <LanguageSwitcher isInverted={isInverted} langs={langs} />
            )}
        </Footer>
    );
};

export default MenuFooter;
