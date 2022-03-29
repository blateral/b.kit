/* eslint-disable react/display-name */
import React from 'react';
import { Meta, Story } from '@storybook/react';
import Navigation from 'components/sections/navigation/remastered/Navigation';
import BarGrid from 'components/sections/navigation/remastered/menu/skeletons/BarGrid';
import MenuBurger from 'components/base/icons/MenuBurger';
import LanguageSwitcher from 'components/blocks/LanguageSwitcher';

export default {
    title: 'Sections/Navigation v2',
    component: Navigation,
    decorators: [
        (Story) => (
            <div style={{ height: '180vh', width: '100%', background: 'grey' }}>
                <Story />
                <div
                    style={{
                        height: '600px',
                        background: '#4d4d4d',
                        color: 'white',
                    }}
                >
                    Content
                </div>
            </div>
        ),
    ],
    parameters: {
        status: {
            type: 'preview',
        },
        docs: {
            inlineStories: false,
            iframeHeight: 600,
        },
        // viewMode: 'story',
        // previewTabs: {
        //     'storybook/docs/panel': {
        //         hidden: true,
        //     },
        // },
    },
} as Meta;

export const Default: Story = () => <Navigation />;

export const WithoutContentClamp: Story = () => (
    <Navigation clampWidth="full" />
);

export const StickableNavbar: Story = () => (
    <Navigation navBar={{ isStickable: true }} />
);

export const CollapsibleNavbar: Story = () => (
    <Navigation navBar={{ isStickable: true, isCollapsible: true }} />
);

export const WithCustomBackgrounds: Story = () => (
    <Navigation
        navBar={{
            isStickable: true,
            isCollapsible: true,
            topBg: 'green',
            mainBg: 'yellow',
            bottomBg: 'blue',
        }}
    />
);

export const CustomTopBarContent: Story = () => (
    <Navigation
        navBar={{
            isStickable: true,
            isCollapsible: true,
            topBar: ({ size }) => (
                <button style={{ margin: '0 auto' }}>NavBar is: {size}</button>
            ),
        }}
    />
);

export const CustomBottomBarContent: Story = () => (
    <Navigation
        navBar={{
            isStickable: true,
            isCollapsible: true,
            bottomBar: ({ size }) => (
                <button style={{ margin: '0 auto' }}>NavBar is: {size}</button>
            ),
        }}
    />
);

export const BarOverPageContent: Story = () => (
    <Navigation
        navBar={{
            isStickable: true,
            isCollapsible: true,
            pageFlow: 'overContent',
        }}
    />
);

export const WithCustomBgGradient: Story = () => (
    <Navigation
        navBar={{
            isStickable: true,
            isCollapsible: true,
            pageFlow: 'overContent',
            onContentBg:
                'linear-gradient(180deg,rgba(255,0,0,0.3) 0%, rgba(255,0,0,0.2) 40%, rgba(255,0,0,0) 100%)',
        }}
    />
);

export const WithMenu: Story = () => (
    <Navigation
        navBar={{
            isStickable: true,
            isCollapsible: true,
            pageFlow: 'overContent',
            mainBar: ({ openMenu }) => (
                <button onClick={openMenu}>Open Menu</button>
            ),
        }}
        menu={{
            navItems: [],
            typeSettings: {
                type: 'flyout',
            },
        }}
    />
);

export const WithExampleContent: Story = () => (
    <Navigation
        navBar={{
            isStickable: true,
            isCollapsible: true,
            pageFlow: 'overContent',
            topBar: ({ size, pageFlow }) => {
                const isInverted =
                    size === 'large' && pageFlow === 'overContent';
                return (
                    <BarGrid.Col>
                        <LanguageSwitcher
                            isInverted={isInverted}
                            langs={[
                                { label: 'DE', link: { href: '/de' } },
                                { label: 'EN', link: { href: '/en' } },
                            ]}
                        />
                    </BarGrid.Col>
                );
            },
            mainBar: ({ size, pageFlow, openMenu, isMenuOpen }) => {
                const isInverted =
                    size === 'large' && pageFlow === 'overContent';

                return (
                    <React.Fragment>
                        <BarGrid.Col
                            takeSpace
                            vAlign="center"
                            isInverted={isInverted}
                        >
                            <BarGrid.Toggle
                                isInverted={isInverted}
                                isExpanded={isMenuOpen}
                                onClick={openMenu}
                            >
                                <MenuBurger />
                            </BarGrid.Toggle>
                        </BarGrid.Col>
                        <BarGrid.Col isInverted={isInverted}>
                            <BarGrid.Logo src="https://via.placeholder.com/320x80" />
                        </BarGrid.Col>
                    </React.Fragment>
                );
            },
            bottomBar: ({ navItems }) => {
                return navItems?.length;
            },
        }}
        menu={{
            navItems: [],
            typeSettings: {
                type: 'flyout',
            },
        }}
    />
);
