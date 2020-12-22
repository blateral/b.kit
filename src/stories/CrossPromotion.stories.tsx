import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import CrossPromotion from 'components/sections/CrossPromotion';
import Button from 'components/buttons/Button';

export default {
    title: 'Sections/CrossPromotion',
    component: CrossPromotion,
} as Meta;

export const SingleImageFull: Story = () => (
    <CrossPromotion
        main={[
            {
                size: 'full',
                image: {
                    small: 'https://unsplash.it/640/447?image=409',
                    medium: 'https://unsplash.it/640/447?image=409',
                    large: 'https://unsplash.it/984/580?image=409',
                    xlarge: 'https://unsplash.it/1440/850?image=409',
                },
                title: 'Haus St. Franziskus – lorem ipsum dolor sit amet',
                superTitle: 'Haus St. Franziskus',
                text:
                    'Mitten im historischen Altstadtkern von Überlingen liegt das Haus St. Franziskus. Das prachtvolle Gebäude, ursprünglich als Kloster von Franziskanermönchen errichtet, kann auf eine rund 750-jährige Geschichte zurückblicken.',
            },
        ]}
    />
);

export const WithIntro: Story = () => (
    <CrossPromotion
        main={[
            {
                size: 'full',
                image: {
                    small: 'https://unsplash.it/640/447?image=409',
                    medium: 'https://unsplash.it/640/447?image=409',
                    large: 'https://unsplash.it/984/580?image=409',
                    xlarge: 'https://unsplash.it/1440/850?image=409',
                },
                title: 'Haus St. Franziskus – lorem ipsum dolor sit amet',
                superTitle: 'Haus St. Franziskus',
                text:
                    'Mitten im historischen Altstadtkern von Überlingen liegt das Haus St. Franziskus. Das prachtvolle Gebäude, ursprünglich als Kloster von Franziskanermönchen errichtet, kann auf eine rund 750-jährige Geschichte zurückblicken.',
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

export const TwoHalfCards: Story = () => (
    <CrossPromotion
        main={[
            {
                size: 'half',
                image: {
                    small: 'https://unsplash.it/290/217?image=409',
                    medium: 'https://unsplash.it/660/492?image=409',
                    large: 'https://unsplash.it/512/383?image=409',
                    xlarge: 'https://unsplash.it/710/533?image=409',
                },
                title: 'Haus St. Franziskus – lorem ipsum dolor sit amet',
            },
            {
                size: 'half',
                image: {
                    small: 'https://unsplash.it/290/217?image=410',
                    medium: 'https://unsplash.it/660/492?image=410',
                    large: 'https://unsplash.it/512/383?image=410',
                    xlarge: 'https://unsplash.it/710/533?image=410',
                },
                title: 'Haus St. Franziskus – lorem ipsum dolor sit amet',
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

export const TwoHalfCardsRatioA: Story = () => (
    <CrossPromotion
        main={[
            {
                size: 'half',
                image: {
                    small: 'https://unsplash.it/290/290?image=409',
                    medium: 'https://unsplash.it/660/660?image=409',
                    large: 'https://unsplash.it/512/512?image=409',
                    xlarge: 'https://unsplash.it/710/710?image=409',
                },
                title: 'Haus St. Franziskus – lorem ipsum dolor sit amet',
            },
            {
                size: 'half',
                image: {
                    small: 'https://unsplash.it/290/290?image=410',
                    medium: 'https://unsplash.it/660/660?image=410',
                    large: 'https://unsplash.it/512/512?image=410',
                    xlarge: 'https://unsplash.it/710/710?image=410',
                },
                title: 'Haus St. Franziskus – lorem ipsum dolor sit amet',
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

TwoHalfCardsRatioA.storyName = 'Two half cards with ratio 1x1';

export const TwoHalfCardsRatioB: Story = () => (
    <CrossPromotion
        main={[
            {
                size: 'half',
                image: {
                    small: 'https://unsplash.it/710/947?image=410',
                    medium: 'https://unsplash.it/749/999?image=410',
                    large: 'https://unsplash.it/512/682?image=410',
                    xlarge: 'https://unsplash.it/710/947?image=410',
                },
                title: 'Haus St. Franziskus – lorem ipsum dolor sit amet',
            },
            {
                size: 'half',
                image: {
                    small: 'https://unsplash.it/710/947?image=410',
                    medium: 'https://unsplash.it/749/999?image=410',
                    large: 'https://unsplash.it/512/682?image=410',
                    xlarge: 'https://unsplash.it/710/947?image=410',
                },
                title: 'Haus St. Franziskus – lorem ipsum dolor sit amet',
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

TwoHalfCardsRatioB.storyName = 'Two half cards with ratio 3x4';

export const MixedImages: Story = () => (
    <CrossPromotion
        main={[
            {
                size: 'half',
                image: {
                    small: 'https://unsplash.it/290/217?image=411',
                    medium: 'https://unsplash.it/660/492?image=411',
                    large: 'https://unsplash.it/710/947?image=411',
                    xlarge: 'https://unsplash.it/710/947?image=411',
                },
                title: 'Haus St. Franziskus – lorem ipsum dolor sit amet',
            },
        ]}
        aside={[
            {
                size: 'half',
                image: {
                    small: 'https://unsplash.it/290/217?image=409',
                    medium: 'https://unsplash.it/660/492?image=409',
                    large: 'https://unsplash.it/512/383?image=409',
                    xlarge: 'https://unsplash.it/710/533?image=409',
                },
                title: 'Haus St. Franziskus – lorem ipsum dolor sit amet',
            },
            {
                size: 'half',
                image: {
                    small: 'https://unsplash.it/290/217?image=410',
                    medium: 'https://unsplash.it/660/492?image=410',
                    large: 'https://unsplash.it/512/383?image=410',
                    xlarge: 'https://unsplash.it/710/533?image=410',
                },
                title: 'Haus St. Franziskus – lorem ipsum dolor sit amet',
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

export const WithBackground: Story = () => (
    <CrossPromotion
        bgMode="full"
        main={[
            {
                size: 'half',
                image: {
                    small: 'https://unsplash.it/290/217?image=411',
                    medium: 'https://unsplash.it/660/492?image=411',
                    large: 'https://unsplash.it/710/947?image=411',
                    xlarge: 'https://unsplash.it/710/947?image=411',
                },
                title: 'Haus St. Franziskus – lorem ipsum dolor sit amet',
            },
        ]}
        aside={[
            {
                size: 'half',
                image: {
                    small: 'https://unsplash.it/290/217?image=409',
                    medium: 'https://unsplash.it/660/492?image=409',
                    large: 'https://unsplash.it/512/383?image=409',
                    xlarge: 'https://unsplash.it/710/533?image=409',
                },
                title: 'Haus St. Franziskus – lorem ipsum dolor sit amet',
            },
            {
                size: 'half',
                image: {
                    small: 'https://unsplash.it/290/217?image=410',
                    medium: 'https://unsplash.it/660/492?image=410',
                    large: 'https://unsplash.it/512/383?image=410',
                    xlarge: 'https://unsplash.it/710/533?image=410',
                },
                title: 'Haus St. Franziskus – lorem ipsum dolor sit amet',
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

export const WithSplittedBackground: Story = () => (
    <CrossPromotion
        bgMode="splitted"
        main={[
            {
                size: 'half',
                image: {
                    small: 'https://unsplash.it/290/217?image=411',
                    medium: 'https://unsplash.it/660/492?image=411',
                    large: 'https://unsplash.it/710/947?image=411',
                    xlarge: 'https://unsplash.it/710/947?image=411',
                },
                title: 'Haus St. Franziskus – lorem ipsum dolor sit amet',
            },
        ]}
        aside={[
            {
                size: 'half',
                image: {
                    small: 'https://unsplash.it/290/217?image=409',
                    medium: 'https://unsplash.it/660/492?image=409',
                    large: 'https://unsplash.it/512/383?image=409',
                    xlarge: 'https://unsplash.it/710/533?image=409',
                },
                title: 'Haus St. Franziskus – lorem ipsum dolor sit amet',
            },
            {
                size: 'half',
                image: {
                    small: 'https://unsplash.it/290/217?image=410',
                    medium: 'https://unsplash.it/660/492?image=410',
                    large: 'https://unsplash.it/512/383?image=410',
                    xlarge: 'https://unsplash.it/710/533?image=410',
                },
                title: 'Haus St. Franziskus – lorem ipsum dolor sit amet',
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
    <CrossPromotion
        bgMode="splitted"
        isInverted
        main={[
            {
                size: 'half',
                image: {
                    small: 'https://unsplash.it/290/217?image=411',
                    medium: 'https://unsplash.it/660/492?image=411',
                    large: 'https://unsplash.it/710/947?image=411',
                    xlarge: 'https://unsplash.it/710/947?image=411',
                },
                title: 'Haus St. Franziskus – lorem ipsum dolor sit amet',
            },
        ]}
        aside={[
            {
                size: 'half',
                image: {
                    small: 'https://unsplash.it/290/217?image=409',
                    medium: 'https://unsplash.it/660/492?image=409',
                    large: 'https://unsplash.it/512/383?image=409',
                    xlarge: 'https://unsplash.it/710/533?image=409',
                },
                title: 'Haus St. Franziskus – lorem ipsum dolor sit amet',
            },
            {
                size: 'half',
                image: {
                    small: 'https://unsplash.it/290/217?image=410',
                    medium: 'https://unsplash.it/660/492?image=410',
                    large: 'https://unsplash.it/512/383?image=410',
                    xlarge: 'https://unsplash.it/710/533?image=410',
                },
                title: 'Haus St. Franziskus – lorem ipsum dolor sit amet',
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

export const WithClickHandlers: Story = () => (
    <CrossPromotion
        main={[
            {
                size: 'half',
                image: {
                    small: 'https://unsplash.it/290/217?image=411',
                    medium: 'https://unsplash.it/660/492?image=411',
                    large: 'https://unsplash.it/710/947?image=411',
                    xlarge: 'https://unsplash.it/710/947?image=411',
                },
                title: 'Haus St. Franziskus – lorem ipsum dolor sit amet',
                onClick: () => console.log('click card'),
            },
        ]}
        aside={[
            {
                size: 'half',
                image: {
                    small: 'https://unsplash.it/290/217?image=409',
                    medium: 'https://unsplash.it/660/492?image=409',
                    large: 'https://unsplash.it/512/383?image=409',
                    xlarge: 'https://unsplash.it/710/533?image=409',
                },
                title: 'Haus St. Franziskus – lorem ipsum dolor sit amet',
                onClick: () => console.log('click card'),
            },
            {
                size: 'half',
                image: {
                    small: 'https://unsplash.it/290/217?image=410',
                    medium: 'https://unsplash.it/660/492?image=410',
                    large: 'https://unsplash.it/512/383?image=410',
                    xlarge: 'https://unsplash.it/710/533?image=410',
                },
                title: 'Haus St. Franziskus – lorem ipsum dolor sit amet',
                onClick: () => console.log('click card'),
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
