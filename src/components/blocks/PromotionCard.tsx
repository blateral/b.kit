import React, { FC } from 'react';
import styled, { css } from 'styled-components';

import {
    mq,
    spacings,
    withRange,
    getGlobalSettings as global,
} from 'utils/styles';
import Image, { ImageProps } from 'components/blocks/Image';
import Intro from './Intro';

const View = styled.div<{
    clickable?: boolean;
}>`
    display: block;
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
        background: ${({ theme }) => global(theme).sections.imageTextGradient};
        pointer-events: none;
    }

    ${({ clickable }) =>
        clickable &&
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
    min-height: 300px;
`;

const LinkHelper = styled.a`
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`;

const IntroContainer = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    z-index: 1;

    padding-left: ${spacings.spacer}px;
    padding-right: ${spacings.spacer}px;
    ${withRange([spacings.spacer, spacings.spacer * 2], 'padding-top')};
    ${withRange([spacings.spacer, spacings.spacer * 4], 'padding-bottom')};

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

    @media ${mq.semilarge} {
        padding-left: calc(${1 / 28} * 100vw);
    }

    @media ${mq.xlarge} {
        padding-left: ${(1 / 28) * spacings.wrapper}px;
    }
`;

export interface PromotionCardProps {
    image: ImageProps;
    title?: string;
    superTitle?: string;
    text?: string;
    href?: string;
    primaryAction?: React.ReactNode;
    secondaryAction?: React.ReactNode;
    onClick?: () => void;
}

const PromotionCard: FC<PromotionCardProps> = ({
    image,
    title,
    superTitle,
    text,
    href,
    primaryAction,
    secondaryAction,
    onClick,
}) => {
    return (
        <View onClick={onClick} clickable={onClick || href ? true : false}>
            <StyledImage {...image} coverSpace />
            {title && (
                <IntroContainer>
                    <LinkHelper href={href} />
                    <Intro
                        colorMode="onImage"
                        title={title}
                        superTitle={superTitle}
                        text={text}
                        secondaryAction={() => secondaryAction}
                        primaryAction={() => primaryAction}
                        clampText={text !== undefined}
                    />
                </IntroContainer>
            )}
        </View>
    );
};

export default PromotionCard;
