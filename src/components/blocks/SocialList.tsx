import React, { FC } from 'react';
import styled from 'styled-components';

import { getColors as color, spacings } from 'utils/styles';
import Link from 'components/typography/Link';
import Copy from 'components/typography/Copy';

const View = styled.div`
    & > * {
        margin: 0;
        padding: 0;
    }

    & > * + * {
        margin-top: ${spacings.nudge * 2}px;
    }
`;

const List = styled.ul`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    list-style: none;

    & > * + * {
        margin-left: ${spacings.nudge * 3}px;
    }
`;

const IconContainer = styled.li`
    display: block;
    padding: 0;
`;

const StyledLink = styled(Link)`
    display: block;
    padding: ${spacings.nudge * 2}px ${spacings.nudge * 1.5}px;
    margin: -${spacings.nudge * 2}px -${spacings.nudge * 1.5}px;
    color: ${({ theme, isInverted }) =>
        isInverted ? color(theme).text.inverted : color(theme).text.default};
    outline: none;

    transition: all ease-in-out 0.2s;

    &:focus {
        outline: none;
    }

    &:focus > * {
        outline: 2px solid
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
    title?: string;
    items?: SocialItem[];
    className?: string;
}> = ({ isInverted = false, title, items, className }) => {
    return (
        <View className={className}>
            {title && (
                <Copy type="copy-b" isInverted={isInverted}>
                    {title}
                </Copy>
            )}
            <List>
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
            </List>
        </View>
    );
};

export default SocialList;
