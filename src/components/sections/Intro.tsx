import React from 'react';
import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import IntroBlock from 'components/blocks/IntroBlock';
import { HeadlineTag } from 'components/typography/Heading';
import { useLibTheme, withLibTheme } from 'utils/LibThemeProvider';
import { ImageProps } from 'components/blocks/Image';
import { FontOptions } from 'utils/styles';
import { TitleSize } from 'components/blocks/Title';

const Intro: React.FC<{
    /** ID value for targeting section with anchor hashes */
    anchorId?: string;

    /** Main title text */
    title?: string;

    /** Main title HTML tag type (h2, h3, h4...) */
    titleAs?: HeadlineTag;

    /** Main title style */
    titleSize?: TitleSize;

    /** Superior title that stands above main title */
    superTitle?: string;

    /** Superior title HTML tag type (h3, h4 ...) */
    superTitleAs?: HeadlineTag;

    /**  Main text (richtext) */
    text?: string;

    /** Main text size */
    textSize?: keyof FontOptions;

    /** Images for different screen sizes. coverSpace defaults to true */
    image?: ImageProps;

    /** Function to inject custom primary button */
    primaryAction?: (isInverted?: boolean) => React.ReactNode;

    /** Function to inject custom secondary button */
    secondaryAction?: (isInverted?: boolean) => React.ReactNode;

    /** Center text and actions */
    isCentered?: boolean;

    /** Allow reduced section spacing to next section */
    isStackable?: boolean;

    /** Clamp title to a width of max 8 grid cols. */
    clampTitle?: boolean;

    /** Section background */
    bgMode?: 'inverted' | 'full' | 'splitted';
    className?: string;
}> = ({
    anchorId,
    title,
    titleAs,
    titleSize = 'heading-2',
    superTitle,
    superTitleAs,
    text,
    textSize = 'medium',
    primaryAction,
    secondaryAction,
    isCentered = false,
    isStackable = false,
    bgMode,
    image,
}) => {
    const { colors } = useLibTheme();
    const isInverted = bgMode === 'inverted';

    // set default ratio settings
    if (image && !image?.ratios) {
        image.ratios = {
            small: { h: 1, w: 1 },
        };
    }

    return (
        <Section
            addSeperation
            anchorId={anchorId}
            isStackable={isStackable}
            bgColor={
                isInverted
                    ? colors.sectionBg.dark
                    : bgMode
                    ? colors.sectionBg.medium
                    : colors.sectionBg.light
            }
            bgMode={mapToBgMode(bgMode)}
        >
            <Wrapper clampWidth="normal" addWhitespace>
                <IntroBlock
                    title={title}
                    titleAs={titleAs}
                    titleSize={titleSize}
                    superTitle={superTitle}
                    superTitleAs={superTitleAs}
                    text={text}
                    textSize={textSize}
                    colorMode={isInverted ? 'inverted' : 'default'}
                    secondaryAction={secondaryAction}
                    primaryAction={primaryAction}
                    isCentered={isCentered}
                    image={image}
                    clampTitle
                    clampText
                />
            </Wrapper>
        </Section>
    );
};

export const IntroComponent = Intro;
export default withLibTheme(Intro);
