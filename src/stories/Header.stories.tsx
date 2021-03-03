/* eslint-disable react/display-name */
import * as React from 'react';
import { Meta, Story } from '@storybook/react';

import Header from 'components/sections/header/Header';
import Button from 'components/buttons/Button';
import ArrowRight from 'components/base/icons/ArrowRight';
import Star from 'components/base/icons/Star';
import StarGhost from 'components/base/icons/StarGhost';

import Facebook from 'components/base/icons/socials/Facebook';
import Twitter from 'components/base/icons/socials/Twitter';
import LinkedIn from 'components/base/icons/socials/LinkedIn';
import ButtonGhost from 'components/buttons/ButtonGhost';
import { TopBarMq } from 'components/sections/header/TopBar';

const logoFn = ({
    isInverted,
    size,
}: {
    isInverted: boolean;
    size?: 'full' | 'small';
}) => {
    if (isInverted)
        return (
            <img
                src={`https://via.placeholder.com/107x115/000000/FFFFFF/?text=${size}`}
            />
        );
    else
        return (
            <img
                src={`https://via.placeholder.com/107x115/FFFFFF/000000/?text=${size}`}
            />
        );
};

const primaryCtaFn = ({
    isInverted,
    currentMq,
}: {
    isInverted?: boolean;
    currentMq: TopBarMq;
}) => (
    <Button.View as="a" href="#" isInverted={isInverted} onClick={console.log}>
        {currentMq === 'semilarge' && (
            <>
                <Button.Label>zum Haus St. Ulrich</Button.Label>
                <Button.Icon>
                    <ArrowRight />
                </Button.Icon>
            </>
        )}
        {currentMq === 'small' && (
            <Button.Icon>
                <Star />
            </Button.Icon>
        )}
    </Button.View>
);

const secondaryCtaFn = ({
    isInverted,
    currentMq,
}: {
    isInverted?: boolean;
    currentMq: TopBarMq;
}) => (
    <ButtonGhost.View
        as="a"
        href="#"
        isInverted={isInverted}
        onClick={console.log}
    >
        {currentMq === 'semilarge' && (
            <ButtonGhost.Label>zum Haus St. Ulrich</ButtonGhost.Label>
        )}
        {currentMq === 'small' && (
            <ButtonGhost.Icon>
                <StarGhost />
            </ButtonGhost.Icon>
        )}
    </ButtonGhost.View>
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
    title: 'Sections/Header/Header',
    component: Header,
    decorators: [
        (Story) => (
            <div style={{ height: '120vh', width: '100%' }}>
                <Story />
            </div>
        ),
    ],
} as Meta;

export const SinglePoster: Story = () => (
    <Header
        images={[
            {
                small: 'https://unsplash.it/660/792?id=1',
                medium: 'https://unsplash.it/1100/1320?id=1',
                large: 'https://unsplash.it/1596/860?id=1',
                xlarge: 'https://unsplash.it/2450/1320?id=1',
                webp: {
                    small: 'https://unsplash.it/660/792.webp?id=1',
                    medium: 'https://unsplash.it/1100/1320.webp?id=1',
                    large: 'https://unsplash.it/1596/860.webp?id=1',
                    xlarge: 'https://unsplash.it/2450/1320.webp?id=1',
                },
            },
        ]}
    />
);

export const WithTitle: Story = () => (
    <Header
        title="Haus St. Franziskus – lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
        images={[
            {
                small: 'https://unsplash.it/660/792?id=1',
                medium: 'https://unsplash.it/1100/1320?id=1',
                large: 'https://unsplash.it/1596/860?id=1',
                xlarge: 'https://unsplash.it/2450/1320?id=1',
                webp: {
                    small: 'https://unsplash.it/660/792.webp?id=1',
                    medium: 'https://unsplash.it/1100/1320.webp?id=1',
                    large: 'https://unsplash.it/1596/860.webp?id=1',
                    xlarge: 'https://unsplash.it/2450/1320.webp?id=1',
                },
            },
        ]}
    />
);

