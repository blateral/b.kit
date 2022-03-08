import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import SocialWall, {
    SocialWallComponent,
} from 'components/sections/SocialWall';
import FlyTo from 'components/base/icons/FlyTo';

export default {
    title: 'Sections / SocialWall',
    component: SocialWallComponent,
    parameters: {
        status: {
            type: ['preview'],
        },
    },
} as Meta;

export const Default: Story = () => (
    <SocialWall
        items={[
            {
                link: {
                    href: '#0',
                    isExternal: true,
                },
                image: {
                    small: 'https://unsplash.it/607/607?image=700',
                    medium: 'https://unsplash.it/384/384?image=700',
                    semilarge: 'https://unsplash.it/480/480?image=700',
                    large: 'https://unsplash.it/450/450?image=700',
                    alt: 'bild 1',
                },
            },
            {
                link: {
                    href: '#0',
                    isExternal: true,
                },
                image: {
                    small: 'https://unsplash.it/607/607?image=703',
                    medium: 'https://unsplash.it/384/384?image=703',
                    semilarge: 'https://unsplash.it/480/480?image=703',
                    large: 'https://unsplash.it/450/450?image=703',
                    alt: 'bild 2',
                },
            },
            {
                link: {
                    href: '#0',
                    isExternal: true,
                },
                image: {
                    small: 'https://unsplash.it/607/607?image=602',
                    medium: 'https://unsplash.it/384/384?image=602',
                    semilarge: 'https://unsplash.it/480/480?image=602',
                    large: 'https://unsplash.it/450/450?image=602',
                    alt: 'bild 3',
                },
            },
            {
                link: {
                    href: '#0',
                    isExternal: true,
                },
                image: {
                    small: 'https://unsplash.it/607/607?image=603',
                    medium: 'https://unsplash.it/384/384?image=603',
                    semilarge: 'https://unsplash.it/480/480?image=603',
                    large: 'https://unsplash.it/450/450?image=603',
                    alt: 'bild 4',
                },
            },
            {
                link: {
                    href: '#0',
                    isExternal: true,
                },
                image: {
                    small: 'https://unsplash.it/607/607?image=650',
                    medium: 'https://unsplash.it/384/384?image=650',
                    semilarge: 'https://unsplash.it/480/480?image=650',
                    large: 'https://unsplash.it/450/450?image=650',
                    alt: 'bild 5',
                },
            },
            {
                link: {
                    href: '#0',
                    isExternal: true,
                },
                image: {
                    small: 'https://unsplash.it/607/607?image=600',
                    medium: 'https://unsplash.it/384/384?image=600',
                    semilarge: 'https://unsplash.it/480/480?image=600',
                    large: 'https://unsplash.it/450/450?image=600',
                    alt: 'bild 6',
                },
            },
        ]}
        hashtag="hashtag"
        followUs="FOLLOW US ON INSTAGRAM"
    />
);

export const WithBackground: Story = () => (
    <SocialWall
        bgMode="full"
        items={[
            {
                link: {
                    href: '#0',
                    isExternal: true,
                },
                image: {
                    small: 'https://unsplash.it/607/607?image=700',
                    medium: 'https://unsplash.it/384/384?image=700',
                    semilarge: 'https://unsplash.it/480/480?image=700',
                    large: 'https://unsplash.it/450/450?image=700',
                    alt: 'bild 1',
                },
            },
            {
                link: {
                    href: '#0',
                    isExternal: true,
                },
                image: {
                    small: 'https://unsplash.it/607/607?image=703',
                    medium: 'https://unsplash.it/384/384?image=703',
                    semilarge: 'https://unsplash.it/480/480?image=703',
                    large: 'https://unsplash.it/450/450?image=703',
                    alt: 'bild 2',
                },
            },
            {
                link: {
                    href: '#0',
                    isExternal: true,
                },
                image: {
                    small: 'https://unsplash.it/607/607?image=602',
                    medium: 'https://unsplash.it/384/384?image=602',
                    semilarge: 'https://unsplash.it/480/480?image=602',
                    large: 'https://unsplash.it/450/450?image=602',
                    alt: 'bild 3',
                },
            },
            {
                link: {
                    href: '#0',
                    isExternal: true,
                },
                image: {
                    small: 'https://unsplash.it/607/607?image=603',
                    medium: 'https://unsplash.it/384/384?image=603',
                    semilarge: 'https://unsplash.it/480/480?image=603',
                    large: 'https://unsplash.it/450/450?image=603',
                    alt: 'bild 4',
                },
            },
            {
                link: {
                    href: '#0',
                    isExternal: true,
                },
                image: {
                    small: 'https://unsplash.it/607/607?image=650',
                    medium: 'https://unsplash.it/384/384?image=650',
                    semilarge: 'https://unsplash.it/480/480?image=650',
                    large: 'https://unsplash.it/450/450?image=650',
                    alt: 'bild 5',
                },
            },
            {
                link: {
                    href: '#0',
                    isExternal: true,
                },
                image: {
                    small: 'https://unsplash.it/607/607?image=600',
                    medium: 'https://unsplash.it/384/384?image=600',
                    semilarge: 'https://unsplash.it/480/480?image=600',
                    large: 'https://unsplash.it/450/450?image=600',
                    alt: 'bild 6',
                },
            },
        ]}
        hashtag="hashtag"
        followUs="FOLLOW US ON INSTAGRAM"
    />
);

