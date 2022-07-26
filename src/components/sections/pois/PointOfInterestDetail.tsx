import React, { FC } from 'react';
import styled from 'styled-components';

import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import Image, { ImageProps } from 'components/blocks/Image';
import Copy from 'components/typography/Copy';
import Heading from 'components/typography/Heading';
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

    &:not(:first-child) {
        margin-top: ${spacings.nudge * 3}px;
    }
`;

const TagWrapper = styled.div`
    padding-top: ${spacings.nudge}px;
    padding-left: ${spacings.nudge}px;
`;

const PoiTitle = styled(Heading)`
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

const PoiText = styled(Copy)`
    &:not(:first-child) {
        margin-top: ${spacings.nudge * 3}px;
    }
`;

const InfoListView = styled.ul`
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
    display: block;
    margin-bottom: ${spacings.nudge * 3}px;
`;

const Infos = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

const InfoContent = styled.li`
    display: -ms-grid;
    display: grid;
    margin: 0;

    -ms-grid-columns: min-content 1fr;
    grid-template-columns: min-content 1fr;
    -ms-grid-rows: min-content 1fr;
    grid-auto-rows: min-content 1fr;

    & + & {
        margin-top: ${spacings.nudge * 2}px;
    }

    & > * + * {
        margin-left: ${spacings.nudge * 2}px;
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

const InfoList: FC<{
    isInverted?: boolean;
    items?: PoiInfoGroup[];
    className?: string;
}> = ({ isInverted, items, className }) => {
    return (
        <InfoListView className={className}>
            {items
                ?.filter((e) => e.title)
                .map((group, i) => (
                    <InfoItem key={i}>
                        <InfoTitle
                            size="small"
                            type="copy-b"
                            renderAs="span"
                            isInverted={isInverted}
                        >
                            {group.title}
                        </InfoTitle>
                        <Infos>
                            {group?.items?.map((info, ii) => (
                                <InfoContent key={ii}>
                                    {info.icon && (
                                        <Icon isInverted={isInverted}>
                                            {info.icon(isInverted)}
                                        </Icon>
                                    )}
                                    {info.text && (
                                        <Copy
                                            size="small"
                                            isInverted={isInverted}
                                            innerHTML={info.text}
                                        />
                                    )}
                                </InfoContent>
                            ))}
                        </Infos>
                    </InfoItem>
                ))}
        </InfoListView>
    );
};

export interface PoiInfoGroup {
    title?: string;
    items: PoiInfo[];
}

export interface PoiInfo {
    /** icon injection function */
    icon?: (isInverted?: boolean) => React.ReactNode;
    /** POI info text (richtText) */
    text?: string;
}

const PointOfInterestDetail: React.FC<{
    /** ID value for targeting section with anchor hashes */
    anchorId?: string;

    /** POI image */
    image?: Omit<ImageProps, 'coverSpace'>;

    /** POI title */
    title?: string;

    /** POI text (richtext) */
    text?: string;

    /** Array of POI features */
    features?: string[];

    /** Additional POI infos */
    infos?: PoiInfoGroup[];

    /** Section background */
    bgMode?: 'inverted' | 'full';

    /** Function to inject custom feature node */
    customFeature?: (props: {
        key: React.Key;
        name: string;
        isInverted?: boolean;
    }) => React.ReactNode;
}> = ({
    anchorId,
    image,
    title,
    text,
    features,
    infos,
    bgMode,
    customFeature,
}) => {
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
                {image?.small && (
                    <StyledImage
                        {...image}
                        coverSpace
                        allowEdgeRadius
                        isInverted={isInverted}
                    />
                )}
                <Grid.Row
                    gutter={spacings.nudge * 5}
                    large={{ gutter: spacings.spacer }}
                >
                    <Grid.Col large={{ span: 9 / 12 }}>
                        {title && (
                            <PoiTitle size="heading-2" isInverted={isInverted}>
                                {title}
                            </PoiTitle>
                        )}
                        {features && (
                            <TagContainer>
                                {features.map((feature, i) => (
                                    <TagWrapper key={'tag_' + i}>
                                        {customFeature ? (
                                            customFeature({
                                                key: `headtag-${i}`,
                                                name: feature || '',
                                                isInverted: isInverted,
                                            })
                                        ) : (
                                            <span>{feature}</span>
                                        )}
                                    </TagWrapper>
                                ))}
                            </TagContainer>
                        )}
                        {text && (
                            <PoiText
                                size="medium"
                                isInverted={isInverted}
                                innerHTML={text}
                            />
                        )}
                    </Grid.Col>
                    {infos && infos.length > 0 && (
                        <Grid.Col large={{ span: 3 / 12 }}>
                            <InfoList isInverted={isInverted} items={infos} />
                        </Grid.Col>
                    )}
                </Grid.Row>
            </Wrapper>
        </Section>
    );
};

export const PointOfInterestDetailComponent = PointOfInterestDetail;
export default withLibTheme(PointOfInterestDetail);