export const WithActions: Story = () => (
    <Header
        title="Haus St. Franziskus – lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
        images={[
            {
                small: 'https://unsplash.it/660/792?id=1',
                medium: 'https://unsplash.it/1100/1320?id=1',
                large: 'https://unsplash.it/1596/860?id=1',
                xlarge: 'https://unsplash.it/2450/1320?id=1',
                webp: {
                    small: 'https://unsplash.it/660/792.webp?id=1',
                    medium: 'https://unsplash.it/1100/1320.webp?id=1',
                    large: 'https://unsplash.it/1596/860.webp?id=1',
                    xlarge: 'https://unsplash.it/2450/1320.webp?id=1',
                },
            },
        ]}
        primaryCta={(isInverted) => (
            <Button.View isInverted={isInverted}>
                <Button.Label>Primary</Button.Label>
            </Button.View>
        )}
        secondaryCta={(isInverted) => (
            <ButtonGhost.View isInverted={isInverted}>
                <ButtonGhost.Label>Secondary</ButtonGhost.Label>
            </ButtonGhost.View>
        )}
    />
);

export const WithMenu: Story = () => (
    <Header
        navigation={{
            ...exampleNavItems,
            socials: [
                { href: '#', icon: <Facebook /> },
                { href: '#', icon: <LinkedIn /> },
                { href: '#', icon: <Twitter /> },
            ],
        }}
        title="Haus St. Franziskus – lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
        images={[
            {
                small: 'https://unsplash.it/660/792?id=1',
                medium: 'https://unsplash.it/1100/1320?id=1',
                large: 'https://unsplash.it/1596/860?id=1',
                xlarge: 'https://unsplash.it/2450/1320?id=1',
                webp: {
                    small: 'https://unsplash.it/660/792.webp?id=1',
                    medium: 'https://unsplash.it/1100/1320.webp?id=1',
                    large: 'https://unsplash.it/1596/860.webp?id=1',
                    xlarge: 'https://unsplash.it/2450/1320.webp?id=1',
                },
            },
        ]}
        primaryCta={(isInverted) => (
            <Button.View isInverted={isInverted}>
                <Button.Label>Primary</Button.Label>
            </Button.View>
        )}
        secondaryCta={(isInverted) => (
            <ButtonGhost.View isInverted={isInverted}>
                <ButtonGhost.Label>Secondary</ButtonGhost.Label>
            </ButtonGhost.View>
        )}
    />
);

export const WithMenuLogo: Story = () => (
    <Header
        navigation={{
            logo: { icon: logoFn, link: '#logoLink' },
            ...exampleNavItems,
            socials: [
                { href: '#', icon: <Facebook /> },
                { href: '#', icon: <LinkedIn /> },
                { href: '#', icon: <Twitter /> },
            ],
        }}
        title="Haus St. Franziskus – lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
        images={[
            {
                small: 'https://unsplash.it/660/792?id=1',
                medium: 'https://unsplash.it/1100/1320?id=1',
                large: 'https://unsplash.it/1596/860?id=1',
                xlarge: 'https://unsplash.it/2450/1320?id=1',
                webp: {
                    small: 'https://unsplash.it/660/792.webp?id=1',
                    medium: 'https://unsplash.it/1100/1320.webp?id=1',
                    large: 'https://unsplash.it/1596/860.webp?id=1',
                    xlarge: 'https://unsplash.it/2450/1320.webp?id=1',
                },
            },
        ]}
        primaryCta={(isInverted) => (
            <Button.View isInverted={isInverted}>
                <Button.Label>Primary</Button.Label>
            </Button.View>
        )}
        secondaryCta={(isInverted) => (
            <ButtonGhost.View isInverted={isInverted}>
                <ButtonGhost.Label>Secondary</ButtonGhost.Label>
            </ButtonGhost.View>
        )}
    />
);

