import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import SocialWall, {
    SocialWallComponent,
} from 'components/sections/SocialWall';

export default {
    title: 'Sections / SocialWall',
    component: SocialWallComponent,
    parameters: {
        status: {
            type: 'stable',
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
                    src: 'https://unsplash.it/500/?image=700',
                    alt: 'bild 1',
                },
            },
            {
                link: {
                    href: '#0',
                    isExternal: true,
                },
                image: {
                    src: 'https://unsplash.it/500/?image=703',
                    alt: 'bild 2',
                },
            },
            {
                link: {
                    href: '#0',
                    isExternal: true,
                },
                image: {
                    src: 'https://unsplash.it/500/?image=602',
                    alt: 'bild 3',
                },
            },
            {
                link: {
                    href: '#0',
                    isExternal: true,
                },
                image: {
                    src: 'https://unsplash.it/500/?image=603',
                    alt: 'bild 4',
                },
            },
            {
                link: {
                    href: '#0',
                    isExternal: true,
                },
                image: {
                    src: 'https://unsplash.it/500/?image=650',
                    alt: 'bild 5',
                },
            },
            {
                link: {
                    href: '#0',
                    isExternal: true,
                },
                image: {
                    src: 'https://unsplash.it/500/?image=600',
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
                    src: 'https://unsplash.it/500/?image=700',
                    alt: 'bild 1',
                },
            },
            {
                link: {
                    href: '#0',
                    isExternal: true,
                },
                image: {
                    src: 'https://unsplash.it/500/?image=703',
                    alt: 'bild 2',
                },
            },
            {
                link: {
                    href: '#0',
                    isExternal: true,
                },
                image: {
                    src: 'https://unsplash.it/500/?image=602',
                    alt: 'bild 3',
                },
            },
            {
                link: {
                    href: '#0',
                    isExternal: true,
                },
                image: {
                    src: 'https://unsplash.it/500/?image=603',
                    alt: 'bild 4',
                },
            },
            {
                link: {
                    href: '#0',
                    isExternal: true,
                },
                image: {
                    src: 'https://unsplash.it/500/?image=650',
                    alt: 'bild 5',
                },
            },
            {
                link: {
                    href: '#0',
                    isExternal: true,
                },
                image: {
                    src: 'https://unsplash.it/500/?image=600',
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
                    src: 'https://unsplash.it/500/?image=700',
                    alt: 'bild 1',
                },
            },
            {
                link: {
                    href: '#0',
                    isExternal: true,
                },
                image: {
                    src: 'https://unsplash.it/500/?image=703',
                    alt: 'bild 2',
                },
            },
            {
                link: {
                    href: '#0',
                    isExternal: true,
                },
                image: {
                    src: 'https://unsplash.it/500/?image=602',
                    alt: 'bild 3',
                },
            },
            {
                link: {
                    href: '#0',
                    isExternal: true,
                },
                image: {
                    src: 'https://unsplash.it/500/?image=603',
                    alt: 'bild 4',
                },
            },
            {
                link: {
                    href: '#0',
                    isExternal: true,
                },
                image: {
                    src: 'https://unsplash.it/500/?image=650',
                    alt: 'bild 5',
                },
            },
            {
                link: {
                    href: '#0',
                    isExternal: true,
                },
                image: {
                    src: 'https://unsplash.it/500/?image=600',
                    alt: 'bild 6',
                },
            },
        ]}
        hashtag="hashtag"
        followUs="FOLLOW US ON INSTAGRAM"
    />
);
