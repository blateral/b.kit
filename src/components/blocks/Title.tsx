import React, { FC } from 'react';
import styled from 'styled-components';

import Heading, { HeadlineTag } from 'components/typography/Heading';
import { spacings, withRange } from 'utils/styles';

const View = styled.div<{ isCentered?: boolean }>`
    display: block;
    text-align: ${({ isCentered }) => (isCentered ? 'center' : 'left')};
    margin: ${({ isCentered }) => isCentered && '0 auto'};

    & > * + * {
        ${withRange([spacings.nudge * 2, spacings.nudge * 3], 'padding-top')};
    }
`;

const Title: FC<{
    superTitle?: string;
    superTitleAs?: HeadlineTag;
    title?: string;
    titleAs?: HeadlineTag;
    isInverted?: boolean;
    isCentered?: boolean;
    className?: string;
}> = ({
    superTitle,
    superTitleAs,
    title,
    titleAs,
    isInverted = false,
    isCentered = false,
    className,
}) => {
    return (
        <View isCentered={isCentered} className={className}>
            {superTitle && (
                <div>
                    <Heading
                        as={superTitleAs || 'h2'}
                        size="super"
                        isInverted={isInverted}
                        innerHTML={superTitle}
                    />
                </div>
            )}
            {title && (
                <div>
                    <Heading
                        as={titleAs || 'h3'}
                        size="heading-2"
                        isInverted={isInverted}
                        innerHTML={title}
                    />
                </div>
            )}
        </View>
    );
};

export default Title;
