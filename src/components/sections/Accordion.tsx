import Plus from 'components/base/icons/Plus';
import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import Copy from 'components/typography/Copy';
import * as React from 'react';
import styled, { ThemeContext } from 'styled-components';
import { spacings, getColors as color, mq } from 'utils/styles';
import Minus from 'components/base/icons/Minus';
import { withLibTheme } from 'utils/LibThemeProvider';
import { helmetJsonLdProp } from 'react-schemaorg';
import { FAQPage } from 'schema-dts';
import { Helmet } from 'react-helmet';

const AccordionBlock = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;

    & + & {
        margin-top: ${spacings.nudge * 2}px;
    }
`;

const AccordionItems = styled.li`
    cursor: pointer;
`;

const AccordionHead = styled.div<{
    isInverted?: boolean;
    hasBg?: boolean;
}>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding: ${spacings.spacer}px;

    background: ${({ isInverted, hasBg, theme }) =>
        isInverted || hasBg ? color(theme).light : color(theme).mono.light};
`;

const IconContainer = styled.div`
    will-change: transform;
    transition: all ease-in-out 0.2s;

    ${AccordionHead}:hover & {
        transform: scale(1.2);
    }
`;

const AccordionText = styled.div<{
    isVisible?: boolean;
    isInverted?: boolean;
    hasBg?: boolean;
    hasAside?: boolean;
    hasColumns?: boolean;
}>`
    display: ${({ isVisible }) => (isVisible ? 'flex' : 'none')};
    flex-direction: column;

    padding: ${spacings.spacer}px;
    margin-top: 2px;
    background: ${({ isInverted, hasBg, theme }) =>
        isInverted || hasBg ? color(theme).light : color(theme).mono.light};

    & > * + * {
        margin-top: ${spacings.spacer}px;
    }

    @media ${mq.medium} {
        flex-direction: row;
        padding-bottom: ${({ hasAside }) =>
            hasAside && spacings.spacer * 2 + 'px'};

        & > * + * {
            margin-top: 0;
            margin-left: ${spacings.spacer}px;
        }

        & > *:first-child {
            flex: ${({ hasAside, hasColumns }) =>
                !hasAside && !hasColumns
                    ? '0 1 75%'
                    : hasAside
                    ? '0 1 50%'
                    : undefined};
        }

        & > *:last-child {
            flex: ${({ hasAside }) => hasAside && ' 0 1 50%'};
        }
    }
`;

const Accordion: React.FC<{
    items: {
        label?: string;
        text?: string;
        aside?: string;
        hasColumns?: boolean;
    }[];

    bgMode?: 'full' | 'inverted';
}> = ({ items, bgMode }) => {
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
            <Helmet
                script={[
                    helmetJsonLdProp<FAQPage>({
                        '@context': 'https://schema.org',
                        '@type': 'FAQPage',
                        name: 'FAQ',
                        mainEntity: items.map(({ label, text }) => {
                            return {
                                '@type': 'Question',
                                name: label,
                                acceptedAnswer: {
                                    '@type': 'Answer',
                                    text: text,
                                },
                            };
                        }),
                    }),
                ]}
            />
            <Wrapper addWhitespace>
                {items &&
                    items.map(({ label, text, aside, hasColumns }, i) => {
                        const isSelected = currentItems.indexOf(i) !== -1;
                        return (
                            <AccordionBlock key={i}>
                                <AccordionItems>
                                    <AccordionHead
                                        isInverted={isInverted}
                                        hasBg={hasBg}
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
                                        isInverted={isInverted}
                                        hasBg={hasBg}
                                        isVisible={isSelected}
                                        hasAside={!!aside}
                                        hasColumns={hasColumns}
                                    >
                                        {text && (
                                            <Copy
                                                type="copy"
                                                innerHTML={text}
                                                columns={
                                                    !aside ? hasColumns : false
                                                }
                                            />
                                        )}
                                        {aside && (
                                            <Copy
                                                type="copy"
                                                innerHTML={aside}
                                            />
                                        )}
                                    </AccordionText>
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
