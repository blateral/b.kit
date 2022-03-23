import React, { forwardRef } from 'react';
import ReactDOMServer from 'react-dom/server';
import styled, { css } from 'styled-components';

import {
    spacings,
    getGlobals as global,
    mq,
    withRange,
    getColors,
} from 'utils/styles';
import Image, { ImageProps } from 'components/blocks/Image';
import Link, { LinkProps } from 'components/typography/Link';
import Title from 'components/blocks/Title';
import External from 'components/base/icons/External';
import { HeadlineTag } from 'components/typography/Heading';
import AngleRight from 'components/base/icons/AngleRight';

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

    padding: ${spacings.spacer}px ${spacings.nudge * 3}px;

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

    @media ${mq.medium} {
        padding: ${spacings.nudge * 5}px ${spacings.spacer}px;
    }
`;

const StyledTitle = styled(Title)<{ clampTitle?: boolean }>`
    display: inline-block;
    max-width: ${({ clampTitle }) =>
        clampTitle && (13 / 28) * spacings.wrapper + 'px'};
`;

const ExternalIconHolder = styled.span`
    margin-left: ${spacings.nudge * 2}px;

    & > * {
        display: inline-block;
    }
`;

const Icon = styled.div`
    ${withRange([60, 150], 'height')};
    ${withRange([60, 150], 'width')};

    position: absolute;
    top: ${spacings.nudge * 3}px;
    left: ${spacings.nudge * 3}px;

    & > * {
        ${withRange([60, 150], 'height')};
        ${withRange([60, 150], 'width')};
    }

    color: ${({ theme }) => getColors(theme).new.text.inverted};
`;

const TitleIcon = styled.span`
    display: inline-block;
    margin-left: ${spacings.nudge * 2}px;

    color: ${({ theme }) => getColors(theme).new.text.inverted};

    @media ${mq.medium} {
        margin-left: ${spacings.nudge * 3}px;
    }
`;

const DefaultIcon = styled(AngleRight)`
    && {
        margin-bottom: 4px;
    }
`;

export interface PromotionCardProps {
    /** Setup Card for dark backgrounds */
    isInverted?: boolean;
    /** Card image settings */
    image: ImageProps;
    /** Card title */
    title?: string;
    /** Card title HTML tag type (h2, h3, h4...) */
    titleAs?: HeadlineTag;
    /** Superior card title that stands above main title */
    superTitle?: string;
    /** Superior card title HTML tag type (h3, h4 ...) */
    superTitleAs?: HeadlineTag;
    /** Href path */
    href?: string;
    /** Advanced href options */
    link?: LinkProps;
    /** Inject custom icon that indicates an external link */
    externalLinkIcon?: React.ReactNode;
    icon?: (props: { isInverted?: boolean }) => React.ReactNode;
    customTitleIcon?: (props: { isInverted?: boolean }) => React.ReactNode;
}

const PromotionCard = forwardRef<
    HTMLAnchorElement,
    PromotionCardProps & { className?: string }
>(
    (
        {
            isInverted,
            image,
            title,
            titleAs,
            superTitle,
            superTitleAs,
            href,
            link,
            externalLinkIcon,
            className,
            icon,
            customTitleIcon,
        },
        ref
    ) => {
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
                <StyledImage {...image} isInverted={isInverted} coverSpace />
                {icon && <Icon>{icon({ isInverted })}</Icon>}
                {title && (
                    <IntroContainer>
                        <span>
                            <StyledTitle
                                colorMode="onImage"
                                superTitle={superTitle}
                                superTitleAs={superTitleAs}
                                title={
                                    linkObj?.isExternal
                                        ? title + externalIconString
                                        : title
                                }
                                titleAs={titleAs || 'div'}
                                clampTitle
                            />
                            {title && (
                                <TitleIcon>
                                    {customTitleIcon ? (
                                        customTitleIcon({ isInverted })
                                    ) : (
                                        <DefaultIcon />
                                    )}
                                </TitleIcon>
                            )}
                        </span>
                    </IntroContainer>
                )}
            </View>
        );
    }
);

PromotionCard.displayName = 'PromotionCard';

export default PromotionCard;
