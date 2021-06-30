import * as React from 'react';
import Image, { ImageProps } from 'components/blocks/Image';
import Section from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import styled, { ThemeContext } from 'styled-components';
import { getColors, mq, spacings, withRange } from 'utils/styles';
import Actions from 'components/blocks/Actions';

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

const StyledActions = styled(Actions)`
    ${withRange([spacings.spacer, spacings.spacer * 2], 'margin-top')};
`;

const NewsImages: React.FC<{
    images?: ImageProps[];
    imageStyle?: 'full' | 'half';

    primaryAction?: (isInverted?: boolean) => React.ReactNode;
    secondaryAction?: (isInverted?: boolean) => React.ReactNode;

    isInverted?: boolean;
}> = ({
    images,
    imageStyle = 'full',
    primaryAction,
    secondaryAction,
    isInverted,
}) => {
    const theme = React.useContext(ThemeContext);
    return (
        <Section
            addSeperation
            bgColor={isInverted ? getColors(theme).dark : 'transparent'}
        >
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
