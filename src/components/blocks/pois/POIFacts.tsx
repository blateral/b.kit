import Check from 'components/base/icons/Check';
import { copyStyle } from 'components/typography/Copy';
import React from 'react';
import styled from 'styled-components';
import { getColors as color, spacings } from 'utils/styles';

const FeatureContainer = styled.div`
    margin-top: -${spacings.nudge}px;
    margin-left: -${spacings.nudge * 2}px;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    &:not(:first-child) {
        margin-top: ${spacings.nudge * 3}px;
    }
`;

const FeatureWrapper = styled.div`
    padding-top: ${spacings.nudge}px;
    padding-left: ${spacings.nudge * 2}px;
`;

const Feature = styled.span<{ isInverted?: boolean }>`
    display: inline-flex;
    align-items: center;
    ${copyStyle('copy', 'medium')}
    color: ${({ theme, isInverted }) =>
        isInverted ? color(theme).text.copyInverted : color(theme).text.copy};

    & > * + * {
        margin-left: ${spacings.nudge * 0.5}px;
    }
`;

const POIFacts: React.FC<{
    features: string[];
    customFeature?: (props: {
        key: React.Key;
        name: string;
        isInverted?: boolean;
    }) => React.ReactNode;
    isInverted?: boolean;
}> = ({ features, customFeature, isInverted }) => {
    return (
        <FeatureContainer>
            {features.map((feature, i) => (
                <FeatureWrapper key={'tag_' + i}>
                    {customFeature ? (
                        customFeature({
                            key: `headtag-${i}`,
                            name: feature || '',
                            isInverted: isInverted,
                        })
                    ) : (
                        <Feature isInverted={isInverted}>
                            <Check />
                            <span>{feature}</span>
                        </Feature>
                    )}
                </FeatureWrapper>
            ))}
        </FeatureContainer>
    );
};

export default POIFacts;
