import React, { FC, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

import Section from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import Image, { ImageProps } from 'components/blocks/Image';
import { getColors as color, mq, spacings } from 'utils/styles';
import Intro from 'components/blocks/Intro';

const IntroBlock = styled.div`
    padding-bottom: ${spacings.spacer * 2}px;
`;

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
    title?: string;
    superTitle?: string;
    text?: string;

    primaryAction?: (isInverted?: boolean) => React.ReactNode;
    secondaryAction?: (isInverted?: boolean) => React.ReactNode;

    isInverted?: boolean;
    hasBack?: boolean;
    images?: Array<ImageType>;
    className?: string;
}> = ({
    isInverted = false,
    hasBack = false,
    images,
    className,
    title,
    superTitle,
    text,
    primaryAction,
    secondaryAction,
}) => {
    const theme = useContext(ThemeContext);

    const isPrevImgFull = (images: ImageType[], currentIndex: number) => {
        const newIndex = --currentIndex;
        if (images && images[newIndex]) return images[newIndex]?.isFull;
        else return false;
    };

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
            bgMode="full"
            bgColor={
                isInverted
                    ? color(theme).black
                    : hasBack
                    ? color(theme).mono.light
                    : 'transparent'
            }
            className={className}
        >
            <Wrapper clampWidth="normal" addWhitespace>
                {title && (
                    <IntroBlock>
                        <Intro
                            title={title}
                            superTitle={superTitle}
                            text={text}
                            isInverted={isInverted}
                            secondaryAction={secondaryAction}
                            primaryAction={primaryAction}
                        />
                    </IntroBlock>
                )}
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
