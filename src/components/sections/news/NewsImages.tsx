import * as React from 'react';
import Image, { ImageProps } from 'components/blocks/Image';
import Section from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import styled from 'styled-components';
import { mq, spacings } from 'utils/styles';

const ImageFlex = styled.div`
    margin: -${spacings.spacer}px;

    @media ${mq.semilarge} {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
`;

const Img = styled.div<{ isSingleHalf?: boolean }>`
    padding: ${spacings.spacer}px;
    width: 100%;

    @media ${mq.semilarge} {
        width: ${({ isSingleHalf }) => isSingleHalf && '50%'};
    }
`;

const NewsImages: React.FC<{
    images?: ImageProps[];
    imageStyle?: 'full' | 'half';
}> = ({ images, imageStyle = 'full' }) => {
    return (
        <Section>
            <Wrapper clampWidth="small" addWhitespace>
                {images && imageStyle === 'half' ? (
                    <ImageFlex>
                        {images.map((img, i) => {
                            return (
                                <Img key={i} isSingleHalf={images.length >= 1}>
                                    <Image {...img} />
                                </Img>
                            );
                        })}
                    </ImageFlex>
                ) : (
                    images && (
                        <div>
                            {images.map((img, i) => {
                                return <Image {...img} key={i} />;
                            })}
                        </div>
                    )
                )}
            </Wrapper>
        </Section>
    );
};

export default NewsImages;
