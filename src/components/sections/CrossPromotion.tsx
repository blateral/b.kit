import * as React from 'react';
import styled, { ThemeContext } from 'styled-components';

import {
    getColors as color,
    getGlobalSettings as global,
    spacings,
    mq,
} from 'utils/styles';

import Grid from 'components/base/Grid';
import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';

import PromotionCard, {
    PromotionCardProps,
} from 'components/blocks/PromotionCard';
import { withLibTheme } from 'utils/LibThemeProvider';

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
    main?: Array<
        Omit<PromotionCardProps, 'externalLinkIcon'> & {
            size?: 'full' | 'half';
        }
    >;
    aside?: Array<
        Omit<PromotionCardProps, 'externalLinkIcon'> & {
            size?: 'full' | 'half';
        }
    >;

    bgMode?: 'full' | 'inverted' | 'splitted';
    isMirrored?: boolean;
    externalLinkIcon?: React.ReactNode;
}> = ({ main, aside, bgMode, isMirrored, externalLinkIcon }) => {
    const theme = React.useContext(ThemeContext);

    const isInverted = bgMode === 'inverted';

    return (
        <Section
            addSeperation
            bgColor={
                isInverted
                    ? color(theme).new.bg.inverted
                    : bgMode
                    ? color(theme).new.bg.mono
                    : color(theme).new.bg.default
            }
            bgMode={mapToBgMode(bgMode, false, isMirrored)}
        >
            <Wrapper
                clampWidth="normal"
                addWhitespace={global(theme).sections.edgeRadius ? true : false}
            >
                <Grid.Row>
                    <Grid.Col>
                        {aside ? (
                            isMirrored ? (
                                <FlexGrid>
                                    <FlexGridCol>
                                        {main &&
                                            main.map((card, i) => (
                                                <PosterContainer key={i}>
                                                    <PromotionCard
                                                        {...card}
                                                        externalLinkIcon={
                                                            externalLinkIcon
                                                        }
                                                    />
                                                </PosterContainer>
                                            ))}
                                    </FlexGridCol>

                                    <FlexGridCol>
                                        {aside.map((card, i) => (
                                            <PosterContainer key={i}>
                                                <PromotionCard
                                                    {...card}
                                                    externalLinkIcon={
                                                        externalLinkIcon
                                                    }
                                                />
                                            </PosterContainer>
                                        ))}
                                    </FlexGridCol>
                                </FlexGrid>
                            ) : (
                                <FlexGrid>
                                    <FlexGridCol>
                                        {aside.map((card, i) => (
                                            <PosterContainer key={i}>
                                                <PromotionCard
                                                    {...card}
                                                    externalLinkIcon={
                                                        externalLinkIcon
                                                    }
                                                />
                                            </PosterContainer>
                                        ))}
                                    </FlexGridCol>
                                    <FlexGridCol>
                                        {main &&
                                            main.map((card, i) => (
                                                <PosterContainer key={i}>
                                                    <PromotionCard
                                                        {...card}
                                                        externalLinkIcon={
                                                            externalLinkIcon
                                                        }
                                                    />
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
                                            semilarge={{
                                                span:
                                                    (card.size === 'half'
                                                        ? 14
                                                        : 28) / 28,
                                            }}
                                            key={i}
                                        >
                                            <PosterContainer key={i}>
                                                <PromotionCard
                                                    {...card}
                                                    externalLinkIcon={
                                                        externalLinkIcon
                                                    }
                                                />
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

export const CrossPromotionComponent = CrossPromotion;
export default withLibTheme(CrossPromotion);
