import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import POICard, { POICardProps } from 'components/blocks/POICard';
import React from 'react';
import styled from 'styled-components';
import { useLibTheme } from 'utils/LibThemeProvider';
import { mq, spacings } from 'utils/styles';

const Content = styled.div`
    & > * + * {
        margin-top: ${spacings.nudge * 5}px;
    }

    @media ${mq.large} {
        & > * + * {
            margin-top: ${spacings.nudge * 3}px;
        }
    }
`;

export type PointOfInterestListItem = Omit<POICardProps, 'isInverted'>;

const PointOfInterestList: React.FC<{
    /** ID value for targeting section with anchor hashes */
    anchorId?: string;

    /** Array of POI card settings */
    pois: PointOfInterestListItem[];

    /** Section background */
    bgMode?: 'full' | 'inverted';
}> = ({ anchorId, bgMode, pois }) => {
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
                <Content>
                    {pois.map((poi, i) => {
                        return (
                            <POICard key={i} {...poi} isInverted={isInverted} />
                        );
                    })}
                </Content>
            </Wrapper>
        </Section>
    );
};

export default PointOfInterestList;
