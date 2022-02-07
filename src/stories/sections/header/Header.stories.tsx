/* eslint-disable react/display-name */
import * as React from 'react';
import { Meta, Story } from '@storybook/react';

import Header, { HeaderComponent } from 'components/sections/header/Header';
import Button from 'components/buttons/Button';
import ButtonGhost from 'components/buttons/ButtonGhost';

export default {
    title: 'Sections/Header/Header',
    component: HeaderComponent,
    decorators: [
        (Story) => (
            <div style={{ height: '120vh', width: '100%' }}>
                <Story />
            </div>
        ),
    ],
    parameters: {
        status: {
            type: 'stable',
        },
    },
} as Meta;

export const SinglePoster: Story = () => (
    <Header
        images={[
            {
                small: 'https://unsplash.it/660/792?id=1',
                medium: 'https://unsplash.it/1100/1320?id=1',
                semilarge: 'https://unsplash.it/1100/700?id=1',
                large: 'https://unsplash.it/1596/860?id=1',
                xlarge: 'https://unsplash.it/2450/1320?id=1',
                webp: {
                    small: 'https://unsplash.it/660/792.webp?id=1',
                    medium: 'https://unsplash.it/1100/1320.webp?id=1',
                    semilarge: 'https://unsplash.it/1100/700.webp?id=1',
                    large: 'https://unsplash.it/1596/860.webp?id=1',
                    xlarge: 'https://unsplash.it/2450/1320.webp?id=1',
                },
            },
        ]}
    />
);

export const WithTitle: Story = () => (
    <Header
        title="Lorem Ipsum Dolor Sit"
        images={[
            {
                small: 'https://unsplash.it/660/792?id=1',
                medium: 'https://unsplash.it/1100/1320?id=1',
                semilarge: 'https://unsplash.it/1100/700?id=1',
                large: 'https://unsplash.it/1596/860?id=1',
                xlarge: 'https://unsplash.it/2450/1320?id=1',
                webp: {
                    small: 'https://unsplash.it/660/792.webp?id=1',
                    medium: 'https://unsplash.it/1100/1320.webp?id=1',
                    semilarge: 'https://unsplash.it/1100/700.webp?id=1',
                    large: 'https://unsplash.it/1596/860.webp?id=1',
                    xlarge: 'https://unsplash.it/2450/1320.webp?id=1',
                },
            },
        ]}
    />
);

export const WithIntroText: Story = () => (
    <Header
        title="Lorem Ipsum Dolor Sit"
        intro={{
            text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
        }}
        images={[
            {
                small: 'https://unsplash.it/660/792?id=1',
                medium: 'https://unsplash.it/1100/1320?id=1',
                semilarge: 'https://unsplash.it/1100/700?id=1',
                large: 'https://unsplash.it/1596/860?id=1',
                xlarge: 'https://unsplash.it/2450/1320?id=1',
                webp: {
                    small: 'https://unsplash.it/660/792.webp?id=1',
                    medium: 'https://unsplash.it/1100/1320.webp?id=1',
                    semilarge: 'https://unsplash.it/1100/700.webp?id=1',
                    large: 'https://unsplash.it/1596/860.webp?id=1',
                    xlarge: 'https://unsplash.it/2450/1320.webp?id=1',
                },
            },
        ]}
    />
);

export const WithIntroHeading: Story = () => (
    <Header
        title="Lorem Ipsum Dolor Sit"
        intro={{
            title: 'Lorem Ipsum Dolor Sit',
            text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
        }}
        images={[
            {
                small: 'https://unsplash.it/660/792?id=1',
                medium: 'https://unsplash.it/1100/1320?id=1',
                semilarge: 'https://unsplash.it/1100/700?id=1',
                large: 'https://unsplash.it/1596/860?id=1',
                xlarge: 'https://unsplash.it/2450/1320?id=1',
                webp: {
                    small: 'https://unsplash.it/660/792.webp?id=1',
                    medium: 'https://unsplash.it/1100/1320.webp?id=1',
                    semilarge: 'https://unsplash.it/1100/700.webp?id=1',
                    large: 'https://unsplash.it/1596/860.webp?id=1',
                    xlarge: 'https://unsplash.it/2450/1320.webp?id=1',
                },
            },
        ]}
    />
);

