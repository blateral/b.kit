import React from 'react';
import styled from 'styled-components';

import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import { copyStyle } from 'components/typography/Copy';
import { useLibTheme, withLibTheme } from 'utils/LibThemeProvider';
import { getColors as color, spacings } from 'utils/styles';
import Link, { LinkProps } from 'components/typography/Link';

const List = styled.ul<{ hasBg?: boolean; isInverted?: boolean }>`
    margin: 0;
    padding: 0;
    list-style: none;

    max-width: 880px;

    & > li + li {
        border-top: 1px solid
            ${({ theme, hasBg, isInverted }) =>
                hasBg && !isInverted
                    ? color(theme).new.elementBg.light
                    : color(theme).new.elementBg.medium};
    }

    & > li:first-child {
        border-top: 1px solid
            ${({ theme, hasBg, isInverted }) =>
                hasBg && !isInverted
                    ? color(theme).new.elementBg.light
                    : color(theme).new.elementBg.medium};
    }

    & > li:last-child {
        border-bottom: 1px solid
            ${({ theme, hasBg, isInverted }) =>
                hasBg && !isInverted
                    ? color(theme).new.elementBg.light
                    : color(theme).new.elementBg.medium};
    }
`;

const ListItem = styled.li``;

const IndexLink = styled(Link)<{ isInverted?: boolean }>`
    display: inline-block;
    text-decoration: underline;
    padding: ${spacings.nudge}px 0;

    ${copyStyle('copy', 'big')}
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
                <List hasBg={hasBg} isInverted={isInverted}>
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

export const IndexListComponent = IndexList;
export default withLibTheme(IndexList);
