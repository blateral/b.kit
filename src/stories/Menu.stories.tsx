/* eslint-disable react/display-name */
import * as React from 'react';
import { Meta, Story } from '@storybook/react';

import Menu from 'components/sections/navigation/menu/Menu';
import SearchInput from 'components/fields/SearchInput';
import Magnifier from 'components/base/icons/Magnifier';

import Facebook from 'components/base/icons/socials/Facebook';
import Twitter from 'components/base/icons/socials/Twitter';
import LinkedIn from 'components/base/icons/socials/LinkedIn';
import Button from 'components/buttons/Button';
import ArrowRight from 'components/base/icons/ArrowRight';
import Star from 'components/base/icons/Star';
import ButtonGhost from 'components/buttons/ButtonGhost';
import StarGhost from 'components/base/icons/StarGhost';

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
                src={`https://via.placeholder.com/${
                    size === 'full' ? '425' : '107'
                }x115/000000/FFFFFF/?text=${size}`}
            />
        );
    else
        return (
            <img
                src={`https://via.placeholder.com/${
                    size === 'full' ? '425' : '107'
                }x115/FFFFFF/000000/?text=${size}`}
            />
        );
};

const primaryCtaFn = ({
    isInverted,
    size,
}: {
    isInverted?: boolean;
    size?: 'desktop' | 'mobile';
}) => (
    <Button.View as="a" href="#" isInverted={isInverted} onClick={console.log}>
        {size === 'desktop' && (
            <>
                <Button.Label>zum Haus St. Ulrich</Button.Label>
                <Button.Icon>
                    <ArrowRight />
                </Button.Icon>
            </>
        )}
        {size === 'mobile' && (
            <Button.Icon>
                <Star />
            </Button.Icon>
        )}
    </Button.View>
);

const secondaryCtaFn = ({
    isInverted,
    size,
}: {
    isInverted?: boolean;
    size?: 'desktop' | 'mobile';
}) => (
    <ButtonGhost.View
        as="a"
        href="#"
        isInverted={isInverted}
        onClick={console.log}
    >
        {size === 'desktop' && (
            <ButtonGhost.Label>zum Haus St. Ulrich</ButtonGhost.Label>
        )}
        {size === 'mobile' && (
            <ButtonGhost.Icon>
                <StarGhost />
            </ButtonGhost.Icon>
        )}
    </ButtonGhost.View>
);

export default {
    title: 'Sections/Navigation/Menu',
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

export const Default: Story = () => <Menu isOpen />;

export const WithSearchInput: Story = () => (
    <Menu
        isOpen
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
        isOpen
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
        isOpen
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
        isOpen
        size="full"
        logo={{
            icon: logoFn,
            link: '#logoLink',
        }}
        search={(isInverted) => (
            <SearchInput
                isInverted={isInverted}
                placeholder="Search"
                submitIcon={<Magnifier />}
                onSubmit={() => console.log('submit')}
            />
        )}
        primaryAction={primaryCtaFn}
        secondaryAction={secondaryCtaFn}
        {...exampleNavItems}
        socials={[
            { href: '#', icon: <Facebook /> },
            { href: '#', icon: <LinkedIn /> },
            { href: '#', icon: <Twitter /> },
        ]}
    />
);

export const Inverted: Story = () => (
    <Menu
        isOpen
        isInverted
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

export const InvertedFull: Story = () => (
    <Menu
        isOpen
        size="full"
        isInverted
        logo={{
            icon: logoFn,
            link: '#logoLink',
        }}
        search={(isInverted) => (
            <SearchInput
                isInverted={isInverted}
                placeholder="Search"
                submitIcon={<Magnifier />}
                onSubmit={() => console.log('submit')}
            />
        )}
        primaryAction={primaryCtaFn}
        secondaryAction={secondaryCtaFn}
        {...exampleNavItems}
        socials={[
            { href: '#', icon: <Facebook /> },
            { href: '#', icon: <LinkedIn /> },
            { href: '#', icon: <Twitter /> },
        ]}
    />
);
