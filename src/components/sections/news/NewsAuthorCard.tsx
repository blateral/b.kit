import * as React from 'react';
import styled, { ThemeContext } from 'styled-components';

import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import Copy from 'components/typography/Copy';
import Heading from 'components/typography/Heading';
import { getColors as color, mq, spacings } from 'utils/styles';

const Seperator = styled.div<{ isInverted?: boolean }>`
    border-bottom: solid 1px
        ${({ isInverted, theme }) =>
            isInverted ? color(theme).light : color(theme).dark};
`;

const ContentFlex = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    margin: ${spacings.spacer * 2}px 0;

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

    // isInverted?: boolean;
    // hasBg?: boolean;
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
                    ? color(theme).dark
                    : hasBg
                    ? color(theme).mono.light
                    : 'transparent'
            }
            bgMode={mapToBgMode(bgMode)}
        >
            <Wrapper clampWidth="small" addWhitespace>
                {author && (
                    <>
                        <Seperator isInverted={isInverted} />
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
                <Seperator isInverted={isInverted} />
            </Wrapper>
        </Section>
    );
};

export default NewsAuthorCard;
