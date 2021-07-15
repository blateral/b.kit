import React, { FC } from 'react';
import styled, { ThemeContext } from 'styled-components';

import { getColors as color, spacings } from 'utils/styles';
import Link from 'components/typography/Link';

const View = styled.div`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    // padding: ${spacings.nudge * 2}px 0;
    // overflow: hidden;

    & > * + * {
        margin-left: ${spacings.nudge * 3}px;
    }
`;

const IconItemView = styled.div`
    transition: all ease-in-out 0.2s;

    &:hover {
        transform: scale(1.1);
    }

    &:focus {
        text-decoration: underline;
        transform: scale(1.012);
    }

    &:active {
        transform: scale(0.95);
    }
`;

const StyledLink = styled(Link)<{ textColor?: string }>`
    display: block;
    padding: ${spacings.nudge * 2}px ${spacings.nudge * 1.5}px;
    margin: -${spacings.nudge * 2}px -${spacings.nudge * 1.5}px;
    color: ${({ theme, textColor }) => textColor || color(theme).dark};
`;

const SocialList: FC<{
    isInverted?: boolean;
    items?: { href: string; icon: React.ReactNode }[];
    className?: string;
}> = ({ isInverted = false, items, className }) => {
    const theme = React.useContext(ThemeContext);

    return (
        <View className={className}>
            {items &&
                items.map((item, i) => (
                    <IconItemView key={i}>
                        <StyledLink
                            isExternal
                            href={item.href}
                            textColor={
                                isInverted
                                    ? color(theme).light
                                    : color(theme).dark
                            }
                        >
                            {item.icon}
                        </StyledLink>
                    </IconItemView>
                ))}
        </View>
    );
};

export default SocialList;
