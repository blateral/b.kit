/* eslint-disable react/display-name */
import * as React from 'react';
import { Meta, Story } from '@storybook/react';

import Menu from '../src/components/sections/header/menu/Menu';
import ArrowRight from '../src/components/base/icons/ArrowRight';
import MenuAction from '../src/components/sections/header/menu/MenuActions';
import Star from '../src/components/base/icons/Star';
import StarGhost from '../src/components/base/icons/StarGhost';
import SearchInput from '../src/components/fields/SearchInput';
import Magnifier from '../src/components/base/icons/Magnifier';

import Facebook from '../src/components/base/icons/socials/Facebook';
import Twitter from '../src/components/base/icons/socials/Twitter';
import LinkedIn from '../src/components/base/icons/socials/LinkedIn';

const logoFn = (isInverted: boolean) => {
    if (isInverted)
        return (
            <img src="https://via.placeholder.com/107x115/000000/FFFFFF/?text=logo" />
        );
    else
        return (
            <img src="https://via.placeholder.com/107x115/FFFFFF/000000/?text=logo" />
        );
};

const primaryCtaFn = (isInverted: boolean) => (
    <MenuAction.View
        type="default"
        isInverted={!isInverted}
        as="a"
        href="#"
        onClick={console.log}
        breakAt="medium"
    >
        <MenuAction.Label visibleOn="desktop">Primary CTA</MenuAction.Label>
        <MenuAction.Icon visibleOn="desktop">
            <ArrowRight />
        </MenuAction.Icon>
        <MenuAction.Icon visibleOn="mobile">
            <Star />
        </MenuAction.Icon>
    </MenuAction.View>
);

const secondaryCtaFn = (isInverted: boolean) => (
    <MenuAction.View
        type="ghost"
        isInverted={isInverted}
        as="a"
        href="#"
        onClick={console.log}
    >
        <MenuAction.Label visibleOn="desktop">Secondary</MenuAction.Label>
        <MenuAction.Icon visibleOn="mobile">
            <StarGhost iconColor={isInverted ? 'white' : 'black'} />
        </MenuAction.Icon>
    </MenuAction.View>
);

const exampleNavItems = {
    activeNavItem: 'navGroup2.activeb',
    navItems: [
        {
            id: 'navGroup1',
            items: [
                {
                    id: 'start',
                    label: 'Startseite',
                    link: { href: '#' },
                    onClick: (id: string, fullId: string) =>
                        console.log(fullId),
                },
                {
                    id: 'about',
                    label: 'Über uns',
                    link: { href: '#' },
                    onClick: (id: string, fullId: string) =>
                        console.log(fullId),
                },
                {
                    id: 'corona',
                    label: 'Corona Info',
                    link: { href: '#' },
                    onClick: (id: string, fullId: string) =>
                        console.log(fullId),
                },
            ],
        },
        {
            id: 'navGroup2',
            name: 'Zimmer',
            items: [
                {
                    id: 'activea',
                    label: 'Aktiv Classic',
                    link: { href: '#' },
                    onClick: (id: string, fullId: string) =>
                        console.log(fullId),
                },
                {
                    id: 'activeb',
                    label: 'Aktiv Eco',
                    link: { href: '#' },
                    onClick: (id: string, fullId: string) =>
                        console.log(fullId),
                },
                {
                    id: 'activec',
                    label: 'Aktiv Classic',
                    link: { href: '#' },
                    onClick: (id: string, fullId: string) =>
                        console.log(fullId),
                },
                {
                    id: 'actived',
                    label: 'Aktiv Eco',
                    link: { href: '#' },
                    onClick: (id: string, fullId: string) =>
                        console.log(fullId),
                },
            ],
        },
        {
            id: 'navGroup3',
            name: 'Zimmer2',
            items: [
                {
                    id: 'activea',
                    label: 'Aktiv Classic',
                    link: { href: '#' },
                    onClick: (id: string, fullId: string) =>
                        console.log(fullId),
                },
                {
                    id: 'activeb',
                    label: 'Aktiv Eco',
                    link: { href: '#' },
                    onClick: (id: string, fullId: string) =>
                        console.log(fullId),
                },
                {
                    id: 'activec',
                    label: 'Aktiv Classic',
                    link: { href: '#' },
                    onClick: (id: string, fullId: string) =>
                        console.log(fullId),
                },
                {
                    id: 'actived',
                    label: 'Aktiv Eco',
                    link: { href: '#' },
                    onClick: (id: string, fullId: string) =>
                        console.log(fullId),
                },
            ],
        },
        {
            id: 'navGroup3',
            isSmall: true,
            items: [
                {
                    id: 'add1',
                    label: 'Unterpunkt 1',
                    link: { href: '#' },
                    onClick: (id: string, fullId: string) =>
                        console.log(fullId),
                },
                {
                    id: 'add2',
                    label: 'Unterpunkt 2',
                    link: { href: '#' },
                    onClick: (id: string, fullId: string) =>
                        console.log(fullId),
                },
                {
                    id: 'add3',
                    label: 'Unterpunkt 3',
                    link: { href: '#' },
                    onClick: (id: string, fullId: string) =>
                        console.log(fullId),
                },
                {
                    id: 'add4',
                    label: 'Unterpunkt 4',
                    link: { href: '#' },
                    onClick: (id: string, fullId: string) =>
                        console.log(fullId),
                },
            ],
        },
    ],
};

