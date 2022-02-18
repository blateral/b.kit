import React, { FC, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { withLibTheme } from 'utils/LibThemeProvider';

import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import Image, { ImageProps } from 'components/blocks/Image';
import {
    getColors as color,
    getGlobals as global,
    mq,
    spacings,
} from 'utils/styles';
import Grid from 'components/base/Grid';

const ImgContainer = styled.div`
    width: 100%;

    @media ${mq.semilarge} {
        width: calc(100% + ${spacings.nudge * 2}px);
    }
`;

const ImgWrapper = styled.div<{ isFull?: boolean }>`
    picture > img {
        width: 100%;
    }
`;

const StyledImage = styled(Image)`
    border-radius: ${({ theme }) => global(theme).sections.edgeRadius};
    overflow: hidden;
`;

type ImageType = ImageProps & { isFull?: boolean };

const Gallery: FC<{
    bgMode?: 'full' | 'splitted' | 'inverted';
    images?: Array<ImageType>;
    className?: string;
}> = ({ bgMode, images, className }) => {
    const theme = useContext(ThemeContext);
    const isInverted = bgMode === 'inverted';

    // const isNextImgFull = (images: ImageType[], currentIndex: number) => {
    //     const newIndex = ++currentIndex;
    //     if (images && images[newIndex]) return images[newIndex]?.isFull;
    //     else return false;
    // };

    // // map images to fill always full width
    // images = images?.map((img, i, array) => {
    //     if (!img.isFull) {
    //         img.isFull =
    //             (i % 2 === 0 && isNextImgFull(array, i)) || array.length === 1;
    //     }
    //     return img;
    // });

    return (
        <Section
            addSeperation
            bgColor={
                isInverted
                    ? color(theme).new.sectionBg.dark
                    : bgMode
                    ? color(theme).new.sectionBg.medium
                    : color(theme).new.sectionBg.light
            }
            bgMode={mapToBgMode(bgMode)}
            className={className}
        >
            <Wrapper
                addWhitespace={global(theme).sections.edgeRadius ? true : false}
            >
                <ImgContainer>
                    <Grid.Row>
                        {images &&
                            images.map((img, i) => (
                                <Grid.Col
                                    key={i}
                                    semilarge={{
                                        span: img.isFull ? 12 / 12 : 6 / 12,
                                    }}
                                >
                                    <ImgWrapper>
                                        <StyledImage {...img} />
                                    </ImgWrapper>
                                </Grid.Col>
                            ))}
                    </Grid.Row>
                </ImgContainer>
            </Wrapper>
        </Section>
    );
};

export const GalleryComponent = Gallery;
export default withLibTheme(Gallery);
