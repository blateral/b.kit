import React, { useId } from 'react';
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

const FactItemView = styled.li<{ hasText?: boolean; hasBack?: boolean }>`
    padding: ${spacings.nudge * 2}px;

    background: ${({ theme, hasBack }) =>
        hasBack ? color(theme).elementBg.light : color(theme).elementBg.medium};

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

export interface FactItemProps {
    label?: string;
    text?: string;
    hasBg?: boolean;
    icon?: { src: string; alt?: string };
}

const FactItem: React.FC<FactItemProps> = ({ label, text, hasBg, icon }) => {
    const id = useId();
    const titleId = `fact-item-title-${id}`;
    const descriptionId = `fact-item-description-${id}`;

    return (
        <FactItemView
            aria-labelledby={titleId}
            aria-describedby={descriptionId}
            hasText={!!text}
            hasBack={hasBg}
            aria-label={label}
        >
            {icon && <Icon src={icon.src} alt={icon.alt || ''} aria-hidden />}
            <ContentBlock>
                {label && (
                    <Copy id={titleId} type="copy-b">
                        {label}
                    </Copy>
                )}
                {text && (
                    <Description
                        id={descriptionId}
                        type="copy"
                        innerHTML={text}
                    />
                )}
            </ContentBlock>
        </FactItemView>
    );
};

const FactList: React.FC<{
    /** ID value for targeting section with anchor hashes */
    anchorId?: string;

    /** Array with fact item data */
    facts?: Array<{
        label?: string;
        text?: string;
    }>;

    /** Icon for each fact item */
    icon?: { src: string; alt?: string };

    /** Section background */
    bgMode?: 'full' | 'inverted';

    /** Aria-Label for accessibility */
    ariaLabel?: string;
}> = ({ anchorId, facts, icon, bgMode, ariaLabel }) => {
    const { colors } = useLibTheme();
    const isInverted = bgMode === 'inverted';
    const hasBack = isInverted || bgMode === 'full';

    return (
        <Section
            addSeperation
            anchorId={anchorId}
            bgColor={
                isInverted
                    ? colors.sectionBg.dark
                    : bgMode === 'full'
                    ? colors.sectionBg.medium
                    : colors.sectionBg.light
            }
            bgMode={mapToBgMode(bgMode, true)}
        >
            <Wrapper clampWidth="normal" addWhitespace>
                {facts && (
                    <FactsContainer aria-label={ariaLabel}>
                        {facts.map(({ label, text }, i) => {
                            return (
                                <FactItem
                                    key={i}
                                    label={label}
                                    text={text}
                                    hasBg={hasBack}
                                    icon={icon}
                                />
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
