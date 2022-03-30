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
// import ButtonGhost from 'components/buttons/ButtonGhost';
// import StarGhost from 'components/base/icons/StarGhost';

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

// #TODO
const primaryCtaFn = ({
    isInverted,
}: { isInverted?: boolean } & NavBarStates) => (
    <Button.View as="a" href="#" isInverted={isInverted} onClick={console.log}>
        <Button.Icon>
            <Star />
        </Button.Icon>
    </Button.View>
);

// const secondaryCtaFn = ({
//     isInverted,
// }: { isInverted?: boolean } & NavBarStates) => (
//     <ButtonGhost.View
//         as="a"
//         href="#"
//         isInverted={isInverted}
//         onClick={console.log}
//     >
//         <ButtonGhost.Icon>
//             <StarGhost />
//         </ButtonGhost.Icon>
//     </ButtonGhost.View>
// );

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
                            isActive: true,
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
                    logo={{ src: 'https://via.placeholder.com/320x80' }}
                    navStates={navStates}
                    primaryAction={primaryCtaFn}
                />
            ),
            bottomBar: ({ mainNavigation }) => {
                return mainNavigation?.length;
            },
        }}
        menu={{
            mainNavigation: [],
            typeSettings: {
                type: 'flyout',
            },
            header: ({ closeMenu }) => (
                <button onClick={closeMenu}>close</button>
            ),
        }}
    />
);
