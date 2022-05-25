import Plus from 'components/base/icons/Plus';
import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import Copy from 'components/typography/Copy';
import React from 'react';
import styled from 'styled-components';
import { spacings, getColors as color, mq } from 'utils/styles';
import Minus from 'components/base/icons/Minus';
import { useLibTheme, withLibTheme } from 'utils/LibThemeProvider';
import { generateFAQ } from 'utils/structuredData';
import Grid, { gridSettings } from 'components/base/Grid';

const AccordionContainer = styled.div`
    margin: 0;
    padding: 0;

    & > * + * {
        margin-top: ${spacings.nudge}px;
    }
`;

const View = styled.details``;

const AccordionHead = styled.summary<{
    isInverted?: boolean;
    hasBg?: boolean;
}>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding: ${spacings.nudge * 2}px;
    margin: 0;
    border: none;
    outline: none;
    background: none;
    user-select: none;
    list-style: none;

    background: ${({ isInverted, hasBg, theme }) =>
        isInverted || hasBg
            ? color(theme).elementBg.light
            : color(theme).elementBg.medium};

    cursor: pointer;
    transition: background 0.2s ease-in-out;

    @media ${mq.medium} {
        padding: ${spacings.nudge * 3}px;
    }

    &::-webkit-details-marker {
        display: none;
    }

    &::marker {
        display: none;
    }

    @media (hover: hover) and (pointer: fine) {
        &:hover {
            background: ${({ theme, isInverted, hasBg }) =>
                isInverted || hasBg
                    ? color(theme).elementBg.lightHover
                    : color(theme).elementBg.mediumHover};
        }
    }

    &:focus {
        background: ${({ theme, isInverted, hasBg }) =>
            isInverted || hasBg
                ? color(theme).elementBg.lightHover
                : color(theme).elementBg.mediumHover};
    }

    &:focus:not(:focus-visible) {
        outline: none;
        background: inherit;
    }
`;

const Column = styled(Copy)`
    flex: 1 1 0;
`;

const AccordionText = styled.div<{
    isInverted?: boolean;
    hasBg?: boolean;
    hasAside?: boolean;
}>`
    display: flex;
    flex-direction: column;
    padding: ${spacings.nudge * 2}px;
    margin-top: 2px;
    background: ${({ isInverted, hasBg, theme }) =>
        isInverted || hasBg
            ? color(theme).elementBg.light
            : color(theme).elementBg.medium};

    & > * {
        max-width: 880px;
    }

    & > * + * {
        margin-top: ${spacings.spacer}px;
    }

    @media ${mq.medium} {
        padding: ${spacings.nudge * 3}px;
    }

    @media ${mq.semilarge} {
        flex-direction: row;

        & > * + * {
            margin-top: 0px;
            margin-left: ${gridSettings.gutter}px;
        }
    }
`;

interface AccordionItem {
    label?: string;
    text?: string;
    aside?: string;
}

const AccordionBlock: React.FC<
    AccordionItem & {
        isSelected?: boolean;
        onClick?: () => void;
        isInverted?: boolean;
        hasBg?: boolean;
        itemIcon?: (props: { isSelected: boolean }) => React.ReactNode;
        className?: string;
    }
> = ({
    label,
    text,
    aside,
    isSelected,
    onClick,
    hasBg,
    isInverted,
    itemIcon,
    className,
}) => {
    const { colors } = useLibTheme();

    return (
        <View open={isSelected} onToggle={onClick} className={className}>
            <AccordionHead isInverted={isInverted} hasBg={hasBg}>
                <Copy renderAs="span" size="big" type="copy-b">
                    {label}
                </Copy>
                <span>
                    {itemIcon ? (
                        itemIcon({ isSelected: isSelected || false })
                    ) : isSelected ? (
                        <Minus iconColor={colors.text.default} />
                    ) : (
                        <Plus iconColor={colors.text.default} />
                    )}
                </span>
            </AccordionHead>
            <AccordionText
                isInverted={isInverted}
                hasBg={hasBg}
                hasAside={!!aside}
            >
                {text && <Column type="copy" innerHTML={text} />}
                {aside && <Column type="copy" innerHTML={aside} />}
            </AccordionText>
        </View>
    );
};

const Accordion: React.FC<{
    /** ID value for targeting section with anchor hashes */
    anchorId?: string;

    /** Array of accordion items */
    items: AccordionItem[];

    /** Section background */
    bgMode?: 'full' | 'inverted';

    /** Function to inject custom item state icon */
    itemIcon?: (props: { isSelected: boolean }) => React.ReactNode;
}> = ({ anchorId, items, bgMode, itemIcon }) => {
    const [currentItems, setCurrentItems] = React.useState<number[]>([]);

    const { colors } = useLibTheme();
    const isInverted = bgMode === 'inverted';
    const hasBg = bgMode === 'full';

    return (
        <Section
            addSeperation
            anchorId={anchorId}
            bgColor={
                isInverted
                    ? colors.sectionBg.dark
                    : hasBg
                    ? colors.sectionBg.medium
                    : colors.sectionBg.light
            }
            bgMode={mapToBgMode(bgMode, true)}
        >
            {generateFAQ(items)}
            <Wrapper addWhitespace>
                <Grid.Row gutter={0}>
                    <Grid.Col>
                        <AccordionContainer aria-label="Accordion Control Group Buttons">
                            {items?.map(({ label, text, aside }, i) => {
                                const isSelected =
                                    currentItems.indexOf(i) !== -1;
                                return (
                                    <AccordionBlock
                                        key={`${label}_${i}`}
                                        isSelected={isSelected}
                                        label={label}
                                        text={text}
                                        aside={aside}
                                        onClick={() => {
                                            setCurrentItems((prev) => {
                                                const copy = [...prev];
                                                const index = copy.indexOf(i);
                                                if (index === -1) {
                                                    copy.push(i);
                                                } else {
                                                    copy.splice(index, 1);
                                                }
                                                return copy;
                                            });
                                        }}
                                        isInverted={isInverted}
                                        hasBg={hasBg}
                                        itemIcon={itemIcon}
                                    />
                                );
                            })}
                        </AccordionContainer>
                    </Grid.Col>
                </Grid.Row>
            </Wrapper>
        </Section>
    );
};

export const AccordionComponent = Accordion;
export default withLibTheme(Accordion);
