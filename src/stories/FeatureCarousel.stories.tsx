/* eslint-disable react/display-name */
import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import { generateItemList } from 'utils/storyHelpers';
import FeatureCarousel from 'components/sections/carousel/FeatureCarousel';
import Button from 'components/buttons/Button';
import ArrowRight from 'components/base/icons/ArrowRight';
import { FeatureProps } from 'components/blocks/Feature';
import ButtonGhost from 'components/buttons/ButtonGhost';

const actions = {
    primaryAction: (isInverted?: boolean) => (
        <Button.View isInverted={isInverted}>
            <Button.Label>Primary</Button.Label>
        </Button.View>
    ),
    secondaryAction: (isInverted?: boolean) => (
        <ButtonGhost.View isInverted={isInverted}>
            <ButtonGhost.Label>Secondary</ButtonGhost.Label>
        </ButtonGhost.View>
    ),
};

const exampleFeature: FeatureProps = {
    addWhitespace: true,
    image: {
        small: 'https://unsplash.it/502/376',
        medium: 'https://unsplash.it/600/600',
        large: 'https://unsplash.it/314/314',
        xlarge: 'https://unsplash.it/453/453',
    },
    title:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy',
    description: 'Name/ Place/Position/ Telefon/Date',
    intro:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
    text:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
    ...actions,
};

const exampleFeatures = generateItemList<FeatureProps>(
    exampleFeature,
    4,
    (item, i) => ({
        ...item,
        image: {
            small: `${item.image?.small}?image=70${i}`,
            medium: `${item.image?.medium}?image=70${i}`,
            large: `${item.image?.large}?image=70${i}`,
            xlarge: `${item.image?.xlarge}?image=70${i}`,
        },
    })
);

export default {
    title: 'Sections/Carousels/FeatureCarousel',
    component: FeatureCarousel,
} as Meta;

export const Default: Story = () => (
    <FeatureCarousel
        features={exampleFeatures.map((feature, i) => {
            return {
                ...feature,
                image: {
                    small: 'https://unsplash.it/553/553?image=70' + i,
                    medium: 'https://unsplash.it/325/325?image=70' + i,
                    large: 'https://unsplash.it/462/462?image=70' + i,
                    xlarge: 'https://unsplash.it/620/620?image=70' + i,
                },
            };
        })}
    />
);

export const WithIntro: Story = () => (
    <FeatureCarousel
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
        features={exampleFeatures.map((feature, i) => {
            return {
                ...feature,
                image: {
                    small: 'https://unsplash.it/553/553?image=70' + i,
                    medium: 'https://unsplash.it/325/325?image=70' + i,
                    large: 'https://unsplash.it/462/462?image=70' + i,
                    xlarge: 'https://unsplash.it/620/620?image=70' + i,
                },
            };
        })}
    />
);

export const ImageRatioA: Story = () => (
    <FeatureCarousel
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
        features={exampleFeatures.map((feature, i) => {
            return {
                ...feature,
                image: {
                    small: 'https://unsplash.it/553/415?image=70' + i,
                    medium: 'https://unsplash.it/325/244?image=70' + i,
                    large: 'https://unsplash.it/462/347?image=70' + i,
                    xlarge: 'https://unsplash.it/620/465?image=70' + i,
                },
            };
        })}
    />
);
ImageRatioA.storyName = 'Image ratio 4:3';

export const ImageRatioB: Story = () => (
    <FeatureCarousel
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
        features={exampleFeatures.map((feature, i) => {
            return {
                ...feature,
                image: {
                    small: 'https://unsplash.it/554/743?image=70' + i,
                    medium: 'https://unsplash.it/274/367?image=70' + i,
                    large: 'https://unsplash.it/325/436?image=70' + i,
                    xlarge: 'https://unsplash.it/468/628?image=70' + i,
                },
            };
        })}
    />
);
ImageRatioB.storyName = 'Image ratio 3:4';

export const Inverted: Story = () => (
    <FeatureCarousel
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
        features={exampleFeatures.map((feature, i) => {
            return {
                ...feature,
                image: {
                    small: 'https://unsplash.it/553/553?image=70' + i,
                    medium: 'https://unsplash.it/325/325?image=70' + i,
                    large: 'https://unsplash.it/462/462?image=70' + i,
                    xlarge: 'https://unsplash.it/620/620?image=70' + i,
                },
            };
        })}
    />
);

export const WithBackground: Story = () => (
    <FeatureCarousel
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
        features={exampleFeatures.map((feature, i) => {
            return {
                ...feature,
                image: {
                    small: 'https://unsplash.it/553/553?image=70' + i,
                    medium: 'https://unsplash.it/325/325?image=70' + i,
                    large: 'https://unsplash.it/462/462?image=70' + i,
                    xlarge: 'https://unsplash.it/620/620?image=70' + i,
                },
            };
        })}
    />
);

export const WithHalfBackground: Story = () => (
    <FeatureCarousel
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
        features={exampleFeatures.map((feature, i) => {
            return {
                ...feature,
                image: {
                    small: 'https://unsplash.it/553/553?image=70' + i,
                    medium: 'https://unsplash.it/325/325?image=70' + i,
                    large: 'https://unsplash.it/462/462?image=70' + i,
                    xlarge: 'https://unsplash.it/620/620?image=70' + i,
                },
            };
        })}
    />
);

export const WithHandlers: Story = () => (
    <FeatureCarousel
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
        features={exampleFeatures.map((feature, i) => {
            return {
                ...feature,
                image: {
                    small: 'https://unsplash.it/553/553?image=70' + i,
                    medium: 'https://unsplash.it/325/325?image=70' + i,
                    large: 'https://unsplash.it/462/462?image=70' + i,
                    xlarge: 'https://unsplash.it/620/620?image=70' + i,
                },
            };
        })}
    />
);

export const WithCustomControls: Story = () => (
    <FeatureCarousel
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
        features={exampleFeatures.map((feature, i) => {
            return {
                ...feature,
                image: {
                    small: 'https://unsplash.it/553/553?image=70' + i,
                    medium: 'https://unsplash.it/325/325?image=70' + i,
                    large: 'https://unsplash.it/462/462?image=70' + i,
                    xlarge: 'https://unsplash.it/620/620?image=70' + i,
                },
            };
        })}
    />
);

export const WithCustomDots: Story = () => (
    <FeatureCarousel
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
        features={exampleFeatures.map((feature, i) => {
            return {
                ...feature,
                image: {
                    small: 'https://unsplash.it/553/553?image=70' + i,
                    medium: 'https://unsplash.it/325/325?image=70' + i,
                    large: 'https://unsplash.it/462/462?image=70' + i,
                    xlarge: 'https://unsplash.it/620/620?image=70' + i,
                },
            };
        })}
    />
);
