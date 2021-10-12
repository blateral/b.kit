import React, { FC, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

import { getColors as color, mq, spacings } from 'utils/styles';
import { withLibTheme } from 'utils/LibThemeProvider';
import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import Fact, { FactProps } from 'components/blocks/Fact';
import { useEqualSheetHeight } from 'utils/useEqualSheetHeight';

const ContentContainer = styled.div<{ columns?: number }>`
    & > * + * {
        padding-top: ${spacings.spacer * 2}px;
    }

    @media ${mq.medium} {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;

        @supports (display: grid) {
            display: -ms-grid;
            display: grid;
            -ms-grid-columns: ${({ columns }) =>
                columns &&
                new Array(columns < 3 ? columns : 3).fill('').map(() => {
                    return '1fr ';
                })};
            grid-template-columns: repeat(
                ${({ columns }) => columns && (columns < 3 ? columns : 3)},
                1fr
            );
        }

        margin-left: -20px;
        margin-top: -40px;

        & > * {
            flex: 0 0
                ${({ columns }) =>
                    columns && (1 / (columns < 3 ? columns : 3)) * 100 + '%'};
            max-width: ${({ columns }) =>
                columns && (1 / (columns < 3 ? columns : 3)) * 100 + '%'};
            padding-left: 20px;
            padding-top: 40px;

            @supports (display: grid) {
                max-width: 370px;
            }
        }
    }

    @media ${mq.semilarge} {
        & > * {
            flex: 0 0
                ${({ columns }) =>
                    columns && (1 / (columns < 4 ? columns : 4)) * 100 + '%'};
            max-width: ${({ columns }) =>
                columns && (1 / (columns < 4 ? columns : 4)) * 100 + '%'};
        }

        @supports (display: grid) {
            -ms-grid-columns: ${({ columns }) =>
                columns &&
                new Array(columns < 4 ? columns : 4).fill('').map(() => {
                    return '1fr ';
                })};
            grid-template-columns: repeat(
                ${({ columns }) => columns && (columns < 4 ? columns : 4)},
                1fr
            );

            & > * {
                max-width: 370px;
            }
        }
    }

    @media ${mq.large} {
        & > * {
            flex: 0 0 ${({ columns }) => columns && (1 / columns) * 100 + '%'};
            max-width: ${({ columns }) => columns && (1 / columns) * 100 + '%'};
        }

        @supports (display: grid) {
            -ms-grid-columns: ${({ columns }) =>
                columns &&
                new Array(columns).fill('').map(() => {
                    return '1fr ';
                })};
            grid-template-columns: repeat(${({ columns }) => columns}, 1fr);

            & > * {
                max-width: 370px;
            }
        }
    }
`;

const FactFill = styled.div`
    display: none;

    @media ${mq.large} {
        display: block;
    }
`;

const FactGrid: FC<{
    columns?: 3 | 4 | 6;

    facts?: Array<Omit<FactProps, 'isInverted' | 'isCentered'>>;

    bgMode?: 'full' | 'inverted' | 'splitted';
    isCentered?: boolean;
}> = ({ columns = 3, facts, bgMode, isCentered }) => {
    const theme = useContext(ThemeContext);
    const factCount = facts?.length || 0;

    const isInverted = bgMode === 'inverted';

    const { sheetRefs: cardRefs } = useEqualSheetHeight({
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
            bgColor={
                isInverted
                    ? color(theme).dark
                    : bgMode
                    ? color(theme).mono.light
                    : 'transparent'
            }
            bgMode={mapToBgMode(bgMode)}
        >
            <Wrapper clampWidth="normal" addWhitespace>
                {facts && (
                    <ContentContainer columns={columns}>
                        {facts.map((fact, i) => {
                            if (
                                fact?.title ||
                                fact?.subTitle ||
                                fact?.image ||
                                fact?.text
                            ) {
                                return (
                                    <div key={i} ref={cardRefs[i]}>
                                        <Fact
                                            key={i}
                                            {...fact}
                                            isCentered={isCentered}
                                            isInverted={isInverted}
                                        />
                                    </div>
                                );
                            } else {
                                return <FactFill ref={cardRefs[i]} key={i} />;
                            }
                        })}
                    </ContentContainer>
                )}
            </Wrapper>
        </Section>
    );
};

export const FactGridComponent = FactGrid;
export default withLibTheme(FactGrid);
