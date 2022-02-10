import React, { FC } from 'react';
import styled from 'styled-components';

import { mq, spacings } from 'utils/styles';

const View = styled.div<{ isInline?: boolean }>`
    display: block;

    @media ${mq.medium} {
        display: ${({ isInline }) => (!isInline ? 'block' : 'inline-block')};
    }
`;

const Content = styled.div<{
    isCentered?: boolean;
    isMirrored?: boolean;
    isInline?: boolean;
}>`
    display: flex;
    flex-wrap: wrap;
    flex-direction: ${({ isMirrored }) =>
        isMirrored ? 'column-reverse' : 'column'};

    justify-content: ${({ isMirrored, isCentered }) =>
        isCentered ? 'center' : isMirrored ? 'flex-end' : 'flex-start'};

    margin-top: -${spacings.spacer * 0.5}px;
    margin-left: -${spacings.spacer}px;

    & > * {
        flex: 1 1 0px;
        flex: 1;
        margin-top: ${spacings.spacer * 0.5}px;
        margin-left: ${spacings.spacer}px;
    }

    @media ${mq.medium} {
        display: ${({ isInline }) => (!isInline ? 'flex' : 'inline-flex')};
        flex-direction: ${({ isMirrored }) =>
            isMirrored ? 'row-reverse' : 'row'};
        align-items: stretch;
        width: auto;
    }
`;

const Actions: FC<{
    /** Controls width behaviour of component. "full" acts like a block, "dynamic" like a inline element */
    width?: 'full' | 'dynamic';
    /** Center actions */
    isCentered?: boolean;
    /** Switch order of primary and secondary action */
    isMirrored?: boolean;
    /** React node of primary action */
    primary?: React.ReactNode;
    /** React node of secondary action */
    secondary?: React.ReactNode;
    className?: string;
}> = ({
    width = 'dynamic',
    isCentered = false,
    isMirrored = false,
    primary,
    secondary,
    className,
}) => {
    const isInline = width === 'dynamic';

    return (
        <View isInline={isInline} className={className}>
            <Content
                isInline={isInline}
                isCentered={isCentered}
                isMirrored={isMirrored}
            >
                {primary && primary}
                {secondary && secondary}
            </Content>
        </View>
    );
};

export default Actions;
