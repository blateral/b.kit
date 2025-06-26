import React, { FC } from 'react';
import styled from 'styled-components';

import Heading, { HeadlineTag } from 'components/typography/Heading';
import { FontType, spacings, withRange } from 'utils/styles';

const View = styled.div<{ isCentered?: boolean }>`
    display: block;
    text-align: ${({ isCentered }) => (isCentered ? 'center' : 'left')};
    margin: ${({ isCentered }) => isCentered && '0 auto'};

    & > * + * {
        ${withRange([spacings.nudge * 2, spacings.nudge * 3], 'padding-top')};
    }
`;

export type TitleSize = Extract<FontType, 'heading-1' | 'heading-2'>;

const Title: FC<{
    colorMode?: 'default' | 'inverted' | 'onImage';
    superTitle?: string;
    superTitleAs?: HeadlineTag;
    title?: string;
    titleAs?: HeadlineTag;
    titleSize?: TitleSize;
    isCentered?: boolean;
    className?: string;
}> = ({
    colorMode = 'default',
    superTitle,
    superTitleAs,
    title,
    titleAs,
    titleSize,
    isCentered = false,
    className,
}) => {
    return (
        <View isCentered={isCentered} className={className}>
            {superTitle && (
                <div>
                    <Heading
                        renderAs={superTitleAs || 'h3'}
                        size="super"
                        textColor={colorMode === 'onImage' ? '#fff' : undefined}
                        isInverted={colorMode === 'inverted'}
                        innerHTML={superTitle}
                    />
                </div>
            )}
            {title && (
                <div>
                    <Heading
                        renderAs={titleAs || 'h2'}
                        size={
                            titleSize === 'heading-1'
                                ? 'heading-1'
                                : 'heading-2'
                        }
                        textColor={colorMode === 'onImage' ? '#fff' : undefined}
                        isInverted={colorMode === 'inverted'}
                        innerHTML={title}
                    />
                </div>
            )}
        </View>
    );
};

export default Title;