export const WithActions: Story = () => (
    <Header
        title="Lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
        images={[
            {
                small: 'https://unsplash.it/660/792?id=1',
                medium: 'https://unsplash.it/1100/1320?id=1',
                semilarge: 'https://unsplash.it/1100/700?id=1',
                large: 'https://unsplash.it/1596/860?id=1',
                xlarge: 'https://unsplash.it/2450/1320?id=1',
                webp: {
                    small: 'https://unsplash.it/660/792.webp?id=1',
                    medium: 'https://unsplash.it/1100/1320.webp?id=1',
                    semilarge: 'https://unsplash.it/1100/700.webp?id=1',
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
        title="Lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
        images={[
            {
                small: 'https://unsplash.it/660/792?id=1',
                medium: 'https://unsplash.it/1100/1320?id=1',
                semilarge: 'https://unsplash.it/1100/700?id=1',
                large: 'https://unsplash.it/1596/860?id=1',
                xlarge: 'https://unsplash.it/2450/1320?id=1',
                webp: {
                    small: 'https://unsplash.it/660/792.webp?id=1',
                    medium: 'https://unsplash.it/1100/1320.webp?id=1',
                    semilarge: 'https://unsplash.it/1100/700.webp?id=1',
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
        title="Lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
        images={[
            {
                small: 'https://unsplash.it/660/792?id=1',
                medium: 'https://unsplash.it/1100/1320?id=1',
                semilarge: 'https://unsplash.it/1100/700?id=1',
                large: 'https://unsplash.it/1596/860?id=1',
                xlarge: 'https://unsplash.it/2450/1320?id=1',
                webp: {
                    small: 'https://unsplash.it/660/792.webp?id=1',
                    medium: 'https://unsplash.it/1100/1320.webp?id=1',
                    semilarge: 'https://unsplash.it/1100/700.webp?id=1',
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
        title="Lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
        images={[
            {
                small: 'https://unsplash.it/660/792?id=1',
                medium: 'https://unsplash.it/1100/1320?id=1',
                semilarge: 'https://unsplash.it/1100/700?id=1',
                large: 'https://unsplash.it/1596/860?id=1',
                xlarge: 'https://unsplash.it/2450/1320?id=1',
                webp: {
                    small: 'https://unsplash.it/660/792.webp?id=1',
                    medium: 'https://unsplash.it/1100/1320.webp?id=1',
                    semilarge: 'https://unsplash.it/1100/700.webp?id=1',
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

export const WithExplicitSizeScale: Story = () => (
    <Header
        size="small"
        height="60vh" // is overriting size prop
        title="Lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
        images={[
            {
                small: 'https://unsplash.it/660/792?id=1',
                medium: 'https://unsplash.it/1100/1320?id=1',
                semilarge: 'https://unsplash.it/1100/700?id=1',
                large: 'https://unsplash.it/1596/860?id=1',
                xlarge: 'https://unsplash.it/2450/1320?id=1',
                webp: {
                    small: 'https://unsplash.it/660/792.webp?id=1',
                    medium: 'https://unsplash.it/1100/1320.webp?id=1',
                    semilarge: 'https://unsplash.it/1100/700.webp?id=1',
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
        title="Lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
        images={[
            {
                small: 'https://unsplash.it/660/792?id=1',
                medium: 'https://unsplash.it/1100/1320?id=1',
                semilarge: 'https://unsplash.it/1100/700?id=1',
                large: 'https://unsplash.it/1596/860?id=1',
                xlarge: 'https://unsplash.it/2450/1320?id=1',
                webp: {
                    small: 'https://unsplash.it/660/792.webp?id=1',
                    medium: 'https://unsplash.it/1100/1320.webp?id=1',
                    semilarge: 'https://unsplash.it/1100/700.webp?id=1',
                    large: 'https://unsplash.it/1596/860.webp?id=1',
                    xlarge: 'https://unsplash.it/2450/1320.webp?id=1',
                },
            },
            {
                small: 'https://unsplash.it/660/792?id=2',
                medium: 'https://unsplash.it/1100/1320?id=2',
                semilarge: 'https://unsplash.it/1100/700?id=1',
                large: 'https://unsplash.it/1596/860?id=2',
                xlarge: 'https://unsplash.it/2450/1320?id=2',
            },
            {
                small: 'https://unsplash.it/660/792?id=3',
                medium: 'https://unsplash.it/1100/1320?id=3',
                semilarge: 'https://unsplash.it/1100/700?id=1',
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
        title="Lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
        images={[
            {
                small: 'https://unsplash.it/660/792?id=1',
                medium: 'https://unsplash.it/1100/1320?id=1',
                semilarge: 'https://unsplash.it/1100/700?id=1',
                large: 'https://unsplash.it/1596/860?id=1',
                xlarge: 'https://unsplash.it/2450/1320?id=1',
                webp: {
                    small: 'https://unsplash.it/660/792.webp?id=1',
                    medium: 'https://unsplash.it/1100/1320.webp?id=1',
                    semilarge: 'https://unsplash.it/1100/700.webp?id=1',
                    large: 'https://unsplash.it/1596/860.webp?id=1',
                    xlarge: 'https://unsplash.it/2450/1320.webp?id=1',
                },
            },
            {
                small: 'https://unsplash.it/660/792?id=2',
                medium: 'https://unsplash.it/1100/1320?id=2',
                semilarge: 'https://unsplash.it/1100/700?id=1',
                large: 'https://unsplash.it/1596/860?id=2',
                xlarge: 'https://unsplash.it/2450/1320?id=2',
            },
            {
                small: 'https://unsplash.it/660/792?id=3',
                medium: 'https://unsplash.it/1100/1320?id=3',
                semilarge: 'https://unsplash.it/1100/700?id=1',
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

export const WithVideo: Story = () => (
    <Header
        title="Lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
        videoUrl="images/videos/alps_stockvideo.mp4"
        images={[
            {
                small: 'https://unsplash.it/660/792?id=1',
                medium: 'https://unsplash.it/1100/1320?id=1',
                semilarge: 'https://unsplash.it/1100/700?id=1',
                large: 'https://unsplash.it/1596/860?id=1',
                xlarge: 'https://unsplash.it/2450/1320?id=1',
                webp: {
                    small: 'https://unsplash.it/660/792.webp?id=1',
                    medium: 'https://unsplash.it/1100/1320.webp?id=1',
                    semilarge: 'https://unsplash.it/1100/700.webp?id=1',
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

export const WithVideoSmallerSize: Story = () => (
    <Header
        size="small"
        title="Lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
        videoUrl="images/videos/alps_stockvideo.mp4"
        images={[
            {
                small: 'https://unsplash.it/660/792?id=1',
                medium: 'https://unsplash.it/1100/1320?id=1',
                semilarge: 'https://unsplash.it/1100/700?id=1',
                large: 'https://unsplash.it/1596/860?id=1',
                xlarge: 'https://unsplash.it/2450/1320?id=1',
                webp: {
                    small: 'https://unsplash.it/660/792.webp?id=1',
                    medium: 'https://unsplash.it/1100/1320.webp?id=1',
                    semilarge: 'https://unsplash.it/1100/700.webp?id=1',
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
