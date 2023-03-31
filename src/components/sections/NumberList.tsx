import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import Callout from 'components/typography/Callout';
import React, { forwardRef, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import {
    getColors as color,
    spacings,
    getGlobals as global,
} from 'utils/styles';
import { useLibTheme, withLibTheme } from 'utils/LibThemeProvider';
import Copy from 'components/typography/Copy';
import { useEqualSheetHeight } from 'utils/useEqualSheetHeight';
import Image, { ImageProps } from 'components/blocks/Image';

const View = styled.li<{ isCentered?: boolean }>`
    text-align: ${({ isCentered }) => (isCentered ? 'center' : 'left')};

    & > * {
        margin: ${({ isCentered }) => (isCentered ? '0 auto' : 0)};
        margin-right: auto;
    }

    & > * + * {
        margin-top: ${spacings.nudge * 3}px;
    }
`;

const ImageContainer = styled.div<{ isCentered?: boolean }>`
    display: flex;
    justify-content: ${({ isCentered }) =>
        isCentered ? 'center' : 'flex-start'};
    margin-bottom: ${spacings.nudge * 3}px;
    max-width: 100%;
`;

const StyledImage = styled(Image)`
    overflow: hidden;
    border-radius: ${({ theme }) => global(theme).sections.edgeRadius};
`;

const Label = styled(Copy)``;

const Text = styled(Copy)``;

export interface NumberListCardProps {
    image?: ImageProps;
    digit?: string;
    label?: string;
    text?: string;
}

const NumberListCard = forwardRef<
    HTMLLIElement,
    NumberListCardProps & {
        isInverted?: boolean;
        isCentered?: boolean;
        className?: string;
    }
>(({ image, label, digit, isInverted, isCentered, text, className }, ref) => {
    const { colors } = useLibTheme();

    return (
        <View ref={ref} isCentered={isCentered} className={className}>
            {image?.small && (
                <ImageContainer isCentered={isCentered}>
                    <StyledImage
                        isInverted={isInverted}
                        small={image.small}
                        medium={image.medium}
                        semilarge={image.semilarge}
                        large={image.large}
                        xlarge={image.xlarge}
                        alt={image.alt}
                        coverSpace={image.coverSpace}
                        ratios={image.ratios}
                        showPlaceholder={image.showPlaceholder}
                    />
                </ImageContainer>
            )}
            <Callout
                data-sheet="digit"
                size="mediumBold"
                renderAs="div"
                isInverted={isInverted}
            >
                {digit}
            </Callout>
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

const CardList = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, auto));
    grid-row-gap: ${spacings.nudge * 6}px;
    grid-column-gap: ${spacings.spacer}px;
    justify-content: center;
    align-items: flex-start;

    list-style: none;
    padding: 0;
    margin: 0;

    & > * {
        min-width: 240px;
        max-width: 440px;
    }
`;

export interface NumberListItem {
    image?: ImageProps;
    digit?: string;
    label?: string;
    text?: string;
}

const NumberList: React.FC<{
    /** ID value for targeting section with anchor hashes */
    anchorId?: string;

    items?: NumberListItem[];

    /** Center texts in every card item */
    isCentered?: boolean;

    /** Section background */
    bgMode?: 'full' | 'inverted';
}> = ({ anchorId, items, bgMode, isCentered = true }) => {
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
            medium: 2,
            semilarge: 3,
            large: 4,
            xlarge: 4,
        },
        customMediaQueries: {
            medium: '(min-width: 36.5em)',
            semilarge: '(min-width: 54.75em)',
            large: '(min-width: 73em)',
            xlarge: '(min-width: 90em)',
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
                <CardList>
                    {items?.map((item, i) => {
                        return (
                            <NumberListCard
                                key={i}
                                ref={numbersRef[i] as any}
                                {...item}
                                isInverted={isInverted}
                                isCentered={isCentered}
                            />
                        );
                    })}
                </CardList>
            </Wrapper>
        </Section>
    );
};

export const NumberListComponent = NumberList;
export default withLibTheme(NumberList);
