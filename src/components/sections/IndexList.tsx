import React from 'react';
import styled from 'styled-components';

import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import { copyStyle } from 'components/typography/Copy';
import { useLibTheme, withLibTheme } from 'utils/LibThemeProvider';
import { getColors as color, spacings } from 'utils/styles';
import Link, { LinkProps } from 'components/typography/Link';
import ArrowDown from 'components/base/icons/ArrowDown';
import { useScrollIntoView } from 'utils/useScrollIntoView';

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
    display: inline-flex;
    align-items: center;
    max-width: 100%;
    text-decoration: underline;
    padding: ${spacings.nudge}px 0;

    ${copyStyle('copy', 'big')}
`;

const LinkLabel = styled.span`
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const IconWrapper = styled.span`
    display: inline-block;

    margin-left: ${spacings.nudge * 2}px;
`;

export interface IndexItem {
    label?: string;
    link?: LinkProps;
}

const IndexList: React.FC<{
    /** ID value for targeting section with anchor hashes */
    anchorId?: string;

    /** Array of index item settings */
    items?: IndexItem[];

    /** Section background */
    bgMode?: 'inverted' | 'full';

    /** Function to inject custom icon decorator */
    customIcon?: (props: { isInverted?: boolean }) => React.ReactNode;
}> = ({ anchorId, items, bgMode, customIcon }) => {
    const { colors } = useLibTheme();
    const { setActiveElement } = useScrollIntoView(500);

    const isInverted = bgMode === 'inverted';
    const hasBg = bgMode === 'full';

    const handleLinkClick = (ev: React.SyntheticEvent<HTMLAnchorElement>) => {
        if (!ev?.currentTarget) return;

        ev.preventDefault();
        const href = ev.currentTarget.getAttribute('href') as string;

        if (!href) return;

        const target = document.getElementById(href.split('#')?.[1] || href);
        if (target) setActiveElement(target as HTMLElement);
    };

    return (
        <Section
            addSeperation
            anchorId={anchorId}
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
                            <IndexLink
                                {...item.link}
                                isInverted={isInverted}
                                onClick={handleLinkClick}
                            >
                                <LinkLabel>{item.label}</LinkLabel>
                                <IconWrapper>
                                    {customIcon ? (
                                        customIcon({ isInverted })
                                    ) : (
                                        <ArrowDown />
                                    )}
                                </IconWrapper>
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
