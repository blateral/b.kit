import React, { FC, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

import Section, { mapToBgMode } from 'components/base/Section';
import Image, { ImageProps } from 'components/blocks/Image';
import Wrapper from 'components/base/Wrapper';
import { getColors } from 'utils/styles';
import { withLibTheme } from 'utils/LibThemeProvider';

const ImageWrapper = styled(Wrapper)<{ hAlign?: 'left' | 'center' | 'right' }>`
    display: flex;
    justify-content: ${({ hAlign }) => {
        switch (hAlign) {
            case 'center':
                return 'center';
            case 'right':
                return 'flex-end';
            default:
                return 'flex-start';
        }
    }};
`;

const SimpleImage: FC<{
    /** ID value for targeting section with anchor hashes */
    anchorId?: string;

    /** Image settings */
    image?: ImageProps;

    /** Horizontal alignment of the image */
    hAlign?: 'left' | 'center' | 'right';

    /** Allow reduced section spacing to next section */
    isStackable?: boolean;

    /** Section background */
    bgMode?: 'full' | 'inverted';
}> = ({ anchorId, image, hAlign = 'left', bgMode, isStackable }) => {
    const theme = useContext(ThemeContext);
    const isInverted = bgMode === 'inverted';
    const hasBg = bgMode === 'full';

    return (
        <Section
            addSeperation
            anchorId={anchorId}
            isStackable={isStackable}
            bgColor={
                isInverted
                    ? getColors(theme).sectionBg.dark
                    : hasBg
                    ? getColors(theme).sectionBg.medium
                    : getColors(theme).sectionBg.light
            }
            bgMode={mapToBgMode(bgMode)}
        >
            <ImageWrapper hAlign={hAlign}>
                {image && <Image {...image} />}
            </ImageWrapper>
        </Section>
    );
};

export const SimpleImageComponent = SimpleImage;
export default withLibTheme(SimpleImage);
