/* eslint-disable react/display-name */
import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import ArrowRight from 'components/base/icons/ArrowRight';
import Button from 'components/buttons/Button';
import PromotionCarousel, {
    PromotionCarouselItem,
} from 'components/sections/carousel/PromotionCarousel';
import { generateItemList } from 'utils/storyHelpers';

const examplePromotion: PromotionCarouselItem = {
    title: 'Haus St. Franziskus – lorem ipsum dolor sit amet',
    image: {
        small: 'https://unsplash.it/553/553',
        medium: 'https://unsplash.it/441/441',
        large: 'https://unsplash.it/507/507',
        xlarge: 'https://unsplash.it/680/680',
        alt: 'Image Placeholder',
    },
};

const examplePromotions = generateItemList<PromotionCarouselItem>(
    examplePromotion,
    4,
    (item, i) => ({
        ...item,
        title: 'Haus St. Franziskus – lorem ipsum dolor sit amet',
        image: {
            small: `${item.image.small}?image=40${i}`,
            medium: `${item.image.medium}?image=40${i}`,
            large: `${item.image.large}?image=40${i}`,
            xlarge: `${item.image.xlarge}?image=40${i}`,
            alt: 'Image Placeholder ' + i,
        },
    })
);

export default {
    title: 'Sections/Carousels/PromotionCarousel',
    component: PromotionCarousel,
} as Meta;

export const Default: Story = () => (
    <PromotionCarousel
        promotions={examplePromotions.map((promotion, i) => ({
            ...promotion,
            image: {
                small: 'https://unsplash.it/553/553?image=40' + i,
                medium: 'https://unsplash.it/441/441?image=40' + i,
                large: 'https://unsplash.it/507/507?image=40' + i,
                xlarge: 'https://unsplash.it/680/680?image=40' + i,
                alt: 'Image Placeholder ' + i,
            },
        }))}
    />
);

export const WithIntro: Story = () => (
    <PromotionCarousel
        promotions={examplePromotions.map((promotion, i) => ({
            ...promotion,
            image: {
                small: 'https://unsplash.it/553/553?image=40' + i,
                medium: 'https://unsplash.it/441/441?image=40' + i,
                large: 'https://unsplash.it/507/507?image=40' + i,
                xlarge: 'https://unsplash.it/680/680?image=40' + i,
                alt: 'Image Placeholder ' + i,
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
            <Button.View type="ghost" isInverted={isInverted}>
                <Button.Label>Secondary</Button.Label>
            </Button.View>
        )}
    />
);

export const Inverted: Story = () => (
    <PromotionCarousel
        isInverted
        promotions={examplePromotions.map((promotion, i) => ({
            ...promotion,
            image: {
                small: 'https://unsplash.it/553/553?image=40' + i,
                medium: 'https://unsplash.it/441/441?image=40' + i,
                large: 'https://unsplash.it/507/507?image=40' + i,
                xlarge: 'https://unsplash.it/680/680?image=40' + i,
                alt: 'Image Placeholder ' + i,
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
            <Button.View type="ghost" isInverted={isInverted}>
                <Button.Label>Secondary</Button.Label>
            </Button.View>
        )}
    />
);

export const WithBackground: Story = () => (
    <PromotionCarousel
        bgMode="full"
        promotions={examplePromotions.map((promotion, i) => ({
            ...promotion,
            image: {
                small: 'https://unsplash.it/553/553?image=40' + i,
                medium: 'https://unsplash.it/441/441?image=40' + i,
                large: 'https://unsplash.it/507/507?image=40' + i,
                xlarge: 'https://unsplash.it/680/680?image=40' + i,
                alt: 'Image Placeholder ' + i,
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
            <Button.View type="ghost" isInverted={isInverted}>
                <Button.Label>Secondary</Button.Label>
            </Button.View>
        )}
    />
);

export const WithSplittedBackground: Story = () => (
    <PromotionCarousel
        bgMode="splitted"
        promotions={examplePromotions.map((promotion, i) => ({
            ...promotion,
            image: {
                small: 'https://unsplash.it/553/553?image=40' + i,
                medium: 'https://unsplash.it/441/441?image=40' + i,
                large: 'https://unsplash.it/507/507?image=40' + i,
                xlarge: 'https://unsplash.it/680/680?image=40' + i,
                alt: 'Image Placeholder ' + i,
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
            <Button.View type="ghost" isInverted={isInverted}>
                <Button.Label>Secondary</Button.Label>
            </Button.View>
        )}
    />
);

export const WithHandlers: Story = () => (
    <PromotionCarousel
        bgMode="full"
        promotions={examplePromotions.map((promotion, i) => ({
            ...promotion,
            image: {
                small: 'https://unsplash.it/553/553?image=40' + i,
                medium: 'https://unsplash.it/441/441?image=40' + i,
                large: 'https://unsplash.it/507/507?image=40' + i,
                xlarge: 'https://unsplash.it/680/680?image=40' + i,
                alt: 'Image Placeholder ' + i,
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
            <Button.View type="ghost" isInverted={isInverted}>
                <Button.Label>Secondary</Button.Label>
            </Button.View>
        )}
    />
);

export const WithCustomControls: Story = () => (
    <PromotionCarousel
        bgMode="full"
        promotions={examplePromotions.map((promotion, i) => ({
            ...promotion,
            image: {
                small: 'https://unsplash.it/553/553?image=40' + i,
                medium: 'https://unsplash.it/441/441?image=40' + i,
                large: 'https://unsplash.it/507/507?image=40' + i,
                xlarge: 'https://unsplash.it/680/680?image=40' + i,
                alt: 'Image Placeholder ' + i,
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
            <Button.View type="ghost" isInverted={isInverted}>
                <Button.Label>Secondary</Button.Label>
            </Button.View>
        )}
    />
);

export const WithCustomDots: Story = () => (
    <PromotionCarousel
        bgMode="full"
        promotions={examplePromotions.map((promotion, i) => ({
            ...promotion,
            image: {
                small: 'https://unsplash.it/553/553?image=40' + i,
                medium: 'https://unsplash.it/441/441?image=40' + i,
                large: 'https://unsplash.it/507/507?image=40' + i,
                xlarge: 'https://unsplash.it/680/680?image=40' + i,
                alt: 'Image Placeholder ' + i,
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
            <Button.View type="ghost" isInverted={isInverted}>
                <Button.Label>Secondary</Button.Label>
            </Button.View>
        )}
    />
);

export const WithRatioA: Story = () => (
    <PromotionCarousel
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
        promotions={examplePromotions.map((promotion, i) => ({
            ...promotion,
            image: {
                small: 'https://unsplash.it/553/415?image=40' + i,
                medium: 'https://unsplash.it/441/331?image=40' + i,
                large: 'https://unsplash.it/507/381?image=40' + i,
                xlarge: 'https://unsplash.it/680/510?image=40' + i,
                alt: 'Image Placeholder ' + i,
            },
        }))}
    />
);

WithRatioA.storyName = 'With ratio 4:3';

export const WithRatioB: Story = () => (
    <PromotionCarousel
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
        promotions={examplePromotions.map((promotion, i) => ({
            ...promotion,
            image: {
                small: 'https://unsplash.it/553/736?image=40' + i,
                medium: 'https://unsplash.it/441/587?image=40' + i,
                large: 'https://unsplash.it/507/675?image=40' + i,
                xlarge: 'https://unsplash.it/680/905?image=40' + i,
                alt: 'Image Placeholder ' + i,
            },
        }))}
    />
);

WithRatioB.storyName = 'With ratio 3:4';
