import React, { FC, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import Image, { ImageProps } from 'components/blocks/Image';
import { getColors as color, mq, spacings } from 'utils/styles';

const ImgContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;

    @media ${mq.semilarge} {
        margin-left: ${spacings.spacer * -1}px;
        width: calc(100% + ${spacings.spacer}px);
    }
`;

const ImgWrapper = styled.div<{ isFull?: boolean }>`
    flex: 0 100%;
    padding-top: ${spacings.nudge * 2}px;

    picture > img {
        width: 100%;
    }

    @media ${mq.semilarge} {
        flex: 0 ${({ isFull }) => (isFull ? 100 : 50)}%;
        padding-left: ${spacings.spacer}px;
        padding-top: ${spacings.spacer}px;

        /* &:last-child:nth-child(odd) {
            flex: 0 100%;
        } */
    }
`;

type ImageType = ImageProps & { isFull?: boolean };

const Gallery: FC<{
    primaryAction?: (isInverted?: boolean) => React.ReactNode;
    secondaryAction?: (isInverted?: boolean) => React.ReactNode;

    bgMode?: 'full' | 'inverted';
    images?: Array<ImageType>;
    className?: string;
}> = ({ bgMode, images, className }) => {
    const theme = useContext(ThemeContext);
    const isInverted = bgMode === 'inverted';

    const isNextImgFull = (images: ImageType[], currentIndex: number) => {
        const newIndex = ++currentIndex;
        if (images && images[newIndex]) return images[newIndex]?.isFull;
        else return false;
    };

    // map images to fill always full width
    images = images?.map((img, i, array) => {
        if (!img.isFull) {
            img.isFull =
                (i % 2 === 0 && isNextImgFull(array, i)) || array.length === 1;
        }
        return img;
    });

    return (
        <Section
            addSeperation
            bgMode={mapToBgMode(bgMode, true)}
            bgColor={
                isInverted
                    ? color(theme).dark
                    : bgMode === 'full'
                    ? color(theme).mono.light
                    : 'transparent'
            }
            className={className}
        >
            <Wrapper>
                <ImgContainer>
                    {images &&
                        images.map((img, i) => (
                            <ImgWrapper key={i} isFull={img.isFull}>
                                <Image {...img} />
                            </ImgWrapper>
                        ))}
                </ImgContainer>
            </Wrapper>
        </Section>
    );
};

export default Gallery;
