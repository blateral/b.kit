import React, { FC } from 'react';
import styled, { ThemeContext } from 'styled-components';

import { getColors as color, spacings } from 'utils/styles';
import Link, { LinkProps } from 'components/typography/Link';

const View = styled.ul`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    gap: ${spacings.nudge * 2}px;
    padding: 0;
    margin: 0;
    list-style: none;
`;

const IconItemView = styled.li`
    margin: 0;
    padding: 0;
`;

const StyledLink = styled(Link)<{ textColor?: string }>`
    display: flex;
    align-items: center;
    padding: ${spacings.nudge}px;
    margin: -${spacings.nudge}px;
    color: ${({ theme, textColor }) => textColor || color(theme).dark};

    transition: opacity 0.2s ease-in-out;

    &:hover {
        opacity: 0.75;
    }

    &:focus-visible {
        outline: 2px solid ${({ textColor }) => textColor};
    }
`;

const SocialList: FC<{
    isInverted?: boolean;
    items?: Array<LinkProps & { icon: React.ReactNode }>;
    ariaLabel?: string;
    className?: string;
}> = ({ isInverted = false, items, ariaLabel, className }) => {
    const theme = React.useContext(ThemeContext);

    return (
        <View aria-label={ariaLabel} className={className}>
            {items?.map((item, i) => {
                const { icon, ...rest } = item;

                return (
                    <IconItemView key={i}>
                        <StyledLink
                            {...rest}
                            isExternal={
                                item.isExternal !== undefined
                                    ? item.isExternal
                                    : true
                            }
                            textColor={
                                isInverted
                                    ? color(theme).light
                                    : color(theme).dark
                            }
                        >
                            {item.icon}
                        </StyledLink>
                    </IconItemView>
                );
            })}
        </View>
    );
};

export default SocialList;
