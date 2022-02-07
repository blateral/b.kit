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
            name: 'Gruppe 2',
            items: [
                {
                    id: 'activea',
                    label: 'Unterpunkt 1',
                    link: { href: '#' },
                    onClick: (id: string, fullId: string) =>
                        console.log(fullId),
                },
                {
                    id: 'activeb',
                    label: 'Unterpunkt 2',
                    link: { href: '#' },
                    onClick: (id: string, fullId: string) =>
                        console.log(fullId),
                },
                {
                    id: 'activec',
                    label: 'Unterpunkt 3',
                    link: { href: '#' },
                    onClick: (id: string, fullId: string) =>
                        console.log(fullId),
                },
                {
                    id: 'actived',
                    label: 'Unterpunkt 4',
                    link: { href: '#' },
                    onClick: (id: string, fullId: string) =>
                        console.log(fullId),
                },
            ],
        },
        {
            id: 'navGroup3',
            name: 'Gruppe 3',
            items: [
                {
                    id: 'activea',
                    label: 'Unterpunkt 1',
                    link: { href: '#' },
                    onClick: (id: string, fullId: string) =>
                        console.log(fullId),
                },
                {
                    id: 'activeb',
                    label: 'Unterpunkt 2',
                    link: { href: '#' },
                    onClick: (id: string, fullId: string) =>
                        console.log(fullId),
                },
                {
                    id: 'activec',
                    label: 'Unterpunkt 3',
                    link: { href: '#' },
                    onClick: (id: string, fullId: string) =>
                        console.log(fullId),
                },
                {
                    id: 'actived',
                    label: 'Unterpunkt 4',
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
                <Button.Label>Lorem Ipsum</Button.Label>
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
            <ButtonGhost.Label>Lorem Ipsum</ButtonGhost.Label>
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
            values: [{ name: 'inverted', value: 'white', color: 'black' }],
        },
        status: {
            type: 'stable',
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
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                est Lorem ipsum dolor sit amet.
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

export const WithCustomNavIndicator: Story = () => (
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
        navItemIndicator={(isInverted) => (
            <div
                style={{
                    background: isInverted ? 'white' : 'red',
                    width: '10px',
                    height: '10px',
                    marginRight: '5px',
                }}
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

export const WithMirroredView: Story = () => (
    <Menu
        isOpen
        isMirrored
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

export const WithBackgroundSettings: Story = () => (
    <Menu
        isOpen
        size="full"
        isInverted
        logo={{
            icon: logoFn,
            link: '#logoLink',
        }}
        background={{
            opacity: 0.3,
            blur: '4px',
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
