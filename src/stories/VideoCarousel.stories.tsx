/* eslint-disable react/display-name */
import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import ArrowRight from 'components/base/icons/ArrowRight';
import { VideoCardProps } from 'components/blocks/VideoCard';
import VideoCarousel from 'components/sections/carousel/VideoCarousel';

import { generateItemList } from 'utils/storyHelpers';
import ButtonGhost from 'components/buttons/ButtonGhost';
import Button from 'components/buttons/Button';

const exampleVideo: VideoCardProps = {
    bgImage: {
        small: 'http://unsplash.it/553/311',
        medium: 'http://unsplash.it/704/396',
        large: 'http://unsplash.it/533/285',
        xlarge: 'http://unsplash.it/680/382',
        alt: 'Placeholder Image',
    },
    embedId: 'NpEaa2P7qZI',
};

const exampleVideos = generateItemList<VideoCardProps>(
    exampleVideo,
    4,
    (item, i) => ({
        ...item,
        superTitle: 'Haus St. Franziskus',
        title: 'Haus St. Franziskus – lorem ipsum dolor sit amet',
        bgImage: {
            small: `http://unsplash.it/553/311?image=40${i}`,
            medium: `http://unsplash.it/704/396?image=40${i}`,
            large: `http://unsplash.it/533/285?image=40${i}`,
            xlarge: `http://unsplash.it/680/382?image=40${i}`,
            alt: 'Placeholder Image ' + i,
        },
    })
);

export default {
    title: 'Sections/Carousels/VideoCarousel',
    component: VideoCarousel,
} as Meta;

export const Default: Story = () => (
    <VideoCarousel
        videos={exampleVideos.map((item, i) => ({
            ...item,
            bgImage: {
                small: `http://unsplash.it/553/311?image=40${i}`,
                medium: `http://unsplash.it/704/396?image=40${i}`,
                large: `http://unsplash.it/533/285?image=40${i}`,
                xlarge: `http://unsplash.it/680/382?image=40${i}`,
                alt: 'Placeholder Image ' + i,
            },
        }))}
    />
);

