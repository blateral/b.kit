import { getColors as color, spacings, withRange } from 'utils/styles';
import React, { FC, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import Wrapper from 'components/base/Wrapper';
import Section, { mapToBgMode } from 'components/base/Section';
import Link, { LinkProps } from 'components/typography/Link';
import { withLibTheme } from 'utils/LibThemeProvider';
import Grid from 'components/base/Grid';

const Socials = styled.div<{ isInverted?: boolean }>`
    color: ${({ isInverted, theme }) =>
        isInverted
            ? color(theme).elementBg.light
            : color(theme).elementBg.dark};
`;

const StyledWrapper = styled(Wrapper)`
    padding-left: ${spacings.spacer}px;
    padding-right: ${spacings.spacer}px;
`;

const Social = styled(Link)`
    color: inherit;

    transition: color 0.2s ease-in-out;

    &:hover {
        color: ${({ theme }) => color(theme).elementBg.mediumHover};
    }

    & > * {
        margin: 0 auto;
        ${withRange([29, 64], 'height')}
        ${withRange([29, 64], 'width')}
    }
`;

const SocialNav: FC<{
    /** ID value for targeting section with anchor hashes */
    anchorId?: string;

    socials: Array<{
        link?: LinkProps;
        icon?: React.ReactNode;
    }>;
    bgMode?: 'full' | 'inverted';
}> = ({ anchorId, socials, bgMode }) => {
    const theme = useContext(ThemeContext);
    const isInverted = bgMode === 'inverted';
    const hasBg = bgMode === 'full';

    return (
        <Section
            anchorId={anchorId}
            bgColor={
                isInverted
                    ? color(theme).sectionBg.dark
                    : hasBg
                    ? color(theme).sectionBg.medium
                    : color(theme).sectionBg.light
            }
            bgMode={mapToBgMode(bgMode, true)}
            addSeperation
        >
            <StyledWrapper addWhitespace>
                <Socials>
                    <Grid.Row valign="center">
                        {socials.map((social, i) => {
                            if (!social?.link) return null;
                            return (
                                <Grid.Col
                                    span={
                                        socials.length > 4
                                            ? 3 / 12
                                            : 12 / socials.length / 12
                                    }
                                    key={i}
                                >
                                    <Social {...social?.link}>
                                        {social?.icon}
                                    </Social>
                                </Grid.Col>
                            );
                        })}
                    </Grid.Row>
                </Socials>
            </StyledWrapper>
        </Section>
    );
};

export const SocialNavComponent = SocialNav;
export default withLibTheme(SocialNav);
