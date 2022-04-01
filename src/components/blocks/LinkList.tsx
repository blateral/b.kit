import Copy from 'components/typography/Copy';
import Link, { LinkProps } from 'components/typography/Link';
import React from 'react';
import styled, { ThemeContext } from 'styled-components';
import { getGlobals, spacings } from 'utils/styles';

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

const LinkList: React.FC<{
    items?: { label?: string; link?: LinkProps }[];
}> = ({ items }) => {
    const theme = React.useContext(ThemeContext);
    return (
        <View>
            <List>
                {items &&
                    items.map((item, i) => {
                        const fileExtension =
                            item.link?.href && item.link.href.split('.').pop(); //"pdf"

                        return (
                            <ListItem key={i}>
                                <StyledLink {...item.link}>
                                    <Copy>{item.label}</Copy>
                                    <IconContainer>
                                        {getGlobals(theme)
                                            .icons.linkIcons.filter((icons) =>
                                                icons?.patterns?.find(
                                                    (pattern) =>
                                                        pattern ===
                                                        `.${fileExtension}`
                                                )
                                            )
                                            .map((icon, ii) => {
                                                return (
                                                    <span key={ii}>
                                                        {icon.icon}
                                                    </span>
                                                );
                                            })}
                                    </IconContainer>
                                </StyledLink>
                            </ListItem>
                        );
                    })}
            </List>
        </View>
    );
};

export default LinkList;
