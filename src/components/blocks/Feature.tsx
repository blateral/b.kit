import * as React from 'react';
import styled, { ThemeContext } from 'styled-components';
import { spacings, mq, getColors as color } from '../../utils/styles';

import Copy from '../typography/Copy';
import Image, { ImageProps as Props } from '../blocks/Image';

const View = styled.div``;

const ImageContainer = styled.div`
    padding-bottom: ${spacings.spacer * 2}px;
`;

const StyledImage = styled(Image)`
    width: 100%;
`;

const Content = styled.div`
    & + & {
        padding-top: ${spacings.spacer * 2}px;
    }
`;

const ContentBlock = styled(Copy)`
    & + & {
        padding-top: ${spacings.spacer}px;
    }
`;

const Desc = styled.div`
    padding-top: ${spacings.spacer}px;
`;

const Actions = styled.div`
    flex-direction: column;
    display: flex;
    align-items: stretch;
    padding-top: ${spacings.spacer * 2}px;
    width: 100%;

    & > * {
        flex: 1;
    }

    & > * + * {
        margin-top: ${spacings.spacer * 0.5}px;
    }

    @media ${mq.medium} {
        flex-direction: row;
        padding: ${spacings.spacer}px 0;

        &:last-child {
            padding-bottom: 0;
        }

        & > * + * {
            margin-left: ${spacings.spacer}px;
            margin-top: 0;
        }
    }

    @media ${mq.semilarge} {
        max-width: 50%;
        align-items: flex-start;
    }
`;

const Feature: React.FC<{
    title?: string;
    description?: string;
    intro?: string;
    text?: string;
    image?: Props;

    primaryAction?: (isInverted?: boolean) => React.ReactNode;
    secondaryAction?: (isInverted?: boolean) => React.ReactNode;

    isInverted?: boolean;
}> = ({
    title,
    description,
    intro,
    text,
    image,
    isInverted,
    primaryAction,
    secondaryAction,
}) => {
    const theme = React.useContext(ThemeContext);
    return (
        <View>
            {image && (
                <ImageContainer>
                    <StyledImage
                        small={image.small}
                        medium={image.medium}
                        semilarge={image.semilarge}
                        large={image.large}
                        xlarge={image.xlarge}
                        alt={image.alt}
                    />
                </ImageContainer>
            )}
            <Content>
                <ContentBlock
                    type="copy-b"
                    size="big"
                    textColor={color(theme).black}
                >
                    {title}
                </ContentBlock>
                {description && (
                    <ContentBlock size="small" textColor={color(theme).black}>
                        <Desc
                            dangerouslySetInnerHTML={{ __html: description }}
                        />
                    </ContentBlock>
                )}
            </Content>
            <Content>
                <ContentBlock type="copy-b" textColor={color(theme).black}>
                    {intro}
                </ContentBlock>
                {text && (
                    <ContentBlock
                        type="copy"
                        size="medium"
                        textColor={color(theme).black}
                    >
                        <div dangerouslySetInnerHTML={{ __html: text }} />
                    </ContentBlock>
                )}
            </Content>
            {(primaryAction || secondaryAction) && (
                <Actions>
                    {primaryAction && primaryAction(isInverted)}
                    {secondaryAction && secondaryAction(isInverted)}
                </Actions>
            )}
        </View>
    );
};

export default Feature;
