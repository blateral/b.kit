import React from 'react';
import styled from 'styled-components';

import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import { copyStyle } from 'components/typography/Copy';
import { useLibTheme } from 'utils/LibThemeProvider';
import { getColors as color, spacings } from 'utils/styles';
import Link, { LinkProps } from 'components/typography/Link';

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
`;

const ListItem = styled.li`
    & + & {
        border-top: 1px solid
            ${({ theme }) => color(theme).new.elementBg.medium};
    }

    &:first-child {
        border-top: 1px solid
            ${({ theme }) => color(theme).new.elementBg.medium};
    }

    &:last-child {
        border-bottom: 1px solid
            ${({ theme }) => color(theme).new.elementBg.medium};
    }
`;

const IndexLink = styled(Link)<{ isInverted?: boolean }>`
    display: inline-block;
    text-decoration: underline;
    padding: ${spacings.nudge * 2}px 0;

    ${copyStyle('copy', 'medium')}
    color: ${({ theme, isInverted }) =>
        isInverted
            ? color(theme).new.primary.inverted
            : color(theme).new.primary.default};

    transition: color 0.2s ease-in-out;

    @media (hover: hover) and (pointer: fine) {
        &:hover {
            color: ${({ theme, isInverted }) =>
                isInverted
                    ? color(theme).new.primary.invertedHover
                    : color(theme).new.primary.hover};
        }
    }
`;

export interface IndexItem {
    label?: string;
    link?: LinkProps;
}

const IndexList: React.FC<{
    /** Array of index item settings */
    items?: IndexItem[];

    /** Section background */
    bgMode?: 'inverted' | 'full';
}> = ({ items, bgMode }) => {
    const { colors } = useLibTheme();

    const isInverted = bgMode === 'inverted';
    const hasBg = bgMode === 'full';

    return (
        <Section
            addSeperation
            bgColor={
                isInverted
                    ? colors.new.sectionBg.dark
                    : hasBg
                    ? colors.new.sectionBg.medium
                    : colors.new.sectionBg.light
            }
            bgMode={mapToBgMode(bgMode, true)}
        >
            <Wrapper addWhitespace>
                <List>
                    {items?.map((item, i) => (
                        <ListItem key={i}>
                            <IndexLink {...item.link} isInverted={isInverted}>
                                {item.label}
                            </IndexLink>
                        </ListItem>
                    ))}
                </List>
            </Wrapper>
        </Section>
    );
};

export default IndexList;
