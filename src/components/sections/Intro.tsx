import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import IntroBlock from 'components/blocks/IntroBlock';
import { HeadlineTag } from 'components/typography/Heading';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { getColors as color } from 'utils/styles';
import { withLibTheme } from 'utils/LibThemeProvider';
import Grid from 'components/base/Grid';

const Intro: React.FC<{
    title: string;
    titleAs?: HeadlineTag;
    superTitle?: string;
    superTitleAs?: HeadlineTag;
    text?: string;

    primaryAction?: (isInverted?: boolean) => React.ReactNode;
    secondaryAction?: (isInverted?: boolean) => React.ReactNode;

    isCentered?: boolean;
    isStackable?: boolean;
    clampTitle?: boolean;
    clampText?: boolean;
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
    clampTitle = true,
    clampText = true,
    bgMode,
}) => {
    const theme = useContext(ThemeContext);
    const isInverted = bgMode === 'inverted';

    return (
        <Section
            addSeperation
            isStackable={isStackable}
            bgColor={
                isInverted
                    ? color(theme).new.sectionBg.dark
                    : bgMode
                    ? color(theme).new.sectionBg.medium
                    : color(theme).new.sectionBg.light
            }
            bgMode={mapToBgMode(bgMode)}
        >
            <Wrapper clampWidth="normal" addWhitespace>
                <Grid.Row>
                    <Grid.Col>
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
                        />
                    </Grid.Col>
                </Grid.Row>
            </Wrapper>
        </Section>
    );
};

export const IntroComponent = Intro;
export default withLibTheme(Intro);
