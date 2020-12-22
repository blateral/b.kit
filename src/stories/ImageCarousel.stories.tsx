import * as React from 'react';
import { Meta, Story } from '@storybook/react';

import ImageCarousel from 'components/sections/carousel/ImageCarousel';
import ArrowRight from 'components/base/icons/ArrowRight';
import { Button } from 'index';

export default {
    title: 'Sections/Carousels/ImageCarousel',
    component: ImageCarousel,
} as Meta;

export const Default: Story = () => (
    <ImageCarousel
        images={[
            {
                small: 'https://unsplash.it/520/415?image=400',
                medium: 'https://unsplash.it/601/480?image=400',
                large: 'https://unsplash.it/722/576?image=400',
                xlarge: 'https://unsplash.it/802/640?image=400',
                alt: 'Placeholder Image',
            },
            {
                small: 'https://unsplash.it/520/415?image=401',
                medium: 'https://unsplash.it/601/480?image=401',
                large: 'https://unsplash.it/722/576?image=401',
                xlarge: 'https://unsplash.it/802/640?image=401',
                alt: 'Placeholder Image',
            },
            {
                small: 'https://unsplash.it/520/415?image=402',
                medium: 'https://unsplash.it/601/480?image=402',
                large: 'https://unsplash.it/722/576?image=402',
                xlarge: 'https://unsplash.it/802/640?image=402',
                alt: 'Placeholder Image',
            },
        ]}
    />
);

export const WithIntro: Story = () => (
    <ImageCarousel
        title="Haus St. Franziskus – lorem ipsum dolor sit amet"
        superTitle="Haus St. Franziskus"
        text="Mitten im historischen Altstadtkern von Überlingen liegt das Haus St. Franziskus. Das prachtvolle Gebäude, ursprünglich als Kloster von Franziskanermönchen errichtet, kann auf eine rund 750-jährige Geschichte zurückblicken."
        primaryAction={(isInverted) => (
            <Button.View isInverted={isInverted}>
                <Button.Label>Primary</Button.Label>
            </Button.View>
        )}
        secondaryAction={(isInverted) => (
            <Button.View type="ghost" isInverted={isInverted}>
                <Button.Label>Secondary</Button.Label>
            </Button.View>
        )}
        images={[
            {
                small: 'https://unsplash.it/520/415?image=400',
                medium: 'https://unsplash.it/601/480?image=400',
                large: 'https://unsplash.it/722/576?image=400',
                xlarge: 'https://unsplash.it/802/640?image=400',
                alt: 'Placeholder Image',
            },
            {
                small: 'https://unsplash.it/520/415?image=401',
                medium: 'https://unsplash.it/601/480?image=401',
                large: 'https://unsplash.it/722/576?image=401',
                xlarge: 'https://unsplash.it/802/640?image=401',
                alt: 'Placeholder Image',
            },
            {
                small: 'https://unsplash.it/520/415?image=402',
                medium: 'https://unsplash.it/601/480?image=402',
                large: 'https://unsplash.it/722/576?image=402',
                xlarge: 'https://unsplash.it/802/640?image=402',
                alt: 'Placeholder Image',
            },
        ]}
    />
);

export const DifferentSlideWidths: Story = () => (
    <ImageCarousel
        title="Haus St. Franziskus – lorem ipsum dolor sit amet"
        superTitle="Haus St. Franziskus"
        text="Mitten im historischen Altstadtkern von Überlingen liegt das Haus St. Franziskus. Das prachtvolle Gebäude, ursprünglich als Kloster von Franziskanermönchen errichtet, kann auf eine rund 750-jährige Geschichte zurückblicken."
        primaryAction={(isInverted) => (
            <Button.View isInverted={isInverted}>
                <Button.Label>Primary</Button.Label>
            </Button.View>
        )}
        secondaryAction={(isInverted) => (
            <Button.View type="ghost" isInverted={isInverted}>
                <Button.Label>Secondary</Button.Label>
            </Button.View>
        )}
        images={[
            {
                small: 'https://unsplash.it/520/415?image=400',
                medium: 'https://unsplash.it/601/480?image=400',
                large: 'https://unsplash.it/722/576?image=400',
                xlarge: 'https://unsplash.it/802/640?image=400',
                alt: 'Placeholder Image',
            },
            {
                small: 'https://unsplash.it/200/415?image=401',
                medium: 'https://unsplash.it/300/480?image=401',
                large: 'https://unsplash.it/400/576?image=401',
                xlarge: 'https://unsplash.it/480/640?image=401',
                alt: 'Placeholder Image',
            },
            {
                small: 'https://unsplash.it/520/415?image=402',
                medium: 'https://unsplash.it/601/480?image=402',
                large: 'https://unsplash.it/722/576?image=402',
                xlarge: 'https://unsplash.it/802/640?image=402',
                alt: 'Placeholder Image',
            },
        ]}
    />
);

