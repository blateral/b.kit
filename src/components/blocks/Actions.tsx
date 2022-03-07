import React, { FC } from 'react';
import styled from 'styled-components';

import { mq, spacings } from 'utils/styles';

const View = styled.div<{ isCovered?: boolean }>`
    display: block;

    @media ${mq.medium} {
        display: ${({ isCovered }) => (isCovered ? 'block' : 'inline-block')};
    }
`;

const Content = styled.div<{
    isMirrored?: boolean;
    isCovered?: boolean;
}>`
    display: flex;
    flex-wrap: wrap;
    flex-direction: ${({ isMirrored }) =>
        isMirrored ? 'column-reverse' : 'column'};

    margin-top: -${spacings.nudge * 2}px;
    margin-left: -${spacings.spacer}px;

    &&& > * {
        flex: 1 1 ${({ isCovered }) => (isCovered ? '100%' : '0px')};
        margin-top: ${spacings.nudge * 2}px;
        margin-left: ${spacings.spacer}px;

        min-width: ${({ isCovered }) => isCovered && '0px'};
    }

    @media ${mq.medium} {
        display: ${({ isCovered }) => (isCovered ? 'flex' : 'inline-flex')};
        flex-direction: ${({ isMirrored }) =>
            isMirrored ? 'row-reverse' : 'row'};
        align-items: stretch;
        width: auto;
    }
`;

export type ActionMode = 'wrap' | 'cover';

const Actions: FC<{
    /** Behaviour of content wrapping. If set to cover the action container always tries to fill full width */
    mode?: ActionMode;
    /** Switch order of primary and secondary action */
    isMirrored?: boolean;
    /** React node of primary action */
    primary?: React.ReactNode;
    /** React node of secondary action */
    secondary?: React.ReactNode;
    className?: string;
}> = ({ mode = 'wrap', isMirrored = false, primary, secondary, className }) => {
    return (
        <View isCovered={mode === 'cover'} className={className}>
            <Content isCovered={mode === 'cover'} isMirrored={isMirrored}>
                {primary && primary}
                {secondary && secondary}
            </Content>
        </View>
    );
};

export default Actions;
