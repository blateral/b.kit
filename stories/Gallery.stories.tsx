import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import Gallery from '../src/components/sections/Gallery';
import Button from '../src/components/buttons/Button';

export default {
    title: 'Sections/Gallery',
    component: Gallery,
} as Meta;

export const SingleImageFull: Story = () => (
    <Gallery
        images={[
            {
                small: 'https://unsplash.it/500/246?image=400',
                medium: 'https://unsplash.it/640/315?image=400',
                large: 'https://unsplash.it/1024/504?image=400',
                xlarge: 'https://unsplash.it/1440/710?image=400',
            },
        ]}
    />
);

export const WithIntro: Story = () => (
    <Gallery
        images={[
            {
                small: 'https://unsplash.it/500/246?image=400',
                medium: 'https://unsplash.it/640/315?image=400',
                large: 'https://unsplash.it/1024/504?image=400',
                xlarge: 'https://unsplash.it/1440/710?image=400',
            },
        ]}
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
    />
);

export const MultipleImages: Story = () => (
    <Gallery
        images={[
            {
                small: 'https://unsplash.it/500/246?image=400',
                medium: 'https://unsplash.it/640/315?image=400',
                large: 'https://unsplash.it/1024/504?image=400',
                xlarge: 'https://unsplash.it/1440/710?image=400',
            },
            {
                small: 'https://unsplash.it/500/246?image=401',
                medium: 'https://unsplash.it/640/315?image=401',
                large: 'https://unsplash.it/1024/504?image=401',
                xlarge: 'https://unsplash.it/1440/710?image=401',
            },
        ]}
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
    />
);

export const SingeImageHalf: Story = () => (
    <Gallery
        images={[
            {
                size: 'half',
                small: 'https://unsplash.it/610/457?image=400',
                medium: 'https://unsplash.it/507/380?image=400',
                large: 'https://unsplash.it/507/380?image=400',
                xlarge: 'https://unsplash.it/710/533?image=400',
            },
        ]}
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
    />
);

export const HalfImagesA: Story = () => (
    <Gallery
        images={[
            {
                size: 'half',
                small: 'https://unsplash.it/610/457?image=400',
                medium: 'https://unsplash.it/507/380?image=400',
                large: 'https://unsplash.it/507/380?image=400',
                xlarge: 'https://unsplash.it/710/533?image=400',
            },
            {
                size: 'half',
                small: 'https://unsplash.it/610/457?image=401',
                medium: 'https://unsplash.it/507/380?image=401',
                large: 'https://unsplash.it/507/380?image=401',
                xlarge: 'https://unsplash.it/710/533?image=401',
            },
        ]}
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
    />
);
HalfImagesA.storyName = 'Half images with ratio 4:3';

export const HalfImagesB: Story = () => (
    <Gallery
        images={[
            {
                size: 'half',
                small: 'https://unsplash.it/630/630?image=400',
                medium: 'https://unsplash.it/315/315?image=400',
                large: 'https://unsplash.it/507/507?image=400',
                xlarge: 'https://unsplash.it/710/710?image=400',
            },
            {
                size: 'half',
                small: 'https://unsplash.it/630/630?image=401',
                medium: 'https://unsplash.it/315/315?image=401',
                large: 'https://unsplash.it/507/507?image=401',
                xlarge: 'https://unsplash.it/710/710?image=401',
            },
        ]}
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
    />
);
HalfImagesB.storyName = 'Half images with ratio 1:1';

export const HalfImagesC: Story = () => (
    <Gallery
        images={[
            {
                size: 'half',
                small: 'https://unsplash.it/610/457?image=400',
                medium: 'https://unsplash.it/315/420?image=400',
                large: 'https://unsplash.it/507/676?image=400',
                xlarge: 'https://unsplash.it/710/947?image=400',
            },
            {
                size: 'half',
                small: 'https://unsplash.it/610/457?image=401',
                medium: 'https://unsplash.it/315/420?image=401',
                large: 'https://unsplash.it/507/676?image=401',
                xlarge: 'https://unsplash.it/710/947?image=401',
            },
        ]}
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
    />
);
HalfImagesC.storyName = 'Half images with ratio 3:4';

export const MixedImages: Story = () => (
    <Gallery
        images={[
            {
                size: 'full',
                small: 'https://unsplash.it/500/246?image=400',
                medium: 'https://unsplash.it/640/315?image=400',
                large: 'https://unsplash.it/1024/504?image=400',
                xlarge: 'https://unsplash.it/1440/710?image=400',
            },
            {
                size: 'half',
                small: 'https://unsplash.it/630/630?image=401',
                medium: 'https://unsplash.it/315/315?image=401',
                large: 'https://unsplash.it/507/507?image=401',
                xlarge: 'https://unsplash.it/710/710?image=401',
            },
            {
                size: 'half',
                small: 'https://unsplash.it/630/630?image=402',
                medium: 'https://unsplash.it/315/315?image=402',
                large: 'https://unsplash.it/507/507?image=402',
                xlarge: 'https://unsplash.it/710/710?image=402',
            },
        ]}
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
    />
);
MixedImages.storyName = 'Mixed image widths';

export const WithBackground: Story = () => (
    <Gallery
        hasBack
        images={[
            {
                size: 'full',
                small: 'https://unsplash.it/500/246?image=400',
                medium: 'https://unsplash.it/640/315?image=400',
                large: 'https://unsplash.it/1024/504?image=400',
                xlarge: 'https://unsplash.it/1440/710?image=400',
            },
            {
                size: 'half',
                small: 'https://unsplash.it/630/630?image=401',
                medium: 'https://unsplash.it/315/315?image=401',
                large: 'https://unsplash.it/507/507?image=401',
                xlarge: 'https://unsplash.it/710/710?image=401',
            },
            {
                size: 'half',
                small: 'https://unsplash.it/630/630?image=402',
                medium: 'https://unsplash.it/315/315?image=402',
                large: 'https://unsplash.it/507/507?image=402',
                xlarge: 'https://unsplash.it/710/710?image=402',
            },
        ]}
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
    />
);

export const Inverted: Story = () => (
    <Gallery
        isInverted
        images={[
            {
                size: 'full',
                small: 'https://unsplash.it/500/246?image=400',
                medium: 'https://unsplash.it/640/315?image=400',
                large: 'https://unsplash.it/1024/504?image=400',
                xlarge: 'https://unsplash.it/1440/710?image=400',
            },
            {
                size: 'half',
                small: 'https://unsplash.it/630/630?image=401',
                medium: 'https://unsplash.it/315/315?image=401',
                large: 'https://unsplash.it/507/507?image=401',
                xlarge: 'https://unsplash.it/710/710?image=401',
            },
            {
                size: 'half',
                small: 'https://unsplash.it/630/630?image=402',
                medium: 'https://unsplash.it/315/315?image=402',
                large: 'https://unsplash.it/507/507?image=402',
                xlarge: 'https://unsplash.it/710/710?image=402',
            },
        ]}
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
    />
);
