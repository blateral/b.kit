import * as React from 'react';
import styled, { ThemeContext } from 'styled-components';

import { getColors as color, spacings, mq } from 'utils/styles';

import Grid from 'components/base/Grid';
import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';

import Intro from 'components/blocks/Intro';
import PromotionCard, {
    PromotionCardProps,
} from 'components/blocks/PromotionCard';
import { HeadlineTag } from 'components/typography/Heading';

const StyledIntro = styled(Intro)`
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

    & + & {
        margin-top: ${spacings.spacer}px;
    }
`;

const CrossPromotion: React.FC<{
    title?: string;
    titleAs?: HeadlineTag;
    superTitle?: string;
    superTitleAs?: HeadlineTag;
    text?: string;

    main?: Array<PromotionCardProps & { size?: 'full' | 'half' }>;
    aside?: Array<PromotionCardProps & { size?: 'full' | 'half' }>;

    bgMode?: 'full' | 'inverted' | 'splitted';

    primaryAction?: (isInverted?: boolean) => React.ReactNode;
    secondaryAction?: (isInverted?: boolean) => React.ReactNode;
}> = ({
    title,
    titleAs,
    superTitle,
    superTitleAs,
    text,
    primaryAction,
    secondaryAction,
    main,
    aside,
    bgMode,
}) => {
    const theme = React.useContext(ThemeContext);

    const isInverted = bgMode === 'inverted';

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
            {title && (
                <Wrapper addWhitespace>
                    <StyledIntro
                        title={title}
                        titleAs={titleAs}
                        superTitle={superTitle}
                        superTitleAs={superTitleAs}
                        text={text}
                        colorMode={isInverted ? 'inverted' : 'default'}
                        secondaryAction={secondaryAction}
                        primaryAction={primaryAction}
                    />
                </Wrapper>
            )}
            <Wrapper clampWidth="normal">
                <Grid.Row>
                    <Grid.Col>
                        {aside ? (
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
                        ) : (
                            <Grid.Row>
                                {main &&
                                    main.map((card, i) => (
                                        <Grid.Col
                                            semilarge={{
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