export const WithMenuActions: Story = () => (
    <Header
        navigation={{
            logo: { icon: logoFn, link: '#logoLink' },
            ...exampleNavItems,
            socials: [
                { href: '#', icon: <Facebook /> },
                { href: '#', icon: <LinkedIn /> },
                { href: '#', icon: <Twitter /> },
            ],
            primaryCta: primaryCtaFn,
            secondaryCta: secondaryCtaFn,
        }}
        title="Haus St. Franziskus – lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
        images={[
            {
                small: 'https://unsplash.it/660/792?id=1',
                medium: 'https://unsplash.it/1100/1320?id=1',
                large: 'https://unsplash.it/1596/860?id=1',
                xlarge: 'https://unsplash.it/2450/1320?id=1',
                webp: {
                    small: 'https://unsplash.it/660/792.webp?id=1',
                    medium: 'https://unsplash.it/1100/1320.webp?id=1',
                    large: 'https://unsplash.it/1596/860.webp?id=1',
                    xlarge: 'https://unsplash.it/2450/1320.webp?id=1',
                },
            },
        ]}
        primaryCta={(isInverted) => (
            <Button.View isInverted={isInverted}>
                <Button.Label>Primary</Button.Label>
            </Button.View>
        )}
        secondaryCta={(isInverted) => (
            <ButtonGhost.View isInverted={isInverted}>
                <ButtonGhost.Label>Secondary</ButtonGhost.Label>
            </ButtonGhost.View>
        )}
    />
);

export const WithInvertedTopBar: Story = () => (
    <Header
        navigation={{
            isTopbarInverted: true,
            logo: { icon: logoFn, link: '#logoLink' },
            ...exampleNavItems,
            socials: [
                { href: '#', icon: <Facebook /> },
                { href: '#', icon: <LinkedIn /> },
                { href: '#', icon: <Twitter /> },
            ],
            primaryCta: primaryCtaFn,
            secondaryCta: secondaryCtaFn,
        }}
        title="Haus St. Franziskus – lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
        images={[
            {
                small: 'https://unsplash.it/660/792?id=1',
                medium: 'https://unsplash.it/1100/1320?id=1',
                large: 'https://unsplash.it/1596/860?id=1',
                xlarge: 'https://unsplash.it/2450/1320?id=1',
                webp: {
                    small: 'https://unsplash.it/660/792.webp?id=1',
                    medium: 'https://unsplash.it/1100/1320.webp?id=1',
                    large: 'https://unsplash.it/1596/860.webp?id=1',
                    xlarge: 'https://unsplash.it/2450/1320.webp?id=1',
                },
            },
        ]}
        primaryCta={(isInverted) => (
            <Button.View isInverted={isInverted}>
                <Button.Label>Primary</Button.Label>
            </Button.View>
        )}
        secondaryCta={(isInverted) => (
            <ButtonGhost.View isInverted={isInverted}>
                <ButtonGhost.Label>Secondary</ButtonGhost.Label>
            </ButtonGhost.View>
        )}
    />
);

export const WithInvertedNav: Story = () => (
    <Header
        navigation={{
            isTopbarInverted: true,
            isMenuInverted: true,
            logo: { icon: logoFn, link: '#logoLink' },
            ...exampleNavItems,
            socials: [
                { href: '#', icon: <Facebook /> },
                { href: '#', icon: <LinkedIn /> },
                { href: '#', icon: <Twitter /> },
            ],
            primaryCta: primaryCtaFn,
            secondaryCta: secondaryCtaFn,
        }}
        title="Haus St. Franziskus – lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
        images={[
            {
                small: 'https://unsplash.it/660/792?id=1',
                medium: 'https://unsplash.it/1100/1320?id=1',
                large: 'https://unsplash.it/1596/860?id=1',
                xlarge: 'https://unsplash.it/2450/1320?id=1',
                webp: {
                    small: 'https://unsplash.it/660/792.webp?id=1',
                    medium: 'https://unsplash.it/1100/1320.webp?id=1',
                    large: 'https://unsplash.it/1596/860.webp?id=1',
                    xlarge: 'https://unsplash.it/2450/1320.webp?id=1',
                },
            },
        ]}
        primaryCta={(isInverted) => (
            <Button.View isInverted={isInverted}>
                <Button.Label>Primary</Button.Label>
            </Button.View>
        )}
        secondaryCta={(isInverted) => (
            <ButtonGhost.View isInverted={isInverted}>
                <ButtonGhost.Label>Secondary</ButtonGhost.Label>
            </ButtonGhost.View>
        )}
    />
);

