import React, { FC } from 'react';
import styled from 'styled-components';

import { mq } from 'utils/styles';
import { useLibTheme, withLibTheme } from 'utils/LibThemeProvider';
import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import Fact, { FactProps } from 'components/blocks/Fact';
import { useEqualSheetHeight } from 'utils/useEqualSheetHeight';
import Grid from 'components/base/Grid';

const FactFill = styled.div`
    display: none;

    @media ${mq.large} {
        display: block;
    }
`;

const FactGrid: FC<{
    /** ID value for targeting section with anchor hashes */
    anchorId?: string;

    /** Controls amount columns on large screens */
    columns?: 3 | 4 | 6;

    /** Array with fact card data */
    facts?: Array<Omit<FactProps, 'isInverted' | 'isCentered'>>;

    /** Section background */
    bgMode?: 'full' | 'inverted' | 'splitted';

    /** Center text inside fact card items */
    isCentered?: boolean;
}> = ({ anchorId, columns = 3, facts, bgMode, isCentered }) => {
    const { colors } = useLibTheme();
    const factCount = facts?.length || 0;

    const isInverted = bgMode === 'inverted';

    const { sheetRefs: cardRefs } = useEqualSheetHeight<HTMLDivElement>({
        listLength: factCount,
        identifiers: ['[data-sheet="title"]', '[data-sheet="subtitle"]'],
        responsive: {
            small: 1,
            medium: columns < 3 ? columns : 3,
            semilarge: columns < 4 ? columns : 4,
            large: columns,
            xlarge: columns,
        },
    });

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
            bgMode={mapToBgMode(bgMode)}
        >
            <Wrapper clampWidth="normal" addWhitespace>
                <Grid.Row>
                    {facts &&
                        facts.map((fact, i) => {
                            if (
                                fact?.title ||
                                fact?.subTitle ||
                                fact?.image ||
                                fact?.text
                            ) {
                                return (
                                    <Grid.Col
                                        key={i}
                                        medium={{ span: 4 / 12 }}
                                        semilarge={
                                            columns > 3
                                                ? { span: 3 / 12 }
                                                : { span: 4 / 12 }
                                        }
                                        large={{ span: 12 / columns / 12 }}
                                    >
                                        <Fact
                                            key={i}
                                            ref={cardRefs[i]}
                                            {...fact}
                                            isCentered={isCentered}
                                            isInverted={isInverted}
                                        />
                                    </Grid.Col>
                                );
                            } else {
                                return (
                                    <Grid.Col
                                        key={i}
                                        medium={{ span: 4 / 12 }}
                                        semilarge={
                                            columns > 3
                                                ? { span: 3 / 12 }
                                                : { span: 4 / 12 }
                                        }
                                        large={{ span: 12 / columns / 12 }}
                                    >
                                        <FactFill ref={cardRefs[i]} key={i} />
                                    </Grid.Col>
                                );
                            }
                        })}
                </Grid.Row>
            </Wrapper>
        </Section>
    );
};

export const FactGridComponent = FactGrid;
export default withLibTheme(FactGrid);
