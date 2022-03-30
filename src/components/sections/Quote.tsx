import React, { FC } from 'react';
import styled from 'styled-components';

import { mq, spacings } from 'utils/styles';
import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import Callout from 'components/typography/Callout';
import { useLibTheme, withLibTheme } from 'utils/LibThemeProvider';
import Copy from 'components/typography/Copy';

const Content = styled.figure`
    margin: 0;
    padding: 0;

    & > * + * {
        margin-top: ${spacings.spacer}px;
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
    /** ID value for targeting section with anchor hashes */
    anchorId?: string;

    /** Text of the blockquote (richtext) */
    text?: string;

    /** Source of the quote e.g. author (richtext) */
    source?: string;

    /** URL for additional cite informations */
    citeUrl?: string;

    /** Section backgrounds */
    bgMode?: 'full' | 'inverted';
}> = ({ anchorId, bgMode, text, source, citeUrl }) => {
    const { colors } = useLibTheme();
    const isInverted = bgMode === 'inverted';

    return (
        <Section
            addSeperation
            anchorId={anchorId}
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