export const WithFullSizeMenu: Story = () => (
    <Header
        navigation={{
            isLargeMenu: true,
            isTopbarInverted: true,
            isMenuInverted: true,
            logo: { icon: logoFn, link: '#logoLink' },
            ...exampleNavItems,
            socials: [
                { href: '#', icon: <Facebook /> },
                { href: '#', icon: <LinkedIn /> },
                { href: '#', icon: <Twitter /> },
            ],
            primaryCta: primaryCtaFn,
            secondaryCta: secondaryCtaFn,
        }}
        title="Haus St. Franziskus – lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
        images={[
            {
                small: 'https://unsplash.it/660/792?id=1',
                medium: 'https://unsplash.it/1100/1320?id=1',
                large: 'https://unsplash.it/1596/860?id=1',
                xlarge: 'https://unsplash.it/2450/1320?id=1',
                webp: {
                    small: 'https://unsplash.it/660/792.webp?id=1',
                    medium: 'https://unsplash.it/1100/1320.webp?id=1',
                    large: 'https://unsplash.it/1596/860.webp?id=1',
                    xlarge: 'https://unsplash.it/2450/1320.webp?id=1',
                },
            },
        ]}
        primaryCta={(isInverted) => (
            <Button.View isInverted={isInverted}>
                <Button.Label>Primary</Button.Label>
            </Button.View>
        )}
        secondaryCta={(isInverted) => (
            <ButtonGhost.View isInverted={isInverted}>
                <ButtonGhost.Label>Secondary</ButtonGhost.Label>
            </ButtonGhost.View>
        )}
    />
);

export const WithBadge: Story = () => (
    <Header
        navigation={{
            isTopbarInverted: true,
            isMenuInverted: true,
            logo: { icon: logoFn, link: '#logoLink' },
            ...exampleNavItems,
            socials: [
                { href: '#', icon: <Facebook /> },
                { href: '#', icon: <LinkedIn /> },
                { href: '#', icon: <Twitter /> },
            ],
            primaryCta: primaryCtaFn,
            secondaryCta: secondaryCtaFn,
        }}
        title="Haus St. Franziskus – lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
        images={[
            {
                small: 'https://unsplash.it/660/792?id=1',
                medium: 'https://unsplash.it/1100/1320?id=1',
                large: 'https://unsplash.it/1596/860?id=1',
                xlarge: 'https://unsplash.it/2450/1320?id=1',
                webp: {
                    small: 'https://unsplash.it/660/792.webp?id=1',
                    medium: 'https://unsplash.it/1100/1320.webp?id=1',
                    large: 'https://unsplash.it/1596/860.webp?id=1',
                    xlarge: 'https://unsplash.it/2450/1320.webp?id=1',
                },
            },
        ]}
        primaryCta={(isInverted) => (
            <Button.View isInverted={isInverted}>
                <Button.Label>Primary</Button.Label>
            </Button.View>
        )}
        secondaryCta={(isInverted) => (
            <ButtonGhost.View isInverted={isInverted}>
                <ButtonGhost.Label>Secondary</ButtonGhost.Label>
            </ButtonGhost.View>
        )}
        badge={{
            content: (
                <img
                    src="https://via.placeholder.com/392x392/?text=badge"
                    style={{ height: '100%', width: '100%' }}
                />
            ),
        }}
    />
);

