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
            type: ['preview', 'qsReady'],
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
            },
        ]}
    />
);

export const WithFocusPoint: Story = () => (
    <Header
        focusPoint={['center', 'bottom']}
        images={[
            {
                small: 'https://unsplash.it/660/792?id=1',
                medium: 'https://unsplash.it/1100/1320?id=1',
                semilarge: 'https://unsplash.it/1100/700?id=1',
                large: 'https://unsplash.it/1596/860?id=1',
                xlarge: 'https://unsplash.it/2450/1320?id=1',
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
            },
        ]}
    />
);

export const WithText: Story = () => (
    <Header
        title="Lorem Ipsum Dolor Sit"
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
        images={[
            {
                small: 'https://unsplash.it/660/792?id=1',
                medium: 'https://unsplash.it/1100/1320?id=1',
                semilarge: 'https://unsplash.it/1100/700?id=1',
                large: 'https://unsplash.it/1596/860?id=1',
                xlarge: 'https://unsplash.it/2450/1320?id=1',
            },
        ]}
    />
);

export const WithActions: Story = () => (
    <Header
        title="Lorem Ipsum Dolor Sit"
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
        images={[
            {
                small: 'https://unsplash.it/660/792?id=1',
                medium: 'https://unsplash.it/1100/1320?id=1',
                semilarge: 'https://unsplash.it/1100/700?id=1',
                large: 'https://unsplash.it/1596/860?id=1',
                xlarge: 'https://unsplash.it/2450/1320?id=1',
            },
        ]}
        primaryAction={(isInverted) => (
            <Button.View isInverted={isInverted}>
                <Button.Label>Primary</Button.Label>
            </Button.View>
        )}
        secondaryAction={(isInverted) => (
            <ButtonGhost.View isInverted={isInverted}>
                <ButtonGhost.Label>Secondary</ButtonGhost.Label>
            </ButtonGhost.View>
        )}
    />
);

export const IsCentered: Story = () => (
    <Header
        isCentered
        title="Lorem Ipsum Dolor Sit"
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
        images={[
            {
                small: 'https://unsplash.it/660/792?id=1',
                medium: 'https://unsplash.it/1100/1320?id=1',
                semilarge: 'https://unsplash.it/1100/700?id=1',
                large: 'https://unsplash.it/1596/860?id=1',
                xlarge: 'https://unsplash.it/2450/1320?id=1',
            },
        ]}
        primaryAction={(isInverted) => (
            <Button.View isInverted={isInverted}>
                <Button.Label>Primary</Button.Label>
            </Button.View>
        )}
        secondaryAction={(isInverted) => (
            <ButtonGhost.View isInverted={isInverted}>
                <ButtonGhost.Label>Secondary</ButtonGhost.Label>
            </ButtonGhost.View>
        )}
    />
);

export const SmallerHeaderSize: Story = () => (
    <Header
        size="small"
        title="Lorem Ipsum Dolor Sit"
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
        images={[
            {
                small: 'https://unsplash.it/660/792?id=1',
                medium: 'https://unsplash.it/1100/1320?id=1',
                semilarge: 'https://unsplash.it/1100/700?id=1',
                large: 'https://unsplash.it/1596/860?id=1',
                xlarge: 'https://unsplash.it/2450/1320?id=1',
            },
        ]}
        primaryAction={(isInverted) => (
            <Button.View isInverted={isInverted}>
                <Button.Label>Primary</Button.Label>
            </Button.View>
        )}
        secondaryAction={(isInverted) => (
            <ButtonGhost.View isInverted={isInverted}>
                <ButtonGhost.Label>Secondary</ButtonGhost.Label>
            </ButtonGhost.View>
        )}
    />
);

export const WithNavBarReservation: Story = () => (
    <>
        <header data-navbar-ident="top-main-bottom-beforeContent" />
        <Header
            size="small"
            title="Lorem Ipsum Dolor Sit"
            text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
            images={[
                {
                    small: 'https://unsplash.it/660/792?id=1',
                    medium: 'https://unsplash.it/1100/1320?id=1',
                    semilarge: 'https://unsplash.it/1100/700?id=1',
                    large: 'https://unsplash.it/1596/860?id=1',
                    xlarge: 'https://unsplash.it/2450/1320?id=1',
                },
            ]}
            primaryAction={(isInverted) => (
                <Button.View isInverted={isInverted}>
                    <Button.Label>Primary</Button.Label>
                </Button.View>
            )}
            secondaryAction={(isInverted) => (
                <ButtonGhost.View isInverted={isInverted}>
                    <ButtonGhost.Label>Secondary</ButtonGhost.Label>
                </ButtonGhost.View>
            )}
        />
    </>
);

export const WithBackground: Story = () => (
    <Header
        bgMode="full"
        title="Lorem Ipsum Dolor Sit"
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
        images={[
            {
                small: 'https://unsplash.it/660/792?id=1',
                medium: 'https://unsplash.it/1100/1320?id=1',
                semilarge: 'https://unsplash.it/1100/700?id=1',
                large: 'https://unsplash.it/1596/860?id=1',
                xlarge: 'https://unsplash.it/2450/1320?id=1',
            },
        ]}
        primaryAction={(isInverted) => (
            <Button.View isInverted={isInverted}>
                <Button.Label>Primary</Button.Label>
            </Button.View>
        )}
        secondaryAction={(isInverted) => (
            <ButtonGhost.View isInverted={isInverted}>
                <ButtonGhost.Label>Secondary</ButtonGhost.Label>
            </ButtonGhost.View>
        )}
    />
);

