import * as React from 'react';
import { ThemeContext } from 'styled-components';

import { getColors as color } from 'utils/styles';
import { withLibTheme } from 'utils/LibThemeProvider';
import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import Feature, { FeatureProps } from 'components/blocks/Feature';
import { useEqualSheetHeight } from 'utils/useEqualSheetHeight';
import Grid from 'components/base/Grid';

const FeatureList: React.FC<{
    isCentered?: boolean;
    features?: FeatureProps[];
    bgMode?: 'full' | 'splitted' | 'inverted';
}> = ({ features, bgMode, isCentered = false }) => {
    const theme = React.useContext(ThemeContext);
    const isInverted = bgMode === 'inverted';
    const featureCount = features?.length || 0;

    const { sheetRefs: cardRefs } = useEqualSheetHeight({
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
            large: featureCount % 2 === 0 ? 2 : 3,
            xlarge: featureCount % 2 === 0 ? 2 : 3,
        },
    });
    const isHalf = features && features.length % 2 === 0;

    return (
        <Section
            addSeperation
            bgColor={
                isInverted
                    ? color(theme).new.sectionBg.dark
                    : bgMode
                    ? color(theme).new.sectionBg.medium
                    : color(theme).new.sectionBg.light
            }
            bgMode={mapToBgMode(bgMode)}
        >
            <Wrapper addWhitespace clampWidth="normal">
                <Grid.Row>
                    {features &&
                        features.map((feature, i) => {
                            return (
                                <Grid.Col
                                    semilarge={{ span: 6 / 12 }}
                                    large={{
                                        span: isHalf ? 5 / 12 : 4 / 12,
                                        move: isHalf ? 1 / 12 : 0,
                                    }}
                                    key={i}
                                >
                                    <div ref={cardRefs[i]}>
                                        <Feature
                                            isCentered={isCentered}
                                            isInverted={isInverted}
                                            addWhitespace
                                            {...feature}
                                        />
                                    </div>
                                </Grid.Col>
                            );
                        })}
                </Grid.Row>
            </Wrapper>
        </Section>
    );
};

export const FeatureListComponent = FeatureList;
export default withLibTheme(FeatureList);
