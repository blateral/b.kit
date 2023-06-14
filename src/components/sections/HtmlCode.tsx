import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import React from 'react';
import { useLibTheme, withLibTheme } from 'utils/LibThemeProvider';

const HtmlCode: React.FC<{
    html: string;
    anchorId?: string;
    bgMode?: 'full' | 'inverted';
}> = ({ html, anchorId, bgMode }) => {
    const isInverted = bgMode === 'inverted';
    const { colors } = useLibTheme();
    return (
        <Section
            addSeperation
            anchorId={anchorId}
            bgColor={
                isInverted
                    ? colors.sectionBg.dark
                    : bgMode
                    ? colors.sectionBg.medium
                    : colors.sectionBg.light
            }
            bgMode={mapToBgMode(bgMode, true)}
        >
            <Wrapper>
                <div dangerouslySetInnerHTML={{ __html: html }} />
            </Wrapper>
        </Section>
    );
};

export const HtmlCodeComponent = HtmlCode;
export default withLibTheme(HtmlCode);
