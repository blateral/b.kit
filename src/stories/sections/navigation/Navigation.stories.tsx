/* eslint-disable react/display-name */
import React from 'react';
import { Meta, Story } from '@storybook/react';
import Navigation, {
    NavBarStates,
    NavMenuStates,
} from 'components/sections/navigation/Navigation';
import NavBarTop from 'components/sections/navigation/partials/NavBarTop';
import NavBarMain from 'components/sections/navigation/partials/NavBarMain';
import Button from 'components/buttons/Button';
import Star from 'components/base/icons/Star';
import NavBarBottom from 'components/sections/navigation/partials/NavBarBottom';
import styled from 'styled-components';
import { mq } from 'utils/styles';
import MenuHeader from 'components/sections/navigation/partials/MenuHeader';
import MenuFooter from 'components/sections/navigation/partials/MenuFooter';

import Facebook from 'components/base/icons/socials/Facebook';
import LinkedIn from 'components/base/icons/socials/LinkedIn';
import Xing from 'components/base/icons/socials/Xing';
import Twitter from 'components/base/icons/socials/Twitter';

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

const menuActionFn = ({
    isInverted,
}: { isInverted?: boolean } & NavMenuStates) => (
    <NavBarButton>
        <Button.View as="a" href="#" isInverted={isInverted}>
            <Button.Label>PrimaryButton</Button.Label>
        </Button.View>
    </NavBarButton>
);

export default {
    title: 'Sections/Navigation',
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
                        {
                            uid: 'item1',
                            label: 'Contact',
                            link: { href: '#0' },
                        },
                        {
                            uid: 'item2',
                            label: 'Opening Hours',
                            link: { href: '#1' },
                        },
                        {
                            uid: 'item3',
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
                        link: { href: '#0' },
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
                {
                    uid: 'itemA',
                    link: { href: '/mainItemA' },
                    label: 'Main Item A',
                    icon: <Star />,
                },
                {
                    uid: 'itemB',
                    link: { href: '/mainItemB' },
                    label: 'Main Item B',
                    icon: <Star />,
                    subItems: [
                        {
                            uid: 'itemB1',
                            link: { href: '/subitemB.1' },
                            label: 'Sub Item B.1',
                        },
                        {
                            uid: 'itemB2',
                            link: { href: '/subitemB.2' },
                            label: 'Sub Item B.2',
                        },
                        {
                            uid: 'itemB3',
                            link: { href: '/subitemB.3' },
                            label: 'Sub Item B.3',
                            isCurrent: true,
                        },
                        {
                            uid: 'itemB4',
                            link: { href: '/subitemB.4' },
                            label: 'Sub Item B.4',
                            subItems: [
                                {
                                    uid: 'itemB4.1',
                                    link: { href: '/subitemB.4.1' },
                                    label: 'Sub Item B.4.1',
                                },
                            ],
                        },
                        {
                            uid: 'itemB5',
                            link: { href: '/subitemB.5' },
                            label: 'Sub Item B.5',
                        },
                    ],
                },
                {
                    uid: 'itemC',
                    link: { href: '/mainItemC' },
                    label: 'Main Item C',
                    icon: <Star />,
                    isFeatured: true,
                },
                {
                    uid: 'itemD',
                    link: { href: '/mainItemD' },
                    label: 'Main Item D',
                    icon: <Star />,
                    subItems: [
                        {
                            uid: 'itemD1',
                            link: { href: '/subitemD.1' },
                            label: 'Sub Item D.1',
                        },
                        {
                            uid: 'itemD2',
                            link: { href: '/subitemD.2' },
                            label: 'Sub Item D.2',
                        },
                        {
                            uid: 'itemD3',
                            link: { href: '/subitemD.3' },
                            label: 'Sub Item D.3',
                        },
                        {
                            uid: 'itemD4',
                            link: { href: '/subitemD.5' },
                            label: 'Sub Item D.5',
                        },
                    ],
                },
                {
                    uid: 'itemE',
                    link: { href: '/mainItemE' },
                    label: 'Main Item E',
                    icon: <Star />,
                    isFeatured: true,
                    subItems: [
                        {
                            uid: 'itemE1',
                            link: { href: '/subitemE.1' },
                            label: 'Sub Item E.1',
                        },
                        {
                            uid: 'itemE2',
                            link: { href: '/subitemE.2' },
                            label: 'Sub Item E.2',
                        },
                        {
                            uid: 'itemE3',
                            link: { href: '/subitemE.3' },
                            label: 'Sub Item E.3',
                        },
                        {
                            uid: 'itemE4',
                            link: { href: '/subitemE.5' },
                            label: 'Sub Item E.5',
                        },
                    ],
                },
            ],
            subNavigation: [
                {
                    uid: 'subItemA',
                    label: 'Subnav Item A',
                    link: { href: '/subnavitemA' },
                },
                {
                    uid: 'subItemB',
                    label: 'Subnav Item B',
                    link: { href: '/subnavitemB' },
                },
                {
                    uid: 'subItemC',
                    label: 'Subnav Item C',
                    link: { href: '/subnavitemC' },
                },
            ],
            typeSettings: {
                type: 'flyout',
                // collapseIcon: () => <ArrowRight />,
            },
            header: (settings) => (
                <MenuHeader menuStates={settings} action={menuActionFn} />
            ),
            footer: (settings) => (
                <MenuFooter
                    menuStates={settings}
                    langs={[
                        { label: 'DE', link: { href: '/de' }, isActive: true },
                        { label: 'EN', link: { href: '/en' } },
                        { label: 'FR', link: { href: '/fr' } },
                    ]}
                    socials={[
                        { href: '#', icon: () => <Facebook /> },
                        { href: '#', icon: () => <LinkedIn /> },
                        { href: '#', icon: () => <Xing /> },
                        { href: '#', icon: () => <Twitter /> },
                    ]}
                />
            ),
        }}
    />
);
