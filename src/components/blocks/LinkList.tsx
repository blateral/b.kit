import React from 'react';

import Copy from 'components/typography/Copy';
import Link, { LinkProps } from 'components/typography/Link';
import styled from 'styled-components';
import { spacings } from 'utils/styles';
import { useLibTheme } from 'utils/LibThemeProvider';

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
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const IconContainer = styled.span`
    margin-left: ${spacings.nudge}px;
`;

export interface LinkListProps {
    items?: { label?: string; link?: LinkProps }[];
    isInverted?: boolean;
}

const LinkList: React.FC<LinkListProps> = ({ items, isInverted }) => {
    const { globals } = useLibTheme();

    const linkIcons = globals.icons.linkIcons;

    return (
        <View>
            <List>
                {items?.map((item, i) => {
                    const fileExtension = `.${
                        item.link?.href && item.link.href.split('.').pop()
                    }`;

                    const filteredIcons = linkIcons.variations.filter((icons) =>
                        icons.patterns?.find((pattern) =>
                            pattern.match(fileExtension)
                        )
                    );

                    if (item.link?.href) {
                        return (
                            <ListItem key={i}>
                                <StyledLink {...item.link}>
                                    <Copy isInverted={isInverted}>
                                        {item.label}
                                    </Copy>
                                    <IconContainer>
                                        {filteredIcons.length > 0 ? (
                                            filteredIcons.map((icon) => {
                                                return (
                                                    <span key={i}>
                                                        {icon.icon(isInverted)}
                                                    </span>
                                                );
                                            })
                                        ) : (
                                            <span>
                                                {linkIcons.default(isInverted)}
                                            </span>
                                        )}
                                    </IconContainer>
                                </StyledLink>
                            </ListItem>
                        );
                    } else return null;
                })}
            </List>
        </View>
    );
};

export default LinkList;