export const WithBadgeOnMobile: Story = () => (
    <Header
        navigation={{
            isTopbarInverted: true,
            isMenuInverted: true,
            logo: { icon: logoFn, link: '#logoLink' },
            ...exampleNavItems,
            socials: [
                { href: '#', icon: <Facebook /> },
                { href: '#', icon: <LinkedIn /> },
                { href: '#', icon: <Twitter /> },
            ],
            primaryCta: primaryCtaFn,
            secondaryCta: secondaryCtaFn,
        }}
        title="Haus St. Franziskus – lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
        images={[
            {
                small: 'https://unsplash.it/660/792?id=1',
                medium: 'https://unsplash.it/1100/1320?id=1',
                large: 'https://unsplash.it/1596/860?id=1',
                xlarge: 'https://unsplash.it/2450/1320?id=1',
                webp: {
                    small: 'https://unsplash.it/660/792.webp?id=1',
                    medium: 'https://unsplash.it/1100/1320.webp?id=1',
                    large: 'https://unsplash.it/1596/860.webp?id=1',
                    xlarge: 'https://unsplash.it/2450/1320.webp?id=1',
                },
            },
        ]}
        primaryCta={(isInverted) => (
            <Button.View isInverted={isInverted}>
                <Button.Label>Primary</Button.Label>
            </Button.View>
        )}
        secondaryCta={(isInverted) => (
            <ButtonGhost.View isInverted={isInverted}>
                <ButtonGhost.Label>Secondary</ButtonGhost.Label>
            </ButtonGhost.View>
        )}
        badge={{
            content: (
                <img
                    src="https://via.placeholder.com/392x392/?text=badge"
                    style={{ height: '100%', width: '100%' }}
                />
            ),
            showOnMobile: true,
        }}
    />
);

export const SmallerHeaderSize: Story = () => (
    <Header
        size="small"
        navigation={{
            isTopbarInverted: true,
            isMenuInverted: true,
            logo: { icon: logoFn, link: '#logoLink' },
            ...exampleNavItems,
            socials: [
                { href: '#', icon: <Facebook /> },
                { href: '#', icon: <LinkedIn /> },
                { href: '#', icon: <Twitter /> },
            ],
            primaryCta: primaryCtaFn,
            secondaryCta: secondaryCtaFn,
        }}
        title="Haus St. Franziskus – lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
        images={[
            {
                small: 'https://unsplash.it/660/792?id=1',
                medium: 'https://unsplash.it/1100/1320?id=1',
                large: 'https://unsplash.it/1596/860?id=1',
                xlarge: 'https://unsplash.it/2450/1320?id=1',
                webp: {
                    small: 'https://unsplash.it/660/792.webp?id=1',
                    medium: 'https://unsplash.it/1100/1320.webp?id=1',
                    large: 'https://unsplash.it/1596/860.webp?id=1',
                    xlarge: 'https://unsplash.it/2450/1320.webp?id=1',
                },
            },
        ]}
        primaryCta={(isInverted) => (
            <Button.View isInverted={isInverted}>
                <Button.Label>Primary</Button.Label>
            </Button.View>
        )}
        secondaryCta={(isInverted) => (
            <ButtonGhost.View isInverted={isInverted}>
                <ButtonGhost.Label>Secondary</ButtonGhost.Label>
            </ButtonGhost.View>
        )}
    />
);

