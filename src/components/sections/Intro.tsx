import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import IntroBlock from 'components/blocks/IntroBlock';
import { HeadlineTag } from 'components/typography/Heading';
import * as React from 'react';
import { ThemeContext } from 'styled-components';
import { getColors as color } from 'utils/styles';

const Intro: React.FC<{
    title: string;
    titleAs?: HeadlineTag;
    superTitle?: string;
    superTitleAs?: HeadlineTag;
    text?: string;

    primaryAction?: (isInverted?: boolean) => React.ReactNode;
    secondaryAction?: (isInverted?: boolean) => React.ReactNode;

    isCentered?: boolean;
    clampTitle?: boolean;
    clampText?: boolean;
    className?: string;

    bgMode?: 'inverted' | 'full' | 'splitted';
}> = ({
    title,
    titleAs,
    superTitle,
    superTitleAs,
    text,
    primaryAction,
    secondaryAction,
    isCentered = false,
    clampTitle = true,
    clampText = true,
    className,
    bgMode,
}) => {
    const theme = React.useContext(ThemeContext);
    const isInverted = bgMode === 'inverted';
    return (
        <Section
            addSeperation
            bgColor={
                isInverted
                    ? color(theme).dark
                    : bgMode
                    ? color(theme).mono.light
                    : 'transparent'
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
                    clampTitle={clampTitle}
                    clampText={clampText}
                    className={className}
                />
            </Wrapper>
        </Section>
    );
};

export default Intro;
