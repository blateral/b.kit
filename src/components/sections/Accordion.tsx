import Plus from 'components/base/icons/Plus';
import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import Copy from 'components/typography/Copy';
import * as React from 'react';
import styled, { ThemeContext } from 'styled-components';
import { spacings, getColors as color } from 'utils/styles';
import Minus from 'components/base/icons/Minus';
import { withLibTheme } from 'utils/LibThemeProvider';

const AccordionBlock = styled.ul<{
    isInverted?: boolean;
    hasBg?: boolean;
    borderColor?: string;
}>`
    margin: 0;
    padding: 0;
    list-style: none;

    background: ${({ isInverted, hasBg, theme }) =>
        isInverted || hasBg ? color(theme).light : color(theme).mono.light};

    border-bottom: 10px solid
        ${({ borderColor, isInverted, theme, hasBg }) =>
            borderColor
                ? borderColor
                : isInverted
                ? color(theme).dark
                : hasBg
                ? color(theme).mono.light
                : color(theme).light};

    &:last-child {
        border-bottom: none;
    }
`;

const AccordionItems = styled.li`
    cursor: pointer;
`;

const AccordionHead = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding: ${spacings.spacer}px;
`;

const IconContainer = styled.div`
    will-change: transform;
    transition: all ease-in-out 0.2s;

    ${AccordionHead}:hover & {
        transform: scale(1.2);
    }
`;

const AccordionText = styled(Copy)<{
    isVisible?: boolean;
    inverted?: boolean;
    hasBg?: boolean;
    borderColor?: string;
}>`
    display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};

    border-top: 2px solid
        ${({ borderColor, inverted, theme, hasBg }) =>
            borderColor
                ? borderColor
                : inverted
                ? color(theme).dark
                : hasBg
                ? color(theme).mono.light
                : color(theme).light};

    padding: ${spacings.spacer}px;
`;

const Accordion: React.FC<{
    items: { label?: string; text?: string; hasColumns?: boolean }[];
    borderColor?: string;

    bgMode?: 'full' | 'inverted';
}> = ({ items, borderColor, bgMode }) => {
    const [currentItems, setCurrentItems] = React.useState<number[]>([]);

    const theme = React.useContext(ThemeContext);
    const isInverted = bgMode === 'inverted';
    const hasBg = bgMode === 'full';
    return (
        <Section
            addSeperation
            bgColor={
                isInverted
                    ? color(theme).dark
                    : hasBg
                    ? color(theme).mono.light
                    : 'transparent'
            }
            bgMode={mapToBgMode(bgMode, true)}
        >
            <Wrapper addWhitespace>
                {items &&
                    items.map(({ label, text, hasColumns }, i) => {
                        const isSelected = currentItems.indexOf(i) !== -1;
                        return (
                            <AccordionBlock
                                key={i}
                                borderColor={borderColor}
                                isInverted={isInverted}
                                hasBg={hasBg}
                            >
                                <AccordionItems>
                                    <AccordionHead
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
                                    >
                                        <Copy size="big" type="copy-b">
                                            {label}
                                        </Copy>
                                        <IconContainer>
                                            {isSelected ? (
                                                <Minus
                                                    iconColor={
                                                        color(theme).dark
                                                    }
                                                />
                                            ) : (
                                                <Plus
                                                    iconColor={
                                                        color(theme).dark
                                                    }
                                                />
                                            )}
                                        </IconContainer>
                                    </AccordionHead>
                                    <AccordionText
                                        borderColor={borderColor}
                                        inverted={isInverted}
                                        hasBg={hasBg}
                                        isVisible={isSelected}
                                        type="copy"
                                        innerHTML={text}
                                        columns={hasColumns}
                                    />
                                </AccordionItems>
                            </AccordionBlock>
                        );
                    })}
            </Wrapper>
        </Section>
    );
};

export const AccordionComponent = Accordion;
export default withLibTheme(Accordion);
