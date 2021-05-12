import React, { FC } from 'react';
import styled from 'styled-components';

import { mq, spacings } from 'utils/styles';

const View = styled.div<{ isCentered?: boolean; isMirrored?: boolean }>`
    display: inline-flex;
    flex-wrap: wrap;
    flex-direction: ${({ isMirrored }) =>
        isMirrored ? 'column-reverse' : 'column'};

    justify-content: ${({ isMirrored, isCentered }) =>
        isCentered ? 'center' : isMirrored ? 'flex-end' : 'flex-start'};

    margin-top: -${spacings.spacer * 0.5}px;
    margin-left: -${spacings.spacer}px;
    width: calc(100% + ${spacings.spacer}px);

    & > * {
        flex: 1 0 auto;
        margin-top: ${spacings.spacer * 0.5}px;
        margin-left: ${spacings.spacer}px;
    }

    @media ${mq.medium} {
        flex-direction: ${({ isMirrored }) =>
            isMirrored ? 'row-reverse' : 'row'};
        align-items: stretch;
        width: auto;
    }
`;

const Actions: FC<{
    isCentered?: boolean;
    isMirrored?: boolean;
    primary?: React.ReactNode;
    secondary?: React.ReactNode;
    className?: string;
}> = ({
    isCentered = false,
    isMirrored = false,
    primary,
    secondary,
    className,
}) => {
    return (
        <View
            isCentered={isCentered}
            isMirrored={isMirrored}
            className={className}
        >
            {primary && primary}
            {secondary && secondary}
        </View>
    );
};

export default Actions;