export const WithIntro: Story = () => (
    <VideoCarousel
        videos={exampleVideos.map((item, i) => ({
            ...item,
            bgImage: {
                small: `http://unsplash.it/553/311?image=40${i}`,
                medium: `http://unsplash.it/704/396?image=40${i}`,
                large: `http://unsplash.it/533/285?image=40${i}`,
                xlarge: `http://unsplash.it/680/382?image=40${i}`,
                alt: 'Placeholder Image ' + i,
            },
        }))}
        title="Haus St. Franziskus – lorem ipsum dolor sit amet"
        superTitle="Haus St. Franziskus"
        text="Mitten im historischen Altstadtkern von Überlingen liegt das Haus St. Franziskus. Das prachtvolle Gebäude, ursprünglich als Kloster von Franziskanermönchen errichtet, kann auf eine rund 750-jährige Geschichte zurückblicken."
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

export const Inverted: Story = () => (
    <VideoCarousel
        bgMode="inverted"
        videos={exampleVideos.map((item, i) => ({
            ...item,
            bgImage: {
                small: `http://unsplash.it/553/311?image=40${i}`,
                medium: `http://unsplash.it/704/396?image=40${i}`,
                large: `http://unsplash.it/533/285?image=40${i}`,
                xlarge: `http://unsplash.it/680/382?image=40${i}`,
                alt: 'Placeholder Image ' + i,
            },
        }))}
        title="Haus St. Franziskus – lorem ipsum dolor sit amet"
        superTitle="Haus St. Franziskus"
        text="Mitten im historischen Altstadtkern von Überlingen liegt das Haus St. Franziskus. Das prachtvolle Gebäude, ursprünglich als Kloster von Franziskanermönchen errichtet, kann auf eine rund 750-jährige Geschichte zurückblicken."
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

export const WithBackground: Story = () => (
    <VideoCarousel
        bgMode="full"
        videos={exampleVideos.map((item, i) => ({
            ...item,
            bgImage: {
                small: `http://unsplash.it/553/311?image=40${i}`,
                medium: `http://unsplash.it/704/396?image=40${i}`,
                large: `http://unsplash.it/533/285?image=40${i}`,
                xlarge: `http://unsplash.it/680/382?image=40${i}`,
                alt: 'Placeholder Image ' + i,
            },
        }))}
        title="Haus St. Franziskus – lorem ipsum dolor sit amet"
        superTitle="Haus St. Franziskus"
        text="Mitten im historischen Altstadtkern von Überlingen liegt das Haus St. Franziskus. Das prachtvolle Gebäude, ursprünglich als Kloster von Franziskanermönchen errichtet, kann auf eine rund 750-jährige Geschichte zurückblicken."
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

export const WithHalfBackground: Story = () => (
    <VideoCarousel
        bgMode="splitted"
        videos={exampleVideos.map((item, i) => ({
            ...item,
            bgImage: {
                small: `http://unsplash.it/553/311?image=40${i}`,
                medium: `http://unsplash.it/704/396?image=40${i}`,
                large: `http://unsplash.it/533/285?image=40${i}`,
                xlarge: `http://unsplash.it/680/382?image=40${i}`,
                alt: 'Placeholder Image ' + i,
            },
        }))}
        title="Haus St. Franziskus – lorem ipsum dolor sit amet"
        superTitle="Haus St. Franziskus"
        text="Mitten im historischen Altstadtkern von Überlingen liegt das Haus St. Franziskus. Das prachtvolle Gebäude, ursprünglich als Kloster von Franziskanermönchen errichtet, kann auf eine rund 750-jährige Geschichte zurückblicken."
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

export const WithHandlers: Story = () => (
    <VideoCarousel
        bgMode="full"
        videos={exampleVideos.map((item, i) => ({
            ...item,
            bgImage: {
                small: `http://unsplash.it/553/311?image=40${i}`,
                medium: `http://unsplash.it/704/396?image=40${i}`,
                large: `http://unsplash.it/533/285?image=40${i}`,
                xlarge: `http://unsplash.it/680/382?image=40${i}`,
                alt: 'Placeholder Image ' + i,
            },
        }))}
        onInit={(steps) => console.log('carousel has ' + steps + ' steps')}
        beforeChange={(current) => console.log('before step: ' + current)}
        afterChange={(current) => console.log('after step: ' + current)}
        title="Haus St. Franziskus – lorem ipsum dolor sit amet"
        superTitle="Haus St. Franziskus"
        text="Mitten im historischen Altstadtkern von Überlingen liegt das Haus St. Franziskus. Das prachtvolle Gebäude, ursprünglich als Kloster von Franziskanermönchen errichtet, kann auf eine rund 750-jährige Geschichte zurückblicken."
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

export const WithCustomControls: Story = () => (
    <VideoCarousel
        bgMode="full"
        videos={exampleVideos.map((item, i) => ({
            ...item,
            bgImage: {
                small: `http://unsplash.it/553/311?image=40${i}`,
                medium: `http://unsplash.it/704/396?image=40${i}`,
                large: `http://unsplash.it/533/285?image=40${i}`,
                xlarge: `http://unsplash.it/680/382?image=40${i}`,
                alt: 'Placeholder Image ' + i,
            },
        }))}
        controlNext={() => <ArrowRight />}
        controlPrev={() => <ArrowRight />}
        title="Haus St. Franziskus – lorem ipsum dolor sit amet"
        superTitle="Haus St. Franziskus"
        text="Mitten im historischen Altstadtkern von Überlingen liegt das Haus St. Franziskus. Das prachtvolle Gebäude, ursprünglich als Kloster von Franziskanermönchen errichtet, kann auf eine rund 750-jährige Geschichte zurückblicken."
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

export const WithCustomDots: Story = () => (
    <VideoCarousel
        bgMode="full"
        videos={exampleVideos.map((item, i) => ({
            ...item,
            bgImage: {
                small: `http://unsplash.it/553/311?image=40${i}`,
                medium: `http://unsplash.it/704/396?image=40${i}`,
                large: `http://unsplash.it/533/285?image=40${i}`,
                xlarge: `http://unsplash.it/680/382?image=40${i}`,
                alt: 'Placeholder Image ' + i,
            },
        }))}
        dot={({ isActive }) => (
            <ArrowRight iconColor={isActive ? 'red' : 'grey'} />
        )}
        title="Haus St. Franziskus – lorem ipsum dolor sit amet"
        superTitle="Haus St. Franziskus"
        text="Mitten im historischen Altstadtkern von Überlingen liegt das Haus St. Franziskus. Das prachtvolle Gebäude, ursprünglich als Kloster von Franziskanermönchen errichtet, kann auf eine rund 750-jährige Geschichte zurückblicken."
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