export const Inverted: Story = () => (
    <ImageCarousel
        isInverted
        title="Haus St. Franziskus – lorem ipsum dolor sit amet"
        superTitle="Haus St. Franziskus"
        text="Mitten im historischen Altstadtkern von Überlingen liegt das Haus St. Franziskus. Das prachtvolle Gebäude, ursprünglich als Kloster von Franziskanermönchen errichtet, kann auf eine rund 750-jährige Geschichte zurückblicken."
        primaryAction={(isInverted) => (
            <Button.View isInverted={isInverted}>
                <Button.Label>Primary</Button.Label>
            </Button.View>
        )}
        secondaryAction={(isInverted) => (
            <Button.View type="ghost" isInverted={isInverted}>
                <Button.Label>Secondary</Button.Label>
            </Button.View>
        )}
        images={[
            {
                small: 'https://unsplash.it/520/415?image=400',
                medium: 'https://unsplash.it/601/480?image=400',
                large: 'https://unsplash.it/722/576?image=400',
                xlarge: 'https://unsplash.it/802/640?image=400',
                alt: 'Placeholder Image',
            },
            {
                small: 'https://unsplash.it/520/415?image=401',
                medium: 'https://unsplash.it/601/480?image=401',
                large: 'https://unsplash.it/722/576?image=401',
                xlarge: 'https://unsplash.it/802/640?image=401',
                alt: 'Placeholder Image',
            },
            {
                small: 'https://unsplash.it/520/415?image=402',
                medium: 'https://unsplash.it/601/480?image=402',
                large: 'https://unsplash.it/722/576?image=402',
                xlarge: 'https://unsplash.it/802/640?image=402',
                alt: 'Placeholder Image',
            },
        ]}
    />
);

export const WithBackground: Story = () => (
    <ImageCarousel
        bgMode="full"
        title="Haus St. Franziskus – lorem ipsum dolor sit amet"
        superTitle="Haus St. Franziskus"
        text="Mitten im historischen Altstadtkern von Überlingen liegt das Haus St. Franziskus. Das prachtvolle Gebäude, ursprünglich als Kloster von Franziskanermönchen errichtet, kann auf eine rund 750-jährige Geschichte zurückblicken."
        primaryAction={(isInverted) => (
            <Button.View isInverted={isInverted}>
                <Button.Label>Primary</Button.Label>
            </Button.View>
        )}
        secondaryAction={(isInverted) => (
            <Button.View type="ghost" isInverted={isInverted}>
                <Button.Label>Secondary</Button.Label>
            </Button.View>
        )}
        images={[
            {
                small: 'https://unsplash.it/520/415?image=400',
                medium: 'https://unsplash.it/601/480?image=400',
                large: 'https://unsplash.it/722/576?image=400',
                xlarge: 'https://unsplash.it/802/640?image=400',
                alt: 'Placeholder Image',
            },
            {
                small: 'https://unsplash.it/520/415?image=401',
                medium: 'https://unsplash.it/601/480?image=401',
                large: 'https://unsplash.it/722/576?image=401',
                xlarge: 'https://unsplash.it/802/640?image=401',
                alt: 'Placeholder Image',
            },
            {
                small: 'https://unsplash.it/520/415?image=402',
                medium: 'https://unsplash.it/601/480?image=402',
                large: 'https://unsplash.it/722/576?image=402',
                xlarge: 'https://unsplash.it/802/640?image=402',
                alt: 'Placeholder Image',
            },
        ]}
    />
);

export const WithHalfBackground: Story = () => (
    <ImageCarousel
        bgMode="splitted"
        title="Haus St. Franziskus – lorem ipsum dolor sit amet"
        superTitle="Haus St. Franziskus"
        text="Mitten im historischen Altstadtkern von Überlingen liegt das Haus St. Franziskus. Das prachtvolle Gebäude, ursprünglich als Kloster von Franziskanermönchen errichtet, kann auf eine rund 750-jährige Geschichte zurückblicken."
        primaryAction={(isInverted) => (
            <Button.View isInverted={isInverted}>
                <Button.Label>Primary</Button.Label>
            </Button.View>
        )}
        secondaryAction={(isInverted) => (
            <Button.View type="ghost" isInverted={isInverted}>
                <Button.Label>Secondary</Button.Label>
            </Button.View>
        )}
        images={[
            {
                small: 'https://unsplash.it/520/415?image=400',
                medium: 'https://unsplash.it/601/480?image=400',
                large: 'https://unsplash.it/722/576?image=400',
                xlarge: 'https://unsplash.it/802/640?image=400',
                alt: 'Placeholder Image',
            },
            {
                small: 'https://unsplash.it/520/415?image=401',
                medium: 'https://unsplash.it/601/480?image=401',
                large: 'https://unsplash.it/722/576?image=401',
                xlarge: 'https://unsplash.it/802/640?image=401',
                alt: 'Placeholder Image',
            },
            {
                small: 'https://unsplash.it/520/415?image=402',
                medium: 'https://unsplash.it/601/480?image=402',
                large: 'https://unsplash.it/722/576?image=402',
                xlarge: 'https://unsplash.it/802/640?image=402',
                alt: 'Placeholder Image',
            },
        ]}
    />
);

