import React, { FC } from 'react';
import styled, { ThemeContext } from 'styled-components';

import { getColors as color, mq, spacings } from 'utils/styles';
import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import Callout from 'components/typography/Callout';
import { withLibTheme } from 'utils/LibThemeProvider';
import Copy from 'components/typography/Copy';

const Content = styled.figure`
    margin: 0;
    padding: 0;
    & > * + * {
        margin-top: ${spacings.spacer * 1.5}px;
    }
    @media ${mq.medium} {
        max-width: 960px;
        margin: 0 auto;
    }
`;

const Text = styled(Callout)`
    text-align: center;
    margin-left: 0;
    margin-right: 0;
    padding: 0;
`;

const Source = styled(Copy)`
    text-align: center;
    margin-left: 0;
    margin-right: 0;
    padding: 0;
`;

const Quote: FC<{
    text?: string;
    source?: string;
    citeUrl?: string;

    bgMode?: 'full' | 'inverted';
}> = ({ bgMode, text, source, citeUrl }) => {
    const theme = React.useContext(ThemeContext);
    const isInverted = bgMode === 'inverted';

    return (
        <Section
            addSeperation
            bgColor={
                isInverted
                    ? color(theme).dark
                    : bgMode
                    ? color(theme).mono.light
                    : 'transparent'
            }
            bgMode={mapToBgMode(bgMode, true)}
        >
            <Wrapper clampWidth="normal" addWhitespace>
                <Content>
                    {text && (
                        <Text
                            size="small"
                            renderAs="blockquote"
                            isInverted={isInverted}
                            innerHTML={text}
                            {...{ cite: citeUrl }}
                        />
                    )}
                    {source && (
                        <Source
                            isInverted={isInverted}
                            renderAs="figcaption"
                            innerHTML={source}
                        />
                    )}
                </Content>
            </Wrapper>
        </Section>
    );
};

export const QuoteComponent = Quote;
export default withLibTheme(Quote);
