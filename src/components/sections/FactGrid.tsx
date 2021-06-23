import React, { FC, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

import { getColors as color, mq, spacings, withRange } from 'utils/styles';
import { HeadlineTag } from 'components/typography/Heading';
import Section, { BgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import Intro from 'components/blocks/Intro';
import Fact, { FactProps } from 'components/blocks/Fact';
import { useEqualSheetHeight } from 'utils/useEqualSheetHeight';

const StyledIntro = styled(Intro)`
    ${withRange([spacings.spacer * 2, spacings.spacer * 4], 'padding-bottom')}
`;

const ContentContainer = styled.div<{ columns?: number }>`
    & > * + * {
        padding-top: ${spacings.spacer * 2}px;
    }

    @media ${mq.medium} {
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

        margin-left: -20px;
        margin-top: -40px;

        & > * {
            padding-left: 20px;
            padding-top: 40px;
            max-width: 370px;
        }
    }

    @media ${mq.semilarge} {
        -ms-grid-columns: ${({ columns }) =>
            columns &&
            new Array(columns < 4 ? columns : 4).fill('').map(() => {
                return '1fr ';
            })};
        grid-template-columns: repeat(
            ${({ columns }) => columns && (columns < 4 ? columns : 4)},
            1fr
        );
    }

    @media ${mq.large} {
        -ms-grid-columns: ${({ columns }) =>
            columns &&
            new Array(columns).fill('').map(() => {
                return '1fr ';
            })};
        grid-template-columns: repeat(${({ columns }) => columns}, 1fr);
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
    title?: string;
    titleAs?: HeadlineTag;
    superTitle?: string;
    superTitleAs?: HeadlineTag;
    intro?: string;
    primaryAction?: (isInverted?: boolean) => React.ReactNode;
    secondaryAction?: (isInverted?: boolean) => React.ReactNode;

    facts?: Array<FactProps>;

    bgMode?: 'full' | 'splitted';
    isInverted?: boolean;
    isCentered?: boolean;
}> = ({
    columns = 3,
    title,
    titleAs,
    superTitle,
    superTitleAs,
    intro,
    primaryAction,
    secondaryAction,
    facts,
    bgMode,
    isInverted,
    isCentered,
}) => {
    const theme = useContext(ThemeContext);
    const factCount = facts?.length || 0;

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

    const cardRefs = useEqualSheetHeight({
        listLength: factCount,
        identifiers: [
            '[data-sheet="title"]',
            '[data-sheet="subtitle"]',
            '[data-sheet="text"]',
        ],
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
            bgMode={!isInverted ? getSectionBgMode() : undefined}
        >
            <Wrapper clampWidth="normal" addWhitespace>
                {title && (
                    <StyledIntro
                        title={title}
                        titleAs={titleAs}
                        superTitle={superTitle}
                        superTitleAs={superTitleAs}
                        text={intro}
                        primaryAction={primaryAction}
                        secondaryAction={secondaryAction}
                        colorMode={isInverted ? 'inverted' : 'default'}
                    />
                )}
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
                                return (
                                    <div key={i} ref={cardRefs[i]}>
                                        <FactFill key={i} />
                                    </div>
                                );
                            }
                        })}
                    </ContentContainer>
                )}
            </Wrapper>
        </Section>
    );
};

export default FactGrid;
