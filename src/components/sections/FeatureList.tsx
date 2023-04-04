import React, { useMemo } from 'react';

import { useLibTheme, withLibTheme } from 'utils/LibThemeProvider';
import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import Feature, { FeatureProps } from 'components/blocks/Feature';
import { useEqualSheetHeight } from 'utils/useEqualSheetHeight';
import Grid from 'components/base/Grid';

const FeatureList: React.FC<{
    /** ID value for targeting section with anchor hashes */
    anchorId?: string;

    /** Center texts in every feature item */
    isCentered?: boolean;

    /** Array with feature item content */
    features?: Omit<FeatureProps, 'isInverted' | 'isCentered'>[];

    /** If not defined the component falls back to legacy logic: Uneven items = max 3 per row, even items = max 2 per row */
    columns?: 2 | 3;

    /** Section background */
    bgMode?: 'full' | 'splitted' | 'inverted';
}> = ({ anchorId, features, bgMode, isCentered = false, columns }) => {
    const { colors } = useLibTheme();
    const isInverted = bgMode === 'inverted';
    const featureCount = features?.length || 0;

    const isHalf = useMemo(() => {
        if (columns) {
            return columns === 2;
        }

        // legacy logic
        return features && features.length % 2 === 0;
    }, [features, columns]);

    const { sheetRefs: cardRefs } = useEqualSheetHeight<HTMLDivElement>({
        listLength: featureCount,
        identifiers: [
            '[data-sheet="title"]',
            '[data-sheet="desc"]',
            '[data-sheet="intro"]',
            '[data-sheet="text"]',
        ],
        responsive: {
            small: 1,
            medium: 1,
            semilarge: 2,
            large: isHalf ? 2 : 3,
            xlarge: isHalf ? 2 : 3,
        },
    });

    return (
        <Section
            addSeperation
            anchorId={anchorId}
            bgColor={
                isInverted
                    ? colors.sectionBg.dark
                    : bgMode
                    ? colors.sectionBg.medium
                    : colors.sectionBg.light
            }
            bgMode={mapToBgMode(bgMode)}
        >
            <Wrapper addWhitespace clampWidth="normal">
                <Grid.Row
                    halign={isHalf || featureCount <= 2 ? 'center' : 'left'}
                >
                    {features?.map((feature, i) => (
                        <Grid.Col
                            semilarge={{ span: 6 / 12 }}
                            large={{
                                span: isHalf ? 5 / 12 : 4 / 12,
                            }}
                            key={i}
                        >
                            <Feature
                                ref={cardRefs[i]}
                                {...feature}
                                isCentered={isCentered}
                                isInverted={isInverted}
                            />
                        </Grid.Col>
                    ))}
                </Grid.Row>
            </Wrapper>
        </Section>
    );
};

export const FeatureListComponent = FeatureList;
export default withLibTheme(FeatureList);
