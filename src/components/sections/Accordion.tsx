import Plus from 'components/base/icons/Plus';
import Section from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import Intro from 'components/blocks/Intro';
import Copy from 'components/typography/Copy';
import { HeadlineTag } from 'components/typography/Heading';
import * as React from 'react';
import styled, { ThemeContext } from 'styled-components';
import { spacings, getColors as color } from 'utils/styles';
import Minus from '../base/icons/Minus';

const StyledIntro = styled(Intro)`
    padding-bottom: ${spacings.spacer * 2}px;
`;

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

const AccordionText = styled(Copy)<{
    isVisible?: boolean;
    isInverted?: boolean;
    hasBg?: boolean;
    borderColor?: string;
}>`
    display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};

    border-top: 2px solid
        ${({ borderColor, isInverted, theme, hasBg }) =>
            borderColor
                ? borderColor
                : isInverted
                ? color(theme).dark
                : hasBg
                ? color(theme).mono.light
                : color(theme).light};

    padding: ${spacings.spacer}px;
`;

const Accordion: React.FC<{
    title?: string;
    titleAs?: HeadlineTag;
    superTitle?: string;
    superTitleAs?: HeadlineTag;
    text?: string;

    items?: { label?: string; text?: string; hasColumns?: boolean }[];
    borderColor?: string;

    primaryAction?: (isInverted?: boolean) => React.ReactNode;
    secondaryAction?: (isInverted?: boolean) => React.ReactNode;

    isInverted?: boolean;
    hasBg?: boolean;
}> = ({
    title,
    titleAs,
    superTitle,
    superTitleAs,
    text,
    items,
    borderColor,
    primaryAction,
    secondaryAction,
    isInverted,
    hasBg,
}) => {
    const [isSelected, setIsSelected] = React.useState<boolean>();
    const [currentItem, setCurrentItem] = React.useState<number>();

    const theme = React.useContext(ThemeContext);
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
        >
            <Wrapper>
                {title && (
                    <StyledIntro
                        title={title}
                        superTitle={superTitle}
                        titleAs={titleAs}
                        superTitleAs={superTitleAs}
                        text={text}
                        colorMode={isInverted ? 'inverted' : 'default'}
                        secondaryAction={secondaryAction}
                        primaryAction={primaryAction}
                    />
                )}
                {items &&
                    items.map(({ label, text, hasColumns }, i) => {
                        return (
                            <AccordionBlock
                                tabIndex={0}
                                onBlur={() => setIsSelected(!isSelected)}
                                key={i}
                                onClick={() => {
                                    setIsSelected(!isSelected),
                                        setCurrentItem(i);
                                }}
                                borderColor={borderColor}
                                isInverted={isInverted}
                                hasBg={hasBg}
                                onMouseDown={() => setIsSelected(!isSelected)}
                                onMouseUp={() => setIsSelected(!isSelected)}
                            >
                                <AccordionItems>
                                    <AccordionHead>
                                        <Copy size="big" type="copy-b">
                                            {label}
                                        </Copy>
                                        {i === currentItem && isSelected ? (
                                            <Minus
                                                iconColor={color(theme).dark}
                                            />
                                        ) : (
                                            <Plus
                                                iconColor={color(theme).dark}
                                            />
                                        )}
                                    </AccordionHead>
                                    <AccordionText
                                        borderColor={borderColor}
                                        isInverted={isInverted}
                                        hasBg={hasBg}
                                        isVisible={
                                            i === currentItem && isSelected
                                        }
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

export default Accordion;
