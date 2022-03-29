import React, { FC } from 'react';
import styled from 'styled-components';

import Link, { LinkProps } from 'components/typography/Link';
import { spacings, getColors as color } from 'utils/styles';
import { copyStyle } from 'components/typography/Copy';

const View = styled.div<{ isInverted?: boolean }>`
    display: inline-flex;
    align-items: center;

    margin: 0 -${spacings.nudge}px;

    & > * + * {
        &:before {
            content: '';
            display: block;
            position: absolute;
            top: 3px;
            left: 0;
            height: 1em;
            width: 2px;
            background-color: ${({ isInverted, theme }) =>
                isInverted
                    ? color(theme).new.text.inverted
                    : color(theme).new.text.default};

            transition: background-color 0.2s ease-in-out;
        }
    }
`;

const LanguageLink = styled(Link)<{ isInverted?: boolean; isActive?: boolean }>`
    display: inline-block;
    position: relative;
    padding: 0 ${spacings.nudge}px;

    ${copyStyle('copy', 'medium')}

    color: ${({ isInverted, theme }) =>
        isInverted
            ? color(theme).new.text.inverted
            : color(theme).new.text.default};
    text-decoration: none;

    @media (hover: hover) and (pointer: fine) {
        &:hover {
            color: ${({ isInverted, theme }) =>
                isInverted
                    ? color(theme).new.text.inverted
                    : color(theme).new.text.default};
            text-decoration: underline;
        }
    }
`;

export interface Language {
    isActive?: boolean;
    label: string;
    link: LinkProps;
}

const LanguageSwitcher: FC<{
    langs?: Language[];
    isInverted?: boolean;
}> = ({ langs, isInverted }) => {
    return (
        <View isInverted={isInverted}>
            {langs?.map((lang, i) => (
                <LanguageLink
                    key={i}
                    {...lang.link}
                    isInverted={isInverted}
                    isActive={lang.isActive}
                >
                    {lang.label}
                </LanguageLink>
            ))}
        </View>
    );
};

export default LanguageSwitcher;