export const Inverted: Story = () => (
    <SocialWall
        bgMode="inverted"
        items={[
            {
                link: {
                    href: '#0',
                    isExternal: true,
                },
                image: {
                    small: 'https://unsplash.it/607/607?image=700',
                    medium: 'https://unsplash.it/384/384?image=700',
                    semilarge: 'https://unsplash.it/480/480?image=700',
                    large: 'https://unsplash.it/450/450?image=700',
                    alt: 'bild 1',
                },
            },
            {
                link: {
                    href: '#0',
                    isExternal: true,
                },
                image: {
                    small: 'https://unsplash.it/607/607?image=703',
                    medium: 'https://unsplash.it/384/384?image=703',
                    semilarge: 'https://unsplash.it/480/480?image=703',
                    large: 'https://unsplash.it/450/450?image=703',
                    alt: 'bild 2',
                },
            },
            {
                link: {
                    href: '#0',
                    isExternal: true,
                },
                image: {
                    small: 'https://unsplash.it/607/607?image=602',
                    medium: 'https://unsplash.it/384/384?image=602',
                    semilarge: 'https://unsplash.it/480/480?image=602',
                    large: 'https://unsplash.it/450/450?image=602',
                    alt: 'bild 3',
                },
            },
            {
                link: {
                    href: '#0',
                    isExternal: true,
                },
                image: {
                    small: 'https://unsplash.it/607/607?image=603',
                    medium: 'https://unsplash.it/384/384?image=603',
                    semilarge: 'https://unsplash.it/480/480?image=603',
                    large: 'https://unsplash.it/450/450?image=603',
                    alt: 'bild 4',
                },
            },
            {
                link: {
                    href: '#0',
                    isExternal: true,
                },
                image: {
                    small: 'https://unsplash.it/607/607?image=650',
                    medium: 'https://unsplash.it/384/384?image=650',
                    semilarge: 'https://unsplash.it/480/480?image=650',
                    large: 'https://unsplash.it/450/450?image=650',
                    alt: 'bild 5',
                },
            },
            {
                link: {
                    href: '#0',
                    isExternal: true,
                },
                image: {
                    small: 'https://unsplash.it/607/607?image=600',
                    medium: 'https://unsplash.it/384/384?image=600',
                    semilarge: 'https://unsplash.it/480/480?image=600',
                    large: 'https://unsplash.it/450/450?image=600',
                    alt: 'bild 6',
                },
            },
        ]}
        hashtag="hashtag"
        followUs="FOLLOW US ON INSTAGRAM"
    />
);

export const CustomSocialIcon: Story = () => (
    <SocialWall
        items={[
            {
                link: {
                    href: '#0',
                    isExternal: true,
                },
                image: {
                    small: 'https://unsplash.it/607/607?image=700',
                    medium: 'https://unsplash.it/384/384?image=700',
                    semilarge: 'https://unsplash.it/480/480?image=700',
                    large: 'https://unsplash.it/450/450?image=700',
                    alt: 'bild 1',
                },
            },
            {
                link: {
                    href: '#0',
                    isExternal: true,
                },
                image: {
                    small: 'https://unsplash.it/607/607?image=703',
                    medium: 'https://unsplash.it/384/384?image=703',
                    semilarge: 'https://unsplash.it/480/480?image=703',
                    large: 'https://unsplash.it/450/450?image=703',
                    alt: 'bild 2',
                },
            },
            {
                link: {
                    href: '#0',
                    isExternal: true,
                },
                image: {
                    small: 'https://unsplash.it/607/607?image=602',
                    medium: 'https://unsplash.it/384/384?image=602',
                    semilarge: 'https://unsplash.it/480/480?image=602',
                    large: 'https://unsplash.it/450/450?image=602',
                    alt: 'bild 3',
                },
            },
            {
                link: {
                    href: '#0',
                    isExternal: true,
                },
                image: {
                    small: 'https://unsplash.it/607/607?image=603',
                    medium: 'https://unsplash.it/384/384?image=603',
                    semilarge: 'https://unsplash.it/480/480?image=603',
                    large: 'https://unsplash.it/450/450?image=603',
                    alt: 'bild 4',
                },
            },
            {
                link: {
                    href: '#0',
                    isExternal: true,
                },
                image: {
                    small: 'https://unsplash.it/607/607?image=650',
                    medium: 'https://unsplash.it/384/384?image=650',
                    semilarge: 'https://unsplash.it/480/480?image=650',
                    large: 'https://unsplash.it/450/450?image=650',
                    alt: 'bild 5',
                },
            },
            {
                link: {
                    href: '#0',
                    isExternal: true,
                },
                image: {
                    small: 'https://unsplash.it/607/607?image=600',
                    medium: 'https://unsplash.it/384/384?image=600',
                    semilarge: 'https://unsplash.it/480/480?image=600',
                    large: 'https://unsplash.it/450/450?image=600',
                    alt: 'bild 6',
                },
            },
        ]}
        hashtag="hashtag"
        followUs="FOLLOW US ON INSTAGRAM"
        socialIcon={<FlyTo />}
    />
);
