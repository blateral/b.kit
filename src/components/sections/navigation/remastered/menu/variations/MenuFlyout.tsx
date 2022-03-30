import React, { FC } from 'react';
import styled from 'styled-components';
import { mq, spacings, getColors as color } from 'utils/styles';
import { MenuBaseProps } from '../Menu';

const Backdrop = styled.div<{ isOpen?: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
    pointer-events: ${({ isOpen }) => (isOpen ? 'all' : 'none')};

    transition: opacity 0.3s ease-in-out;

    @supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
        backdrop-filter: grayscale(1);
    }
`;

const Stage = styled.div<{ isOpen?: boolean; clampWidth?: 'content' | 'full' }>`
    position: fixed;
    top: 0;
    left: ${({ isOpen }) => (isOpen ? '50%' : '0px')};
    height: 100vh;
    width: 100vw;
    max-width: ${({ clampWidth }) =>
        clampWidth === 'content' ? spacings.wrapper : spacings.wrapperLarge}px;
    pointer-events: none;

    transform: translate(${({ isOpen }) => (isOpen ? '-50%' : '-100%')}, 0px);

    transition: transform 0.4s ease-in-out, left 0.4s ease-in-out;
    will-change: transform;
`;

const Flyout = styled.div<{ isOpen?: boolean }>`
    position: relative;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => color(theme).new.elementBg.light};

    pointer-events: ${({ isOpen }) => (isOpen ? 'all' : 'none')};

    @media ${mq.medium} {
        width: 390px;
    }

    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 2px;
        height: 100%;
        width: 40vw;
        background-color: ${({ theme }) => color(theme).new.elementBg.light};
        z-index: -1;

        transform: translateX(-100%);
    }
`;

export interface FlyoutMenuProps {
    type: 'flyout';
}

const MenuFlyout: FC<MenuBaseProps & FlyoutMenuProps> = ({
    isOpen,
    clampWidth,
    indexPage,
    mainNavigation,
    subNavigation,
    header,
    footer,
    onClose,
}) => {
    return (
        <React.Fragment>
            <Backdrop isOpen={isOpen} onClick={onClose} />
            <Stage isOpen={isOpen} clampWidth={clampWidth}>
                <Flyout isOpen={isOpen}>
                    {header
                        ? header({
                              isOpen,
                              mainNavigation,
                              subNavigation,
                              indexPage,
                          })
                        : ''}
                    isOpen: {isOpen} Menu Flyout Items:{' '}
                    {mainNavigation?.length || ''}
                    {footer
                        ? footer({
                              isOpen,
                              mainNavigation,
                              subNavigation,
                              indexPage,
                          })
                        : ''}
                </Flyout>
            </Stage>
        </React.Fragment>
    );
};

export default MenuFlyout;
