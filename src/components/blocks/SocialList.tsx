import React, { FC } from 'react';
import styled from 'styled-components';

import { getColors as color, spacings } from 'utils/styles';
import Link from 'components/typography/Link';

const View = styled.div`
    display: inline-flex;
    flex-direction: row;
    align-items: center;

    & > * + * {
        margin-left: ${spacings.nudge * 3}px;
    }
`;

const IconContainer = styled.div``;

const StyledLink = styled(Link)`
    display: block;
    padding: ${spacings.nudge * 2}px ${spacings.nudge * 1.5}px;
    margin: -${spacings.nudge * 2}px -${spacings.nudge * 1.5}px;
    color: ${({ theme, isInverted }) =>
        isInverted ? color(theme).text.inverted : color(theme).text.default};
    outline: none;

    transition: all ease-in-out 0.2s;

    &:focus > * {
        outline: solid 2px
            ${({ theme, isInverted }) =>
                isInverted
                    ? color(theme).primary.inverted
                    : color(theme).primary.default};
        outline-offset: 2px;
    }

    &:focus:not(:focus-visible) > * {
        outline: none;
    }
`;

export interface SocialItem {
    href: string;
    icon: (props: { isInverted?: boolean; title?: string }) => React.ReactNode;
    title?: string;
}

const SocialList: FC<{
    isInverted?: boolean;
    items?: SocialItem[];
    className?: string;
}> = ({ isInverted = false, items, className }) => {
    return (
        <View className={className}>
            {items?.map((item, i) => (
                <IconContainer key={i}>
                    <StyledLink
                        isExternal
                        href={item.href}
                        isInverted={isInverted}
                        ariaLabel={item.title || `social_${i}`}
                    >
                        {item.icon &&
                            item.icon({ isInverted, title: item.title })}
                    </StyledLink>
                </IconContainer>
            ))}
        </View>
    );
};

export default SocialList;
