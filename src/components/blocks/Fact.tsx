import React, { FC } from 'react';
import styled from 'styled-components';

import { spacings, withRange } from 'utils/styles';
import Image, { ImageProps } from 'components/blocks/Image';
import Copy from 'components/typography/Copy';

const View = styled.div``;

const ImageContainer = styled.div<{ isCentered?: boolean }>`
    display: flex;
    justify-content: ${({ isCentered }) =>
        isCentered ? 'center' : 'flex-start'};
    padding-bottom: ${spacings.spacer * 2}px;
    max-width: 100%;
`;

const Content = styled.div<{ isCentered?: boolean }>`
    text-align: ${({ isCentered }) => isCentered && 'center'};

    & + & {
        ${withRange(
            [spacings.spacer * 1.5, spacings.spacer * 2],
            'padding-top'
        )}
    }
`;

const ContentBlock = styled(Copy)`
    & + & {
        ${withRange([spacings.spacer * 0.5, spacings.spacer], 'padding-top')}
    }
`;

export interface FactProps {
    isInverted?: boolean;
    isCentered?: boolean;
    title?: string;
    image?: ImageProps;
}

const Fact: FC<
    FactProps & {
        className?: string;
    }
> = ({ isInverted = false, isCentered = false, title, image, className }) => {
    return (
        <View className={className}>
            {image && (
                <ImageContainer isCentered={isCentered}>
                    <Image
                        small={image.small}
                        medium={image.medium}
                        semilarge={image.semilarge}
                        large={image.large}
                        xlarge={image.xlarge}
                        alt={image.alt}
                        coverSpace={image.coverSpace}
                    />
                </ImageContainer>
            )}
            <Content isCentered={isCentered}>
                {title && (
                    <ContentBlock
                        type="copy-b"
                        size="big"
                        isInverted={isInverted}
                        data-sheet="title"
                    >
                        {title}
                    </ContentBlock>
                )}
            </Content>
        </View>
    );
};

export default Fact;
