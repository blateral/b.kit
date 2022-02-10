import * as React from 'react';
import Section, { mapToBgMode } from 'components/base/Section';
import styled, { ThemeContext } from 'styled-components';
import { withLibTheme } from 'utils/LibThemeProvider';
import { getColors, spacings } from 'utils/styles';
import Wrapper from 'components/base/Wrapper';
import Copy from 'components/typography/Copy';
import Grid from 'components/base/Grid';

const FactsContainer = styled.ul`
    padding: 0;
    margin: 0;

    list-style-type: none;
`;

const FactsItem = styled.li<{ hasText?: boolean }>`
    padding: ${spacings.nudge * 3}px ${spacings.nudge * 2}px;

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
    max-width: ${spacings.nudge * 5}px;
`;

const ContentBlock = styled.div`
    max-width: 80%;

    & > * + * {
        margin-top: ${spacings.nudge * 2}px;
    }
`;

const FactList: React.FC<{
    facts?: {
        label?: string;
        text?: string;
        icon?: { src: string; alt?: string };
    }[];

    bgMode?: 'full' | 'inverted';
}> = ({ facts, bgMode }) => {
    const theme = React.useContext(ThemeContext);
    const isInverted = bgMode === 'inverted';

    return (
        <Section
            addSeperation
            bgColor={
                isInverted
                    ? getColors(theme).new.sectionBg.dark
                    : bgMode === 'full'
                    ? getColors(theme).new.sectionBg.medium
                    : getColors(theme).new.sectionBg.light
            }
            bgMode={mapToBgMode(bgMode)}
        >
            <Wrapper clampWidth="normal" addWhitespace>
                <Grid.Row>
                    <Grid.Col>
                        {facts && (
                            <FactsContainer>
                                {facts.map(({ label, text, icon }, i) => {
                                    return (
                                        <FactsItem key={i} hasText={!!text}>
                                            {icon && (
                                                <Icon
                                                    src={icon.src}
                                                    alt={icon.alt}
                                                />
                                            )}
                                            <ContentBlock>
                                                {label && (
                                                    <Copy type="copy-b">
                                                        {label}
                                                    </Copy>
                                                )}
                                                {text && (
                                                    <Copy
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
                    </Grid.Col>
                </Grid.Row>
            </Wrapper>
        </Section>
    );
};

export const FactListComponent = FactList;
export default withLibTheme(FactList);