export default {
    title: 'Sections/Header/Menu',
    component: Menu,
    parameters: {
        backgrounds: {
            default: 'inverted',
            values: [{ name: 'inverted', value: 'grey' }],
        },
    },
    decorators: [
        (Story) => (
            <div
                style={{
                    height: '120vh',
                    width: '100%',
                }}
            >
                <Story />
            </div>
        ),
    ],
} as Meta;

export const Default: Story = () => <Menu />;

export const WithLogo: Story = () => (
    <Menu
        logo={{
            icon: logoFn,
            link: '#logoLink',
        }}
    />
);

export const WithScrollTriggerDelay: Story = () => (
    <Menu
        withTopOffset
        logo={{
            icon: logoFn,
            link: '#logoLink',
        }}
    />
);

export const HideTopBarOnScrollDown: Story = () => (
    <Menu
        withTopOffset
        hideOnScrollDown
        logo={{
            icon: logoFn,
            link: '#logoLink',
        }}
    />
);

export const WithActions: Story = () => (
    <Menu
        withTopOffset
        hideOnScrollDown
        logo={{
            icon: logoFn,
            link: '#logoLink',
        }}
        primaryAction={primaryCtaFn}
        secondaryAction={secondaryCtaFn}
    />
);

export const WithSearchInput: Story = () => (
    <Menu
        withTopOffset
        hideOnScrollDown
        logo={{
            icon: logoFn,
            link: '#logoLink',
        }}
        primaryAction={primaryCtaFn}
        secondaryAction={secondaryCtaFn}
        search={(isInverted) => (
            <SearchInput
                isInverted={isInverted}
                placeholder="Search"
                submitIcon={<Magnifier />}
                onSubmit={() => console.log('submit')}
            />
        )}
    />
);

export const WithNavItems: Story = () => (
    <Menu
        withTopOffset
        hideOnScrollDown
        logo={{
            icon: logoFn,
            link: '#logoLink',
        }}
        primaryAction={primaryCtaFn}
        secondaryAction={secondaryCtaFn}
        search={(isInverted) => (
            <SearchInput
                isInverted={isInverted}
                placeholder="Search"
                submitIcon={<Magnifier />}
                onSubmit={() => console.log('submit')}
            />
        )}
        {...exampleNavItems}
    />
);

export const WithSocials: Story = () => (
    <Menu
        withTopOffset
        hideOnScrollDown
        logo={{
            icon: logoFn,
            link: '#logoLink',
        }}
        primaryAction={primaryCtaFn}
        secondaryAction={secondaryCtaFn}
        search={(isInverted) => (
            <SearchInput
                isInverted={isInverted}
                placeholder="Search"
                submitIcon={<Magnifier />}
                onSubmit={() => console.log('submit')}
            />
        )}
        {...exampleNavItems}
        socials={[
            { href: '#', icon: <Facebook /> },
            { href: '#', icon: <LinkedIn /> },
            { href: '#', icon: <Twitter /> },
        ]}
    />
);

