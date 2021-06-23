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
    padding-bottom: ${spacings.nudge * 3}px;
    max-width: 100%;
`;

const Content = styled.div<{ isCentered?: boolean }>`
    text-align: ${({ isCentered }) => isCentered && 'center'};
`;

const Title = styled(Copy)`
    * + & {
        ${withRange([spacings.spacer * 0.5, spacings.spacer], 'margin-top')}
    }
`;

const ContentBlock = styled(Copy)`
    * + & {
        ${withRange([spacings.spacer * 0.5, spacings.spacer], 'margin-top')}
    }
`;

const Text = styled(Copy)`
    margin-top: ${spacings.nudge}px;

    ${Title} + & {
        ${withRange([spacings.spacer * 0.5, spacings.spacer], 'margin-top')}
    }
`;

export interface FactProps {
    isInverted?: boolean;
    isCentered?: boolean;
    title?: string;
    subTitle?: string;
    text?: string;
    image?: ImageProps;
}

const Fact: FC<
    FactProps & {
        className?: string;
    }
> = ({
    isInverted = false,
    isCentered = false,
    title,
    subTitle,
    text,
    image,
    className,
}) => {
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
                    <Title
                        type="copy-b"
                        size="big"
                        isInverted={isInverted}
                        data-sheet="title"
                    >
                        {title}
                    </Title>
                )}
                {subTitle && (
                    <ContentBlock
                        type="copy-b"
                        isInverted={isInverted}
                        data-sheet="subtitle"
                    >
                        {subTitle}
                    </ContentBlock>
                )}
                {text && (
                    <Text
                        type="copy"
                        isInverted={isInverted}
                        data-sheet="text"
                        innerHTML={text}
                    />
                )}
            </Content>
        </View>
    );
};

export default Fact;
