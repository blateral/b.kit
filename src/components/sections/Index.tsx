import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import Copy from 'components/typography/Copy';
import React from 'react';
import styled from 'styled-components';
import { useLibTheme } from 'utils/LibThemeProvider';
import { getColors, spacings, withRange } from 'utils/styles';

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
`;

const ListItem = styled.li`
    ${withRange([spacings.nudge, spacings.nudge * 2], 'padding-top')};
    ${withRange([spacings.nudge, spacings.nudge * 2], 'padding-bottom')};

    border-top: 1px solid
        ${({ theme }) => getColors(theme).new.elementBg.medium};
    border-bottom: 1px solid
        ${({ theme }) => getColors(theme).new.elementBg.medium};
`;

const Index: React.FC<{
    items?: { label?: string; link?: string }[];
    bgMode?: 'inverted' | 'full';
}> = ({ items, bgMode }) => {
    const isInverted = bgMode === 'inverted';
    const { colors } = useLibTheme();
    return (
        <Section
            addSeperation
            bgColor={
                isInverted
                    ? colors.new.sectionBg.dark
                    : bgMode
                    ? colors.new.sectionBg.medium
                    : colors.new.sectionBg.light
            }
            bgMode={mapToBgMode(bgMode)}
        >
            <Wrapper>
                <List>
                    {items?.map((item, i) => {
                        return (
                            <ListItem key={i}>
                                <Copy
                                    isInverted={isInverted}
                                    textColor={colors.new.primary.default}
                                >
                                    <a href={item.link}>{item.label}</a>
                                </Copy>
                            </ListItem>
                        );
                    })}
                </List>
            </Wrapper>
        </Section>
    );
};

export default Index;
