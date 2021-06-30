import Section from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import Image, { ImageProps } from 'components/blocks/Image';
import Title from 'components/blocks/Title';
import Copy from 'components/typography/Copy';
import * as React from 'react';
import styled from 'styled-components';
import { spacings, withRange } from 'utils/styles';

const Content = styled.div`
    & > * + * {
        ${withRange([spacings.spacer, spacings.spacer * 2], 'margin-top')};
    }
`;

const IntroHead = styled.div`
    display: flex;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const Tag = styled(Copy)`
    border: 1px solid #000;
    border-radius: 15px;

    padding: 5px 10px;
`;

const MetaBlock = styled.div`
    display: flex;

    flex-direction: row;
    align-items: center;

    & > * + * {
        margin-left: 20px;
    }
`;

const StyledTitle = styled(Title)<{ clampTitle?: boolean }>`
    max-width: ${({ clampTitle }) =>
        clampTitle && (13 / 28) * spacings.wrapperSmall + 'px'};
`;

const ContentBlock = styled(Copy)<{
    clampText?: boolean;
    isCentered?: boolean;
}>`
    display: block;
    margin: ${({ isCentered }) => isCentered && '0 auto'};
    max-width: ${({ clampText }) =>
        clampText && (19 / 28) * spacings.wrapper + 'px'};

    :not(:first-child) {
        padding-top: ${spacings.nudge * 5}px;
    }
`;

const NewsIntro: React.FC<{
    tag?: string;
    meta?: { date?: string; author?: string };
    title?: string;
    text?: string;
    image?: ImageProps;
}> = ({ tag, meta, title, text, image }) => {
    return (
        <Section>
            <Wrapper clampWidth="small" addWhitespace>
                <Content>
                    <IntroHead>
                        <Tag>{tag}</Tag>
                        <MetaBlock>
                            <Copy>{meta?.author}</Copy>
                            <Copy>{meta?.date}</Copy>
                        </MetaBlock>
                    </IntroHead>
                    <div>
                        <StyledTitle title={title} />
                        {text && (
                            <ContentBlock type="copy-b" innerHTML={text} />
                        )}
                    </div>
                    {image && (
                        <div>
                            <Image {...image} />
                        </div>
                    )}
                </Content>
            </Wrapper>
        </Section>
    );
};

export default NewsIntro;
