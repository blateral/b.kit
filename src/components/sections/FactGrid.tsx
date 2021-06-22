import React, { FC, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

import { getColors, mq, spacings, withRange } from 'utils/styles';
import { HeadlineTag } from 'components/typography/Heading';
import Section from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import Intro from 'components/blocks/Intro';
import Fact, { FactProps } from 'components/blocks/Fact';

const StyledIntro = styled(Intro)`
    padding-bottom: ${spacings.spacer * 2}px;
`;

const ContentContainer = styled.div`
    & > * + * {
        padding-top: ${spacings.spacer * 2}px;
    }

    @media ${mq.semilarge} {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: 'flex-start';
        align-items: flex-start;

        margin-left: -20px;
        margin-top: -40px;

        & > * {
            padding-left: 20px;
            padding-top: 40px;
            flex: 1 0 50%;
            max-width: 50%;
        }
    }
`;

const FactGrid: FC<{
    title?: string;
    titleAs?: HeadlineTag;
    superTitle?: string;
    superTitleAs?: HeadlineTag;
    intro?: string;
    primaryAction?: (isInverted?: boolean) => React.ReactNode;
    secondaryAction?: (isInverted?: boolean) => React.ReactNode;

    facts?: Array<FactProps>;

    hasBack?: boolean;
    isInverted?: boolean;
}> = ({
    title,
    titleAs,
    superTitle,
    superTitleAs,
    intro,
    primaryAction,
    secondaryAction,
    facts,
    hasBack,
    isInverted,
}) => {
    const theme = useContext(ThemeContext);

    return (
        <Section
            addSeperation
            bgColor={
                isInverted
                    ? getColors(theme).dark
                    : hasBack
                    ? getColors(theme).mono.light
                    : 'transparent'
            }
        >
            <Wrapper clampWidth="normal" addWhitespace>
                {title && (
                    <StyledIntro
                        title={title}
                        titleAs={titleAs}
                        superTitle={superTitle}
                        superTitleAs={superTitleAs}
                        text={intro}
                        primaryAction={primaryAction}
                        secondaryAction={secondaryAction}
                        colorMode={isInverted ? 'inverted' : 'default'}
                    />
                )}
                {facts && (
                    <ContentContainer>
                        {facts.map((fact, i) => (
                            <Fact key={i} {...fact} />
                        ))}
                    </ContentContainer>
                )}
            </Wrapper>
        </Section>
    );
};

export default FactGrid;
