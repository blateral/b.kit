import React, { FC } from 'react';
import styled, { css } from 'styled-components';

import Section from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import Image, { ImageProps } from 'components/blocks/Image';
import {
    mq,
    spacings,
    withRange,
    getGlobalSettings as global,
} from 'utils/styles';
import IntroBlock from 'components/blocks/IntroBlock';
import { HeadlineTag } from 'components/typography/Heading';

const PosterContainer = styled.div<{
    hasContent?: boolean;
}>`
    position: relative;
    width: 100%;
    max-height: 500px;

    @media ${mq.medium} {
        max-height: 900px;
    }

    &:after {
        content: ${({ hasContent }) => hasContent && '""'};
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: ${({ theme }) => global(theme).sections.imageTextGradient};
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
    min-height: 500px;
`;

const IntroContainer = styled(Wrapper)`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    z-index: 1;

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
`;

const Poster: FC<{
    image: ImageProps;
    title?: string;
    titleAs?: HeadlineTag;
    superTitle?: string;
    superTitleAs?: HeadlineTag;
    text?: string;

    primaryAction?: (isInverted?: boolean) => React.ReactNode;
    secondaryAction?: (isInverted?: boolean) => React.ReactNode;
}> = ({
    title,
    titleAs,
    superTitle,
    superTitleAs,
    text,
    primaryAction,
    secondaryAction,
    image,
}) => {
    return (
        <Section bgColor="undefined" bgMode="full">
            <Wrapper clampWidth="large">
                <PosterContainer hasContent={title !== undefined}>
                    <StyledImage {...image} coverSpace />
                    {title && (
                        <IntroContainer addWhitespace>
                            <IntroBlock
                                colorMode="onImage"
                                title={title}
                                titleAs={titleAs}
                                superTitle={superTitle}
                                superTitleAs={superTitleAs}
                                text={text}
                                secondaryAction={secondaryAction}
                                primaryAction={primaryAction}
                                clampText={text !== undefined}
                            />
                        </IntroContainer>
                    )}
                </PosterContainer>
            </Wrapper>
        </Section>
    );
};

export default Poster;