export const WithKenBurnsEffect: Story = () => (
    <Header
        navigation={{
            isTopbarInverted: true,
            isMenuInverted: true,
            logo: { icon: logoFn, link: '#logoLink' },
            ...exampleNavItems,
            socials: [
                { href: '#', icon: <Facebook /> },
                { href: '#', icon: <LinkedIn /> },
                { href: '#', icon: <Twitter /> },
            ],
            primaryCta: primaryCtaFn,
            secondaryCta: secondaryCtaFn,
        }}
        title="Haus St. Franziskus – lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
        images={[
            {
                small: 'https://unsplash.it/660/792?id=1',
                medium: 'https://unsplash.it/1100/1320?id=1',
                large: 'https://unsplash.it/1596/860?id=1',
                xlarge: 'https://unsplash.it/2450/1320?id=1',
                webp: {
                    small: 'https://unsplash.it/660/792.webp?id=1',
                    medium: 'https://unsplash.it/1100/1320.webp?id=1',
                    large: 'https://unsplash.it/1596/860.webp?id=1',
                    xlarge: 'https://unsplash.it/2450/1320.webp?id=1',
                },
            },
            {
                small: 'https://unsplash.it/660/792?id=2',
                medium: 'https://unsplash.it/1100/1320?id=2',
                large: 'https://unsplash.it/1596/860?id=2',
                xlarge: 'https://unsplash.it/2450/1320?id=2',
            },
            {
                small: 'https://unsplash.it/660/792?id=3',
                medium: 'https://unsplash.it/1100/1320?id=3',
                large: 'https://unsplash.it/1596/860?id=3',
                xlarge: 'https://unsplash.it/2450/1320?id=3',
            },
        ]}
        primaryCta={(isInverted) => (
            <Button.View isInverted={isInverted}>
                <Button.Label>Primary</Button.Label>
            </Button.View>
        )}
        secondaryCta={(isInverted) => (
            <ButtonGhost.View isInverted={isInverted}>
                <ButtonGhost.Label>Secondary</ButtonGhost.Label>
            </ButtonGhost.View>
        )}
    />
);

export const WithKenBurnsEffectSmallerSize: Story = () => (
    <Header
        size="small"
        navigation={{
            isTopbarInverted: true,
            isMenuInverted: true,
            logo: { icon: logoFn, link: '#logoLink' },
            ...exampleNavItems,
            socials: [
                { href: '#', icon: <Facebook /> },
                { href: '#', icon: <LinkedIn /> },
                { href: '#', icon: <Twitter /> },
            ],
            primaryCta: primaryCtaFn,
            secondaryCta: secondaryCtaFn,
        }}
        title="Haus St. Franziskus – lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
        images={[
            {
                small: 'https://unsplash.it/660/792?id=1',
                medium: 'https://unsplash.it/1100/1320?id=1',
                large: 'https://unsplash.it/1596/860?id=1',
                xlarge: 'https://unsplash.it/2450/1320?id=1',
                webp: {
                    small: 'https://unsplash.it/660/792.webp?id=1',
                    medium: 'https://unsplash.it/1100/1320.webp?id=1',
                    large: 'https://unsplash.it/1596/860.webp?id=1',
                    xlarge: 'https://unsplash.it/2450/1320.webp?id=1',
                },
            },
            {
                small: 'https://unsplash.it/660/792?id=2',
                medium: 'https://unsplash.it/1100/1320?id=2',
                large: 'https://unsplash.it/1596/860?id=2',
                xlarge: 'https://unsplash.it/2450/1320?id=2',
            },
            {
                small: 'https://unsplash.it/660/792?id=3',
                medium: 'https://unsplash.it/1100/1320?id=3',
                large: 'https://unsplash.it/1596/860?id=3',
                xlarge: 'https://unsplash.it/2450/1320?id=3',
            },
        ]}
        primaryCta={(isInverted) => (
            <Button.View isInverted={isInverted}>
                <Button.Label>Primary</Button.Label>
            </Button.View>
        )}
        secondaryCta={(isInverted) => (
            <ButtonGhost.View isInverted={isInverted}>
                <ButtonGhost.Label>Secondary</ButtonGhost.Label>
            </ButtonGhost.View>
        )}
    />
);
