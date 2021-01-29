import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import Gallery from 'components/sections/Gallery';
import Button from 'components/buttons/Button';

export default {
    title: 'Sections/Gallery',
    component: Gallery,
} as Meta;

export const SingleImage: Story = () => (
    <Gallery
        images={[
            {
                small: 'https://unsplash.it/619/305?image=400',
                medium: 'https://unsplash.it/983/483?image=400',
                large: 'https://unsplash.it/1399/688?image=400',
                xlarge: 'https://unsplash.it/1400/690?image=400',
            },
        ]}
    />
);

export const WithIntro: Story = () => (
    <Gallery
        images={[
            {
                small: 'https://unsplash.it/619/305?image=400',
                medium: 'https://unsplash.it/983/483?image=400',
                large: 'https://unsplash.it/1399/688?image=400',
                xlarge: 'https://unsplash.it/1400/690?image=400',
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
                small: 'https://unsplash.it/619/305?image=400',
                medium: 'https://unsplash.it/983/483?image=400',
                large: 'https://unsplash.it/1399/688?image=400',
                xlarge: 'https://unsplash.it/1400/690?image=400',
            },
            {
                small: 'https://unsplash.it/619/305?image=401',
                medium: 'https://unsplash.it/983/483?image=401',
                large: 'https://unsplash.it/1399/688?image=401',
                xlarge: 'https://unsplash.it/1400/690?image=401',
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

export const RatioA: Story = () => (
    <Gallery
        images={[
            {
                small: 'https://unsplash.it/419/313?image=400',
                medium: 'https://unsplash.it/983/736?image=400',
                large: 'https://unsplash.it/1399/1048?image=400',
                xlarge: 'https://unsplash.it/1400/1050?image=400',
            },
            {
                small: 'https://unsplash.it/419/313?image=401',
                medium: 'https://unsplash.it/983/736?image=401',
                large: 'https://unsplash.it/1399/1048?image=401',
                xlarge: 'https://unsplash.it/1400/1050?image=401',
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
RatioA.storyName = 'Image ratio 4:3';

export const RatioB: Story = () => (
    <Gallery
        images={[
            {
                small: 'https://unsplash.it/419/313?image=400',
                medium: 'https://unsplash.it/481/481?image=400',
                large: 'https://unsplash.it/686/686?image=400',
                xlarge: 'https://unsplash.it/690/690?image=400',
            },
            {
                small: 'https://unsplash.it/419/313?image=401',
                medium: 'https://unsplash.it/481/481?image=401',
                large: 'https://unsplash.it/686/686?image=401',
                xlarge: 'https://unsplash.it/690/690?image=401',
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
RatioB.storyName = 'Image ratio 1:1';

export const RatioC: Story = () => (
    <Gallery
        images={[
            {
                small: 'https://unsplash.it/419/313?image=400',
                medium: 'https://unsplash.it/481/642?image=400',
                large: 'https://unsplash.it/689/919?image=400',
                xlarge: 'https://unsplash.it/690/920?image=400',
            },
            {
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
RatioC.storyName = 'Image ratio 3:4';

export const MixedImages: Story = () => (
    <Gallery
        images={[
            {
                small: 'https://unsplash.it/500/246?image=400',
                medium: 'https://unsplash.it/640/315?image=400',
                large: 'https://unsplash.it/1024/504?image=400',
                xlarge: 'https://unsplash.it/1440/710?image=400',
            },
            {
                small: 'https://unsplash.it/630/630?image=401',
                medium: 'https://unsplash.it/315/315?image=401',
                large: 'https://unsplash.it/507/507?image=401',
                xlarge: 'https://unsplash.it/710/710?image=401',
            },
            {
                small: 'https://unsplash.it/630/630?image=402',
                medium: 'https://unsplash.it/315/315?image=402',
                large: 'https://unsplash.it/507/507?image=402',
                xlarge: 'https://unsplash.it/710/710?image=402',
            },
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
MixedImages.storyName = 'Mixed image widths';

export const MixedFirstFull: Story = () => (
    <Gallery
        images={[
            {
                small: 'https://unsplash.it/500/246?image=400',
                medium: 'https://unsplash.it/640/315?image=400',
                large: 'https://unsplash.it/1024/504?image=400',
                xlarge: 'https://unsplash.it/1440/710?image=400',
                isFull: true,
            },
            {
                small: 'https://unsplash.it/630/630?image=401',
                medium: 'https://unsplash.it/315/315?image=401',
                large: 'https://unsplash.it/507/507?image=401',
                xlarge: 'https://unsplash.it/710/710?image=401',
            },
            {
                small: 'https://unsplash.it/630/630?image=402',
                medium: 'https://unsplash.it/315/315?image=402',
                large: 'https://unsplash.it/507/507?image=402',
                xlarge: 'https://unsplash.it/710/710?image=402',
            },
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
MixedFirstFull.storyName = 'First to full width';

export const MixedSecondFull: Story = () => (
    <Gallery
        images={[
            {
                small: 'https://unsplash.it/500/246?image=400',
                medium: 'https://unsplash.it/640/315?image=400',
                large: 'https://unsplash.it/1024/504?image=400',
                xlarge: 'https://unsplash.it/1440/710?image=400',
            },
            {
                small: 'https://unsplash.it/630/630?image=401',
                medium: 'https://unsplash.it/315/315?image=401',
                large: 'https://unsplash.it/507/507?image=401',
                xlarge: 'https://unsplash.it/710/710?image=401',
                isFull: true,
            },
            {
                small: 'https://unsplash.it/630/630?image=402',
                medium: 'https://unsplash.it/315/315?image=402',
                large: 'https://unsplash.it/507/507?image=402',
                xlarge: 'https://unsplash.it/710/710?image=402',
            },
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
MixedSecondFull.storyName = 'Second to full width';

export const MixedThirdFull: Story = () => (
    <Gallery
        images={[
            {
                small: 'https://unsplash.it/500/246?image=400',
                medium: 'https://unsplash.it/640/315?image=400',
                large: 'https://unsplash.it/1024/504?image=400',
                xlarge: 'https://unsplash.it/1440/710?image=400',
            },
            {
                small: 'https://unsplash.it/630/630?image=401',
                medium: 'https://unsplash.it/315/315?image=401',
                large: 'https://unsplash.it/507/507?image=401',
                xlarge: 'https://unsplash.it/710/710?image=401',
            },
            {
                small: 'https://unsplash.it/630/630?image=402',
                medium: 'https://unsplash.it/315/315?image=402',
                large: 'https://unsplash.it/507/507?image=402',
                xlarge: 'https://unsplash.it/710/710?image=402',
                isFull: true,
            },
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
MixedThirdFull.storyName = 'Third to full width';

export const WithBackground: Story = () => (
    <Gallery
        hasBack
        images={[
            {
                small: 'https://unsplash.it/500/246?image=400',
                medium: 'https://unsplash.it/640/315?image=400',
                large: 'https://unsplash.it/1024/504?image=400',
                xlarge: 'https://unsplash.it/1440/710?image=400',
            },
            {
                small: 'https://unsplash.it/630/630?image=401',
                medium: 'https://unsplash.it/315/315?image=401',
                large: 'https://unsplash.it/507/507?image=401',
                xlarge: 'https://unsplash.it/710/710?image=401',
            },
            {
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
                small: 'https://unsplash.it/500/246?image=400',
                medium: 'https://unsplash.it/640/315?image=400',
                large: 'https://unsplash.it/1024/504?image=400',
                xlarge: 'https://unsplash.it/1440/710?image=400',
            },
            {
                small: 'https://unsplash.it/630/630?image=401',
                medium: 'https://unsplash.it/315/315?image=401',
                large: 'https://unsplash.it/507/507?image=401',
                xlarge: 'https://unsplash.it/710/710?image=401',
            },
            {
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
