import React, { FC } from 'react';
import styled from 'styled-components';
import { useLibTheme, withLibTheme } from 'utils/LibThemeProvider';

import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import Image, { ImageProps } from 'components/blocks/Image';
import { getGlobals as global } from 'utils/styles';
import Grid from 'components/base/Grid';

const StyledImage = styled(Image)`
    width: 100%;
    border-radius: ${({ theme }) => global(theme).sections.edgeRadius};
    overflow: hidden;

    picture > img {
        width: 100%;
        height: 100%;
    }
`;

type ImageType = Omit<ImageProps, 'coverSpace'> & { isFull?: boolean };

const Gallery: FC<{
    /** ID value for targeting section with anchor hashes */
    anchorId?: string;

    /** Array of image settings */
    images?: Array<ImageType>;

    /** Section background */
    bgMode?: 'full' | 'splitted' | 'inverted';
}> = ({ anchorId, bgMode, images }) => {
    const { colors } = useLibTheme();
    const isInverted = bgMode === 'inverted';

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
            bgMode={mapToBgMode(bgMode)}
        >
            <Wrapper addWhitespace>
                <Grid.Row>
                    {images?.map((img, i) => (
                        <Grid.Col
                            key={i}
                            semilarge={{
                                span: img.isFull ? 12 / 12 : 6 / 12,
                            }}
                        >
                            <StyledImage
                                {...img}
                                coverSpace
                                isInverted={isInverted}
                            />
                        </Grid.Col>
                    ))}
                </Grid.Row>
            </Wrapper>
        </Section>
    );
};

export const GalleryComponent = Gallery;
export default withLibTheme(Gallery);
