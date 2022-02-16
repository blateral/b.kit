import React, { forwardRef } from 'react';
import ReactDOMServer from 'react-dom/server';
import styled, { css } from 'styled-components';

import { mq, spacings, withRange, getGlobals as global } from 'utils/styles';
import Image, { ImageProps } from 'components/blocks/Image';
import Link, { LinkProps } from 'components/typography/Link';
import Title from 'components/blocks/Title';
import External from 'components/base/icons/External';

const View = styled(Link)<{
    clickable?: boolean;
}>`
    display: block;
    position: relative;
    width: 100%;
    border-radius: ${({ theme }) => global(theme).sections.edgeRadius};
    overflow: hidden;
    outline: none;

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

            &:focus {
                box-shadow: 0 2px 24px 0 rgba(0, 0, 0, 0.35);
            }
        `}
`;

const StyledImage = styled(Image)`
    width: 100%;
    height: 100%;
    min-height: 300px;
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

const StyledTitle = styled(Title)<{ clampTitle?: boolean }>`
    max-width: ${({ clampTitle }) =>
        clampTitle && (13 / 28) * spacings.wrapper + 'px'};
`;

const ExternalIconHolder = styled.span`
    margin-left: ${spacings.nudge * 2}px;

    & > * {
        display: inline-block;
    }
`;

export interface PromotionCardProps {
    /** Card image settings */
    image: ImageProps;
    /** Card title */
    title?: string;
    /** Href path */
    href?: string;
    /** Advanced href options */
    link?: LinkProps;
    /** Inject custom icon that indicates an external link */
    externalLinkIcon?: React.ReactNode;
}

const PromotionCard = forwardRef<
    HTMLAnchorElement,
    PromotionCardProps & { className?: string }
>(({ image, title, href, link, externalLinkIcon, className }, ref) => {
    // fallback for older versions
    let linkObj = link;
    if (href && !link) {
        linkObj = {
            href: href,
            isExternal: false,
        };
    }

    const externalIconString = ReactDOMServer.renderToString(
        <ExternalIconHolder>
            {externalLinkIcon || <External />}
        </ExternalIconHolder>
    );

    return (
        <View
            ref={ref}
            clickable={!!href || !!link}
            {...linkObj}
            className={className}
        >
            <StyledImage {...image} coverSpace />
            {title && (
                <IntroContainer>
                    <StyledTitle
                        colorMode="onImage"
                        title={
                            linkObj?.isExternal
                                ? title + externalIconString
                                : title
                        }
                        clampTitle
                    />
                </IntroContainer>
            )}
        </View>
    );
});

PromotionCard.displayName = 'PromotionCard';

export default PromotionCard;
