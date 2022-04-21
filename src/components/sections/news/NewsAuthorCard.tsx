import * as React from 'react';
import styled, { ThemeContext } from 'styled-components';

import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import Copy from 'components/typography/Copy';
import Heading from 'components/typography/Heading';
import { getColors as color, mq, spacings } from 'utils/styles';
import { withLibTheme } from 'utils/LibThemeProvider';

const Seperator = styled.div<{ isInverted?: boolean; isTop?: boolean }>`
    border-bottom: solid 1px
        ${({ isInverted, theme }) =>
            isInverted
                ? color(theme).elementBg.light
                : color(theme).elementBg.dark};

    margin-top: ${({ isTop }) => !isTop && spacings.spacer}px;
    margin-bottom: ${({ isTop }) => isTop && spacings.spacer}px;
`;

const AuthorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    & > * + * {
        margin-top: ${spacings.spacer}px;
    }

    @media ${mq.medium} {
        flex-direction: row;
        justify-content: flex-start;
        text-align: left;

        & > * + * {
            margin-top: 0;
            margin-left: ${spacings.spacer}px;
        }
    }
`;

const Avatar = styled.img`
    border-radius: 50%; ;
`;

const Author = styled.div``;

const StyledCopy = styled(Copy)`
    text-transform: uppercase;
    margin-bottom: ${spacings.nudge * 3}px;
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
                    ? color(theme).sectionBg.dark
                    : hasBg
                    ? color(theme).sectionBg.medium
                    : 'transparent'
            }
            bgMode={mapToBgMode(bgMode, true)}
        >
            <Wrapper clampWidth="small" addWhitespace>
                {author && (
                    <>
                        <Seperator isTop isInverted={isInverted} />
                        <AuthorContainer>
                            {avatar && (
                                <Avatar src={avatar.src} alt={avatar.alt} />
                            )}
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
                        </AuthorContainer>
                    </>
                )}
                <Seperator isInverted={isInverted} />
            </Wrapper>
        </Section>
    );
};

export const NewsAuthorCardComponent = NewsAuthorCard;
export default withLibTheme(NewsAuthorCard);
