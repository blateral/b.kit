import React, { FC } from 'react';
import styled from 'styled-components';

import Heading, { HeadlineTag } from 'components/typography/Heading';
import { spacings } from 'utils/styles';
import Copy from 'components/typography/Copy';

const View = styled.div<{ isCentered?: boolean }>`
    display: block;
    text-align: ${({ isCentered }) => (isCentered ? 'center' : 'left')};
    margin: ${({ isCentered }) => isCentered && '0 auto'};

    & > * + * {
        margin-top: ${spacings.nudge * 3}px;
    }
`;

const SuperTitle = styled(Copy)`
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
    title,
    titleAs,
    isCentered = false,
    className,
}) => {
    return (
        <View isCentered={isCentered} className={className}>
            {superTitle && (
                <SuperTitle
                    size="medium"
                    type="copy-b"
                    textColor={colorMode === 'onImage' ? '#fff' : undefined}
                    isInverted={colorMode === 'inverted'}
                    innerHTML={superTitle}
                />
            )}
            {title && (
                <MainTitle
                    renderAs={titleAs || 'h2'}
                    size="heading-1"
                    textColor={colorMode === 'onImage' ? '#fff' : undefined}
                    isInverted={colorMode === 'inverted'}
                    innerHTML={title}
                />
            )}
        </View>
    );
};

export default Title;
