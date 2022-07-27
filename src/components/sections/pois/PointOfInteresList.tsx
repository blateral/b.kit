import Section from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import React from 'react';
import styled from 'styled-components';
import { mq, spacings } from 'utils/styles';
import PointOfInterest, {
    POIBasics,
    POILocation,
} from '../../blocks/pois/PointOfInterest';

const Content = styled.div`
    & > * + * {
        margin-top: ${spacings.nudge * 5}px;
    }

    @media ${mq.large} {
        & > * + * {
            margin-top: ${spacings.spacer}px;
        }
    }
`;

const PointOfInterestList: React.FC<{
    pois: {
        id: number;

        facts?: string[];
        customFacts?: (props: {
            key: React.Key;
            name: string;
            isInverted?: boolean;
        }) => React.ReactNode;
        location: POILocation;
        basics: POIBasics;
    }[];
    isInverted?: boolean;
}> = ({ pois, isInverted }) => {
    return (
        <Section addSeperation>
            <Wrapper addWhitespace>
                <Content>
                    {pois.map((poi, i) => {
                        return (
                            <PointOfInterest
                                key={i}
                                {...poi}
                                isInverted={isInverted}
                            />
                        );
                    })}
                </Content>
            </Wrapper>
        </Section>
    );
};

export default PointOfInterestList;
