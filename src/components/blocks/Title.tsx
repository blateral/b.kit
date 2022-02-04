import React, { FC } from 'react';
import styled from 'styled-components';

import Heading, { HeadlineTag } from 'components/typography/Heading';
import { spacings } from 'utils/styles';

const View = styled.div<{ isCentered?: boolean }>`
    display: block;
    text-align: ${({ isCentered }) => (isCentered ? 'center' : 'left')};
    margin: ${({ isCentered }) => isCentered && '0 auto'};

    & > * + * {
        margin-top: ${spacings.nudge * 2}px;
    }
`;

const SuperTitle = styled(Heading)`
    display: block;
`;

const MainTitle = styled(Heading)`
    display: block;
`;

const Title: FC<{
    colorMode?: 'default' | 'inverted' | 'onImage';
    superTitle?: string;
    superTitleAs?: HeadlineTag;
    title?: string;
    titleAs?: HeadlineTag;
    isCentered?: boolean;
    className?: string;
}> = ({
    colorMode = 'default',
    superTitle,
    superTitleAs,
    title,
    titleAs,
    isCentered = false,
    className,
}) => {
    return (
        <View isCentered={isCentered} className={className}>
            {superTitle && (
                <SuperTitle
                    renderAs={superTitleAs || 'h3'}
                    size="super"
                    textColor={colorMode === 'onImage' ? '#fff' : undefined}
                    isInverted={colorMode === 'inverted'}
                    innerHTML={superTitle}
                />
            )}
            {title && (
                <MainTitle
                    renderAs={titleAs || 'h2'}
                    size="heading-2"
                    textColor={colorMode === 'onImage' ? '#fff' : undefined}
                    isInverted={colorMode === 'inverted'}
                    innerHTML={title}
                />
            )}
        </View>
    );
};

export default Title;
