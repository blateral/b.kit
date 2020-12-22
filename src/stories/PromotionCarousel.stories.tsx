/* eslint-disable react/display-name */
import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import ArrowRight from 'components/base/icons/ArrowRight';
import Button from 'components/buttons/Button';
import PromotionCarousel from 'components/sections/carousel/PromotionCarousel';
import { PromotionCardProps } from 'components/blocks/PromotionCard';

const promotions = [
    {
        superTitle: 'Haus St. Franziskus',
        title: 'Haus St. Franziskus – lorem ipsum dolor sit amet',
        text:
            'Mitten im historischen Altstadtkern von Überlingen liegt das Haus St. Franziskus. Das prachtvolle Gebäude, ursprünglich als Kloster von Franziskanermönchen errichtet, kann auf eine rund 750-jährige Geschichte zurückblicken.',
        image: {
            small: 'https://unsplash.it/290/290?image=408',
            medium: 'https://unsplash.it/660/660?image=408',
            large: 'https://unsplash.it/512/512?image=408',
            xlarge: 'https://unsplash.it/710/710?image=408',
        },
    },
    {
        superTitle: 'Haus St. Franziskus',
        title: 'Haus St. Franziskus – lorem ipsum dolor sit amet',
        text:
            'Mitten im historischen Altstadtkern von Überlingen liegt das Haus St. Franziskus. Das prachtvolle Gebäude, ursprünglich als Kloster von Franziskanermönchen errichtet, kann auf eine rund 750-jährige Geschichte zurückblicken.',
        image: {
            small: 'https://unsplash.it/290/290?image=409',
            medium: 'https://unsplash.it/660/660?image=409',
            large: 'https://unsplash.it/512/512?image=409',
            xlarge: 'https://unsplash.it/710/710?image=409',
        },
    },
    {
        superTitle: 'Haus St. Franziskus',
        title: 'Haus St. Franziskus – lorem ipsum dolor sit amet',
        text:
            'Mitten im historischen Altstadtkern von Überlingen liegt das Haus St. Franziskus. Das prachtvolle Gebäude, ursprünglich als Kloster von Franziskanermönchen errichtet, kann auf eine rund 750-jährige Geschichte zurückblicken.',
        image: {
            small: 'https://unsplash.it/290/290?image=410',
            medium: 'https://unsplash.it/660/660?image=410',
            large: 'https://unsplash.it/512/512?image=410',
            xlarge: 'https://unsplash.it/710/710?image=410',
        },
    },
    {
        superTitle: 'Haus St. Franziskus',
        title: 'Haus St. Franziskus – lorem ipsum dolor sit amet',
        text:
            'Mitten im historischen Altstadtkern von Überlingen liegt das Haus St. Franziskus. Das prachtvolle Gebäude, ursprünglich als Kloster von Franziskanermönchen errichtet, kann auf eine rund 750-jährige Geschichte zurückblicken.',
        image: {
            small: 'https://unsplash.it/290/290?image=411',
            medium: 'https://unsplash.it/660/660?image=411',
            large: 'https://unsplash.it/512/512?image=411',
            xlarge: 'https://unsplash.it/710/710?image=411',
        },
    },
] as PromotionCardProps[];

export default {
    title: 'Sections/Carousels/PromotionCarousel',
    component: PromotionCarousel,
} as Meta;

export const Default: Story = () => (
    <PromotionCarousel promotions={promotions} />
);

export const WithIntro: Story = () => (
    <PromotionCarousel
        promotions={promotions}
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
        promotions={promotions}
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
        hasBack
        promotions={promotions}
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
        hasBack
        promotions={promotions}
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
        hasBack
        promotions={promotions}
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
        hasBack
        promotions={promotions}
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
    />
);

