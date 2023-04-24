import React, { useMemo } from 'react';
import styled from 'styled-components';

import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import { EventProps } from 'components/blocks/EventBlock';
import Image from 'components/blocks/Image';
import Tag from 'components/blocks/Tag';
import Copy from 'components/typography/Copy';
import Heading from 'components/typography/Heading';
import { LinkProps } from 'components/typography/Link';
import { mq, spacings, getGlobals as global } from 'utils/styles';
import { useLibTheme, withLibTheme } from 'utils/LibThemeProvider';
import Grid from 'components/base/Grid';
import StatusFormatter from 'utils/statusFormatter';
import InfoList from 'components/blocks/InfoList';
import { isValidArray } from 'utils/arrays';

const ImageContainer = styled.div<{ hAlign?: 'left' | 'center' | 'right' }>`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: ${({ hAlign }) => {
        switch (hAlign) {
            case 'center':
                return 'center';

            case 'right':
                return 'flex-end';

            case 'left':
            default:
                return 'flex-start';
        }
    }};

    overflow: hidden;

    margin-bottom: ${spacings.spacer}px;
`;

const StyledImage = styled(Image)`
    &:not(:first-child) {
        display: none;
    }

    @media ${mq.medium} {
        max-width: 50%;

        &:not(:first-child) {
            display: inline-block;
        }

        & + & {
            margin-left: ${spacings.nudge}px;
        }
    }
`;

const ImageBackground = styled.div<{ isInverted?: boolean }>`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;

    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-color: ${({ theme, isInverted }) =>
        isInverted
            ? global(theme).sections.imagePlaceholderBg.inverted
            : global(theme).sections.imagePlaceholderBg.default};

    filter: blur(10px);
    transform: scale(1.5);
    z-index: -1;
`;

const StyledTextImage = styled(Image)`
    margin-top: ${spacings.nudge * 3}px;

    @media ${mq.medium} {
        display: none;
    }
`;

const TagContainer = styled.div`
    max-width: 880px;
    margin-top: -${spacings.nudge}px;
    margin-left: -${spacings.nudge}px;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

const TagWrapper = styled.div`
    padding-top: ${spacings.nudge}px;
    padding-left: ${spacings.nudge}px;
`;

const EventTitle = styled(Heading)`
    max-width: 880px;

    &:not(:first-child) {
        margin-top: ${spacings.nudge * 3}px;
    }

    @media ${mq.semilarge} {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2; /* number of lines to show */
        line-clamp: 2;
        -webkit-box-orient: vertical;
    }
`;

const EventDateTime = styled(Copy)`
    max-width: 880px;

    &:not(:first-child) {
        margin-top: ${spacings.nudge * 3}px;
    }
