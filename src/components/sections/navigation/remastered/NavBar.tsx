import React, { FC } from 'react';
import styled from 'styled-components';
import { spacings } from 'utils/styles';
import Copy from 'components/typography/Copy';

const View = styled.div`
    margin: 0 auto;
    max-width: ${spacings.wrapperLarge}px;
    background: cyan;
`;

const Content = styled.div<{ size?: NavBarSize }>`
    display: flex;
    height: ${({ size }) => (size === 'large' ? '120px' : '90px')};
    max-width: ${spacings.wrapper}px;
    padding: ${spacings.nudge * 2}px;
    margin: 0 auto;

    transition: height 0.2s ease-in-out;
`;

const Column = styled(Copy)`
    text-align: center;
    min-width: -webkit-min-content;

    &:first-child {
        text-align: left;
    }

    &:last-child {
        text-align: right;
    }

    &:not(:first-child):not(:last-child) {
        margin: 0 ${spacings.nudge * 2}px;
    }
`;

const LeftCol = styled(Column)`
    flex: 1;
    min-width: -webkit-min-content;
`;

const CenterCol = styled(Column)``;

const RightCol = styled(Column)`
    flex: 1;
    min-width: -webkit-min-content;
`;

const Logo = styled.img`
    max-width: 100%;
    height: 100%;
    object-fit: contain;
`;

type NavBarSize = 'large' | 'small';

const NavBar: FC<{
    size?: NavBarSize;
    className?: string;
}> = ({ size = 'large', className }) => {
    return (
        <View className={className}>
            <Content size={size}>
                <LeftCol>Column Left</LeftCol>
                <CenterCol>
                    <Logo src="https://via.placeholder.com/320x80" />
                </CenterCol>
                <RightCol>Column Right</RightCol>
            </Content>
        </View>
    );
};

export default NavBar;