export const WithRatioA: Story = () => (
    <PromotionCarousel
        hasBack
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
        promotions={[
            {
                superTitle: 'Haus St. Franziskus',
                title: 'Haus St. Franziskus – lorem ipsum dolor sit amet',
                text:
                    'Mitten im historischen Altstadtkern von Überlingen liegt das Haus St. Franziskus. Das prachtvolle Gebäude, ursprünglich als Kloster von Franziskanermönchen errichtet, kann auf eine rund 750-jährige Geschichte zurückblicken.',
                image: {
                    small: 'https://unsplash.it/290/217?image=408',
                    medium: 'https://unsplash.it/660/492?image=408',
                    large: 'https://unsplash.it/512/383?image=408',
                    xlarge: 'https://unsplash.it/710/533?image=408',
                },
            },
            {
                superTitle: 'Haus St. Franziskus',
                title: 'Haus St. Franziskus – lorem ipsum dolor sit amet',
                text:
                    'Mitten im historischen Altstadtkern von Überlingen liegt das Haus St. Franziskus. Das prachtvolle Gebäude, ursprünglich als Kloster von Franziskanermönchen errichtet, kann auf eine rund 750-jährige Geschichte zurückblicken.',
                image: {
                    small: 'https://unsplash.it/290/217?image=409',
                    medium: 'https://unsplash.it/660/492?image=409',
                    large: 'https://unsplash.it/512/383?image=409',
                    xlarge: 'https://unsplash.it/710/533?image=409',
                },
            },
            {
                superTitle: 'Haus St. Franziskus',
                title: 'Haus St. Franziskus – lorem ipsum dolor sit amet',
                text:
                    'Mitten im historischen Altstadtkern von Überlingen liegt das Haus St. Franziskus. Das prachtvolle Gebäude, ursprünglich als Kloster von Franziskanermönchen errichtet, kann auf eine rund 750-jährige Geschichte zurückblicken.',
                image: {
                    small: 'https://unsplash.it/290/217?image=410',
                    medium: 'https://unsplash.it/660/492?image=410',
                    large: 'https://unsplash.it/512/383?image=410',
                    xlarge: 'https://unsplash.it/710/533?image=410',
                },
            },
            {
                superTitle: 'Haus St. Franziskus',
                title: 'Haus St. Franziskus – lorem ipsum dolor sit amet',
                text:
                    'Mitten im historischen Altstadtkern von Überlingen liegt das Haus St. Franziskus. Das prachtvolle Gebäude, ursprünglich als Kloster von Franziskanermönchen errichtet, kann auf eine rund 750-jährige Geschichte zurückblicken.',
                image: {
                    small: 'https://unsplash.it/290/217?image=411',
                    medium: 'https://unsplash.it/660/492?image=411',
                    large: 'https://unsplash.it/512/383?image=411',
                    xlarge: 'https://unsplash.it/710/533?image=411',
                },
            },
        ]}
    />
);

WithRatioA.storyName = 'With ratio 4:3';

export const WithRatioB: Story = () => (
    <PromotionCarousel
        hasBack
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
        promotions={[
            {
                superTitle: 'Haus St. Franziskus',
                title: 'Haus St. Franziskus – lorem ipsum dolor sit amet',
                text:
                    'Mitten im historischen Altstadtkern von Überlingen liegt das Haus St. Franziskus. Das prachtvolle Gebäude, ursprünglich als Kloster von Franziskanermönchen errichtet, kann auf eine rund 750-jährige Geschichte zurückblicken.',
                image: {
                    small: 'https://unsplash.it/710/947?image=408',
                    medium: 'https://unsplash.it/749/999?image=408',
                    large: 'https://unsplash.it/512/682?image=408',
                    xlarge: 'https://unsplash.it/710/947?image=408',
                },
            },
            {
                superTitle: 'Haus St. Franziskus',
                title: 'Haus St. Franziskus – lorem ipsum dolor sit amet',
                text:
                    'Mitten im historischen Altstadtkern von Überlingen liegt das Haus St. Franziskus. Das prachtvolle Gebäude, ursprünglich als Kloster von Franziskanermönchen errichtet, kann auf eine rund 750-jährige Geschichte zurückblicken.',
                image: {
                    small: 'https://unsplash.it/710/947?image=409',
                    medium: 'https://unsplash.it/749/999?image=409',
                    large: 'https://unsplash.it/512/682?image=409',
                    xlarge: 'https://unsplash.it/710/947?image=409',
                },
            },
            {
                superTitle: 'Haus St. Franziskus',
                title: 'Haus St. Franziskus – lorem ipsum dolor sit amet',
                text:
                    'Mitten im historischen Altstadtkern von Überlingen liegt das Haus St. Franziskus. Das prachtvolle Gebäude, ursprünglich als Kloster von Franziskanermönchen errichtet, kann auf eine rund 750-jährige Geschichte zurückblicken.',
                image: {
                    small: 'https://unsplash.it/710/947?image=410',
                    medium: 'https://unsplash.it/749/999?image=410',
                    large: 'https://unsplash.it/512/682?image=410',
                    xlarge: 'https://unsplash.it/710/947?image=410',
                },
            },
            {
                superTitle: 'Haus St. Franziskus',
                title: 'Haus St. Franziskus – lorem ipsum dolor sit amet',
                text:
                    'Mitten im historischen Altstadtkern von Überlingen liegt das Haus St. Franziskus. Das prachtvolle Gebäude, ursprünglich als Kloster von Franziskanermönchen errichtet, kann auf eine rund 750-jährige Geschichte zurückblicken.',
                image: {
                    small: 'https://unsplash.it/710/947?image=411',
                    medium: 'https://unsplash.it/749/999?image=411',
                    large: 'https://unsplash.it/512/682?image=411',
                    xlarge: 'https://unsplash.it/710/947?image=411',
                },
            },
        ]}
    />
);

WithRatioB.storyName = 'With ratio 3:4';
