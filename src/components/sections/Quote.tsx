import React, { FC } from 'react';
import styled from 'styled-components';

import { mq, spacings } from 'utils/styles';
import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import Callout from 'components/typography/Callout';
import { useLibTheme, withLibTheme } from 'utils/LibThemeProvider';
import Copy from 'components/typography/Copy';

const Text = styled(Callout)`
    text-align: center;
    margin: 0;
    padding: 0;

    @media ${mq.medium} {
        max-width: 960px;
        margin: 0 auto;
    }
`;

const Source = styled(Copy)`
    text-align: center;

    &:not(:first-child) {
        margin-top: ${spacings.spacer * 1.5}px;
    }

    @media ${mq.medium} {
        max-width: 960px;
        margin: 0 auto;
    }
`;

const Quote: FC<{
    text?: string;
    source?: string;
    citeUrl?: string;

    bgMode?: 'full' | 'inverted';
}> = ({ bgMode, text, source, citeUrl }) => {
    const { colors } = useLibTheme();
    const isInverted = bgMode === 'inverted';

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
                    <Source isInverted={isInverted} innerHTML={source} />
                )}
            </Wrapper>
        </Section>
    );
};

export const QuoteComponent = Quote;
export default withLibTheme(Quote);
