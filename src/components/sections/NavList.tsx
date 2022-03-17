import React from 'react';
import styled from 'styled-components';

import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import NavBlock, { NavBlockProps } from 'components/blocks/NavBlock';
import { useLibTheme, withLibTheme } from 'utils/LibThemeProvider';
import { mq, spacings } from 'utils/styles';

const List = styled.ul`
    margin: 0;
    margin-top: -${spacings.spacer}px;
    margin-left: -${spacings.spacer}px;
    padding: 0;
    list-style: none;

    display: flex;
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;

    @media ${mq.medium} {
        margin-top: -${spacings.spacer * 2}px;
    }
`;

const ListItem = styled.li`
    padding-top: ${spacings.spacer}px;
    padding-left: ${spacings.spacer}px;
    flex: 1 0 100%;

    @media ${mq.medium} {
        flex: 0 0 50%;
        max-width: 50%;
        padding-top: ${spacings.spacer * 2}px;
    }

    @media ${mq.large} {
        flex: 0 0 33.33%;
        max-width: 33.33%;
    }
`;

export type NavItem = Omit<
    NavBlockProps,
    'isInverted' | 'customIcon' | 'customTitleIcon' | 'className'
>;

const NavList: React.FC<{
    /** Array of navigation item settings */
    items?: NavItem[];

    /** Section backgrounds */
    bgMode?: 'full' | 'inverted';

    /** Function to inject custom alert icon */
    customIcon?: (props: { isInverted?: boolean }) => React.ReactNode;

    /** Function to inject custom title decorator icon */
    customTitleIcon?: (props: { isInverted?: boolean }) => React.ReactNode;
}> = ({ items, bgMode, customIcon, customTitleIcon }) => {
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
                            <NavBlock
                                {...item}
                                isInverted={isInverted}
                                customIcon={customIcon}
                                customTitleIcon={customTitleIcon}
                            />
                        </ListItem>
                    ))}
                </List>
            </Wrapper>
        </Section>
    );
};

export const NavListComponent = NavList;
export default withLibTheme(NavList);
