import { getColors as color, spacings, withRange } from 'utils/styles';
import React, { FC, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import Wrapper from 'components/base/Wrapper';
import Section, { mapToBgMode } from 'components/base/Section';
import Link from 'components/typography/Link';
import { withLibTheme } from 'utils/LibThemeProvider';

const Socials = styled.div<{ isInverted?: boolean }>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    margin: -${spacings.nudge}px;

    color: ${({ isInverted, theme }) =>
        isInverted ? color(theme).light : color(theme).dark};
`;

const StyledWrapper = styled(Wrapper)`
    padding-left: ${spacings.spacer * 2}px;
    padding-right: ${spacings.spacer * 2}px;
`;

const Social = styled(Link)`
    color: inherit;
    padding: ${spacings.nudge}px;

    transition: color 0.2s ease-in-out;

    &:hover {
        color: ${({ theme }) => color(theme).mono.dark};
    }

    & > * {
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
                <Socials isInverted={isInverted}>
                    {socials?.map((social, i) => (
                        <Social key={i} href={social?.href} isExternal>
                            {social?.icon}
                        </Social>
                    ))}
                </Socials>
            </StyledWrapper>
        </Section>
    );
};

export const SocialNavComponent = SocialNav;
export default withLibTheme(SocialNav);