`;

const EventAddress = styled(Copy)`
    max-width: 880px;

    &:not(:first-child) {
        margin-top: ${spacings.nudge * 3}px;
    }

    ${EventDateTime} + & {
        margin-top: ${spacings.nudge}px;
    }

    @media ${mq.semilarge} {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
`;

const EventText = styled(Copy)`
    max-width: 880px;

    &:not(:first-child) {
        margin-top: ${spacings.nudge * 3}px;
    }
`;

export type DetailEventProps = Omit<
    EventProps,
    'customTag' | 'isInverted' | 'onTagClick' | 'link'
>;

export interface EventInfoGroup {
    title?: string;
    items: EventInfo[];
}

export interface EventInfo {
    /** icon injection function */
    icon?: (isInverted?: boolean) => React.ReactNode;
    /** Event info text (richtText) */
    text?: string;
}

const EventDetail: React.FC<{
    /** ID value for targeting section with anchor hashes */
    anchorId?: string;

    /** Array of event item settings */
    event?: DetailEventProps & { address?: string; abstract?: string };

    /** Additional event infos */
    infos?: EventInfoGroup[];

    /** Use image as blurred background for single images */
    useImageAsBg?: boolean;

    /** Section background */
    bgMode?: 'inverted' | 'full';

    /** Function to inject custom tag node */
    customTag?: (props: {
        key: React.Key;
        name: string;
        isInverted?: boolean;
        isActive?: boolean;
        link?: LinkProps;
    }) => React.ReactNode;
}> = ({ anchorId, event, infos, useImageAsBg, bgMode, customTag }) => {
    const { colors, globals } = useLibTheme();
    const isInverted = bgMode === 'inverted';
    const hasBg = bgMode === 'full';
    const hasInfos = useMemo(() => {
        return isValidArray(
            infos?.filter((info) => isValidArray(info.items, false)),
            false
        );
    }, [infos]);

    let publishedAt = '';
    let timespan = '';

    if (event?.date) {
        const formatter = new StatusFormatter(
            event.date.getTime(),
            '',
            globals.sections.eventDateFormat(event.date),
            globals.sections.eventTimeFormat(event.date),
            globals.sections.eventLocaleKey
        );
        publishedAt = formatter.getFormattedDate();

        timespan = formatter.getFormattedTimespan(
            globals.sections.eventTimespanFormat(event.date, event.duration),
            event.duration
        );
    }

    const images = useMemo(() => event?.images?.slice(0, 2), [event?.images]);
    const secondaryImage = images?.[1];

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
            <Wrapper addWhitespace>
                {isValidArray(images, false) && (
                    <ImageContainer hAlign={useImageAsBg ? 'center' : 'left'}>
                        {images.map((img, i) => {
                            if (!img.small) return null;
                            return (
                                <StyledImage
                                    key={i}
                                    {...img}
                                    coverSpace
                                    allowEdgeRadius
                                    isInverted={isInverted}
                                    ratios={{ small: { w: 4, h: 3 } }}
                                />
                            );
                        })}
                        <ImageBackground
                            isInverted={isInverted}
                            style={{
                                backgroundImage:
                                    useImageAsBg && images.length < 2
                                        ? `url(${event?.images?.[0].small})`
                                        : undefined,
                            }}
                        />
                    </ImageContainer>
                )}
                <Grid.Row
                    gutter={spacings.nudge * 5}
                    semilarge={{ gutter: spacings.spacer }}
                >
                    <Grid.Col semilarge={{ span: hasInfos ? 5.7 / 8 : 1 }}>
                        {event?.tags && (
                            <TagContainer>
                                {event.tags.map((tag, i) => (
                                    <TagWrapper key={'tag_' + i}>
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
                            </TagContainer>
                        )}
                        {event?.title && (
                            <EventTitle
                                size="heading-2"
                                isInverted={isInverted}
                            >
                                {event.title}
                            </EventTitle>
                        )}
                        {publishedAt && (
                            <EventDateTime
                                size="big"
                                type="copy-b"
                                isInverted={isInverted}
                            >
                                {publishedAt || ''}
                                {publishedAt && timespan ? ' | ' : ''}
                                {timespan}
                            </EventDateTime>
                        )}
                        {event?.address && (
                            <EventAddress
                                size="big"
                                type="copy"
                                innerHTML={event.address}
                                isInverted={isInverted}
                            />
                        )}
                        {event?.abstract && (
                            <EventText
                                size="medium"
                                type="copy-b"
                                isInverted={isInverted}
                            >
                                {event.abstract}
                            </EventText>
                        )}
                        {secondaryImage && (
                            <StyledTextImage
                                {...secondaryImage}
                                coverSpace
                                allowEdgeRadius
                                isInverted={isInverted}
                                ratios={{ small: { w: 4, h: 3 } }}
                            />
                        )}
                        {event?.text && (
                            <EventText
                                size="medium"
                                isInverted={isInverted}
                                innerHTML={event.text}
                            />
                        )}
                    </Grid.Col>
                    {hasInfos && (
                        <Grid.Col semilarge={{ span: 2.3 / 8 }}>
                            <InfoList isInverted={isInverted} items={infos} />
                        </Grid.Col>
                    )}
                </Grid.Row>
            </Wrapper>
        </Section>
    );
};

export const EventDetailComponent = EventDetail;
export default withLibTheme(EventDetail);
