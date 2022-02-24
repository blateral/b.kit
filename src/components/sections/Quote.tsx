import React, { FC } from 'react';
import styled, { ThemeContext } from 'styled-components';

import { getColors as color, mq, spacings } from 'utils/styles';
import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import Callout from 'components/typography/Callout';
import { withLibTheme } from 'utils/LibThemeProvider';
import Copy from 'components/typography/Copy';

const Text = styled(Callout)`
    text-align: center;

    @media ${mq.medium} {
        max-width: 80%;
        margin: 0 auto;
    }
`;

const Source = styled(Copy)`
    text-align: center;

    &:not(:first-child) {
        margin-top: ${spacings.spacer * 1.5}px;
    }

    @media ${mq.medium} {
        max-width: 80%;
        margin: 0 auto;
    }
`;

const Quote: FC<{
    text?: string;
    source?: string;

    bgMode?: 'full' | 'inverted';
}> = ({ bgMode, text, source }) => {
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
                {text && (
                    <Text
                        size="small"
                        isInverted={isInverted}
                        innerHTML={text}
                    />
                )}
                {source && (
                    <Source isInverted={isInverted} innerHTML={source} />
                )}
            </Wrapper>
        </Section>
    );
};

export const QuoteComponent = Quote;
export default withLibTheme(Quote);