export const IsInverted: Story = () => (
    <Header
        bgMode="inverted"
        title="Lorem Ipsum Dolor Sit"
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
        images={[
            {
                small: 'https://unsplash.it/660/792?id=1',
                medium: 'https://unsplash.it/1100/1320?id=1',
                semilarge: 'https://unsplash.it/1100/700?id=1',
                large: 'https://unsplash.it/1596/860?id=1',
                xlarge: 'https://unsplash.it/2450/1320?id=1',
            },
        ]}
        primaryAction={(isInverted) => (
            <Button.View isInverted={isInverted}>
                <Button.Label>Primary</Button.Label>
            </Button.View>
        )}
        secondaryAction={(isInverted) => (
            <ButtonGhost.View isInverted={isInverted}>
                <ButtonGhost.Label>Secondary</ButtonGhost.Label>
            </ButtonGhost.View>
        )}
    />
);

export const WithKenBurnsEffect: Story = () => (
    <Header
        title="Lorem Ipsum Dolor Sit"
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
        images={[
            {
                small: 'https://unsplash.it/660/792?id=1',
                medium: 'https://unsplash.it/1100/1320?id=1',
                semilarge: 'https://unsplash.it/1100/700?id=1',
                large: 'https://unsplash.it/1596/860?id=1',
                xlarge: 'https://unsplash.it/2450/1320?id=1',
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
        onImageChange={console.log}
        primaryAction={(isInverted) => (
            <Button.View isInverted={isInverted}>
                <Button.Label>Primary</Button.Label>
            </Button.View>
        )}
        secondaryAction={(isInverted) => (
            <ButtonGhost.View isInverted={isInverted}>
                <ButtonGhost.Label>Secondary</ButtonGhost.Label>
            </ButtonGhost.View>
        )}
    />
);

export const WithKenBurnsEffectSmallerSize: Story = () => (
    <Header
        size="small"
        title="Lorem Ipsum Dolor Sit"
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
        images={[
            {
                small: 'https://unsplash.it/660/792?id=1',
                medium: 'https://unsplash.it/1100/1320?id=1',
                semilarge: 'https://unsplash.it/1100/700?id=1',
                large: 'https://unsplash.it/1596/860?id=1',
                xlarge: 'https://unsplash.it/2450/1320?id=1',
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
        primaryAction={(isInverted) => (
            <Button.View isInverted={isInverted}>
                <Button.Label>Primary</Button.Label>
            </Button.View>
        )}
        secondaryAction={(isInverted) => (
            <ButtonGhost.View isInverted={isInverted}>
                <ButtonGhost.Label>Secondary</ButtonGhost.Label>
            </ButtonGhost.View>
        )}
    />
);

export const WithVideo: Story = () => (
    <Header
        title="Lorem Ipsum Dolor Sit"
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
        videoUrl="images/videos/alps_stockvideo.mp4"
        images={[
            {
                small: 'https://unsplash.it/660/792?id=1',
                medium: 'https://unsplash.it/1100/1320?id=1',
                semilarge: 'https://unsplash.it/1100/700?id=1',
                large: 'https://unsplash.it/1596/860?id=1',
                xlarge: 'https://unsplash.it/2450/1320?id=1',
            },
        ]}
        primaryAction={(isInverted) => (
            <Button.View isInverted={isInverted}>
                <Button.Label>Primary</Button.Label>
            </Button.View>
        )}
        secondaryAction={(isInverted) => (
            <ButtonGhost.View isInverted={isInverted}>
                <ButtonGhost.Label>Secondary</ButtonGhost.Label>
            </ButtonGhost.View>
        )}
    />
);

export const VideoWithFocusPoint: Story = () => (
    <Header
        title="Lorem Ipsum Dolor Sit"
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
        videoUrl="images/videos/alps_stockvideo.mp4"
        images={[
            {
                small: 'https://unsplash.it/660/792?id=1',
                medium: 'https://unsplash.it/1100/1320?id=1',
                semilarge: 'https://unsplash.it/1100/700?id=1',
                large: 'https://unsplash.it/1596/860?id=1',
                xlarge: 'https://unsplash.it/2450/1320?id=1',
            },
        ]}
        focusPoint={['center', 'bottom']}
        primaryAction={(isInverted) => (
            <Button.View isInverted={isInverted}>
                <Button.Label>Primary</Button.Label>
            </Button.View>
        )}
        secondaryAction={(isInverted) => (
            <ButtonGhost.View isInverted={isInverted}>
                <ButtonGhost.Label>Secondary</ButtonGhost.Label>
            </ButtonGhost.View>
        )}
    />
);

export const WithVideoSmallerSize: Story = () => (
    <Header
        size="small"
        title="Lorem Ipsum Dolor Sit"
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
        videoUrl="images/videos/alps_stockvideo.mp4"
        images={[
            {
                small: 'https://unsplash.it/660/792?id=1',
                medium: 'https://unsplash.it/1100/1320?id=1',
                semilarge: 'https://unsplash.it/1100/700?id=1',
                large: 'https://unsplash.it/1596/860?id=1',
                xlarge: 'https://unsplash.it/2450/1320?id=1',
            },
        ]}
        primaryAction={(isInverted) => (
            <Button.View isInverted={isInverted}>
                <Button.Label>Primary</Button.Label>
            </Button.View>
        )}
        secondaryAction={(isInverted) => (
            <ButtonGhost.View isInverted={isInverted}>
                <ButtonGhost.Label>Secondary</ButtonGhost.Label>
            </ButtonGhost.View>
        )}
    />
);
