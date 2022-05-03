import React, { FC } from 'react';

import LanguageSwitcher, { Language } from 'components/blocks/LanguageSwitcher';
import FooterBottomGrid from '../skeletons/FooterBottomGrid';
import { BottomLink } from '../Footer';
import * as Icons from 'components/base/icons/Icons';

const FooterBottomBar: FC<{
    isInverted?: boolean;
    languages?: Language[];
    links?: BottomLink[];
    brandIcon?: (isInverted?: boolean) => React.ReactNode;
    languageIcon?: (isInverted?: boolean) => React.ReactNode;
    className?: string;
}> = ({ isInverted, languages, links, brandIcon, languageIcon, className }) => {
    return (
        <FooterBottomGrid.View className={className}>
            {languages && (
                <LanguageSwitcher
                    isInverted={isInverted}
                    langs={languages}
                    languageIcon={
                        languageIcon ? languageIcon : () => <Icons.Language />
                    }
                />
            )}
            {links && links.length > 0 && (
                <FooterBottomGrid.LinkList
                    links={links}
                    isInverted={isInverted}
                    brandIcon={brandIcon}
                />
            )}
        </FooterBottomGrid.View>
    );
};

export default FooterBottomBar;
