import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import Callout from 'components/typography/Callout';
import React, { forwardRef, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { getColors as color, mq, spacings } from 'utils/styles';
import { useLibTheme, withLibTheme } from 'utils/LibThemeProvider';
import Copy from 'components/typography/Copy';
import { useEqualSheetHeight } from 'utils/useEqualSheetHeight';

const CARD_MAX_WIDTH = 380;

const View = styled.li`
    text-align: center;
    max-width: ${CARD_MAX_WIDTH + spacings.spacer}px;
    min-width: 240px;

    & > * {
        margin: 0 auto;
    }

    & > * + * {
        margin-top: ${spacings.nudge * 3}px;
    }
`;

const Icon = styled.img`
    display: block;
    max-width: ${CARD_MAX_WIDTH}px;

    margin-bottom: ${spacings.nudge * 2}px;
`;

const NumberContainer = styled.div`
    max-width: max-content;
    min-height: 90px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    @media ${mq.semilarge} {
        min-height: 100px;
    }

    @media ${mq.large} {
        min-height: 120px;
    }
`;

const Digit = styled(Callout)<{ stringLength: number }>`
    // #TODO: eigenen style für Zahl definieren
    font-weight: 700;
`;

const Label = styled(Copy)``;

const Text = styled(Copy)``;

export interface NumberListCardProps {
    icon?: { src: string; alt?: string };
    digit?: string;
    label?: string;
    text?: string;
}

const NumberListCard = forwardRef<
    HTMLLIElement,
    NumberListCardProps & { isInverted?: boolean }
>(({ icon, label, digit, isInverted, text }, ref) => {
    const { colors } = useLibTheme();

    const stringLength = digit ? digit.length : 0;

    return (
        <View ref={ref}>
            {icon && <Icon src={icon.src} alt={icon.alt || ''} />}
            <NumberContainer data-sheet="digit">
                <Digit
                    renderAs="span"
                    stringLength={stringLength}
                    isInverted={isInverted}
                >
                    {digit}
                </Digit>
            </NumberContainer>
            <Label
                type="copy-b"
                size="big"
                textColor={
                    isInverted
                        ? colors.primary.inverted
                        : colors.primary.default
                }
                data-sheet="label"
            >
                {label}
            </Label>
            {text && (
                <Text
                    type="copy"
                    size="medium"
                    isInverted={isInverted}
                    data-sheet="text"
                >
                    {text}
                </Text>
            )}
        </View>
    );
});

NumberListCard.displayName = 'NumberListCard';

const ListContainer = styled.div<{ columns: '3' | '4' }>`
    margin: 0 auto;
    max-width: ${CARD_MAX_WIDTH}px;

    @media ${mq.semilarge} {
        max-width: ${CARD_MAX_WIDTH * 2 + spacings.spacer}px;
    }

    @media ${mq.large} {
        max-width: ${({ columns }) =>
            columns === '4'
                ? CARD_MAX_WIDTH * 4 + spacings.spacer * 3
                : CARD_MAX_WIDTH * 3 + spacings.spacer * 2}px;
    }
`;

const CardList = styled.ul<{
    isCentered?: boolean;
    columns: '3' | '4';
}>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: ${({ isCentered }) => (isCentered ? 'center' : 'flex-start')};
    flex-wrap: wrap;

    list-style: none;
    padding: 0;
    margin: 0;

    margin-left: -${spacings.spacer}px;
    margin-top: -${spacings.nudge * 6}px;

    @media ${mq.semilarge} {
        flex-direction: row;
        justify-content: ${({ isCentered }) =>
            isCentered ? 'center' : 'flex-start'};
        margin-top: -${spacings.nudge * 10}px;
    }

    & > * {
        padding-left: ${spacings.spacer}px;
        padding-top: ${spacings.nudge * 6}px;
        flex-basis: 100%;

        @media ${mq.semilarge} {
            flex: 0 0 50%;
            padding-top: ${spacings.nudge * 10}px;
        }

        @media ${mq.large} {
            flex: 0 0 ${({ columns }) => (columns === '4' ? '25' : '33.33')}%;
        }
    }
`;

export interface NumberListItem {
    icon?: { src: string; alt?: string };
    digit?: string;
    label?: string;
    text?: string;
}

const NumberList: React.FC<{
    /** ID value for targeting section with anchor hashes */
    anchorId?: string;

    items?: NumberListItem[];
    columns?: 3 | 4;

    /** Center texts in every card item */
    isCentered?: boolean;

    /** Section background */
    bgMode?: 'full' | 'inverted';
}> = ({ anchorId, items, bgMode, columns = 3, isCentered = true }) => {
    const theme = useContext(ThemeContext);
    const isInverted = bgMode === 'inverted';
    const hasBg = bgMode === 'full';

    const { sheetRefs: numbersRef } = useEqualSheetHeight<HTMLDivElement>({
        listLength: items?.length || 0,
        identifiers: [
            '[data-sheet="digit"]',
            '[data-sheet="label"]',
            '[data-sheet="text"]',
        ],
        responsive: {
            small: 1,
            medium: 1,
            semilarge: 2,
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
                    ? color(theme).sectionBg.dark
                    : hasBg
                    ? color(theme).sectionBg.medium
                    : color(theme).sectionBg.light
            }
            bgMode={mapToBgMode(bgMode, true)}
        >
            <Wrapper addWhitespace>
                <ListContainer columns={columns.toString() as '3' | '4'}>
                    <CardList
                        isCentered={isCentered}
                        columns={columns.toString() as '3' | '4'}
                    >
                        {items?.map((item, i) => {
                            return (
                                <NumberListCard
                                    key={i}
                                    ref={numbersRef[i] as any}
                                    {...item}
                                    isInverted={isInverted}
                                />
                            );
                        })}
                    </CardList>
                </ListContainer>
            </Wrapper>
        </Section>
    );
};

export const NumberListComponent = NumberList;
export default withLibTheme(NumberList);
