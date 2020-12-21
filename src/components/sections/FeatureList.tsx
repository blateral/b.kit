import * as React from 'react';
import styled, { ThemeContext } from 'styled-components';

import { getColors as color, spacings, mq } from 'utils/styles';
import Section, { BgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import Feature, { FeatureProps } from 'components/blocks/Feature';
import Intro from 'components/blocks/Intro';

const IntroBlock = styled.div`
    padding-bottom: ${spacings.spacer * 2}px;
`;

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
    title?: string;
    superTitle?: string;
    text?: string;

    primaryAction?: (isInverted?: boolean) => React.ReactNode;
    secondaryAction?: (isInverted?: boolean) => React.ReactNode;

    isInverted?: boolean;
    features?: FeatureProps[];
    bgMode?: 'full' | 'splitted';
}> = ({
    features,
    bgMode,
    isInverted = false,
    title,
    superTitle,
    text,
    primaryAction,
    secondaryAction,
}) => {
    const theme = React.useContext(ThemeContext);

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
                {title && (
                    <IntroBlock>
                        <Intro
                            title={title}
                            superTitle={superTitle}
                            text={text}
                            isInverted={isInverted}
                            secondaryAction={secondaryAction}
                            primaryAction={primaryAction}
                        />
                    </IntroBlock>
                )}
                {features && (
                    <ContentContainer
                        isHalf={features.length % 2 == 0 ? true : false}
                    >
                        {features &&
                            features.map((feature, i) => {
                                return (
                                    <Feature
                                        key={i}
                                        isInverted={isInverted}
                                        {...feature}
                                    />
                                );
                            })}
                    </ContentContainer>
                )}
            </Wrapper>
        </Section>
    );
};

export default FeatureList;
