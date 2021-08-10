import * as React from 'react';
import styled, { ThemeContext } from 'styled-components';

import { getColors as color, spacings, mq } from 'utils/styles';
import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import Feature, { FeatureProps } from 'components/blocks/Feature';
import { useEqualSheetHeight } from 'utils/useEqualSheetHeight';

const ContentContainer = styled.div<{ isHalf?: boolean }>`
    & > * + * {
        padding-top: ${spacings.spacer * 2}px;
    }

    @media ${mq.semilarge} {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: ${({ isHalf }) => (isHalf ? 'center' : 'flex-start')};
        align-items: flex-start;

        margin-left: -20px;
        margin-top: -40px;

        & > * {
            padding-left: 20px;
            padding-top: 40px;
            flex: 1 0 50%;
            max-width: 50%;
        }
    }

    @media ${mq.large} {
        padding-right: ${({ isHalf }) => isHalf && '7%'};
        padding-left: ${({ isHalf }) => isHalf && '7%'};

        & > * {
            flex: ${({ isHalf }) => (isHalf ? '1 0 50%' : '1 0 33.33%')};
            max-width: ${({ isHalf }) => (isHalf ? '50%' : '33.33%')};
        }
    }
`;

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

    return (
        <Section
            addSeperation
            bgColor={
                isInverted
                    ? color(theme).dark
                    : bgMode
                    ? color(theme).mono.light
                    : 'transparent'
            }
            bgMode={mapToBgMode(bgMode)}
        >
            <Wrapper addWhitespace clampWidth="normal">
                {features && (
                    <ContentContainer
                        isHalf={features.length % 2 === 0 ? true : false}
                    >
                        {features &&
                            features.map((feature, i) => {
                                return (
                                    <div key={i} ref={cardRefs[i]}>
                                        <Feature
                                            isCentered={isCentered}
                                            isInverted={isInverted}
                                            addWhitespace
                                            {...feature}
                                        />
                                    </div>
                                );
                            })}
                    </ContentContainer>
                )}
            </Wrapper>
        </Section>
    );
};

export default FeatureList;
