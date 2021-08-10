import * as React from 'react';
import Section, { mapToBgMode } from 'components/base/Section';
import styled, { ThemeContext } from 'styled-components';
import { getColors, spacings, withRange } from 'utils/styles';
import Wrapper from 'components/base/Wrapper';
import Copy from 'components/typography/Copy';

const FactsContainer = styled.ul`
    padding: 0;
    margin: 0;

    ${withRange([spacings.spacer * 2, spacings.spacer * 3], 'padding-top')}

    list-style-type: none;
`;

const FactsItem = styled.li<{ hasText?: boolean }>`
    padding: ${spacings.spacer}px ${spacings.nudge * 2}px;

    background: #fff;

    cursor: pointer;

    display: flex;
    flex-direction: row;
    align-items: ${({ hasText }) => (hasText ? 'flex-start' : 'center')};

    & + & {
        margin-top: ${spacings.nudge * 2}px;
    }
`;

const Icon = styled.img`
    margin-right: ${spacings.spacer}px;
    display: block;
    width: 100%;
    max-width: ${spacings.spacer * 2}px;
`;

const ContentBlock = styled.div`
    max-width: 80%;
`;

const Text = styled(Copy)`
    margin-top: ${spacings.spacer}px;
`;

const FactList: React.FC<{
    facts?: {
        label?: string;
        text?: string;
        icon?: { src: string; alt?: string };
    }[];

    bgMode?: 'full' | 'inverted';

    primaryAction?: (isInverted?: boolean) => React.ReactNode;
    secondaryAction?: (isInverted?: boolean) => React.ReactNode;
}> = ({ facts, bgMode }) => {
    const theme = React.useContext(ThemeContext);
    const isInverted = bgMode === 'inverted';

    return (
        <Section
            addSeperation
            bgColor={
                isInverted
                    ? getColors(theme).dark
                    : bgMode === 'full'
                    ? getColors(theme).mono.light
                    : 'transparent'
            }
            bgMode={mapToBgMode(bgMode)}
        >
            <Wrapper clampWidth="normal" addWhitespace>
                {facts && (
                    <FactsContainer>
                        {facts.map(({ label, text, icon }, i) => {
                            return (
                                <FactsItem key={i} hasText={!!text}>
                                    {icon && (
                                        <Icon src={icon.src} alt={icon.alt} />
                                    )}
                                    <ContentBlock>
                                        <Copy type="copy-b">{label}</Copy>
                                        {text && (
                                            <Text
                                                type="copy"
                                                innerHTML={text}
                                            />
                                        )}
                                    </ContentBlock>
                                </FactsItem>
                            );
                        })}
                    </FactsContainer>
                )}
            </Wrapper>
        </Section>
    );
};

export default FactList;
