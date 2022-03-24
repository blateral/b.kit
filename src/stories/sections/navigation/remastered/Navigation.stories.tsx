/* eslint-disable react/display-name */
import React from 'react';
import { Meta, Story } from '@storybook/react';
import Navigation from 'components/sections/navigation/remastered/Navigation';

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
            customBg:
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
            variation: {
                type: 'flyout',
                orientation: 'left',
            },
        }}
    />
);