export const WithLargeSpacing: Story = () => (
    <ImageCarousel
        spacing="large"
        bgMode="full"
        title="Haus St. Franziskus – lorem ipsum dolor sit amet"
        superTitle="Haus St. Franziskus"
        text="Mitten im historischen Altstadtkern von Überlingen liegt das Haus St. Franziskus. Das prachtvolle Gebäude, ursprünglich als Kloster von Franziskanermönchen errichtet, kann auf eine rund 750-jährige Geschichte zurückblicken."
        primaryAction={(isInverted) => (
            <Button.View isInverted={isInverted}>
                <Button.Label>Primary</Button.Label>
            </Button.View>
        )}
        secondaryAction={(isInverted) => (
            <Button.View type="ghost" isInverted={isInverted}>
                <Button.Label>Secondary</Button.Label>
            </Button.View>
        )}
        images={[
            {
                small: 'https://unsplash.it/520/415?image=400',
                medium: 'https://unsplash.it/601/480?image=400',
                large: 'https://unsplash.it/722/576?image=400',
                xlarge: 'https://unsplash.it/802/640?image=400',
                alt: 'Placeholder Image',
            },
            {
                small: 'https://unsplash.it/520/415?image=401',
                medium: 'https://unsplash.it/601/480?image=401',
                large: 'https://unsplash.it/722/576?image=401',
                xlarge: 'https://unsplash.it/802/640?image=401',
                alt: 'Placeholder Image',
            },
            {
                small: 'https://unsplash.it/520/415?image=402',
                medium: 'https://unsplash.it/601/480?image=402',
                large: 'https://unsplash.it/722/576?image=402',
                xlarge: 'https://unsplash.it/802/640?image=402',
                alt: 'Placeholder Image',
            },
        ]}
    />
);

export const WithHandlers: Story = () => (
    <ImageCarousel
        bgMode="full"
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
            <Button.View type="ghost" isInverted={isInverted}>
                <Button.Label>Secondary</Button.Label>
            </Button.View>
        )}
        images={[
            {
                small: 'https://unsplash.it/520/415?image=400',
                medium: 'https://unsplash.it/601/480?image=400',
                large: 'https://unsplash.it/722/576?image=400',
                xlarge: 'https://unsplash.it/802/640?image=400',
                alt: 'Placeholder Image',
            },
            {
                small: 'https://unsplash.it/520/415?image=401',
                medium: 'https://unsplash.it/601/480?image=401',
                large: 'https://unsplash.it/722/576?image=401',
                xlarge: 'https://unsplash.it/802/640?image=401',
                alt: 'Placeholder Image',
            },
            {
                small: 'https://unsplash.it/520/415?image=402',
                medium: 'https://unsplash.it/601/480?image=402',
                large: 'https://unsplash.it/722/576?image=402',
                xlarge: 'https://unsplash.it/802/640?image=402',
                alt: 'Placeholder Image',
            },
        ]}
    />
);

export const WithCustomControls: Story = () => (
    <ImageCarousel
        bgMode="full"
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
            <Button.View type="ghost" isInverted={isInverted}>
                <Button.Label>Secondary</Button.Label>
            </Button.View>
        )}
        images={[
            {
                small: 'https://unsplash.it/520/415?image=400',
                medium: 'https://unsplash.it/601/480?image=400',
                large: 'https://unsplash.it/722/576?image=400',
                xlarge: 'https://unsplash.it/802/640?image=400',
                alt: 'Placeholder Image',
            },
            {
                small: 'https://unsplash.it/520/415?image=401',
                medium: 'https://unsplash.it/601/480?image=401',
                large: 'https://unsplash.it/722/576?image=401',
                xlarge: 'https://unsplash.it/802/640?image=401',
                alt: 'Placeholder Image',
            },
            {
                small: 'https://unsplash.it/520/415?image=402',
                medium: 'https://unsplash.it/601/480?image=402',
                large: 'https://unsplash.it/722/576?image=402',
                xlarge: 'https://unsplash.it/802/640?image=402',
                alt: 'Placeholder Image',
            },
        ]}
    />
);

export const WithCustomDots: Story = () => (
    <ImageCarousel
        bgMode="full"
        dot={(isInverted, isActive) => (
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
            <Button.View type="ghost" isInverted={isInverted}>
                <Button.Label>Secondary</Button.Label>
            </Button.View>
        )}
        images={[
            {
                small: 'https://unsplash.it/520/415?image=400',
                medium: 'https://unsplash.it/601/480?image=400',
                large: 'https://unsplash.it/722/576?image=400',
                xlarge: 'https://unsplash.it/802/640?image=400',
                alt: 'Placeholder Image',
            },
            {
                small: 'https://unsplash.it/520/415?image=401',
                medium: 'https://unsplash.it/601/480?image=401',
                large: 'https://unsplash.it/722/576?image=401',
                xlarge: 'https://unsplash.it/802/640?image=401',
                alt: 'Placeholder Image',
            },
            {
                small: 'https://unsplash.it/520/415?image=402',
                medium: 'https://unsplash.it/601/480?image=402',
                large: 'https://unsplash.it/722/576?image=402',
                xlarge: 'https://unsplash.it/802/640?image=402',
                alt: 'Placeholder Image',
            },
        ]}
    />
);
