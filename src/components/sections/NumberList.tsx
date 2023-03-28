import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import Callout from 'components/typography/Callout';
import React, { forwardRef, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { getColors as color, mq, spacings } from 'utils/styles';
import { useLibTheme, withLibTheme } from 'utils/LibThemeProvider';
import Copy from 'components/typography/Copy';
import { useEqualSheetHeight } from 'utils/useEqualSheetHeight';

const View = styled.div`
    text-align: center;
    max-width: 380px;
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
    max-width: 140px;
    max-height: 140px;

    margin-bottom: ${spacings.nudge * 2}px;
`;

const NumberContainer = styled.div<{ height: number }>`
    max-width: max-content;
    min-height: 90px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    @media ${mq.semilarge} {
        min-height: 100px;
    }

    /* margin-bottom: ${spacings.nudge * 2}px; */

    @media ${mq.large} {
        min-height: 120px;
    }
`;

const Number = styled(Callout)<{ stringLength: number }>`
    font-weight: 700;
`;

const Label = styled(Copy)``;

const Text = styled(Copy)``;

interface NumberProps {
    icon?: { src: string; alt?: string };
    number?: string;
    label?: string;
    text?: string;
    isInverted?: boolean;
}

const IconBlock = forwardRef<HTMLDivElement, NumberProps>(
    ({ icon, label, number, isInverted, text }, ref) => {
        const { colors } = useLibTheme();

        const stringLength = number ? number.length : 0;
        return (
            <View ref={ref}>
                {icon && <Icon src={icon.src} alt={icon.alt} />}
                <NumberContainer height={0} data-sheet="number">
                    <Number
                        renderAs="div"
                        stringLength={stringLength}
                        isInverted={isInverted}
                    >
                        {number}
                    </Number>
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
    }
);

IconBlock.displayName = 'IconBlock';

const ContentContainer = styled.div<{
    cols: 3 | 4;
    hAlign?: 'left' | 'center';
}>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    margin: -${spacings.spacer}px;
    margin-top: -${spacings.spacer * 2}px;

    @media ${mq.semilarge} {
        flex-direction: row;

        align-items: ${({ hAlign }) =>
            hAlign === 'center' ? 'center' : 'flex-start'};
        margin-top: -${spacings.spacer}px;
    }

    & > * {
        padding: ${spacings.spacer}px;
        padding-top: ${spacings.spacer * 2}px;

        @media ${mq.semilarge} {
            padding-top: ${spacings.spacer}px;
        }

        flex-basis: 100%;

        @media ${mq.semilarge} {
            flex: 0 0 50%;
        }

        @media ${mq.large} {
            flex: 1 0 ${({ cols }) => (cols === 4 ? '25' : '33.33')}%;
        }
    }
`;

const NumberList: React.FC<{
    /** ID value for targeting section with anchor hashes */
    anchorId?: string;

    items?: {
        icon?: { src: string; alt?: string };
        number?: string;
        label?: string;
        text?: string;
    }[];
    bgMode?: 'full' | 'inverted';
    cols?: 3 | 4;
    hAlign?: 'left' | 'center';
}> = ({ anchorId, items, bgMode, cols = 3, hAlign = 'center' }) => {
    const theme = useContext(ThemeContext);
    const isInverted = bgMode === 'inverted';
    const hasBg = bgMode === 'full';

    const { sheetRefs: numbersRef } = useEqualSheetHeight<HTMLDivElement>({
        listLength: items?.length || 0,
        identifiers: [
            '[data-sheet="number"]',
            '[data-sheet="label"]',
            '[data-sheet="text"]',
        ],
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
                <ContentContainer cols={cols} hAlign={hAlign}>
                    {items?.map((item, i) => {
                        return (
                            <IconBlock
                                ref={numbersRef[i]}
                                {...item}
                                key={i}
                                isInverted={isInverted}
                            />
                        );
                    })}
                </ContentContainer>
            </Wrapper>
        </Section>
    );
};

export const NumberListComponent = NumberList;
export default withLibTheme(NumberList);
