import React, { FC } from 'react';
import styled, { css } from 'styled-components';

import Section from 'components/base/Section';
import Wrapper, { wrapperWhitespace } from 'components/base/Wrapper';
import Image, { ImageProps } from 'components/blocks/Image';
import { spacings, getGlobals as global, mq } from 'utils/styles';
import IntroBlock from 'components/blocks/IntroBlock';
import { HeadlineTag } from 'components/typography/Heading';
import { withLibTheme } from 'utils/LibThemeProvider';

const Container = styled.figure<{
    hasContent?: boolean;
    verticallyCentered?: boolean;
}>`
    position: relative;
    width: 100%;
    max-height: 550px;
    padding: 0;
    margin: 0;

    &:after {
        content: ${({ hasContent }) => hasContent && '""'};
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: ${({ theme, verticallyCentered }) =>
            verticallyCentered
                ? global(theme).sections.secondayImageTextGradient
                : global(theme).sections.imageTextGradient};
        pointer-events: none;
        z-index: 0;
    }
`;

const StyledImage = styled(Image)`
    img {
        height: 550px;
    }
`;

const Intro = styled(IntroBlock)<{
    verticallyCentered?: boolean;
    horizontallyCentered?: boolean;
}>`
    position: absolute;
    bottom: ${({ verticallyCentered }) => !verticallyCentered && '0'};
    top: ${({ verticallyCentered }) => verticallyCentered && '50%'};
    left: 50%;
    right: 0;
    max-height: 100%;
    max-width: ${spacings.wrapper}px;

    padding: ${wrapperWhitespace + spacings.nudge * 2}px;
    z-index: 1;

    transform: ${({ verticallyCentered }) =>
        verticallyCentered ? 'translate(-50%, -50%)' : 'translateX(-50%)'};

    ${({ verticallyCentered }) =>
        verticallyCentered &&
        css`
            & > * {
                & > * {
                    text-align: center;
                }
            }

            @media ${mq.semilarge} {
                & > * {
                    & > * {
                        text-align: inherit;
                    }
                }
            }
        `};
`;

const Poster: FC<{
    /** ID value for targeting section with anchor hashes */
    anchorId?: string;

    /** Clamp width of poster image to content wrapper or large wrapper */
    width?: 'full' | 'content';

    /** The poster image settings */
    image: Omit<ImageProps, 'coverSpace' | 'ratios'>;

    /** Main title text */
    title?: string;

    /** Main title HTML tag type (h2, h3, h4...) */
    titleAs?: HeadlineTag;

    /** Superior title that stands above main title */
    superTitle?: string;

    /** Superior title HTML tag type (h3, h4 ...) */
    superTitleAs?: HeadlineTag;

    /** Text underneath the title (richtext) */
    text?: string;

    /** Function to inject custom primary button */
    primaryAction?: (isInverted?: boolean) => React.ReactNode;

    /** Function to inject custom secondary button */
    secondaryAction?: (isInverted?: boolean) => React.ReactNode;

    verticallyCentered?: boolean;
    horizontallyCentered?: boolean;
}> = ({
    anchorId,
    width = 'content',
    title,
    titleAs,
    superTitle,
    superTitleAs,
    text,
    primaryAction,
    secondaryAction,
    image,
    verticallyCentered,
    horizontallyCentered,
}) => {
    const isCentered = verticallyCentered && horizontallyCentered;
    return (
        <Section anchorId={anchorId} bgColor="image" bgMode="full">
            <Wrapper clampWidth={width === 'content' ? 'normal' : 'large'}>
                <Container
                    hasContent={!!title || !!text}
                    verticallyCentered={verticallyCentered}
                >
                    <StyledImage {...image} coverSpace ratios={undefined} />
                    {title && (
                        <Intro
                            verticallyCentered={verticallyCentered}
                            horizontallyCentered={horizontallyCentered}
                            renderAs="figcaption"
                            colorMode="onImage"
                            title={title}
                            titleAs={titleAs}
                            superTitle={superTitle}
                            superTitleAs={superTitleAs}
                            text={text}
                            secondaryAction={secondaryAction}
                            primaryAction={primaryAction}
                            clampTitle
                            maxTitleLines={3}
                            clampText
                            maxTextLines={4}
                            isCentered={horizontallyCentered || isCentered}
                        />
                    )}
                </Container>
            </Wrapper>
        </Section>
    );
};

export const PosterComponent = Poster;
export default withLibTheme(Poster);
