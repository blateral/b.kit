import React, { FC } from 'react';
import styled from 'styled-components';

import { spacings, getColors as color } from 'utils/styles';
import Copy from 'components/typography/Copy';

const View = styled(Copy)<{ isInverted?: boolean }>`
    display: inline-block;
    border: 1px solid
        ${({ isInverted, theme }) =>
            isInverted ? color(theme).light : color(theme).dark};
    border-radius: 15px;

    padding: 3px ${spacings.nudge * 2}px;
    user-select: none;
`;

const Tag: FC<{
    isInverted?: boolean;
    className?: string;
}> = ({ isInverted, className, children }) => {
    return (
        <View isInverted={isInverted} className={className}>
            {children}
        </View>
    );
};

export default Tag;
