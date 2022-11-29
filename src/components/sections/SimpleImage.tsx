import React, { FC, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

import Section, { mapToBgMode } from 'components/base/Section';
import Image, { ImageProps } from 'components/blocks/Image';
import Wrapper from 'components/base/Wrapper';
import { getColors } from 'utils/styles';
import { withLibTheme } from 'utils/LibThemeProvider';

const StyledImage = styled(Image)<{ hAlign?: 'left' | 'center' | 'right' }>`
    margin-right: ${({ hAlign }) =>
        hAlign === 'left' || hAlign === 'center' ? 'auto' : 0};
    margin-left: ${({ hAlign }) =>
        hAlign === 'right' || hAlign === 'center' ? 'auto' : 0};
`;

const SimpleImage: FC<{
    /** ID value for targeting section with anchor hashes */
    anchorId?: string;

    image?: ImageProps;
    hAlign?: 'left' | 'center' | 'right';
    bgMode?: 'full' | 'inverted';
}> = ({ anchorId, image, hAlign = 'left', bgMode }) => {
    const theme = useContext(ThemeContext);
    const isInverted = bgMode === 'inverted';
    const hasBg = bgMode === 'full';

    return (
        <Section
            addSeperation
            anchorId={anchorId}
            bgColor={
                isInverted
                    ? getColors(theme).sectionBg.dark
                    : hasBg
                    ? getColors(theme).sectionBg.medium
                    : getColors(theme).sectionBg.light
            }
            bgMode={mapToBgMode(bgMode)}
        >
            <Wrapper>
                {image && <StyledImage hAlign={hAlign} {...image} />}
            </Wrapper>
        </Section>
    );
};

export const SimpleImageComponent = SimpleImage;
export default withLibTheme(SimpleImage);
