import React from 'react';
import styled from 'styled-components';

import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import Copy from 'components/typography/Copy';
import Heading from 'components/typography/Heading';
import { getColors as color, mq, spacings } from 'utils/styles';
import { useLibTheme, withLibTheme } from 'utils/LibThemeProvider';

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
    /** Text above author name */
    label?: string;

    /** Article's author name */
    author?: string;

    /** Author avatar image */
    avatar?: { src: string; alt?: string };

    /** Section background */
    bgMode?: 'full' | 'inverted';
}> = ({ label, author, avatar, bgMode }) => {
    const { colors } = useLibTheme();
    const isInverted = bgMode === 'inverted';
    const hasBg = bgMode === 'full';

    return (
        <Section
            addSeperation
            bgColor={
                isInverted
                    ? colors.sectionBg.dark
                    : hasBg
                    ? colors.sectionBg.medium
                    : colors.sectionBg.light
            }
            bgMode={mapToBgMode(bgMode, true)}
        >
            <Wrapper clampWidth="small" addWhitespace>
                {author && (
                    <React.Fragment>
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
                    </React.Fragment>
                )}
                <Seperator isInverted={isInverted} />
            </Wrapper>
        </Section>
    );
};

export const NewsAuthorCardComponent = NewsAuthorCard;
export default withLibTheme(NewsAuthorCard);
