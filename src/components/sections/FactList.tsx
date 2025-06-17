import * as React from 'react';
import Section, { mapToBgMode } from 'components/base/Section';
import styled, { ThemeContext } from 'styled-components';
import { withLibTheme } from 'utils/LibThemeProvider';
import { getColors, getFonts as font, spacings, withRange } from 'utils/styles';
import Wrapper from 'components/base/Wrapper';
import Copy from 'components/typography/Copy';
import Heading from 'components/typography/Heading';

const FactsContainer = styled.ul`
    padding: 0;
    margin: 0;

    list-style-type: none;
`;

const FactsItem = styled.li<{ hasText?: boolean }>`
    padding: ${spacings.spacer}px ${spacings.nudge * 2}px;

    background: #fff;

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

    & > * + * {
        margin-top: ${spacings.spacer}px;
    }
`;

const StyledLabel = styled(Heading) `
    font-weight: 700;

    font-family: ${({ theme }) => font(theme)['copy-b'].medium.family};
    font-weight: ${({ theme }) => font(theme)['copy-b'].medium.weight};
    font-style: ${({ theme }) => font(theme)['copy-b'].medium.style};
    ${({ theme }) => withRange(font(theme)['copy-b'].medium.size, 'font-size')}
    line-height: ${({ theme }) => font(theme)['copy-b'].medium.lineHeight};
    letter-spacing: ${({ theme }) => font(theme)['copy-b'].medium.letterSpacing};
    text-transform: ${({ theme }) => font(theme)['copy-b'].medium.textTransform};
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
                                        <Icon src={icon.src} alt={icon.alt ?? ''}
                                        aria-hidden={!icon.alt}/>
                                    )}
                                    <ContentBlock>
                                        {label && (
                                            <StyledLabel renderAs='h3' >{label}</StyledLabel>
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
            </Wrapper>
        </Section>
    );
};

export const FactListComponent = FactList;
export default withLibTheme(FactList);
