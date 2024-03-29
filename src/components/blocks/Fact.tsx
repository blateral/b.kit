import React, { forwardRef } from 'react';
import styled from 'styled-components';

import { spacings, getGlobals as global } from 'utils/styles';
import Image, { ImageProps } from 'components/blocks/Image';
import Copy from 'components/typography/Copy';

const View = styled.div``;

const ImageContainer = styled.div<{ isCentered?: boolean }>`
    display: flex;
    justify-content: ${({ isCentered }) =>
        isCentered ? 'center' : 'flex-start'};
    margin-bottom: ${spacings.nudge * 3}px;
    max-width: 100%;
`;

const StyledImage = styled(Image)`
    overflow: hidden;
    border-radius: ${({ theme }) => global(theme).sections.edgeRadius};
`;

const Content = styled.div<{ isCentered?: boolean }>`
    text-align: ${({ isCentered }) => isCentered && 'center'};

    & > * + * {
        margin-top: ${spacings.nudge * 3}px;
    }
`;

const Title = styled(Copy)``;

const SubTitle = styled(Copy)``;

const Text = styled(Copy)`
    ${SubTitle} + & {
        margin-top: ${spacings.nudge}px;
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

const Fact = forwardRef<
    HTMLDivElement,
    FactProps & {
        className?: string;
    }
>(
    (
        {
            isInverted = false,
            isCentered = false,
            title,
            subTitle,
            text,
            image,
            className,
        },
        ref
    ) => {
        return (
            <View ref={ref} className={className}>
                {image?.small && (
                    <ImageContainer isCentered={isCentered}>
                        <StyledImage
                            isInverted={isInverted}
                            small={image.small}
                            medium={image.medium}
                            semilarge={image.semilarge}
                            large={image.large}
                            xlarge={image.xlarge}
                            alt={image.alt}
                            coverSpace={image.coverSpace}
                            ratios={image.ratios}
                            showPlaceholder={image.showPlaceholder}
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
                        <SubTitle
                            type="copy-b"
                            isInverted={isInverted}
                            data-sheet="subtitle"
                        >
                            {subTitle}
                        </SubTitle>
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
    }
);

Fact.displayName = 'Fact';

export default Fact;
