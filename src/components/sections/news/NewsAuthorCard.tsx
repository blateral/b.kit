import * as React from 'react';
import styled, { ThemeContext } from 'styled-components';

import Section from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import Copy from 'components/typography/Copy';
import Heading from 'components/typography/Heading';
import { getColors as color, mq, spacings } from 'utils/styles';

const ContentBlock = styled.div<{ isInverted?: boolean }>`
    &:before {
        content: '';
        display: block;
        width: 100%;
        height: 1px;
        background-color: ${({ isInverted }) => (isInverted ? '#fff' : '#000')};
        margin-bottom: ${spacings.spacer * 2}px;
    }

    &:after {
        content: '';
        display: block;
        width: 100%;
        height: 1px;
        background-color: ${({ isInverted }) => (isInverted ? '#fff' : '#000')};
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
}> = ({
    label = 'Written By',
    author,
    avatar,
    isInverted = false,
    hasBack = false,
}) => {
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
                <ContentBlock isInverted={isInverted}>
                    <ContentFlex>
                        {avatar && <Avatar src={avatar.src} alt={avatar.alt} />}
                        <Author>
                            <StyledCopy isInverted={isInverted} type="copy-b">
                                {label}
                            </StyledCopy>
                            <Heading isInverted={isInverted} size="heading-2">
                                {author}
                            </Heading>
                        </Author>
                    </ContentFlex>
                </ContentBlock>
            </Wrapper>
        </Section>
    );
};

export default NewsAuthorCard;
