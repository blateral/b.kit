import React, { FC } from 'react';
import styled from 'styled-components';
import { spacings } from 'utils/styles';
import Copy from 'components/typography/Copy';

const View = styled.div`
    margin: 0 auto;
    max-width: ${spacings.wrapperLarge}px;
`;

const Content = styled.div<{ size?: NavBarSize }>`
    display: flex;
    height: ${({ size }) => (size === 'large' ? '120px' : '80px')};
    background: cyan;
    max-width: ${spacings.wrapper}px;
    padding: ${spacings.nudge * 2}px;
    margin: 0 auto;

    transition: height 0.2s ease-in-out;
`;

const Column = styled(Copy)`
    flex: 1;
    text-align: center;

    &:first-child {
        text-align: left;
    }

    &:last-child {
        text-align: right;
    }
`;

type NavBarSize = 'large' | 'small';

const NavBar: FC<{
    size?: NavBarSize;
    className?: string;
}> = ({ size = 'large', className }) => {
    return (
        <View className={className}>
            <Content size={size}>
                <Column>Column Left</Column>
                <Column>Column Center</Column>
                <Column>Column Right</Column>
            </Content>
        </View>
    );
};

export default NavBar;
