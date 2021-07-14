import * as React from 'react';
import styled, { ThemeContext } from 'styled-components';

import Section from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import Copy from 'components/typography/Copy';
import Heading from 'components/typography/Heading';
import { getColors as color, mq, spacings } from 'utils/styles';

const Seperator = styled.div<{ isInverted?: boolean }>`
    border-bottom: solid 1px
        ${({ isInverted, theme }) =>
            isInverted ? color(theme).light : color(theme).dark};

    &:first-child {
        margin-bottom: ${spacings.spacer * 2}px;
    }

    &:last-child {
        margin-top: ${spacings.spacer * 2}px;
    }
`;

const ContentFlex = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    @media ${mq.medium} {
        flex-direction: row;
        justify-content: flex-start;
        text-align: left;
    }
`;

const Avatar = styled.img`
    border-radius: 50%; ;
`;

const Author = styled.div`
    margin-top: ${spacings.spacer}px;

    @media ${mq.medium} {
        margin-left: 0;
        margin-left: ${spacings.spacer}px;
    }
`;

const StyledCopy = styled(Copy)`
    text-transform: uppercase;
    margin-bottom: ${spacings.nudge * 2}px;
`;

const NewsAuthorCard: React.FC<{
    label?: string;
    author?: string;
    avatar?: { src: string; alt?: string };

    isInverted?: boolean;
    hasBack?: boolean;
}> = ({ label, author, avatar, isInverted = false, hasBack = false }) => {
    const theme = React.useContext(ThemeContext);

    return (
        <Section
            addSeperation
            bgColor={
                isInverted
                    ? color(theme).dark
                    : hasBack
                    ? color(theme).mono.light
                    : 'transparent'
            }
        >
            <Wrapper clampWidth="small" addWhitespace>
                {(avatar?.src || label || author) && (
                    <>
                        <Seperator />
                        <ContentFlex>
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
                        </ContentFlex>
                    </>
                )}
                <Seperator />
            </Wrapper>
        </Section>
    );
};

export default NewsAuthorCard;
