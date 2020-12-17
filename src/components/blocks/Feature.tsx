import * as React from 'react';
import styled, { ThemeContext } from 'styled-components';
import { spacings, getColors as color, withRange } from 'utils/styles';

import Copy from 'components/typography/Copy';
import Image, { ImageProps as Props } from 'components/blocks/Image';
import Actions from './Actions';

const View = styled.div`
    min-width: 270px;
`;

const ImageContainer = styled.div`
    padding-bottom: ${spacings.spacer * 2}px;
`;

const StyledImage = styled(Image)`
    width: 100%;
`;

const Content = styled.div`
    & + & {
        ${withRange(
            [spacings.spacer * 1.5, spacings.spacer * 2],
            'padding-top'
        )}
    }
`;

const ContentBlock = styled(Copy)`
    & + & {
        ${withRange([spacings.spacer * 0.5, spacings.spacer], 'padding-top')}
    }
`;

const Desc = styled.div`
    ${withRange([spacings.spacer * 0.5, spacings.spacer], 'padding-top')}
`;

export interface FeatureProps {
    isInverted?: boolean;
    title?: string;
    description?: string;
    intro?: string;
    text?: string;
    image?: Props;
    primaryAction?: (isInverted?: boolean) => React.ReactNode;
    secondaryAction?: (isInverted?: boolean) => React.ReactNode;
}

const Feature: React.FC<
    FeatureProps & {
        className?: string;
    }
> = ({
    title,
    description,
    intro,
    text,
    image,
    isInverted = false,
    primaryAction,
    secondaryAction,
    className,
}) => {
    const theme = React.useContext(ThemeContext);
    const textColor = isInverted ? color(theme).white : color(theme).black;

    return (
        <View className={className}>
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
                <ContentBlock type="copy-b" size="big" textColor={textColor}>
                    {title}
                </ContentBlock>
                {description && (
                    <ContentBlock size="small" textColor={textColor}>
                        <Desc
                            dangerouslySetInnerHTML={{ __html: description }}
                        />
                    </ContentBlock>
                )}
            </Content>
            <Content>
                <ContentBlock type="copy-b" textColor={textColor}>
                    {intro}
                </ContentBlock>
                {text && (
                    <ContentBlock
                        type="copy"
                        size="medium"
                        textColor={textColor}
                    >
                        <div dangerouslySetInnerHTML={{ __html: text }} />
                    </ContentBlock>
                )}
            </Content>
            {(primaryAction || secondaryAction) && (
                <Actions
                    primary={primaryAction && primaryAction(isInverted)}
                    secondary={secondaryAction && secondaryAction(isInverted)}
                />
            )}
        </View>
    );
};

export default Feature;
