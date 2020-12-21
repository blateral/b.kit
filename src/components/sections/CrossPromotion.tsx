import * as React from 'react';
import styled, { ThemeContext } from 'styled-components';

import { getColors as color, spacings, mq } from 'utils/styles';

import Grid from 'components/base/Grid';
import Section, { BgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';

import Intro from 'components/blocks/Intro';
import PromotionCard, {
    PromotionCardProps,
} from 'components/blocks/PromotionCard';

const IntroBlock = styled.div`
    padding-bottom: ${spacings.spacer * 2}px;
`;

const FlexGrid = styled.div`
    @media ${mq.semilarge} {
        display: flex;
        flex-direction: row;
        margin-left: -${spacings.spacer}px;
    }
`;

const FlexGridCol = styled.div`
    display: flex;
    flex-direction: column;

    @media ${mq.semilarge} {
        flex: 1 0 50%;
        max-width: 50%;
        padding-left: ${spacings.spacer}px;
    }

    & + & {
        margin-top: ${spacings.spacer}px;

        @media ${mq.semilarge} {
            margin-top: 0;
        }
    }
`;

const PosterContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;

    flex: 1 0 auto;

    color: ${({ theme }) => color(theme).white};

    &:before {
        content: '';
        width: 0px;
        display: block;

        @media ${mq.semilarge} {
            min-height: ${(50 / 16) * 9}vw;
        }

        @media ${mq.xlarge} {
            min-height: ${(((100 / 28) * 13) / 16) * 9}vw;
        }

        @media ${mq.xxlarge} {
            min-height: ${(((spacings.wrapperLarge / 28) * 13) / 16) * 9}px;
        }
    }

    & + & {
        margin-top: ${spacings.spacer}px;
    }
`;

const CrossPromotion: React.FC<{
    title?: string;
    superTitle?: string;
    text?: string;

    main?: Array<PromotionCardProps & { size: 'full' | 'half' }>;
    aside?: Array<PromotionCardProps & { size: 'full' | 'half' }>;
    isMirrored?: boolean;

    bgMode?: 'full' | 'splitted';

    primaryAction?: (isInverted?: boolean) => React.ReactNode;
    secondaryAction?: (isInverted?: boolean) => React.ReactNode;

    isInverted?: boolean;
}> = ({
    title,
    superTitle,
    text,
    primaryAction,
    secondaryAction,
    main,
    aside,
    isInverted = false,
    bgMode,
    isMirrored = false,
}) => {
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
            <Wrapper clampWidth="normal" addWhitespace>
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

                <Grid.Row>
                    <Grid.Col>
                        {aside ? (
                            isMirrored ? (
                                <FlexGrid>
                                    <FlexGridCol>
                                        {main &&
                                            main.map((card, i) => (
                                                <PosterContainer key={i}>
                                                    <PromotionCard {...card} />
                                                </PosterContainer>
                                            ))}
                                    </FlexGridCol>

                                    <FlexGridCol>
                                        {aside.map((card, i) => (
                                            <PosterContainer key={i}>
                                                <PromotionCard {...card} />
                                            </PosterContainer>
                                        ))}
                                    </FlexGridCol>
                                </FlexGrid>
                            ) : (
                                <FlexGrid>
                                    <FlexGridCol>
                                        {aside.map((card, i) => (
                                            <PosterContainer key={i}>
                                                <PromotionCard {...card} />
                                            </PosterContainer>
                                        ))}
                                    </FlexGridCol>
                                    <FlexGridCol>
                                        {main &&
                                            main.map((card, i) => (
                                                <PosterContainer key={i}>
                                                    <PromotionCard {...card} />
                                                </PosterContainer>
                                            ))}
                                    </FlexGridCol>
                                </FlexGrid>
                            )
                        ) : (
                            <Grid.Row>
                                {main &&
                                    main.map((card, i) => (
                                        <Grid.Col
                                            medium={{
                                                span:
                                                    (card.size === 'half'
                                                        ? 14
                                                        : 28) / 28,
                                            }}
                                            key={i}
                                        >
                                            <PosterContainer key={i}>
                                                <PromotionCard {...card} />
                                            </PosterContainer>
                                        </Grid.Col>
                                    ))}
                            </Grid.Row>
                        )}
                    </Grid.Col>
                </Grid.Row>
            </Wrapper>
        </Section>
    );
};

export default CrossPromotion;
