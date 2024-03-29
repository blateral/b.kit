import * as React from 'react';
import styled from 'styled-components';

import Grid, { gridSettings } from 'components/base/Grid';
import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';

import PromotionCard, {
    PromotionCardProps,
} from 'components/blocks/PromotionCard';
import { useLibTheme, withLibTheme } from 'utils/LibThemeProvider';

const Card = styled(PromotionCard)<{ isMain?: boolean }>`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;

    height: ${({ isMain }) => isMain && '100%'};

    flex: 1 0 auto;

    & + & {
        margin-top: ${gridSettings.gutter}px;
    }
`;

const CrossPromotion: React.FC<{
    /** ID value for targeting section with anchor hashes */
    anchorId?: string;

    /** Promotion card settings in main grid column (default: on right side). The size prop controls the width. */
    main?: Array<
        Omit<PromotionCardProps, 'externalLinkIcon' | 'isInverted'> & {
            size?: 'full' | 'half';
        }
    >;

    /** Promotion card settings in second grid column (default: on left side). The size prop controls the width. */
    aside?: Array<
        Omit<PromotionCardProps, 'externalLinkIcon' | 'isInverted'> & {
            size?: 'full' | 'half';
        }
    >;

    /** Section background */
    bgMode?: 'full' | 'inverted' | 'splitted';

    /** Switching order of main and aside columns */
    isMirrored?: boolean;

    /** Inject custom icon that indicates an external link */
    externalLinkIcon?: React.ReactNode;
}> = ({ anchorId, main, aside, bgMode, isMirrored, externalLinkIcon }) => {
    const { colors } = useLibTheme();

    const isInverted = bgMode === 'inverted';

    return (
        <Section
            addSeperation
            anchorId={anchorId}
            bgColor={
                isInverted
                    ? colors.sectionBg.dark
                    : bgMode
                    ? colors.sectionBg.medium
                    : colors.sectionBg.light
            }
            bgMode={mapToBgMode(bgMode, false, isMirrored)}
        >
            <Wrapper clampWidth="normal" addWhitespace>
                {aside ? (
                    isMirrored ? (
                        <Grid.Row>
                            <Grid.Col semilarge={{ span: 6 / 12 }}>
                                {main &&
                                    main.map((card, i) => (
                                        <Card
                                            key={i}
                                            isMain
                                            {...card}
                                            externalLinkIcon={externalLinkIcon}
                                            isInverted={isInverted}
                                        />
                                    ))}
                            </Grid.Col>
                            <Grid.Col semilarge={{ span: 6 / 12 }}>
                                {aside.map((card, i) => (
                                    <Card
                                        key={i}
                                        {...card}
                                        externalLinkIcon={externalLinkIcon}
                                        isInverted={isInverted}
                                    />
                                ))}
                            </Grid.Col>
                        </Grid.Row>
                    ) : (
                        <Grid.Row>
                            <Grid.Col semilarge={{ span: 6 / 12 }}>
                                {aside.map((card, i) => (
                                    <Card
                                        key={i}
                                        {...card}
                                        externalLinkIcon={externalLinkIcon}
                                        isInverted={isInverted}
                                    />
                                ))}
                            </Grid.Col>
                            <Grid.Col semilarge={{ span: 6 / 12 }}>
                                {main &&
                                    main.map((card, i) => (
                                        <Card
                                            key={i}
                                            isMain
                                            {...card}
                                            externalLinkIcon={externalLinkIcon}
                                            isInverted={isInverted}
                                        />
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
                                    <Card
                                        key={i}
                                        {...card}
                                        externalLinkIcon={externalLinkIcon}
                                        isInverted={isInverted}
                                    />
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
