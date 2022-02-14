import React, { FC } from 'react';
import styled from 'styled-components';

import { mq, spacings } from 'utils/styles';

const View = styled.div`
    display: block;

    @media ${mq.medium} {
        display: inline-block;
    }
`;

const Content = styled.div<{
    isMirrored?: boolean;
}>`
    display: flex;
    flex-wrap: wrap;
    flex-direction: ${({ isMirrored }) =>
        isMirrored ? 'column-reverse' : 'column'};

    margin-top: -${spacings.spacer * 0.5}px;
    margin-left: -${spacings.spacer}px;

    & > * {
        flex: 1 1 0px;
        flex: 1;
        margin-top: ${spacings.spacer * 0.5}px;
        margin-left: ${spacings.spacer}px;
    }

    @media ${mq.medium} {
        display: inline-flex;
        flex-direction: ${({ isMirrored }) =>
            isMirrored ? 'row-reverse' : 'row'};
        align-items: stretch;
        width: auto;
    }
`;

const Actions: FC<{
    /** Switch order of primary and secondary action */
    isMirrored?: boolean;
    /** React node of primary action */
    primary?: React.ReactNode;
    /** React node of secondary action */
    secondary?: React.ReactNode;
    className?: string;
}> = ({ isMirrored = false, primary, secondary, className }) => {
    return (
        <View className={className}>
            <Content isMirrored={isMirrored}>
                {primary && primary}
                {secondary && secondary}
            </Content>
        </View>
    );
};

export default Actions;
