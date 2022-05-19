import React, { FC } from 'react';

import LanguageSwitcher, { Language } from 'components/blocks/LanguageSwitcher';
import FooterBottomGrid from '../skeletons/FooterBottomGrid';
import { BottomLink } from '../Footer';
import * as Icons from 'components/base/icons/Icons';
import { isValidArray } from 'utils/arrays';
import styled from 'styled-components';
import { spacings } from 'utils/styles';

const LeftWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-left: -${spacings.spacer}px;

    & > * {
        padding-left: ${spacings.spacer}px;
    }
`;

const FooterBottomBar: FC<{
    isInverted?: boolean;
    languages?: Language[];
    linksLeft?: BottomLink[];
    linksRight?: BottomLink[];
    brandIcon?: (isInverted?: boolean) => React.ReactNode;
    languageIcon?: (isInverted?: boolean) => React.ReactNode;
    className?: string;
}> = ({
    isInverted,
    languages,
    linksLeft,
    linksRight,
    brandIcon,
    languageIcon,
    className,
}) => {
    return (
        <FooterBottomGrid.View className={className}>
            <LeftWrapper>
                {languages && (
                    <LanguageSwitcher
                        isInverted={isInverted}
                        langs={languages}
                        languageIcon={
                            languageIcon
                                ? languageIcon
                                : () => <Icons.Language />
                        }
                    />
                )}
                {isValidArray(linksLeft, false) && (
                    <FooterBottomGrid.LinkList
                        links={linksLeft}
                        isInverted={isInverted}
                        brandIcon={() => null}
                    />
                )}
            </LeftWrapper>
            {isValidArray(linksRight) && (
                <FooterBottomGrid.LinkList
                    links={linksRight}
                    isInverted={isInverted}
                    brandIcon={brandIcon}
                />
            )}
        </FooterBottomGrid.View>
    );
};

export default FooterBottomBar;
