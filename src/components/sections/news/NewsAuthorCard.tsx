import * as React from 'react';
import styled, { ThemeContext } from 'styled-components';

import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import Copy from 'components/typography/Copy';
import Heading from 'components/typography/Heading';
import { getColors as color, spacings } from 'utils/styles';
import { withLibTheme } from 'utils/LibThemeProvider';
import Grid from 'components/base/Grid';

const Seperator = styled.div<{ isInverted?: boolean; isTop?: boolean }>`
    border-bottom: solid 1px
        ${({ isInverted, theme }) =>
            isInverted
                ? color(theme).new.elementBg.light
                : color(theme).new.elementBg.dark};

    margin-top: ${({ isTop }) => !isTop && spacings.nudge * 2}px;
    margin-bottom: ${({ isTop }) => isTop && spacings.nudge * 2}px;
`;

const Avatar = styled.img`
    border-radius: 50%; ;
`;

const Author = styled.div``;

const StyledCopy = styled(Copy)`
    text-transform: uppercase;
    margin-bottom: ${spacings.nudge}px;
`;

const NewsAuthorCard: React.FC<{
    label?: string;
    author?: string;
    avatar?: { src: string; alt?: string };

    bgMode?: 'full' | 'inverted';
}> = ({ label, author, avatar, bgMode }) => {
    const theme = React.useContext(ThemeContext);

    const isInverted = bgMode === 'inverted';
    const hasBg = bgMode === 'full';

    return (
        <Section
            addSeperation
            bgColor={
                isInverted
                    ? color(theme).new.sectionBg.dark
                    : hasBg
                    ? color(theme).new.sectionBg.medium
                    : 'transparent'
            }
            bgMode={mapToBgMode(bgMode, true)}
        >
            <Wrapper clampWidth="small" addWhitespace>
                {author && (
                    <>
                        <Seperator isTop isInverted={isInverted} />
                        <Grid.Row valign="center">
                            {avatar && (
                                <Grid.Col medium={{ span: 2.5 / 12 }}>
                                    <Avatar src={avatar.src} alt={avatar.alt} />
                                </Grid.Col>
                            )}
                            <Grid.Col medium={{ span: 8 / 12 }}>
                                <Author>
                                    {author && (
                                        <StyledCopy
                                            isInverted={isInverted}
                                            type="copy-b"
                                        >
                                            {label || 'Written By'}
                                        </StyledCopy>
                                    )}
                                    <Heading
                                        isInverted={isInverted}
                                        size="heading-2"
                                    >
                                        {author}
                                    </Heading>
                                </Author>
                            </Grid.Col>
                        </Grid.Row>
                    </>
                )}
                <Seperator isInverted={isInverted} />
            </Wrapper>
        </Section>
    );
};

export const NewsAuthorCardComponent = NewsAuthorCard;
export default withLibTheme(NewsAuthorCard);
