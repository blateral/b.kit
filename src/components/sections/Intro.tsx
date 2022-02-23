import React from 'react';
import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import IntroBlock from 'components/blocks/IntroBlock';
import { HeadlineTag } from 'components/typography/Heading';
import { useLibTheme, withLibTheme } from 'utils/LibThemeProvider';

const Intro: React.FC<{
    /** Main title text */
    title: string;

    /** Main title HTML tag type (h2, h3, h4...) */
    titleAs?: HeadlineTag;

    /** Superior title that stands above main title */
    superTitle?: string;

    /** Superior title HTML tag type (h3, h4 ...) */
    superTitleAs?: HeadlineTag;

    /**  Intro text underneath the title (richtext) */
    text?: string;

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
    title,
    titleAs,
    superTitle,
    superTitleAs,
    text,
    primaryAction,
    secondaryAction,
    isCentered = false,
    isStackable = false,
    bgMode,
}) => {
    const { colors } = useLibTheme();
    const isInverted = bgMode === 'inverted';

    return (
        <Section
            addSeperation
            isStackable={isStackable}
            bgColor={
                isInverted
                    ? colors.new.sectionBg.dark
                    : bgMode
                    ? colors.new.sectionBg.medium
                    : colors.new.sectionBg.light
            }
            bgMode={mapToBgMode(bgMode)}
        >
            <Wrapper clampWidth="normal" addWhitespace>
                <IntroBlock
                    title={title}
                    titleAs={titleAs}
                    superTitle={superTitle}
                    superTitleAs={superTitleAs}
                    text={text}
                    colorMode={isInverted ? 'inverted' : 'default'}
                    secondaryAction={secondaryAction}
                    primaryAction={primaryAction}
                    isCentered={isCentered}
                    clampTitle
                />
            </Wrapper>
        </Section>
    );
};

export const IntroComponent = Intro;
export default withLibTheme(Intro);
