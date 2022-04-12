/* eslint-disable react/display-name */
import React from 'react';
import { Meta, Story } from '@storybook/react';
import Navigation, {
    NavBarStates,
} from 'components/sections/navigation/remastered/Navigation';
import NavBarTop from 'components/sections/navigation/remastered/partials/NavBarTop';
import NavBarMain from 'components/sections/navigation/remastered/partials/NavBarMain';
import Button from 'components/buttons/Button';
import Star from 'components/base/icons/Star';
import NavBarBottom from 'components/sections/navigation/remastered/partials/NavBarBottom';
import styled from 'styled-components';
import { mq } from 'utils/styles';

const NavBarButton = styled.span`
    display: inline-block;

    & > * {
        min-width: 0;
        max-width: 100%;
    }

    @media ${mq.semilarge} {
        & > * {
            min-width: 240px;
        }
    }
`;

const primaryCtaFn = ({
    isInverted,
}: { isInverted?: boolean } & NavBarStates) => (
    <NavBarButton>
        <Button.View as="a" href="#" isInverted={isInverted}>
            <Button.Icon data-btn-mobile>
                <Star />
            </Button.Icon>
            <Button.Label data-btn-desktop>Book online</Button.Label>
        </Button.View>
    </NavBarButton>
);

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
            mainNavigation: [],
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
            topBar: (navStates) => (
                <NavBarTop
                    navStates={navStates}
                    navLinks={[
                        { label: 'Contact', link: { href: '#0' } },
                        {
                            label: 'Opening Hours',
                            link: { href: '#1' },
                        },
                        {
                            label: 'About',
                            link: { href: '#2' },
                            isCurrent: true,
                        },
                    ]}
                    languages={[
                        {
                            label: 'DE',
                            link: { href: '/de' },
                            isActive: true,
                        },
                        { label: 'EN', link: { href: '/en' } },
                    ]}
                />
            ),
            mainBar: (navStates) => (
                <NavBarMain
                    logo={{
                        mobile: { src: 'https://via.placeholder.com/80x80' },
                        desktop: { src: 'https://via.placeholder.com/320x80' },
                        mobileInverted: {
                            src: 'https://via.placeholder.com/80x80?text=inverted',
                        },
                        desktopInverted: {
                            src: 'https://via.placeholder.com/320x80?text=inverted',
                        },
                    }}
                    navStates={navStates}
                    primaryAction={primaryCtaFn}
                />
            ),
            bottomBar: (navStates) => (
                <NavBarBottom
                    rootLink={{ href: '/' }}
                    rootLabel="Home"
                    navStates={navStates}
                />
            ),
        }}
        menu={{
            mainNavigation: [
                { link: { href: '/mainItemA' }, label: 'Main Item A' },
                {
                    link: { href: '/mainItemB' },
                    label: 'Main Item B',
                    subItems: [
                        {
                            link: { href: '/subitemB.1' },
                            label: 'Sub Item B.1',
                        },
                        {
                            link: { href: '/subitemB.2' },
                            label: 'Sub Item B.2',
                        },
                        {
                            link: { href: '/subitemB.3' },
                            label: 'Sub Item B.3',
                            isCurrent: true,
                        },
                        {
                            link: { href: '/subitemB.4' },
                            label: 'Sub Item B.4',
                            subItems: [
                                {
                                    link: { href: '/subitemB.4.1' },
                                    label: 'Sub Item B.4.1',
                                },
                            ],
                        },
                        {
                            link: { href: '/subitemB.5' },
                            label: 'Sub Item B.5',
                        },
                    ],
                },
                { link: { href: '/mainItemC' }, label: 'Main Item C' },
                {
                    link: { href: '/mainItemD' },
                    label: 'Main Item D',
                    subItems: [
                        {
                            link: { href: '/subitemD.1' },
                            label: 'Sub Item D.1',
                        },
                        {
                            link: { href: '/subitemD.2' },
                            label: 'Sub Item D.2',
                        },
                        {
                            link: { href: '/subitemD.3' },
                            label: 'Sub Item D.3',
                        },
                        {
                            link: { href: '/subitemD.5' },
                            label: 'Sub Item D.5',
                        },
                    ],
                },
            ],
            typeSettings: {
                type: 'flyout',
            },
            header: ({ closeMenu }) => (
                <button onClick={closeMenu}>close</button>
            ),
        }}
    />
);
