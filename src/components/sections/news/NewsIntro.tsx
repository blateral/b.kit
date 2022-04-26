import React from 'react';
import styled from 'styled-components';

import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import Image, { ImageProps } from 'components/blocks/Image';
import Title from 'components/blocks/Title';
import Copy from 'components/typography/Copy';
import Tag, { TagProps } from 'components/blocks/Tag';
import { mq, spacings } from 'utils/styles';
import StatusFormatter from 'utils/statusFormatter';
import { useLibTheme, withLibTheme } from 'utils/LibThemeProvider';
import { LinkProps } from 'components/typography/Link';

const Content = styled.div`
    & > * + * {
        margin-top: ${spacings.nudge * 3}px;
    }
`;

const IntroHead = styled(Copy)`
    display: flex;

    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    & > * + * {
        margin-top: ${spacings.nudge * 2}px;
    }

    @media ${mq.medium} {
        flex-direction: row;

        & > * + * {
            margin-top: 0;
            margin-left: ${spacings.nudge * 2}px;
        }
    }
`;

const Tags = styled.div`
    flex: 1 1 80%;

    display: flex;
    flex-wrap: wrap;
    margin-top: -${spacings.nudge}px;
    margin-left: -${spacings.nudge}px;
`;

const TagWrapper = styled.span`
    display: inline-block;
    padding-top: ${spacings.nudge}px;
    padding-left: ${spacings.nudge}px;
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

    & > * + * {
        margin-left: ${spacings.nudge * 3}px;
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
        padding-top: ${spacings.spacer}px;
    }
`;

const NewsIntro: React.FC<{
    /** ID value for targeting section with anchor hashes */
    anchorId?: string;

    /** Array of news tags */
    tags?: TagProps[];

    /** News article's meta informations */
    meta?: { date?: Date; author?: string };

    /** Title of news article */
    title?: string;

    /** Main image of news article */
    image?: Omit<ImageProps, 'coverSpace'>;

    /** Text of news article (richtext)  */
    text?: string;

    /** Section background */
    bgMode?: 'full' | 'inverted';

    /** Function to inject custom tag node */
    customTag?: (props: {
        key: React.Key;
        name: string;
        isInverted?: boolean;
        isActive?: boolean;
        link?: LinkProps;
    }) => React.ReactNode;
}> = ({ anchorId, tags, meta, title, text, image, bgMode, customTag }) => {
    const { globals, colors } = useLibTheme();
    const isInverted = bgMode === 'inverted';
    const hasBg = bgMode === 'full';

    let publishedAt = '';
    if (meta?.date) {
        const formatter = new StatusFormatter(
            meta.date.getTime(),
            '',
            globals.sections.newsDateFormat,
            globals.sections.newsTimeFormat,
            globals.sections.newsLocaleKey
        );
        publishedAt = formatter.getFormattedDate();
    }

    return (
        <Section
            addSeperation
            anchorId={anchorId}
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
                <Content>
                    <IntroHead isInverted={isInverted}>
                        <Tags>
                            {tags?.map((tag, i) => (
                                <TagWrapper key={`headtag-${i}`}>
                                    {customTag ? (
                                        customTag({
                                            key: `headtag-${i}`,
                                            name: tag.name || '',
                                            isInverted: isInverted,
                                            isActive: false,
                                            link: tag.link,
                                        })
                                    ) : (
                                        <Tag
                                            link={tag.link}
                                            isInverted={isInverted}
                                        >
                                            {tag.name}
                                        </Tag>
                                    )}
                                </TagWrapper>
                            ))}
                        </Tags>
                        {(publishedAt || meta?.author) && (
                            <MetaBlock>
                                {meta?.author && <div>{meta?.author}</div>}
                                {publishedAt && <div>{publishedAt}</div>}
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
                        <Image {...image} coverSpace isInverted={isInverted} />
                    )}
                </Content>
            </Wrapper>
        </Section>
    );
};

export const NewsIntroComponent = NewsIntro;
export default withLibTheme(NewsIntro);
