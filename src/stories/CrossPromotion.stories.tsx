import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import CrossPromotion from 'components/sections/CrossPromotion';
import Button from 'components/buttons/Button';
import ButtonGhost from 'components/buttons/ButtonGhost';

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
                    small: 'https://unsplash.it/619/464?image=409',
                    medium: 'https://unsplash.it/983/737?image=409',
                    large: 'https://unsplash.it/1399/824?image=409',
                    xlarge: 'https://unsplash.it/1400/826?image=409',
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
                    small: 'https://unsplash.it/619/464?image=409',
                    medium: 'https://unsplash.it/983/737?image=409',
                    large: 'https://unsplash.it/1399/824?image=409',
                    xlarge: 'https://unsplash.it/1400/826?image=409',
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
            <ButtonGhost.View isInverted={isInverted}>
                <ButtonGhost.Label>Secondary</ButtonGhost.Label>
            </ButtonGhost.View>
        )}
    />
);

export const TwoHalfCardsRatioA: Story = () => (
    <CrossPromotion
        main={[
            {
                size: 'half',
                image: {
                    small: 'https://unsplash.it/619/464?image=409',
                    medium: 'https://unsplash.it/791/593?image=409',
                    semilarge: 'https://unsplash.it/481/481?image=409',
                    large: 'https://unsplash.it/686/686?image=409',
                    xlarge: 'https://unsplash.it/690/690?image=409',
                },
                title: 'Haus St. Franziskus – lorem ipsum dolor sit amet',
            },
            {
                size: 'half',
                image: {
                    small: 'https://unsplash.it/619/464?image=410',
                    medium: 'https://unsplash.it/791/593?image=410',
                    semilarge: 'https://unsplash.it/481/481?image=410',
                    large: 'https://unsplash.it/686/686?image=410',
                    xlarge: 'https://unsplash.it/690/690?image=410',
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
            <ButtonGhost.View isInverted={isInverted}>
                <ButtonGhost.Label>Secondary</ButtonGhost.Label>
            </ButtonGhost.View>
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
                    small: 'https://unsplash.it/619/464?image=410',
                    medium: 'https://unsplash.it/791/593?image=410',
                    semilarge: 'https://unsplash.it/689/1054?image=410',
                    large: 'https://unsplash.it/790/1054?image=410',
                    xlarge: 'https://unsplash.it/790/1055?image=410',
                },
                title: 'Haus St. Franziskus – lorem ipsum dolor sit amet',
            },
            {
                size: 'half',
                image: {
                    small: 'https://unsplash.it/619/464?image=411',
                    medium: 'https://unsplash.it/791/592?image=411',
                    semilarge: 'https://unsplash.it/689/1054?image=411',
                    large: 'https://unsplash.it/790/1054?image=411',
                    xlarge: 'https://unsplash.it/790/1055?image=411',
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
            <ButtonGhost.View isInverted={isInverted}>
                <ButtonGhost.Label>Secondary</ButtonGhost.Label>
            </ButtonGhost.View>
        )}
    />
);

TwoHalfCardsRatioB.storyName = 'Two half cards with ratio 3x4';

export const TwoHalfCardsRatioC: Story = () => (
    <CrossPromotion
        main={[
            {
                size: 'half',
                image: {
                    small: 'https://unsplash.it/619/464?image=409',
                    medium: 'https://unsplash.it/983/737?image=409',
                    large: 'https://unsplash.it/1399/1050?image=409',
                    xlarge: 'https://unsplash.it/1400/1050?image=409',
                },
                title: 'Haus St. Franziskus – lorem ipsum dolor sit amet',
            },
            {
                size: 'half',
                image: {
                    small: 'https://unsplash.it/619/464?image=409',
                    medium: 'https://unsplash.it/983/737?image=409',
                    large: 'https://unsplash.it/1399/1050?image=409',
                    xlarge: 'https://unsplash.it/1400/1050?image=409',
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
            <ButtonGhost.View isInverted={isInverted}>
                <ButtonGhost.Label>Secondary</ButtonGhost.Label>
            </ButtonGhost.View>
        )}
    />
);

TwoHalfCardsRatioC.storyName = 'Two half cards with ratio 4x3';

export const MixedImages: Story = () => (
    <CrossPromotion
        main={[
            {
                size: 'half',
                image: {
                    small: 'https://unsplash.it/619/464?image=411',
                    medium: 'https://unsplash.it/791/592?image=411',
                    semilarge: 'https://unsplash.it/689/1054?image=411',
                    large: 'https://unsplash.it/790/1054?image=411',
                    xlarge: 'https://unsplash.it/790/1055?image=411',
                },
                title: 'Haus St. Franziskus – lorem ipsum dolor sit amet',
            },
        ]}
        aside={[
            {
                size: 'half',
                image: {
                    small: 'https://unsplash.it/619/464?image=409',
                    medium: 'https://unsplash.it/983/737?image=409',
                    large: 'https://unsplash.it/1399/1050?image=409',
                    xlarge: 'https://unsplash.it/1400/1050?image=409',
                },
                title: 'Haus St. Franziskus – lorem ipsum dolor sit amet',
            },
            {
                size: 'half',
                image: {
                    small: 'https://unsplash.it/619/464?image=410',
                    medium: 'https://unsplash.it/983/737?image=410',
                    large: 'https://unsplash.it/1399/1050?image=410',
                    xlarge: 'https://unsplash.it/1400/1050?image=410',
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
            <ButtonGhost.View isInverted={isInverted}>
                <ButtonGhost.Label>Secondary</ButtonGhost.Label>
            </ButtonGhost.View>
        )}
    />
);

export const WithFullBackground: Story = () => (
    <CrossPromotion
        bgMode="full"
        main={[
            {
                size: 'half',
                image: {
                    small: 'https://unsplash.it/619/464?image=411',
                    medium: 'https://unsplash.it/791/592?image=411',
                    semilarge: 'https://unsplash.it/689/1054?image=411',
                    large: 'https://unsplash.it/790/1054?image=411',
                    xlarge: 'https://unsplash.it/790/1055?image=411',
                },
                title: 'Haus St. Franziskus – lorem ipsum dolor sit amet',
            },
        ]}
        aside={[
            {
                size: 'half',
                image: {
                    small: 'https://unsplash.it/619/464?image=409',
                    medium: 'https://unsplash.it/983/737?image=409',
                    large: 'https://unsplash.it/1399/1050?image=409',
                    xlarge: 'https://unsplash.it/1400/1050?image=409',
                },
                title: 'Haus St. Franziskus – lorem ipsum dolor sit amet',
            },
            {
                size: 'half',
                image: {
                    small: 'https://unsplash.it/619/464?image=410',
                    medium: 'https://unsplash.it/983/737?image=410',
                    large: 'https://unsplash.it/1399/1050?image=410',
                    xlarge: 'https://unsplash.it/1400/1050?image=410',
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
            <ButtonGhost.View isInverted={isInverted}>
                <ButtonGhost.Label>Secondary</ButtonGhost.Label>
            </ButtonGhost.View>
        )}
    />
);

export const WithHalfLeftBackground: Story = () => (
    <CrossPromotion
        bgMode="half-left"
        main={[
            {
                size: 'half',
                image: {
                    small: 'https://unsplash.it/619/464?image=411',
                    medium: 'https://unsplash.it/791/592?image=411',
                    semilarge: 'https://unsplash.it/689/1054?image=411',
                    large: 'https://unsplash.it/790/1054?image=411',
                    xlarge: 'https://unsplash.it/790/1055?image=411',
                },
                title: 'Haus St. Franziskus – lorem ipsum dolor sit amet',
            },
        ]}
        aside={[
            {
                size: 'half',
                image: {
                    small: 'https://unsplash.it/619/464?image=409',
                    medium: 'https://unsplash.it/983/737?image=409',
                    large: 'https://unsplash.it/1399/1050?image=409',
                    xlarge: 'https://unsplash.it/1400/1050?image=409',
                },
                title: 'Haus St. Franziskus – lorem ipsum dolor sit amet',
            },
            {
                size: 'half',
                image: {
                    small: 'https://unsplash.it/619/464?image=410',
                    medium: 'https://unsplash.it/983/737?image=410',
                    large: 'https://unsplash.it/1399/1050?image=410',
                    xlarge: 'https://unsplash.it/1400/1050?image=410',
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
            <ButtonGhost.View isInverted={isInverted}>
                <ButtonGhost.Label>Secondary</ButtonGhost.Label>
            </ButtonGhost.View>
        )}
    />
);

export const WithHalfRightBackground: Story = () => (
    <CrossPromotion
        bgMode="half-right"
        main={[
            {
                size: 'half',
                image: {
                    small: 'https://unsplash.it/619/464?image=411',
                    medium: 'https://unsplash.it/791/592?image=411',
                    semilarge: 'https://unsplash.it/689/1054?image=411',
                    large: 'https://unsplash.it/790/1054?image=411',
                    xlarge: 'https://unsplash.it/790/1055?image=411',
                },
                title: 'Haus St. Franziskus – lorem ipsum dolor sit amet',
            },
        ]}
        aside={[
            {
                size: 'half',
                image: {
                    small: 'https://unsplash.it/619/464?image=409',
                    medium: 'https://unsplash.it/983/737?image=409',
                    large: 'https://unsplash.it/1399/1050?image=409',
                    xlarge: 'https://unsplash.it/1400/1050?image=409',
                },
                title: 'Haus St. Franziskus – lorem ipsum dolor sit amet',
            },
            {
                size: 'half',
                image: {
                    small: 'https://unsplash.it/619/464?image=410',
                    medium: 'https://unsplash.it/983/737?image=410',
                    large: 'https://unsplash.it/1399/1050?image=410',
                    xlarge: 'https://unsplash.it/1400/1050?image=410',
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
            <ButtonGhost.View isInverted={isInverted}>
                <ButtonGhost.Label>Secondary</ButtonGhost.Label>
            </ButtonGhost.View>
        )}
    />
);

export const WithLargerLeftBackground: Story = () => (
    <CrossPromotion
        bgMode="larger-left"
        main={[
            {
                size: 'half',
                image: {
                    small: 'https://unsplash.it/619/464?image=411',
                    medium: 'https://unsplash.it/791/592?image=411',
                    semilarge: 'https://unsplash.it/689/1054?image=411',
                    large: 'https://unsplash.it/790/1054?image=411',
                    xlarge: 'https://unsplash.it/790/1055?image=411',
                },
                title: 'Haus St. Franziskus – lorem ipsum dolor sit amet',
            },
        ]}
        aside={[
            {
                size: 'half',
                image: {
                    small: 'https://unsplash.it/619/464?image=409',
                    medium: 'https://unsplash.it/983/737?image=409',
                    large: 'https://unsplash.it/1399/1050?image=409',
                    xlarge: 'https://unsplash.it/1400/1050?image=409',
                },
                title: 'Haus St. Franziskus – lorem ipsum dolor sit amet',
            },
            {
                size: 'half',
                image: {
                    small: 'https://unsplash.it/619/464?image=410',
                    medium: 'https://unsplash.it/983/737?image=410',
                    large: 'https://unsplash.it/1399/1050?image=410',
                    xlarge: 'https://unsplash.it/1400/1050?image=410',
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
            <ButtonGhost.View isInverted={isInverted}>
                <ButtonGhost.Label>Secondary</ButtonGhost.Label>
            </ButtonGhost.View>
        )}
    />
);

export const WithLargerRightBackground: Story = () => (
    <CrossPromotion
        bgMode="larger-right"
        main={[
            {
                size: 'half',
                image: {
                    small: 'https://unsplash.it/619/464?image=411',
                    medium: 'https://unsplash.it/791/592?image=411',
                    semilarge: 'https://unsplash.it/689/1054?image=411',
                    large: 'https://unsplash.it/790/1054?image=411',
                    xlarge: 'https://unsplash.it/790/1055?image=411',
                },
                title: 'Haus St. Franziskus – lorem ipsum dolor sit amet',
            },
        ]}
        aside={[
            {
                size: 'half',
                image: {
                    small: 'https://unsplash.it/619/464?image=409',
                    medium: 'https://unsplash.it/983/737?image=409',
                    large: 'https://unsplash.it/1399/1050?image=409',
                    xlarge: 'https://unsplash.it/1400/1050?image=409',
                },
                title: 'Haus St. Franziskus – lorem ipsum dolor sit amet',
            },
            {
                size: 'half',
                image: {
                    small: 'https://unsplash.it/619/464?image=410',
                    medium: 'https://unsplash.it/983/737?image=410',
                    large: 'https://unsplash.it/1399/1050?image=410',
                    xlarge: 'https://unsplash.it/1400/1050?image=410',
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
            <ButtonGhost.View isInverted={isInverted}>
                <ButtonGhost.Label>Secondary</ButtonGhost.Label>
            </ButtonGhost.View>
        )}
    />
);

export const Inverted: Story = () => (
    <CrossPromotion
        bgMode="half-right"
        isInverted
        main={[
            {
                size: 'half',
                image: {
                    small: 'https://unsplash.it/619/464?image=411',
                    medium: 'https://unsplash.it/791/592?image=411',
                    semilarge: 'https://unsplash.it/689/1054?image=411',
                    large: 'https://unsplash.it/790/1054?image=411',
                    xlarge: 'https://unsplash.it/790/1055?image=411',
                },
                title: 'Haus St. Franziskus – lorem ipsum dolor sit amet',
            },
        ]}
        aside={[
            {
                size: 'half',
                image: {
                    small: 'https://unsplash.it/619/464?image=409',
                    medium: 'https://unsplash.it/983/737?image=409',
                    large: 'https://unsplash.it/1399/1050?image=409',
                    xlarge: 'https://unsplash.it/1400/1050?image=409',
                },
                title: 'Haus St. Franziskus – lorem ipsum dolor sit amet',
            },
            {
                size: 'half',
                image: {
                    small: 'https://unsplash.it/619/464?image=410',
                    medium: 'https://unsplash.it/983/737?image=410',
                    large: 'https://unsplash.it/1399/1050?image=410',
                    xlarge: 'https://unsplash.it/1400/1050?image=410',
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
            <ButtonGhost.View isInverted={isInverted}>
                <ButtonGhost.Label>Secondary</ButtonGhost.Label>
            </ButtonGhost.View>
        )}
    />
);

export const WithClickHandlers: Story = () => (
    <CrossPromotion
        main={[
            {
                size: 'half',
                image: {
                    small: 'https://unsplash.it/619/464?image=411',
                    medium: 'https://unsplash.it/791/592?image=411',
                    semilarge: 'https://unsplash.it/689/1054?image=411',
                    large: 'https://unsplash.it/790/1054?image=411',
                    xlarge: 'https://unsplash.it/790/1055?image=411',
                },
                title: 'Haus St. Franziskus – lorem ipsum dolor sit amet',
            },
        ]}
        aside={[
            {
                size: 'half',
                image: {
                    small: 'https://unsplash.it/619/464?image=409',
                    medium: 'https://unsplash.it/983/737?image=409',
                    large: 'https://unsplash.it/1399/1050?image=409',
                    xlarge: 'https://unsplash.it/1400/1050?image=409',
                },
                title: 'Haus St. Franziskus – lorem ipsum dolor sit amet',
            },
            {
                size: 'half',
                image: {
                    small: 'https://unsplash.it/619/464?image=410',
                    medium: 'https://unsplash.it/983/737?image=410',
                    large: 'https://unsplash.it/1399/1050?image=410',
                    xlarge: 'https://unsplash.it/1400/1050?image=410',
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
            <ButtonGhost.View isInverted={isInverted}>
                <ButtonGhost.Label>Secondary</ButtonGhost.Label>
            </ButtonGhost.View>
        )}
    />
);