export const WithFullWidthFlyout: Story = () => (
    <Menu
        size="full"
        withTopOffset
        hideOnScrollDown
        logo={{
            icon: logoFn,
            link: '#logoLink',
        }}
        primaryAction={primaryCtaFn}
        secondaryAction={secondaryCtaFn}
        search={(isInverted) => (
            <SearchInput
                isInverted={isInverted}
                placeholder="Search"
                submitIcon={<Magnifier />}
                onSubmit={() => console.log('submit')}
            />
        )}
        {...exampleNavItems}
        socials={[
            { href: '#', icon: <Facebook /> },
            { href: '#', icon: <LinkedIn /> },
            { href: '#', icon: <Twitter /> },
        ]}
    />
);

export const InvertedTopBar: Story = () => (
    <Menu
        isTopInverted
        withTopOffset
        hideOnScrollDown
        logo={{
            icon: logoFn,
            link: '#logoLink',
        }}
        primaryAction={primaryCtaFn}
        secondaryAction={secondaryCtaFn}
        search={(isInverted) => (
            <SearchInput
                isInverted={isInverted}
                placeholder="Search"
                submitIcon={<Magnifier />}
                onSubmit={() => console.log('submit')}
            />
        )}
        {...exampleNavItems}
        socials={[
            { href: '#', icon: <Facebook /> },
            { href: '#', icon: <LinkedIn /> },
            { href: '#', icon: <Twitter /> },
        ]}
    />
);

export const InvertedNav: Story = () => (
    <Menu
        isTopInverted
        isNavInverted
        withTopOffset
        hideOnScrollDown
        logo={{
            icon: logoFn,
            link: '#logoLink',
        }}
        primaryAction={primaryCtaFn}
        secondaryAction={secondaryCtaFn}
        search={(isInverted) => (
            <SearchInput
                isInverted={isInverted}
                placeholder="Search"
                submitIcon={<Magnifier />}
                onSubmit={() => console.log('submit')}
            />
        )}
        {...exampleNavItems}
        socials={[
            { href: '#', icon: <Facebook /> },
            { href: '#', icon: <LinkedIn /> },
            { href: '#', icon: <Twitter /> },
        ]}
    />
);

export const InvertedNavFull: Story = () => (
    <Menu
        size="full"
        isTopInverted
        isNavInverted
        withTopOffset
        hideOnScrollDown
        logo={{
            icon: logoFn,
            link: '#logoLink',
        }}
        primaryAction={primaryCtaFn}
        secondaryAction={secondaryCtaFn}
        search={(isInverted) => (
            <SearchInput
                isInverted={isInverted}
                placeholder="Search"
                submitIcon={<Magnifier />}
                onSubmit={() => console.log('submit')}
            />
        )}
        {...exampleNavItems}
        socials={[
            { href: '#', icon: <Facebook /> },
            { href: '#', icon: <LinkedIn /> },
            { href: '#', icon: <Twitter /> },
        ]}
    />
);

export const WithToggleIconVariation: Story = () => (
    <Menu
        size="full"
        isTopInverted
        withTopOffset
        hideOnScrollDown
        toggleIcons={{ opened: <StarGhost />, closed: <Star /> }}
        logo={{
            icon: logoFn,
            link: '#logoLink',
        }}
        primaryAction={primaryCtaFn}
        secondaryAction={secondaryCtaFn}
        search={(isInverted) => (
            <SearchInput
                isInverted={isInverted}
                placeholder="Search"
                submitIcon={<Magnifier />}
                onSubmit={() => console.log('submit')}
            />
        )}
        {...exampleNavItems}
        socials={[
            { href: '#', icon: <Facebook /> },
            { href: '#', icon: <LinkedIn /> },
            { href: '#', icon: <Twitter /> },
        ]}
    />
);
