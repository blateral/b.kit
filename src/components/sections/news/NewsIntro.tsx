import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

import Section from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import Image, { ImageProps } from 'components/blocks/Image';
import Title from 'components/blocks/Title';
import Copy from 'components/typography/Copy';
import Tag from 'components/blocks/Tag';
import {
    getColors as color,
    spacings,
    withRange,
    getGlobalSettings as global,
} from 'utils/styles';
import StatusFormatter from 'utils/statusFormatter';

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

const HeadTag = styled(Tag)`

    flex: 0 1 auto;
    margin-right: ${spacings.nudge * 2}px;
`;

const MetaBlock = styled.div`
    flex: 1 1 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-items: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    * + & {
        margin-left: ${spacings.spacer}px;
    }

    & > * + * {
        margin-left: ${spacings.spacer}px;
    }
`;

const StyledTitle = styled(Title) <{ clampTitle?: boolean }>`
    max-width: ${({ clampTitle }) =>
        clampTitle && (13 / 28) * spacings.wrapperSmall + 'px'};
`;

const ContentBlock = styled(Copy) <{
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
    tags?: string[];
    onTagClick?: (name: string) => void;
    meta?: { date?: Date; author?: string };
    title?: string;
    text?: string;
    image?: ImageProps;

    isInverted?: boolean;
    hasBack?: boolean;
}> = ({
    tags,
    onTagClick,
    meta,
    title,
    text,
    image,
    isInverted = false,
    hasBack = false,
}) => {
    const theme = useContext(ThemeContext);

    let publishedAt = '';
    if (meta?.date) {
        const formatter = new StatusFormatter(
            meta.date.getTime(),
            '',
            global(theme).sections.newsDateFormat,
            global(theme).sections.newsTimeFormat,
            global(theme).sections.newsLocaleKey
        );
        publishedAt = formatter.getFormattedDate();
    }

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
                <Content>
                    <IntroHead isInverted={isInverted}>
                        {tags && tags.map((tag, index) => {

                            return (
                                <HeadTag
                                    key={`headtag-${index}`}
                                    isInverted={isInverted}
                                    onClick={
                                        onTagClick
                                            ? () => onTagClick(tag)
                                            : undefined
                                    }
                                >
                                    {tag}
                                </HeadTag>
                            )
                        })
                            }
                            {publishedAt && (
                                <MetaBlock>
                                    <div>{meta?.author}</div>
                                    <div>{publishedAt}</div>
                                </MetaBlock>
                            )}
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
                        {image?.small && (
                            <div>
                                <Image coverSpace {...image} />
                            </div>
                        )}
                    </Content>
                </Wrapper>
            </Section>
        );
    };

export default NewsIntro;
