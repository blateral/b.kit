import * as React from 'react';
import { Meta, Story } from '@storybook/react';

import ImageCarousel from 'components/sections/carousel/ImageCarousel';
import ArrowRight from 'components/base/icons/ArrowRight';
import { ImageProps } from 'components/blocks/Image';
import { generateItemList } from 'utils/storyHelpers';
import ButtonGhost from 'components/buttons/ButtonGhost';
import Button from 'components/buttons/Button';

export default {
    title: 'Sections/Carousels/ImageCarousel',
    component: ImageCarousel,
} as Meta;

const exampleImage: ImageProps = {
    small: 'https://unsplash.it/553/431',
    medium: 'https://unsplash.it/357/357',
    large: 'https://unsplash.it/507/507',
    xlarge: 'https://unsplash.it/680/680',
    alt: 'Placeholder Image',
};

const exampleImages = generateItemList<ImageProps>(
    exampleImage,
    4,
    (item, i) => ({
        ...item,
        small: `${item.small}?image=40${i}`,
        medium: `${item.medium}?image=40${i}`,
        large: `${item.large}?image=40${i}`,
        xlarge: `${item.xlarge}?image=40${i}`,
        alt: `${item.alt} ${i}`,
    })
);

export const Default: Story = () => (
    <ImageCarousel
        images={exampleImages.map((img, i) => ({
            ...img,
            small: 'https://unsplash.it/553/431?image=40' + i,
            medium: 'https://unsplash.it/357/357?image=40' + i,
            large: 'https://unsplash.it/507/507?image=40' + i,
            xlarge: 'https://unsplash.it/680/680?image=40' + i,
            alt: 'Placeholder Image ' + 1,
        }))}
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
            <ButtonGhost.View isInverted={isInverted}>
                <ButtonGhost.Label>Secondary</ButtonGhost.Label>
            </ButtonGhost.View>
        )}
        images={exampleImages.map((img, i) => ({
            ...img,
            small: 'https://unsplash.it/553/431?image=40' + i,
            medium: 'https://unsplash.it/357/357?image=40' + i,
            large: 'https://unsplash.it/507/507?image=40' + i,
            xlarge: 'https://unsplash.it/680/680?image=40' + i,
            alt: 'Placeholder Image ' + 1,
        }))}
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
            <ButtonGhost.View isInverted={isInverted}>
                <ButtonGhost.Label>Secondary</ButtonGhost.Label>
            </ButtonGhost.View>
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

export const ImageRatioA: Story = () => (
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
            <ButtonGhost.View isInverted={isInverted}>
                <ButtonGhost.Label>Secondary</ButtonGhost.Label>
            </ButtonGhost.View>
        )}
        images={exampleImages.map((img, i) => ({
            ...img,
            small: 'https://unsplash.it/553/431?image=40' + i,
            medium: 'https://unsplash.it/357/278?image=40' + i,
            large: 'https://unsplash.it/507/395?image=40' + i,
            xlarge: 'https://unsplash.it/680/529?image=40' + i,
            alt: 'Placeholder Image ' + 1,
        }))}
    />
);
ImageRatioA.storyName = 'Image ratio 4:3';

