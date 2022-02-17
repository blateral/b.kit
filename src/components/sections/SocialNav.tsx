import { getColors as color, spacings, withRange } from 'utils/styles';
import React, { FC, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import Wrapper from 'components/base/Wrapper';
import Section, { mapToBgMode } from 'components/base/Section';
import Link from 'components/typography/Link';
import { withLibTheme } from 'utils/LibThemeProvider';
import Grid from 'components/base/Grid';

const Socials = styled.div<{ isInverted?: boolean }>`
    color: ${({ isInverted, theme }) =>
        isInverted ? color(theme).light : color(theme).dark};
`;

const StyledWrapper = styled(Wrapper)`
    padding-left: ${spacings.nudge * 5}px;
    padding-right: ${spacings.nudge * 5}px;
`;

const Social = styled(Link)`
    color: inherit;

    transition: color 0.2s ease-in-out;

    &:hover {
        color: ${({ theme }) => color(theme).mono.dark};
    }

    & > * {
        margin: 0 auto;
        ${withRange([29, 64], 'height')}
        ${withRange([29, 64], 'width')}
    }
`;

const SocialNav: FC<{
    socials: Array<{
        href: string;
        icon: React.ReactNode;
    }>;
    bgMode?: 'full' | 'inverted';
}> = ({ socials, bgMode }) => {
    const theme = useContext(ThemeContext);
    const isInverted = bgMode === 'inverted';
    const hasBg = bgMode === 'full';

    return (
        <Section
            bgColor={
                isInverted
                    ? color(theme).new.sectionBg.dark
                    : hasBg
                    ? color(theme).new.sectionBg.medium
                    : color(theme).new.sectionBg.light
            }
            bgMode={mapToBgMode(bgMode, true)}
            addSeperation
        >
            <StyledWrapper addWhitespace>
                <Socials>
                    <Grid.Row valign="center">
                        {socials.map((social, i) => {
                            return (
                                <Grid.Col
                                    span={
                                        socials.length > 4
                                            ? 3 / 12
                                            : 12 / socials.length / 12
                                    }
                                    key={i}
                                >
                                    <Social>{social?.icon}</Social>
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
