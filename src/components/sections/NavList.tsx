import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import NavBlock, { NavBlockProps } from 'components/blocks/NavBlock';
import React from 'react';
import styled from 'styled-components';
import { useLibTheme } from 'utils/LibThemeProvider';
import { mq, spacings } from 'utils/styles';

const List = styled.ul`
    margin: -${spacings.spacer * 2}px -${spacings.spacer}px;
    padding: 0;
    list-style: none;

    display: flex;
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    padding: ${spacings.spacer * 2}px ${spacings.spacer}px;
    flex: 1 0 100%;

    @media ${mq.medium} {
        flex: 0 0 50%;
    }

    @media ${mq.large} {
        flex: 0 0 33.33%;
    }
`;

const NavList: React.FC<{
    items: NavBlockProps[];
    bgMode?: 'full';
}> = ({ items, bgMode }) => {
    const { colors } = useLibTheme();

    const hasBg = bgMode === 'full';
    return (
        <Section
            addSeperation
            bgColor={
                hasBg ? colors.new.sectionBg.medium : colors.new.sectionBg.light
            }
            bgMode={mapToBgMode(bgMode, true)}
        >
            <Wrapper addWhitespace>
                <List>
                    {items.map((item, i) => {
                        return (
                            <ListItem key={i}>
                                <NavBlock {...item} />
                            </ListItem>
                        );
                    })}
                </List>
            </Wrapper>
        </Section>
    );
};

export default NavList;
