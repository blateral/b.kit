import React from 'react';
import styled from 'styled-components';

import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import { EventProps } from 'components/blocks/EventBlock';
import Image from 'components/blocks/Image';
import Tag from 'components/blocks/Tag';
import Copy from 'components/typography/Copy';
import Heading from 'components/typography/Heading';
import { LinkProps } from 'components/typography/Link';
import { mq, spacings } from 'utils/styles';
import { useLibTheme, withLibTheme } from 'utils/LibThemeProvider';
import Grid from 'components/base/Grid';

const StyledImage = styled(Image)`
    &:not(:last-child) {
        margin-bottom: ${spacings.spacer}px;
    }
`;

const TagContainer = styled.div`
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
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    line-clamp: 2;
    -webkit-box-orient: vertical;

    &:not(:first-child) {
        margin-top: ${spacings.nudge * 3}px;
    }
`;

const EventInfo = styled(Copy)`
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    line-clamp: 2;
    -webkit-box-orient: vertical;

    &:not(:first-child) {
        margin-top: ${spacings.nudge * 3}px;
    }
`;

const EventText = styled(Copy)`
    &:not(:first-child) {
        margin-top: ${spacings.nudge * 3}px;
    }
`;

const InfoList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;

    @media ${mq.semilarge} {
        display: flex;
        flex-direction: row;
        align-items: flex-start;

        & > * {
            flex: 0 0 33.33%;
        }
    }

    @media ${mq.large} {
        display: block;
    }
`;

const InfoItem = styled.li`
    & + & {
        padding-top: ${spacings.nudge * 3}px;
    }

    @media ${mq.semilarge} {
        & + & {
            padding-top: 0;
            padding-left: ${spacings.spacer}px;
        }
    }

    @media ${mq.large} {
        & + & {
            padding-left: 0;
            padding-top: ${spacings.nudge * 5}px;
        }
    }
`;

const InfoTitle = styled(Copy)`
    margin-bottom: ${spacings.nudge * 3}px;
`;

const InfoContent = styled.div`
    display: -ms-grid;
    display: grid;

    -ms-grid-columns: min-content 1fr;
    grid-template-columns: min-content 1fr;
    -ms-grid-rows: min-content 1fr;
    grid-auto-rows: min-content 1fr;

    & + & {
        padding-top: ${spacings.nudge * 2}px;
    }

    & > * + * {
        padding-left: ${spacings.nudge * 2}px;
    }
`;

const Icon = styled(Copy)`
    height: 20px;
    width: 20px;

    & > * {
        height: 20px;
        width: 20px;
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
    icon?: (isInverted?: boolean) => React.ReactNode;
    label?: string;
}

const EventDetail: React.FC<{
    /** ID value for targeting section with anchor hashes */
    anchorId?: string;

    /** Array of event item settings */
    event: DetailEventProps & { infoText?: string };

    /** Additional event infos */
    infos?: EventInfoGroup[];

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
}> = ({ anchorId, event, infos, bgMode, customTag }) => {
    const { colors } = useLibTheme();
    const isInverted = bgMode === 'inverted';
    const hasBg = bgMode === 'full';

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
                {event.image?.small && (
                    <StyledImage
                        {...event.image}
                        coverSpace
                        isInverted={isInverted}
                    />
                )}
                <Grid.Row
                    gutter={spacings.nudge * 5}
                    large={{ gutter: spacings.spacer }}
                >
                    <Grid.Col large={{ span: 9 / 12 }}>
                        {event.tags && (
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
                        {event.title && (
                            <EventTitle
                                size="heading-2"
                                isInverted={isInverted}
                            >
                                {event.title}
                            </EventTitle>
                        )}
                        {event.infoText && (
                            <EventInfo
                                size="big"
                                isInverted={isInverted}
                                innerHTML={event.infoText}
                            />
                        )}
                        {event.text && (
                            <EventText
                                size="medium"
                                isInverted={isInverted}
                                innerHTML={event.text}
                            />
                        )}
                    </Grid.Col>
                    {infos && infos.length > 0 && (
                        <Grid.Col large={{ span: 3 / 12 }}>
                            <InfoList>
                                {infos.map((infoGroup, i) => (
                                    <InfoItem key={i}>
                                        <InfoTitle
                                            size="small"
                                            type="copy-b"
                                            isInverted={isInverted}
                                        >
                                            {infoGroup.title}
                                        </InfoTitle>
                                        {infoGroup?.items?.map((info, ii) => (
                                            <InfoContent key={ii}>
                                                {info.icon && (
                                                    <Icon
                                                        isInverted={isInverted}
                                                    >
                                                        {info.icon(isInverted)}
                                                    </Icon>
                                                )}
                                                <Copy
                                                    size="small"
                                                    type="copy"
                                                    isInverted={isInverted}
                                                >
                                                    {info.label}
                                                </Copy>
                                            </InfoContent>
                                        ))}
                                    </InfoItem>
                                ))}
                            </InfoList>
                        </Grid.Col>
                    )}
                </Grid.Row>
            </Wrapper>
        </Section>
    );
};

export const EventDetailComponent = EventDetail;
export default withLibTheme(EventDetail);
