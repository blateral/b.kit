import Plus from 'components/base/icons/Plus';
import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import Copy from 'components/typography/Copy';
import * as React from 'react';
import styled, { ThemeContext } from 'styled-components';
import { spacings, getColors as color } from 'utils/styles';
import Minus from 'components/base/icons/Minus';
import { withLibTheme } from 'utils/LibThemeProvider';
import { generateFAQ } from 'utils/structuredData';
import Grid from 'components/base/Grid';

const AccordionContainer = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;

    & + & {
        margin-top: ${spacings.nudge}px;
    }
`;

const View = styled.li``;

const AccordionHead = styled.div<{
    isInverted?: boolean;
    hasBg?: boolean;
}>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding: ${spacings.nudge * 3}px ${spacings.nudge * 2}px;

    background: ${({ isInverted, hasBg, theme }) =>
        isInverted || hasBg
            ? color(theme).new.elementBg.light
            : color(theme).new.elementBg.medium};

    cursor: pointer;

    @media (hover: hover) and (pointer: fine) {
        &:hover {
            transition: background 0.2s ease-in-out;
            background: ${({ theme }) =>
                color(theme).new.elementBg
                    .medium}; // #TODO: Hover Farbe definieren
        }
    }
`;

const IconContainer = styled.div``;

const AccordionText = styled.div<{
    isVisible?: boolean;
    isInverted?: boolean;
    hasBg?: boolean;
    hasAside?: boolean;
}>`
    display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};

    padding: ${spacings.nudge * 3}px ${spacings.nudge * 2}px;
    margin-top: 2px;
    background: ${({ isInverted, hasBg, theme }) =>
        isInverted || hasBg
            ? color(theme).new.elementBg.light
            : color(theme).new.elementBg.medium};
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
}) => {
    const theme = React.useContext(ThemeContext);
    return (
        <View>
            <AccordionHead
                isInverted={isInverted}
                hasBg={hasBg}
                onClick={onClick}
            >
                <Copy size="big" type="copy-b">
                    {label}
                </Copy>
                <IconContainer>
                    {itemIcon ? (
                        itemIcon({ isSelected: isSelected || false })
                    ) : isSelected ? (
                        <Minus iconColor={color(theme).dark} />
                    ) : (
                        <Plus iconColor={color(theme).dark} />
                    )}
                </IconContainer>
            </AccordionHead>
            <AccordionText
                isInverted={isInverted}
                hasBg={hasBg}
                isVisible={isSelected}
                hasAside={!!aside}
            >
                <Grid.Row>
                    <Grid.Col
                        semilarge={aside ? { span: 6 / 12 } : { span: 9 / 12 }}
                    >
                        {text && <Copy type="copy" innerHTML={text} />}
                    </Grid.Col>
                    {aside && (
                        <Grid.Col semilarge={{ span: 6 / 12 }}>
                            <Copy type="copy" innerHTML={aside} />
                        </Grid.Col>
                    )}
                </Grid.Row>
            </AccordionText>
        </View>
    );
};

const Accordion: React.FC<{
    /** Array of accordion items */
    items: AccordionItem[];

    /** Section background */
    bgMode?: 'full' | 'inverted';

    /** Function to inject custom item state icon */
    itemIcon?: (props: { isSelected: boolean }) => React.ReactNode;
}> = ({ items, bgMode, itemIcon }) => {
    const [currentItems, setCurrentItems] = React.useState<number[]>([]);

    const theme = React.useContext(ThemeContext);
    const isInverted = bgMode === 'inverted';
    const hasBg = bgMode === 'full';

    return (
        <Section
            addSeperation
            bgColor={
                isInverted
                    ? color(theme).new.sectionBg.dark
                    : hasBg
                    ? color(theme).new.sectionBg.medium
                    : color(theme).new.sectionBg.light
            }
            bgMode={mapToBgMode(bgMode, true)}
        >
            {generateFAQ(items)}
            <Wrapper addWhitespace>
                <Grid.Row gutter={0}>
                    <Grid.Col>
                        {items &&
                            items.map(({ label, text, aside }, i) => {
                                const isSelected =
                                    currentItems.indexOf(i) !== -1;
                                return (
                                    <AccordionContainer key={i}>
                                        <AccordionBlock
                                            isSelected={isSelected}
                                            label={label}
                                            text={text}
                                            aside={aside}
                                            onClick={() => {
                                                setCurrentItems((prev) => {
                                                    const copy = [...prev];
                                                    const index =
                                                        copy.indexOf(i);
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
                                    </AccordionContainer>
                                );
                            })}
                    </Grid.Col>
                </Grid.Row>
            </Wrapper>
        </Section>
    );
};

export const AccordionComponent = Accordion;
export default withLibTheme(Accordion);
