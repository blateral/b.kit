import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

import { getColors as color, mq, spacings, withRange } from 'utils/styles';
import Image, { ImageProps } from 'components/blocks/Image';
import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import Actions from 'components/blocks/Actions';

const Content = styled.div`
    & > * + * {
        margin-top: ${spacings.spacer * 2}px;
    }
`;

const ImageFlex = styled.div`
    margin: -${spacings.spacer}px;

    @media ${mq.medium} {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;

        & > * {
            flex: 1 0 50%;
            max-width: 50%;
        }
    }
`;

const Img = styled.div<{ isSingleHalf?: boolean }>`
    padding: ${spacings.spacer}px;
    width: 100%;

    @media ${mq.semilarge} {
        width: ${({ isSingleHalf }) => isSingleHalf && '50%'};
    }
`;

const StyledActions = styled(Actions)`
    ${withRange([spacings.spacer, spacings.spacer * 2], 'margin-top')};
`;

const NewsImages: React.FC<{
    images?: Omit<ImageProps, 'coverSpace'>[];
    imageStyle?: 'full' | 'half';

    primaryAction?: (isInverted?: boolean) => React.ReactNode;
    secondaryAction?: (isInverted?: boolean) => React.ReactNode;

    bgMode?: 'full' | 'inverted';
}> = ({
    images,
    imageStyle = 'full',
    primaryAction,
    secondaryAction,
    bgMode,
}) => {
    const theme = useContext(ThemeContext);

    const isInverted = bgMode === 'inverted';
    const hasBg = bgMode === 'full';

    return (
        <Section
            addSeperation
            bgColor={
                isInverted
                    ? color(theme).dark
                    : hasBg
                    ? color(theme).mono.light
                    : 'transparent'
            }
            bgMode={mapToBgMode(bgMode)}
        >
            <Wrapper clampWidth="small" addWhitespace>
                <Content>
                    {images && (imageStyle === 'half' || images.length >= 2) ? (
                        <ImageFlex>
                            {images.map((img, i) => {
                                return (
                                    <Img
                                        key={i}
                                        isSingleHalf={images.length >= 1}
                                    >
                                        <Image coverSpace {...img} />
                                    </Img>
                                );
                            })}
                        </ImageFlex>
                    ) : (
                        images && (
                            <div>
                                {images.map((img, i) => {
                                    return (
                                        <Image coverSpace {...img} key={i} />
                                    );
                                })}
                            </div>
                        )
                    )}
                </Content>

                {(primaryAction || secondaryAction) && (
                    <StyledActions
                        primary={primaryAction && primaryAction(isInverted)}
                        secondary={
                            secondaryAction && secondaryAction(isInverted)
                        }
                    />
                )}
            </Wrapper>
        </Section>
    );
};

export default NewsImages;
