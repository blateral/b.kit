import * as React from 'react';
import styled, { ThemeContext } from 'styled-components';

import Section from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import Image, { ImageProps } from 'components/blocks/Image';
import Title from 'components/blocks/Title';
import Copy from 'components/typography/Copy';
import Tag from 'components/blocks/Tag';
import { getColors, spacings, withRange } from 'utils/styles';

const Content = styled.div`
    & > * + * {
        ${withRange([spacings.spacer, spacings.spacer * 2], 'margin-top')};
    }
`;

const IntroHead = styled(Copy)`
    display: flex;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;
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

    isInverted?: boolean;
}> = ({ tag, meta, title, text, image, isInverted }) => {
    const theme = React.useContext(ThemeContext);
    return (
        <Section
            addSeperation
            bgColor={isInverted ? getColors(theme).dark : 'transparent'}
        >
            <Wrapper clampWidth="small" addWhitespace>
                <Content>
                    <IntroHead isInverted={isInverted}>
                        <Tag isInverted={isInverted}>{tag}</Tag>
                        <MetaBlock>
                            <div>{meta?.author}</div>
                            <div>{meta?.date}</div>
                        </MetaBlock>
                    </IntroHead>
                    <div>
                        <StyledTitle
                            colorMode={isInverted ? 'inverted' : 'default'}
                            title={title}
                        />
                        {text && (
                            <ContentBlock
                                isInverted={isInverted}
                                type="copy-b"
                                innerHTML={text}
                            />
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
