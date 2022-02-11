import * as React from 'react';
import styled, { ThemeContext } from 'styled-components';

import {
    getColors as color,
    getGlobals as global,
    spacings,
} from 'utils/styles';

import Grid from 'components/base/Grid';
import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';

import PromotionCard, {
    PromotionCardProps,
} from 'components/blocks/PromotionCard';
import { withLibTheme } from 'utils/LibThemeProvider';

const PosterContainer = styled.div<{ isMain?: boolean }>`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;

    height: ${({ isMain }) => isMain && '100%'};

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
                    ? color(theme).new.sectionBg.dark
                    : bgMode
                    ? color(theme).new.sectionBg.medium
                    : color(theme).new.sectionBg.light
            }
            bgMode={mapToBgMode(bgMode, false, isMirrored)}
        >
            <Wrapper
                clampWidth="normal"
                addWhitespace={global(theme).sections.edgeRadius ? true : false}
            >
                {aside ? (
                    isMirrored ? (
                        <Grid.Row>
                            <Grid.Col semilarge={{ span: 6 / 12 }}>
                                {main &&
                                    main.map((card, i) => (
                                        <PosterContainer key={i} isMain>
                                            <PromotionCard
                                                {...card}
                                                externalLinkIcon={
                                                    externalLinkIcon
                                                }
                                            />
                                        </PosterContainer>
                                    ))}
                            </Grid.Col>
                            <Grid.Col semilarge={{ span: 6 / 12 }}>
                                {aside.map((card, i) => (
                                    <PosterContainer key={i}>
                                        <PromotionCard
                                            {...card}
                                            externalLinkIcon={externalLinkIcon}
                                        />
                                    </PosterContainer>
                                ))}
                            </Grid.Col>
                        </Grid.Row>
                    ) : (
                        <Grid.Row>
                            <Grid.Col semilarge={{ span: 6 / 12 }}>
                                {aside.map((card, i) => (
                                    <PosterContainer key={i}>
                                        <PromotionCard
                                            {...card}
                                            externalLinkIcon={externalLinkIcon}
                                        />
                                    </PosterContainer>
                                ))}
                            </Grid.Col>
                            <Grid.Col semilarge={{ span: 6 / 12 }}>
                                {main &&
                                    main.map((card, i) => (
                                        <PosterContainer key={i} isMain>
                                            <PromotionCard
                                                {...card}
                                                externalLinkIcon={
                                                    externalLinkIcon
                                                }
                                            />
                                        </PosterContainer>
                                    ))}
                            </Grid.Col>
                        </Grid.Row>
                    )
                ) : (
                    main && (
                        <Grid.Row>
                            {main.map((card, i) => (
                                <Grid.Col
                                    semilarge={{
                                        span:
                                            (card.size === 'half' ? 6 : 12) /
                                            12,
                                    }}
                                    key={i}
                                >
                                    <PosterContainer key={i}>
                                        <PromotionCard
                                            {...card}
                                            externalLinkIcon={externalLinkIcon}
                                        />
                                    </PosterContainer>
                                </Grid.Col>
                            ))}
                        </Grid.Row>
                    )
                )}
            </Wrapper>
        </Section>
    );
};

export const CrossPromotionComponent = CrossPromotion;
export default withLibTheme(CrossPromotion);
