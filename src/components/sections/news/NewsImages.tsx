import React from 'react';
import styled from 'styled-components';

import { getGlobals as global } from 'utils/styles';
import { useLibTheme, withLibTheme } from 'utils/LibThemeProvider';
import Image, { ImageProps } from 'components/blocks/Image';
import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
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

const NewsImages: React.FC<{
    /** ID value for targeting section with anchor hashes */
    anchorId?: string;

    /** List of gallery images */
    images?: ImageType[];

    /** Image style */
    isFull?: boolean;

    /** Section background */
    bgMode?: 'full' | 'inverted';
}> = ({ anchorId, images, bgMode }) => {
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
                <Grid.Row>
                    {images
                        ?.filter((img) => img.small)
                        ?.map((img, i) => (
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
                {/* {images && (imageStyle === 'half' || images.length >= 2) ? (
                    <Grid.Row>
                        {images.map((img, i) => {
                            return (
                                <Grid.Col medium={{ span: 6 / 12 }} key={i}>
                                    <div>
                                        <StyledImage
                                            {...img}
                                            coverSpace
                                            isInverted={isInverted}
                                        />
                                    </div>
                                </Grid.Col>
                            );
                        })}
                    </Grid.Row>
                ) : (
                    images && (
                        <div>
                            {images.map((img, i) => {
                                return (
                                    <StyledImage
                                        key={i}
                                        {...img}
                                        coverSpace
                                        isInverted={isInverted}
                                    />
                                );
                            })}
                        </div>
                    )
                )} */}
            </Wrapper>
        </Section>
    );
};

export const NewsImagesComponent = NewsImages;
export default withLibTheme(NewsImages);
