import React from 'react';
import styled from 'styled-components';

import Section, { mapToBgMode } from 'components/base/Section';
import Copy from 'components/typography/Copy';
import Wrapper from 'components/base/Wrapper';
import { spacings } from 'utils/styles';
import { useLibTheme, withLibTheme } from 'utils/LibThemeProvider';

const ContentBlock = styled(Copy)<{
    clampText?: boolean;
    isCentered?: boolean;
}>`
    display: block;
    margin: ${({ isCentered }) => isCentered && '0 auto'};
    max-width: ${({ clampText }) =>
        clampText && (19 / 28) * spacings.wrapperSmall + 'px'};

    :not(:first-child) {
        padding-top: ${spacings.nudge * 5}px;
    }
`;

const NewsText: React.FC<{
    /** ID value for targeting section with anchor hashes */
    anchorId?: string;

    /** Main text (RichText) */
    text: string;

    /** Section background */
    bgMode?: 'full' | 'inverted';
}> = ({ anchorId, text, bgMode }) => {
    const { colors } = useLibTheme();
    const isInverted = bgMode === 'inverted';
    const hasBg = bgMode === 'full';

    return (
        <Section
            addSeperation
            anchorId={anchorId}
            bgColor={
                isInverted
                    ? colors.sectionBg.dark
                    : hasBg
                    ? colors.sectionBg.medium
                    : colors.sectionBg.light
            }
            bgMode={mapToBgMode(bgMode, true)}
        >
            <Wrapper clampWidth="small" addWhitespace>
                {text && (
                    <ContentBlock
                        isInverted={isInverted}
                        type="copy"
                        innerHTML={text}
                    />
                )}
            </Wrapper>
        </Section>
    );
};

export const NewsTextComponent = NewsText;
export default withLibTheme(NewsText);
