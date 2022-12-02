import React from 'react';
import styled from 'styled-components';

import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import Image, { ImageProps } from 'components/blocks/Image';
import Copy from 'components/typography/Copy';
import Heading from 'components/typography/Heading';
import { spacings } from 'utils/styles';
import { useLibTheme, withLibTheme } from 'utils/LibThemeProvider';
import Grid from 'components/base/Grid';
import InfoList, { InfoGroup } from 'components/blocks/InfoList';
import POIFacts from 'components/blocks/POIFacts';
import { isValidArray } from 'utils/arrays';

const StyledImage = styled(Image)`
    &:not(:last-child) {
        margin-bottom: ${spacings.spacer}px;
    }
`;

const PoiTitle = styled(Heading)`
    max-width: 880px;

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

const PointOfInterestDetail: React.FC<{
    /** ID value for targeting section with anchor hashes */
    anchorId?: string;

    /** POI image */
    image?: Omit<ImageProps, 'coverSpace'>;

    /** POI title */
    title?: string;

    /** POI intro text */
    intro?: string;

    /** POI text (richtext) */
    text?: string;

    /** Array of POI facts */
    facts?: string[];

    /** Additional POI infos */
    infos?: InfoGroup[];

    /** Section background */
    bgMode?: 'inverted' | 'full';

    /** Function to inject custom feature node */
    customFact?: (props: {
        key: React.Key;
        name: string;
        isInverted?: boolean;
    }) => React.ReactNode;
}> = ({
    anchorId,
    image,
    title,
    intro,
    text,
    facts,
    infos,
    bgMode,
    customFact,
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
                        {isValidArray(facts, false) && (
                            <POIFacts
                                isInverted={isInverted}
                                facts={facts}
                                customFact={customFact}
                            />
                        )}
                        {intro && (
                            <PoiText
                                size="medium"
                                type="copy-b"
                                isInverted={isInverted}
                                innerHTML={intro}
                            />
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
