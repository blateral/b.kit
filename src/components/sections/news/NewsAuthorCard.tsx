import * as React from 'react';
import Section from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import Copy from 'components/typography/Copy';
import styled from 'styled-components';
import Heading from 'components/typography/Heading';
import { spacings } from 'utils/styles';

const ContentBlock = styled.div`
    &:before {
        content: '';
        display: block;
        width: 100%;
        height: 1px;
        background-color: #000;
        margin-bottom: ${spacings.spacer * 2}px;
    }

    &:after {
        content: '';
        display: block;
        width: 100%;
        height: 1px;
        background-color: #000;
        margin-top: ${spacings.spacer * 2}px;
    }
`;

const ContentFlex = styled.div`
    display: flex;
    align-items: center;
`;

const Avatar = styled.img`
    border-radius: 50%; ;
`;

const Author = styled.div`
    margin-left: ${spacings.spacer}px;
`;

const StyledCopy = styled(Copy)`
    text-transform: uppercase;
    margin-bottom: ${spacings.nudge * 2}px;
`;

const NewsAuthorCard: React.FC<{
    label?: string;
    author?: string;
    avatar?: { src: string; alt?: string };
}> = ({ label = 'Written By', author, avatar }) => {
    return (
        <Section>
            <Wrapper clampWidth="small">
                <ContentBlock>
                    <ContentFlex>
                        {avatar && <Avatar src={avatar.src} alt={avatar.alt} />}
                        <Author>
                            <StyledCopy type="copy-b">{label}</StyledCopy>
                            <Heading size="heading-2">{author}</Heading>
                        </Author>
                    </ContentFlex>
                </ContentBlock>
            </Wrapper>
        </Section>
    );
};

export default NewsAuthorCard;
