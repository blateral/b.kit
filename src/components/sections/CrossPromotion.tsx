import * as React from 'react';
import styled, { ThemeContext, css } from 'styled-components';

import {
    getColors as color,
    spacings,
    mq,
    withRange,
} from '../../utils/styles';

import Grid from '../base/Grid';
import Section, { BgMode } from '../base/Section';
import Wrapper from '../base/Wrapper';

import { ImageProps } from '../blocks/Image';
import Intro from '../blocks/Intro';

const IntroBlock = styled.div`
    padding-bottom: ${spacings.spacer * 2}px;
`;

const FlexGrid = styled.div`
    @media ${mq.semilarge} {
        display: flex;
        flex-direction: row;
        margin-left: -${spacings.spacer}px;
    }
`;

const FlexGridCol = styled.div`
    display: flex;
    flex-direction: column;

    @media ${mq.semilarge} {
        flex: 1 0 50%;
        max-width: 50%;
        padding-left: ${spacings.spacer}px;
    }

    & + & {
        margin-top: ${spacings.spacer}px;

        @media ${mq.semilarge} {
            margin-top: 0;
        }
    }
`;

const PosterContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;

    flex: 1 0 auto;

    color: ${({ theme }) => color(theme).white};

    &:before {
        content: '';
        width: 0px;
        display: block;

        @media ${mq.semilarge} {
            min-height: ${(50 / 16) * 9}vw;
        }

        @media ${mq.xlarge} {
            min-height: ${(((100 / 28) * 13) / 16) * 9}vw;
        }

        @media ${mq.xxlarge} {
            min-height: ${(((spacings.wrapperLarge / 28) * 13) / 16) * 9}px;
        }
    }

    & + & {
        margin-top: ${spacings.spacer}px;
    }
`;

const View = styled.div<{
    onClick?: () => void;
    bgImage?: ImageProps;
}>`
    width: 100%;
    min-height: ${(100 / 16) * 9}vw;
    padding-left: ${spacings.spacer}px;
    padding-right: ${spacings.spacer}px;
    ${withRange([spacings.spacer, spacings.spacer * 2], 'padding-top')};
    ${withRange([spacings.spacer, spacings.spacer * 2], 'padding-bottom')};

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    position: relative;

    background-image: url('${({ bgImage }) => bgImage && bgImage.small}');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    @media ${mq.medium} {
        background-image: ${({ bgImage }) =>
            `url("${bgImage && bgImage.medium}")`} }

    @media ${mq.semilarge} {
        min-height: 100%;
    }


    /* required to align items at flex-end in ie11 */
    &:before {
        content: '';
        display: block;
        flex: 1 0 0px;
    }

    &:after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: linear-gradient(
            3deg,
            rgba(0, 0, 0, 0.25) 0%,
            rgba(0, 0, 0, 0.15) 30%,
            rgba(0, 0, 0, 0) 50%
        );
        pointer-events: none;
    }

    ${({ onClick }) =>
        onClick &&
        css`
            transition: 0.2s;
            cursor: pointer;

            &:hover {
                box-shadow: 0 2px 24px 0 rgba(0, 0, 0, 0.35);
            }
        `}
    `;

const ViewContainer = styled.div`
    position: relative;
    z-index: 1;
`;

export interface PosterProps {
    image?: ImageProps & { size?: 'half' | 'full' };

    title: string;
    superTitle?: string;
    text?: string;

    primaryAction?: (isInverted?: boolean) => React.ReactNode;
    secondaryAction?: (isInverted?: boolean) => React.ReactNode;

    isInverted?: boolean;
}

const Poster: React.FC<PosterProps> = ({
    image,
    superTitle,
    text,
    primaryAction,
    secondaryAction,
    title,
}) => {
    return (
        <View bgImage={image}>
            <ViewContainer>
                <IntroBlock>
                    <Intro
                        title={title}
                        superTitle={superTitle}
                        text={text}
                        isInverted
                        secondaryAction={secondaryAction}
                        primaryAction={primaryAction}
                    />
                </IntroBlock>
            </ViewContainer>
        </View>
    );
};

const CrossPromotion: React.FC<{
    title: string;
    superTitle: string;
    text?: string;

    main?: Array<PosterProps>;
    aside?: Array<PosterProps>;
    isMirrored?: boolean;

    bgMode?: 'full' | 'splitted';

    primaryAction?: (isInverted?: boolean) => React.ReactNode;
    secondaryAction?: (isInverted?: boolean) => React.ReactNode;

    isInverted?: boolean;
}> = ({
    title,
    superTitle,
    text,
    primaryAction,
    secondaryAction,
    main,
    aside,
    isInverted,
    bgMode,
    isMirrored,
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
                    ? color(theme).black
                    : bgMode
                    ? color(theme).mono.light
                    : 'transparent'
            }
            bgMode={!isInverted ? getSectionBgMode() : undefined}
        >
            <Wrapper clampWidth="normal" addWhitespace>
                {title && (
                    <IntroBlock>
                        <Intro
                            title={title}
                            superTitle={superTitle}
                            text={text}
                            isInverted={isInverted}
                            secondaryAction={secondaryAction}
                            primaryAction={primaryAction}
                        />
                    </IntroBlock>
                )}

                <Grid.Row>
                    <Grid.Col xlarge={{ span: 26 / 28, move: 1 / 28 }}>
                        {aside ? (
                            isMirrored ? (
                                <FlexGrid>
                                    <FlexGridCol>
                                        {main &&
                                            main.map((item, i) => (
                                                <PosterContainer key={i}>
                                                    <Poster {...item} />
                                                </PosterContainer>
                                            ))}
                                    </FlexGridCol>

                                    <FlexGridCol>
                                        {aside.map((item, i) => (
                                            <PosterContainer key={i}>
                                                <Poster {...item} />
                                            </PosterContainer>
                                        ))}
                                    </FlexGridCol>
                                </FlexGrid>
                            ) : (
                                <FlexGrid>
                                    <FlexGridCol>
                                        {aside.map((item, i) => (
                                            <PosterContainer key={i}>
                                                <Poster {...item} />
                                            </PosterContainer>
                                        ))}
                                    </FlexGridCol>
                                    <FlexGridCol>
                                        {main &&
                                            main.map((item, i) => (
                                                <PosterContainer key={i}>
                                                    <Poster {...item} />
                                                </PosterContainer>
                                            ))}
                                    </FlexGridCol>
                                </FlexGrid>
                            )
                        ) : (
                            <Grid.Row>
                                {main &&
                                    main.map((image, i) => (
                                        <Grid.Col
                                            medium={{
                                                span:
                                                    (image.image?.size ===
                                                    'half'
                                                        ? 14
                                                        : 28) / 28,
                                            }}
                                            key={i}
                                        >
                                            <PosterContainer key={i}>
                                                <Poster {...image} />
                                            </PosterContainer>
                                        </Grid.Col>
                                    ))}
                            </Grid.Row>
                        )}
                    </Grid.Col>
                </Grid.Row>
            </Wrapper>
        </Section>
    );
};

export default CrossPromotion;
