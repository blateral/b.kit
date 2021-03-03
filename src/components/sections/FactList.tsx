import * as React from 'react';
import Section, { BgMode } from 'components/base/Section';
import styled, { ThemeContext } from 'styled-components';
import { getColors, spacings } from 'utils/styles';
import Wrapper from 'components/base/Wrapper';
import Intro from 'components/blocks/Intro';
import Copy from 'components/typography/Copy';

const FactsContainer = styled.ul`
    padding: 0;
    margin: 0;

    padding-top: ${spacings.spacer * 3}px;

    list-style-type: none;
`;

const FactsItem = styled.li<{ hasText?: boolean }>`
    padding: ${spacings.spacer}px ${spacings.nudge * 2}px;

    background: #fff;

    cursor: pointer;

    display: flex;
    flex-direction: row;
    align-items: ${({ hasText }) => (hasText ? 'flex-start' : 'center')};

    & + & {
        margin-top: ${spacings.nudge * 2}px;
    }
`;

const Icon = styled.img`
    margin-right: ${spacings.spacer}px;
    display: block;
    width: 100%;
    max-width: ${spacings.spacer * 2}px;
`;

const ContentBlock = styled.div`
    max-width: 80%;
`;

const Text = styled(Copy)`
    margin-top: ${spacings.spacer}px;
`;

const FactList: React.FC<{
    title?: string;
    superTitle?: string;
    intro?: string;

    facts: {
        label?: string;
        text?: string;
        icon?: { src: string; alt?: string };
    }[];

    bgMode?: 'full' | 'splitted';

    primaryAction?: (isInverted?: boolean) => React.ReactNode;
    secondaryAction?: (isInverted?: boolean) => React.ReactNode;

    isInverted?: boolean;
}> = ({
    title,
    superTitle,
    intro,
    facts,
    bgMode,
    primaryAction,
    secondaryAction,
    isInverted,
}) => {
    const getSectionBgMode = (): BgMode | undefined => {
        switch (bgMode) {
            case 'full':
                return 'full';
            case 'splitted':
                return 'larger-right';
            default:
                return undefined;
        }
    };

    const theme = React.useContext(ThemeContext);
    return (
        <Section
            addSeperation
            bgColor={
                isInverted
                    ? getColors(theme).dark
                    : bgMode
                    ? getColors(theme).mono.light
                    : 'transparent'
            }
            bgMode={!isInverted ? getSectionBgMode() : undefined}
        >
            <Wrapper clampWidth="normal" addWhitespace>
                {title && (
                    <Intro
                        title={title}
                        superTitle={superTitle}
                        text={intro}
                        primaryAction={primaryAction}
                        secondaryAction={secondaryAction}
                        isInverted={isInverted}
                    />
                )}
                <FactsContainer>
                    {facts.map(({ label, text, icon }, i) => {
                        return (
                            <FactsItem key={i} hasText={!!text}>
                                {icon && <Icon src={icon.src} alt={icon.alt} />}
                                <ContentBlock>
                                    <Copy type="copy-b">{label}</Copy>
                                    {text && (
                                        <Text type="copy">
                                            <div
                                                dangerouslySetInnerHTML={{
                                                    __html: text,
                                                }}
                                            />
                                        </Text>
                                    )}
                                </ContentBlock>
                            </FactsItem>
                        );
                    })}
                </FactsContainer>
            </Wrapper>
        </Section>
    );
};

export default FactList;
