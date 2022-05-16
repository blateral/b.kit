import React from 'react';

import Link, { LinkProps } from 'components/typography/Link';
import styled, { DefaultTheme } from 'styled-components';
import { spacings } from 'utils/styles';
import { useLibTheme } from 'utils/LibThemeProvider';
import { copyStyle } from 'components/typography/Copy';

const View = styled.div``;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
`;

const ListItem = styled.li`
    & + & {
        padding-top: ${spacings.nudge * 2}px;
    }
`;

const StyledLink = styled(Link)`
    display: inline-flex;
    flex-direction: row;
    align-items: center;

    ${copyStyle('copy', 'medium')}

    & > * + * {
        margin-left: ${spacings.nudge}px;
    }
`;

const IconContainer = styled.img`
    display: inline-block;
`;

export interface LinkListProps {
    items?: Array<{ label?: string; link?: LinkProps }>;
    isInverted?: boolean;
}

export const getLinkIcon = (
    theme: DefaultTheme,
    href: string,
    isInverted?: boolean
): string => {
    const linkIcons = theme.globals.icons.linkIcons;

    const fileExtension = `.${href?.split('.').pop() || ''}`;
    const result = linkIcons.find((icon) => {
        return icon.patterns?.find((pattern) => pattern.match(fileExtension));
    });

    return result?.iconChar || result?.iconUrl?.(isInverted) || '';
};

const LinkList: React.FC<LinkListProps> = ({ items, isInverted }) => {
    const { theme } = useLibTheme();

    return (
        <View>
            <List>
                {items?.map((item, i) => {
                    if (!item.link?.href) return null;

                    const linkIcon = getLinkIcon(
                        theme,
                        item.link.href,
                        isInverted
                    );

                    return (
                        <ListItem key={i}>
                            <StyledLink {...item.link} isInverted={isInverted}>
                                <span>{item.label}</span>
                                {linkIcon && (
                                    <IconContainer src={linkIcon} alt="" />
                                )}
                            </StyledLink>
                        </ListItem>
                    );
                })}
            </List>
        </View>
    );
};

export default LinkList;
