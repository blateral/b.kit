import React, { FC } from 'react';
import styled from 'styled-components';
import { spacings, mq, getColors as color } from 'utils/styles';
import Copy from 'components/typography/Copy';

const View = styled.div<{
    isOpen?: boolean;
    isSticky?: boolean;
    isAnimated?: boolean;
}>`
    position: ${({ isSticky }) => (isSticky ? 'fixed' : 'absolute')};
    top: 0;
    left: 0;
    right: 0;

    transform: ${({ isOpen }) => !isOpen && 'translate3d(0, -100%, 0)'};
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};

    margin: 0 auto;
    max-width: ${spacings.wrapperLarge}px;

    ${({ isAnimated }) => `transition: ${
        isAnimated ? 'transform 0.3s ease-in-out, ' : ''
    }height 0.3s ease-in-out,
                opacity 0.3s ease-in-out;`}
    will-change: transform;
`;

const Header = styled.div`
    background: ${({ theme }) => color(theme).new.primary.default};
`;

const Main = styled.div`
    background: ${({ theme }) => color(theme).new.elementBg.light};
`;

const ContentTop = styled.div<{ size?: NavBarSize; clamp?: boolean }>`
    display: flex;
    align-items: center;
    height: 30px;
    max-width: ${({ clamp }) =>
        clamp ? spacings.wrapper : spacings.wrapperLarge}px;
    padding: ${spacings.nudge}px ${spacings.nudge * 2}px;
    margin: 0 auto;

    @media ${mq.semilarge} {
        height: 40px;
    }
`;

const Content = styled.div<{ size?: NavBarSize; clamp?: boolean }>`
    display: flex;
    height: ${({ size }) => (size === 'large' ? '100px' : '80px')};
    max-width: ${({ clamp }) =>
        clamp ? spacings.wrapper : spacings.wrapperLarge}px;
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

export type NavBarSize = 'large' | 'small';

export interface NavBarProps {
    size?: NavBarSize;
    isOpen?: boolean;
    isSticky?: boolean;
    isAnimated?: boolean;
    clampWidth?: 'content' | 'full';
}

const NavBar: FC<
    NavBarProps & {
        className?: string;
    }
> = ({
    size = 'large',
    isOpen,
    isSticky,
    isAnimated,
    clampWidth,
    className,
}) => {
    const clampContent = clampWidth === 'content';

    return (
        <View
            isOpen={isOpen}
            isSticky={isSticky}
            isAnimated={isAnimated}
            className={className}
        >
            <Header>
                <ContentTop size={size} clamp={clampContent}>
                    <LeftCol size="small" isInverted>
                        Left
                    </LeftCol>
                    <RightCol size="small" isInverted>
                        Right
                    </RightCol>
                </ContentTop>
            </Header>
            <Main>
                <Content size={size} clamp={clampContent}>
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
