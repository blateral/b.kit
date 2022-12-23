import React, { FC } from 'react';
import styled from 'styled-components';

const View = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 50vw;
    height: 100vh;
    border-right: solid 1px red;
    pointer-events: none;
`;

export const DebugLines: FC = () => {
    return <View />;
};

export default DebugLines;
