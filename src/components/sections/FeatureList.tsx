import * as React from 'react';

import styled, { ThemeContext } from 'styled-components';
import { getColors as color, spacings, mq } from '../../utils/styles';

import Section, { BgMode } from '../base/Section';
import Wrapper from '../base/Wrapper';
import Feature from '../blocks/Feature';
import { ImageProps as Props } from '../blocks/Image';

const ContentContainer = styled.div`
    & > * + * {
        padding-top: ${spacings.spacer * 2}px;
    }

    @media ${mq.semilarge} {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
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
        & > * {
            flex: 1 0 33.33%;
            max-width: 33.33%;
        }
    }
`;

const FeatureList: React.FC<{
    featureContent?: {
        image?: Props;
        title?: string;
        description?: string;
        intro?: string;
        text?: string;

        primaryAction?: (isInverted?: boolean) => React.ReactNode;
        secondaryAction?: (isInverted?: boolean) => React.ReactNode;
    }[];

    bgMode?: 'full' | 'splitted';
    isInverted?: boolean;
}> = ({ featureContent, bgMode, isInverted }) => {
    const getSectionBgMode = (): BgMode | undefined => {
        switch (bgMode) {
            case 'full':
                return 'full';
            case 'splitted':
                return 'half-right';
            default:
                return undefined;
        }
    };

    const theme = React.useContext(ThemeContext);
    return (
        <Section
            addSeperation
            bgColor={
                isInverted
                    ? color(theme).black
                    : bgMode
                    ? color(theme).mono.light
                    : 'transparent'
            }
            bgMode={!isInverted ? getSectionBgMode() : undefined}
        >
            <Wrapper addWhitespace clampWidth="normal">
                <ContentContainer>
                    {featureContent &&
                        featureContent.map(
                            (
                                {
                                    image,
                                    title,
                                    description,
                                    intro,
                                    text,
                                    primaryAction,
                                    secondaryAction,
                                },
                                i
                            ) => {
                                return (
                                    <Feature
                                        key={i}
                                        image={image}
                                        title={title}
                                        description={description}
                                        intro={intro}
                                        text={text}
                                        primaryAction={primaryAction}
                                        secondaryAction={secondaryAction}
                                    />
                                );
                            }
                        )}
                </ContentContainer>
            </Wrapper>
        </Section>
    );
};

export default FeatureList;
