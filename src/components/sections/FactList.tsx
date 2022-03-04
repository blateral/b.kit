import React from 'react';
import Section, { mapToBgMode } from 'components/base/Section';
import styled from 'styled-components';
import { useLibTheme, withLibTheme } from 'utils/LibThemeProvider';
import { spacings, getColors as color, mq } from 'utils/styles';
import Wrapper from 'components/base/Wrapper';
import Copy from 'components/typography/Copy';

const FactsContainer = styled.ul`
    padding: 0;
    margin: 0;

    list-style-type: none;

    & > * + * {
        margin-top: ${spacings.nudge}px;
    }
`;

const FactItem = styled.li<{ hasText?: boolean; hasBack?: boolean }>`
    padding: ${spacings.nudge * 2}px;

    background: ${({ theme, hasBack }) =>
        hasBack
            ? color(theme).new.elementBg.light
            : color(theme).new.elementBg.medium};

    display: flex;
    flex-direction: row;
    align-items: ${({ hasText }) => (hasText ? 'flex-start' : 'center')};

    @media ${mq.medium} {
        padding: ${spacings.nudge * 3}px;
    }
`;

const Icon = styled.img`
    margin-right: ${spacings.nudge * 3}px;
    display: block;
    max-width: ${spacings.nudge * 5}px;

    @media ${mq.medium} {
        margin-right: ${spacings.spacer}px;
    }
`;

const ContentBlock = styled.div`
    & > * + * {
        margin-top: ${spacings.nudge * 2}px;
    }
`;

const Description = styled(Copy)`
    max-width: 880px;
`;

const FactList: React.FC<{
    /** Array with fact item data */
    facts?: Array<{
        label?: string;
        text?: string;
    }>;

    /** Icon for each fact item */
    icon?: { src: string; alt?: string };

    /** Section background */
    bgMode?: 'full' | 'inverted';
}> = ({ facts, icon, bgMode }) => {
    const { colors } = useLibTheme();
    const isInverted = bgMode === 'inverted';
    const hasBack = isInverted || bgMode === 'full';

    return (
        <Section
            addSeperation
            bgColor={
                isInverted
                    ? colors.new.sectionBg.dark
                    : bgMode === 'full'
                    ? colors.new.sectionBg.medium
                    : colors.new.sectionBg.light
            }
            bgMode={mapToBgMode(bgMode, true)}
        >
            <Wrapper clampWidth="normal" addWhitespace>
                {facts && (
                    <FactsContainer>
                        {facts.map(({ label, text }, i) => {
                            return (
                                <FactItem
                                    key={i}
                                    hasText={!!text}
                                    hasBack={hasBack}
                                >
                                    {icon && (
                                        <Icon
                                            src={icon.src}
                                            alt={icon.alt || ''}
                                        />
                                    )}
                                    <ContentBlock>
                                        {label && (
                                            <Copy type="copy-b">{label}</Copy>
                                        )}
                                        {text && (
                                            <Description
                                                type="copy"
                                                innerHTML={text}
                                            />
                                        )}
                                    </ContentBlock>
                                </FactItem>
                            );
                        })}
                    </FactsContainer>
                )}
            </Wrapper>
        </Section>
    );
};

export const FactListComponent = FactList;
export default withLibTheme(FactList);
