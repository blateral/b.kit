import React, { FC } from 'react';
import styled from 'styled-components';

import { mq, spacings } from 'utils/styles';

const View = styled.div<{ isMirrored?: boolean }>`
    display: flex;
    flex-wrap: wrap;
    flex-direction: ${({ isMirrored }) =>
        isMirrored ? 'column-reverse' : 'column'};

    padding-top: ${spacings.spacer * 2}px;
    margin-top: -${spacings.spacer * 0.5}px;
    margin-left: -${spacings.spacer}px;
    width: calc(100% + ${spacings.spacer}px);

    & > * {
        flex: 1;
        margin-top: ${spacings.spacer * 0.5}px;
        margin-left: ${spacings.spacer}px;
    }

    @media ${mq.medium} {
        flex-direction: ${({ isMirrored }) =>
            isMirrored ? 'row-reverse' : 'row'};
        align-items: stretch;
    }
`;

const Actions: FC<{
    isMirrored?: boolean;
    primary?: React.ReactNode;
    secondary?: React.ReactNode;
    className?: string;
}> = ({ isMirrored, primary, secondary, className }) => {
    return (
        <View isMirrored={isMirrored} className={className}>
            {primary && primary}
            {secondary && secondary}
        </View>
    );
};

export default Actions;
