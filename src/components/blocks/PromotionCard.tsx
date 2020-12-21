import React, { FC } from 'react';
import styled, { css } from 'styled-components';

import { spacings, withRange } from 'utils/styles';
import Image, { ImageProps } from 'components/blocks/Image';
import Intro from './Intro';

const View = styled.div<{
    onClick?: () => void;
}>`
    position: relative;
    width: 100%;

    &:after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: linear-gradient(
            3deg,
            rgba(0, 0, 0, 0.25) 0%,
            rgba(0, 0, 0, 0.15) 30%,
            rgba(0, 0, 0, 0) 50%
        );
        pointer-events: none;
    }

    ${({ onClick }) =>
        onClick &&
        css`
            transition: box-shadow 0.2s ease-in-out;
            cursor: pointer;

            &:hover {
                box-shadow: 0 2px 24px 0 rgba(0, 0, 0, 0.35);
            }
        `}
`;

const StyledImage = styled(Image)`
    width: 100%;
`;

const IntroContainer = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    z-index: 1;

    padding-left: ${spacings.spacer * 2}px;
    padding-right: ${spacings.spacer * 2}px;
    ${withRange([spacings.spacer, spacings.spacer * 2], 'padding-top')};
    ${withRange([spacings.spacer, spacings.spacer * 5], 'padding-bottom')};

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    /* required to align items at flex-end in ie11 */
    &:before {
        content: '';
        display: block;
        flex: 1 0 0px;
    }
`;

export interface PromotionCardProps {
    image: ImageProps;
    title: string;
    superTitle?: string;
    text?: string;
    primaryAction?: React.ReactNode;
    secondaryAction?: React.ReactNode;
    onClick?: () => void;
}

const PromotionCard: FC<PromotionCardProps> = ({
    image,
    title,
    superTitle,
    text,
    primaryAction,
    secondaryAction,
    onClick,
}) => {
    return (
        <View onClick={onClick}>
            <StyledImage {...image} coverSpace />
            {title && (
                <IntroContainer>
                    <Intro
                        title={title}
                        superTitle={superTitle}
                        text={text}
                        isInverted
                        secondaryAction={() => secondaryAction}
                        primaryAction={() => primaryAction}
                    />
                </IntroContainer>
            )}
        </View>
    );
};

export default PromotionCard;
