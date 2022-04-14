import React, { FC } from 'react';
import styled from 'styled-components';
import { mq, spacings } from 'utils/styles';
import Flyout, { FlyoutBackgroundSettings, NavGroup } from './Flyout';
import SocialList, { SocialItem } from 'components/blocks/SocialList';
import { LogoProps } from '../Navigation';

const View = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 10;
`;

const Backdrop = styled.div<{
    isVisible?: boolean;
    opacity?: number;
}>`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height: 100vh;
    background-color: rgba(
        0,
        0,
        0,
        ${({ isVisible, opacity }) => (isVisible ? opacity : 0)}
    );

    pointer-events: ${({ isVisible }) => !isVisible && 'none'};
    transition: background-color 0.2s ease-in-out;
`;

const SocialContainer = styled.div<{ isLarge?: boolean }>`
    display: flex;
    justify-content: flex-start;
    padding-top: ${spacings.spacer}px;

    @media ${mq.semilarge} {
        justify-content: ${({ isLarge }) =>
            isLarge ? 'flex-end' : 'flex-start'};
    }

    @media ${mq.xlarge} {
        padding-right: ${({ isLarge }) => isLarge && spacings.spacer}px;
    }
`;
interface MenuProps {
    isOpen?: boolean;
    size?: 'small' | 'full';
    isInverted?: boolean;
    isMirrored?: boolean;
    backdropOpacity?: number;
    toggleIcon?: (isInverted?: boolean) => React.ReactNode;
    logo?: LogoProps;
    background?: FlyoutBackgroundSettings;
    primaryAction?: (props: {
        isInverted?: boolean;
        size?: 'desktop' | 'mobile';
        name?: string;
    }) => React.ReactNode;
    secondaryAction?: (props: {
        isInverted?: boolean;
        size?: 'desktop' | 'mobile';
        name?: string;
    }) => React.ReactNode;
    search?: (isInverted?: boolean) => React.ReactNode;
    activeNavItem?: string;
    navItems?: NavGroup[];
    navItemIndicator?: (isInverted: boolean) => React.ReactNode;
    socials?: Array<SocialItem>;
    onCloseClick?: () => void;
}

const Menu: FC<MenuProps> = ({
    isOpen = false,
    size = 'small',
    isInverted = false,
    isMirrored = false,
    backdropOpacity = 0.4,
    toggleIcon,
    logo,
    background,
    primaryAction,
    secondaryAction,
    search,
    activeNavItem,
    navItems,
    navItemIndicator,
    socials,
    onCloseClick,
}) => {
    return (
        <View>
            <Backdrop
                isVisible={isOpen}
                opacity={backdropOpacity}
                onClick={onCloseClick}
            />
            <Flyout.View
                isOpen={isOpen}
                isMirrored={isMirrored}
                isLarge={size === 'full'}
                isInverted={isInverted}
                onCloseClick={onCloseClick}
                toggleIcon={toggleIcon}
                logo={logo}
                primaryAction={primaryAction}
                secondaryAction={secondaryAction}
                search={search}
                background={background}
            >
                {navItems && (
                    <Flyout.NavList
                        activeNavItem={activeNavItem}
                        navGroups={navItems}
                        isLarge={size === 'full'}
                        isInverted={isInverted}
                        itemIndicator={navItemIndicator}
                    />
                )}
                {socials && (
                    <SocialContainer isLarge={size === 'full'}>
                        <SocialList
                            isInverted={isInverted}
                            items={socials.map((item) => {
                                return {
                                    href: item.href,
                                    icon: item.icon,
                                };
                            })}
                        />
                    </SocialContainer>
                )}
            </Flyout.View>
        </View>
    );
};

export default Menu;
