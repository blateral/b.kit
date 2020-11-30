import React, { FC } from 'react';
import styled from 'styled-components';

import Heading, { HeadlineTag } from 'components/typography/Heading';
import { spacings, withRange } from 'utils/styles';
import { colors } from '../../../theme';
import Copy from 'components/typography/Copy';

const View = styled.div<{ isCentered?: boolean }>`
    text-align: ${({ isCentered }) => (isCentered ? 'center' : 'left')};
`;

const SuperTitle = styled.div`
    display: inline-block;
    ${withRange([spacings.nudge * 2, spacings.nudge * 3], 'padding-bottom')};
`;

const Title: FC<{
    superTitle?: string;
    title?: string;
    titleAs?: HeadlineTag;
    isInverted?: boolean;
    isCentered?: boolean;
    className?: string;
}> = ({ superTitle, title, titleAs, isInverted, isCentered, className }) => {
    return (
        <View isCentered={isCentered} className={className}>
            {superTitle && (
                <SuperTitle>
                    <Copy
                        type="copy-b"
                        textColor={isInverted ? colors.white : colors.black}
                    >
                        {superTitle}
                    </Copy>
                </SuperTitle>
            )}
            {title && (
                <Heading
                    size={2}
                    textColor={isInverted ? colors.white : colors.black}
                    as={titleAs}
                >
                    {title}
                </Heading>
            )}
        </View>
    );
};

export default Title;