export const ImageRatioB: Story = () => (
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
            <ButtonGhost.View isInverted={isInverted}>
                <ButtonGhost.Label>Secondary</ButtonGhost.Label>
            </ButtonGhost.View>
        )}
        images={exampleImages.map((img, i) => ({
            ...img,
            small: 'https://unsplash.it/553/431?image=40' + i,
            medium: 'https://unsplash.it/357/476?image=40' + i,
            large: 'https://unsplash.it/507/676?image=40' + i,
            xlarge: 'https://unsplash.it/680/906?image=40' + i,
            alt: 'Placeholder Image ' + 1,
        }))}
    />
);
ImageRatioB.storyName = 'Image ratio 3:4';

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
            <ButtonGhost.View isInverted={isInverted}>
                <ButtonGhost.Label>Secondary</ButtonGhost.Label>
            </ButtonGhost.View>
        )}
        images={exampleImages.map((img, i) => ({
            ...img,
            small: 'https://unsplash.it/553/431?image=40' + i,
            medium: 'https://unsplash.it/357/357?image=40' + i,
            large: 'https://unsplash.it/507/507?image=40' + i,
            xlarge: 'https://unsplash.it/680/680?image=40' + i,
            alt: 'Placeholder Image ' + 1,
        }))}
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
            <ButtonGhost.View isInverted={isInverted}>
                <ButtonGhost.Label>Secondary</ButtonGhost.Label>
            </ButtonGhost.View>
        )}
        images={exampleImages.map((img, i) => ({
            ...img,
            small: 'https://unsplash.it/553/431?image=40' + i,
            medium: 'https://unsplash.it/357/357?image=40' + i,
            large: 'https://unsplash.it/507/507?image=40' + i,
            xlarge: 'https://unsplash.it/680/680?image=40' + i,
            alt: 'Placeholder Image ' + 1,
        }))}
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
            <ButtonGhost.View isInverted={isInverted}>
                <ButtonGhost.Label>Secondary</ButtonGhost.Label>
            </ButtonGhost.View>
        )}
        images={exampleImages.map((img, i) => ({
            ...img,
            small: 'https://unsplash.it/553/431?image=40' + i,
            medium: 'https://unsplash.it/357/357?image=40' + i,
            large: 'https://unsplash.it/507/507?image=40' + i,
            xlarge: 'https://unsplash.it/680/680?image=40' + i,
            alt: 'Placeholder Image ' + 1,
        }))}
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
            <ButtonGhost.View isInverted={isInverted}>
                <ButtonGhost.Label>Secondary</ButtonGhost.Label>
            </ButtonGhost.View>
        )}
        images={exampleImages.map((img, i) => ({
            ...img,
            small: 'https://unsplash.it/553/431?image=40' + i,
            medium: 'https://unsplash.it/357/357?image=40' + i,
            large: 'https://unsplash.it/507/507?image=40' + i,
            xlarge: 'https://unsplash.it/680/680?image=40' + i,
            alt: 'Placeholder Image ' + 1,
        }))}
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
            <ButtonGhost.View isInverted={isInverted}>
                <ButtonGhost.Label>Secondary</ButtonGhost.Label>
            </ButtonGhost.View>
        )}
        images={exampleImages.map((img, i) => ({
            ...img,
            small: 'https://unsplash.it/553/431?image=40' + i,
            medium: 'https://unsplash.it/357/357?image=40' + i,
            large: 'https://unsplash.it/507/507?image=40' + i,
            xlarge: 'https://unsplash.it/680/680?image=40' + i,
            alt: 'Placeholder Image ' + 1,
        }))}
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
            <ButtonGhost.View isInverted={isInverted}>
                <ButtonGhost.Label>Secondary</ButtonGhost.Label>
            </ButtonGhost.View>
        )}
        images={exampleImages.map((img, i) => ({
            ...img,
            small: 'https://unsplash.it/553/431?image=40' + i,
            medium: 'https://unsplash.it/357/357?image=40' + i,
            large: 'https://unsplash.it/507/507?image=40' + i,
            xlarge: 'https://unsplash.it/680/680?image=40' + i,
            alt: 'Placeholder Image ' + 1,
        }))}
    />
);

export const WithCustomDots: Story = () => (
    <ImageCarousel
        bgMode="full"
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
        images={exampleImages.map((img, i) => ({
            ...img,
            small: 'https://unsplash.it/553/431?image=40' + i,
            medium: 'https://unsplash.it/357/357?image=40' + i,
            large: 'https://unsplash.it/507/507?image=40' + i,
            xlarge: 'https://unsplash.it/680/680?image=40' + i,
            alt: 'Placeholder Image ' + 1,
        }))}
    />
);
