import React, { FC } from 'react';
import styled from 'styled-components';
import { spacings, mq } from 'utils/styles';
import Copy from 'components/typography/Copy';

const View = styled.div`
    margin: 0 auto;
    max-width: ${spacings.wrapperLarge}px;
`;

const Header = styled.div`
    background: #7749f8;
`;

const Main = styled.div`
    background: lightgrey;
`;

const ContentTop = styled.div<{ size?: NavBarSize }>`
    display: flex;
    align-items: center;
    height: 30px;
    max-width: ${spacings.wrapper}px;
    padding: ${spacings.nudge}px ${spacings.nudge * 2}px;
    margin: 0 auto;

    @media ${mq.semilarge} {
        height: 40px;
    }
`;

const Content = styled.div<{ size?: NavBarSize }>`
    display: flex;
    height: ${({ size }) => (size === 'large' ? '100px' : '80px')};
    max-width: ${spacings.wrapper}px;
    padding: ${spacings.nudge * 2}px;
    margin: 0 auto;

    transition: height 0.2s ease-in-out;

    @media ${mq.semilarge} {
        height: ${({ size }) => (size === 'large' ? '120px' : '90px')};
    }
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
            <Header>
                <ContentTop size={size}>
                    <LeftCol size="small" isInverted>
                        Left
                    </LeftCol>
                    <RightCol size="small" isInverted>
                        Right
                    </RightCol>
                </ContentTop>
            </Header>
            <Main>
                <Content size={size}>
                    <LeftCol>Column Left</LeftCol>
                    <CenterCol>
                        <Logo src="https://via.placeholder.com/320x80" />
                    </CenterCol>
                    <RightCol>Column Right</RightCol>
                </Content>
            </Main>
        </View>
    );
};

export default NavBar;
