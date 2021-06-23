import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import FactGrid from 'components/sections/FactGrid';
import Button from 'components/buttons/Button';
import ButtonGhost from 'components/buttons/ButtonGhost';

export default {
    title: 'Sections/FactGrid',
    component: FactGrid,
} as Meta;

export const Default: Story = () => (
    <FactGrid
        title="Haus St. Franziskus – lorem ipsum dolor sit amet"
        superTitle="Haus St. Franziskus"
        intro="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem praesentium, alias porro necessitatibus accusantium placeat non sequi ea eos repellendus sapiente facilis fugiat, sunt provident officia quam! Porro inventore quidem libero officia quam? Quasi perferendis laudantium saepe perspiciatis labore inventore corrupti cupiditate ullam beatae illo mollitia quis ea nulla dolores illum voluptatibus dicta, quos sint, eligendi commodi. Laborum aliquam quae necessitatibus ducimus ut maxime eos alias possimus cum, magnam, eum ipsa optio accusantium ullam! Provident eum aliquam saepe facere error deserunt quae tenetur illo rem, ratione velit sed. Dolore harum soluta illum beatae quaerat placeat earum eius nihil, odio omnis!"
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
        facts={[
            {
                title: 'Lorem ipsum dolor sit amet A',
                subTitle: 'Subheadline',
                text: `Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore `,
                image: {
                    small: 'https://unsplash.it/599/450?image=700',
                    medium: 'https://unsplash.it/789/789?image=700',
                    large: 'https://unsplash.it/591/591?image=700',
                    xlarge: 'https://unsplash.it/592/592?image=700',
                },
            },
            {
                title: 'Lorem ipsum dolor sit amet A',
                subTitle: 'Subheadline',
                text: `Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore `,
                image: {
                    small: 'https://unsplash.it/599/450?image=700',
                    medium: 'https://unsplash.it/789/789?image=700',
                    large: 'https://unsplash.it/591/591?image=700',
                    xlarge: 'https://unsplash.it/592/592?image=700',
                },
            },
            {
                title: 'Lorem ipsum dolor sit amet A',
                subTitle: 'Subheadline',
                text: `Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore `,
                image: {
                    small: 'https://unsplash.it/599/450?image=700',
                    medium: 'https://unsplash.it/789/789?image=700',
                    large: 'https://unsplash.it/591/591?image=700',
                    xlarge: 'https://unsplash.it/592/592?image=700',
                },
            },
            {
                title: 'Lorem ipsum dolor sit amet A',
                subTitle: 'Subheadline',
                text: `Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore `,
                image: {
                    small: 'https://unsplash.it/599/450?image=700',
                    medium: 'https://unsplash.it/789/789?image=700',
                    large: 'https://unsplash.it/591/591?image=700',
                    xlarge: 'https://unsplash.it/592/592?image=700',
                },
            },
        ]}
    />
);

export const Centered: Story = () => (
    <FactGrid
        isCentered
        title="Haus St. Franziskus – lorem ipsum dolor sit amet"
        superTitle="Haus St. Franziskus"
        intro="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem praesentium, alias porro necessitatibus accusantium placeat non sequi ea eos repellendus sapiente facilis fugiat, sunt provident officia quam! Porro inventore quidem libero officia quam? Quasi perferendis laudantium saepe perspiciatis labore inventore corrupti cupiditate ullam beatae illo mollitia quis ea nulla dolores illum voluptatibus dicta, quos sint, eligendi commodi. Laborum aliquam quae necessitatibus ducimus ut maxime eos alias possimus cum, magnam, eum ipsa optio accusantium ullam! Provident eum aliquam saepe facere error deserunt quae tenetur illo rem, ratione velit sed. Dolore harum soluta illum beatae quaerat placeat earum eius nihil, odio omnis!"
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
        facts={[
            {
                title: 'Lorem ipsum dolor sit amet A',
                subTitle: 'Subheadline',
                text: `Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore `,
                image: {
                    small: 'https://unsplash.it/599/450?image=700',
                    medium: 'https://unsplash.it/789/789?image=700',
                    large: 'https://unsplash.it/591/591?image=700',
                    xlarge: 'https://unsplash.it/592/592?image=700',
                },
            },
            {
                title: 'Lorem ipsum dolor sit amet A',
                subTitle: 'Subheadline',
                text: `Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore `,
                image: {
                    small: 'https://unsplash.it/599/450?image=700',
                    medium: 'https://unsplash.it/789/789?image=700',
                    large: 'https://unsplash.it/591/591?image=700',
                    xlarge: 'https://unsplash.it/592/592?image=700',
                },
            },
            {
                title: 'Lorem ipsum dolor sit amet A',
                subTitle: 'Subheadline',
                text: `Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore `,
                image: {
                    small: 'https://unsplash.it/599/450?image=700',
                    medium: 'https://unsplash.it/789/789?image=700',
                    large: 'https://unsplash.it/591/591?image=700',
                    xlarge: 'https://unsplash.it/592/592?image=700',
                },
            },
            {
                title: 'Lorem ipsum dolor sit amet A',
                subTitle: 'Subheadline',
                text: `Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore `,
                image: {
                    small: 'https://unsplash.it/599/450?image=700',
                    medium: 'https://unsplash.it/789/789?image=700',
                    large: 'https://unsplash.it/591/591?image=700',
                    xlarge: 'https://unsplash.it/592/592?image=700',
                },
            },
        ]}
    />
);

export const With4Columns: Story = () => (
    <FactGrid
        columns={4}
        title="Haus St. Franziskus – lorem ipsum dolor sit amet"
        superTitle="Haus St. Franziskus"
        intro="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem praesentium, alias porro necessitatibus accusantium placeat non sequi ea eos repellendus sapiente facilis fugiat, sunt provident officia quam! Porro inventore quidem libero officia quam? Quasi perferendis laudantium saepe perspiciatis labore inventore corrupti cupiditate ullam beatae illo mollitia quis ea nulla dolores illum voluptatibus dicta, quos sint, eligendi commodi. Laborum aliquam quae necessitatibus ducimus ut maxime eos alias possimus cum, magnam, eum ipsa optio accusantium ullam! Provident eum aliquam saepe facere error deserunt quae tenetur illo rem, ratione velit sed. Dolore harum soluta illum beatae quaerat placeat earum eius nihil, odio omnis!"
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
        facts={[
            {
                title: 'Lorem ipsum dolor sit amet A',
                subTitle: 'Subheadline',
                text: `Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore `,
                image: {
                    small: 'https://unsplash.it/599/450?image=700',
                    medium: 'https://unsplash.it/789/789?image=700',
                    large: 'https://unsplash.it/591/591?image=700',
                    xlarge: 'https://unsplash.it/592/592?image=700',
                },
            },
            {
                title: 'Lorem ipsum dolor sit amet A',
                subTitle: 'Subheadline',
                text: `Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore `,
                image: {
                    small: 'https://unsplash.it/599/450?image=700',
                    medium: 'https://unsplash.it/789/789?image=700',
                    large: 'https://unsplash.it/591/591?image=700',
                    xlarge: 'https://unsplash.it/592/592?image=700',
                },
            },
            {
                title: 'Lorem ipsum dolor sit amet A',
                subTitle: 'Subheadline',
                text: `Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore `,
                image: {
                    small: 'https://unsplash.it/599/450?image=700',
                    medium: 'https://unsplash.it/789/789?image=700',
                    large: 'https://unsplash.it/591/591?image=700',
                    xlarge: 'https://unsplash.it/592/592?image=700',
                },
            },
            {
                title: 'Lorem ipsum dolor sit amet A',
                subTitle: 'Subheadline',
                text: `Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore `,
                image: {
                    small: 'https://unsplash.it/599/450?image=700',
                    medium: 'https://unsplash.it/789/789?image=700',
                    large: 'https://unsplash.it/591/591?image=700',
                    xlarge: 'https://unsplash.it/592/592?image=700',
                },
            },
            {
                title: 'Lorem ipsum dolor sit amet A',
                subTitle: 'Subheadline',
                text: `Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore `,
                image: {
                    small: 'https://unsplash.it/599/450?image=700',
                    medium: 'https://unsplash.it/789/789?image=700',
                    large: 'https://unsplash.it/591/591?image=700',
                    xlarge: 'https://unsplash.it/592/592?image=700',
                },
            },
            {
                title: 'Lorem ipsum dolor sit amet A',
                subTitle: 'Subheadline',
                text: `Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore `,
                image: {
                    small: 'https://unsplash.it/599/450?image=700',
                    medium: 'https://unsplash.it/789/789?image=700',
                    large: 'https://unsplash.it/591/591?image=700',
                    xlarge: 'https://unsplash.it/592/592?image=700',
                },
            },
        ]}
    />
);

export const With6Columns: Story = () => (
    <FactGrid
        columns={6}
        title="Haus St. Franziskus – lorem ipsum dolor sit amet"
        superTitle="Haus St. Franziskus"
        intro="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem praesentium, alias porro necessitatibus accusantium placeat non sequi ea eos repellendus sapiente facilis fugiat, sunt provident officia quam! Porro inventore quidem libero officia quam? Quasi perferendis laudantium saepe perspiciatis labore inventore corrupti cupiditate ullam beatae illo mollitia quis ea nulla dolores illum voluptatibus dicta, quos sint, eligendi commodi. Laborum aliquam quae necessitatibus ducimus ut maxime eos alias possimus cum, magnam, eum ipsa optio accusantium ullam! Provident eum aliquam saepe facere error deserunt quae tenetur illo rem, ratione velit sed. Dolore harum soluta illum beatae quaerat placeat earum eius nihil, odio omnis!"
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
        facts={[
            {
                title: 'Lorem ipsum dolor sit amet A',
                subTitle: 'Subheadline',
                text: `Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore `,
                image: {
                    small: 'https://unsplash.it/599/450?image=700',
                    medium: 'https://unsplash.it/789/789?image=700',
                    large: 'https://unsplash.it/591/591?image=700',
                    xlarge: 'https://unsplash.it/592/592?image=700',
                },
            },
            {
                title: 'Lorem ipsum dolor sit amet A',
                subTitle: 'Subheadline',
                text: `Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore `,
                image: {
                    small: 'https://unsplash.it/599/450?image=700',
                    medium: 'https://unsplash.it/789/789?image=700',
                    large: 'https://unsplash.it/591/591?image=700',
                    xlarge: 'https://unsplash.it/592/592?image=700',
                },
            },
            {
                title: 'Lorem ipsum dolor sit amet A',
                subTitle: 'Subheadline',
                text: `Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore `,
                image: {
                    small: 'https://unsplash.it/599/450?image=700',
                    medium: 'https://unsplash.it/789/789?image=700',
                    large: 'https://unsplash.it/591/591?image=700',
                    xlarge: 'https://unsplash.it/592/592?image=700',
                },
            },
            {
                title: 'Lorem ipsum dolor sit amet A',
                subTitle: 'Subheadline',
                text: `Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore `,
                image: {
                    small: 'https://unsplash.it/599/450?image=700',
                    medium: 'https://unsplash.it/789/789?image=700',
                    large: 'https://unsplash.it/591/591?image=700',
                    xlarge: 'https://unsplash.it/592/592?image=700',
                },
            },
            {
                title: 'Lorem ipsum dolor sit amet A',
                subTitle: 'Subheadline',
                text: `Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore `,
                image: {
                    small: 'https://unsplash.it/599/450?image=700',
                    medium: 'https://unsplash.it/789/789?image=700',
                    large: 'https://unsplash.it/591/591?image=700',
                    xlarge: 'https://unsplash.it/592/592?image=700',
                },
            },
            {
                title: 'Lorem ipsum dolor sit amet A',
                subTitle: 'Subheadline',
                text: `Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore `,
                image: {
                    small: 'https://unsplash.it/599/450?image=700',
                    medium: 'https://unsplash.it/789/789?image=700',
                    large: 'https://unsplash.it/591/591?image=700',
                    xlarge: 'https://unsplash.it/592/592?image=700',
                },
            },
            {
                title: 'Lorem ipsum dolor sit amet A',
                subTitle: 'Subheadline',
                text: `Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore `,
                image: {
                    small: 'https://unsplash.it/599/450?image=700',
                    medium: 'https://unsplash.it/789/789?image=700',
                    large: 'https://unsplash.it/591/591?image=700',
                    xlarge: 'https://unsplash.it/592/592?image=700',
                },
            },
            {
                title: 'Lorem ipsum dolor sit amet A',
                subTitle: 'Subheadline',
                text: `Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore `,
                image: {
                    small: 'https://unsplash.it/599/450?image=700',
                    medium: 'https://unsplash.it/789/789?image=700',
                    large: 'https://unsplash.it/591/591?image=700',
                    xlarge: 'https://unsplash.it/592/592?image=700',
                },
            },
            {
                title: 'Lorem ipsum dolor sit amet A',
                subTitle: 'Subheadline',
                text: `Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore `,
                image: {
                    small: 'https://unsplash.it/599/450?image=700',
                    medium: 'https://unsplash.it/789/789?image=700',
                    large: 'https://unsplash.it/591/591?image=700',
                    xlarge: 'https://unsplash.it/592/592?image=700',
                },
            },
            {
                title: 'Lorem ipsum dolor sit amet A',
                subTitle: 'Subheadline',
                text: `Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore `,
                image: {
                    small: 'https://unsplash.it/599/450?image=700',
                    medium: 'https://unsplash.it/789/789?image=700',
                    large: 'https://unsplash.it/591/591?image=700',
                    xlarge: 'https://unsplash.it/592/592?image=700',
                },
            },
            {
                title: 'Lorem ipsum dolor sit amet A',
                subTitle: 'Subheadline',
                text: `Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore `,
                image: {
                    small: 'https://unsplash.it/599/450?image=700',
                    medium: 'https://unsplash.it/789/789?image=700',
                    large: 'https://unsplash.it/591/591?image=700',
                    xlarge: 'https://unsplash.it/592/592?image=700',
                },
            },
            {
                title: 'Lorem ipsum dolor sit amet A',
                subTitle: 'Subheadline',
                text: `Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore `,
                image: {
                    small: 'https://unsplash.it/599/450?image=700',
                    medium: 'https://unsplash.it/789/789?image=700',
                    large: 'https://unsplash.it/591/591?image=700',
                    xlarge: 'https://unsplash.it/592/592?image=700',
                },
            },
        ]}
    />
);

export const Inverted: Story = () => (
    <FactGrid
        isInverted
        columns={6}
        title="Haus St. Franziskus – lorem ipsum dolor sit amet"
        superTitle="Haus St. Franziskus"
        intro="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem praesentium, alias porro necessitatibus accusantium placeat non sequi ea eos repellendus sapiente facilis fugiat, sunt provident officia quam! Porro inventore quidem libero officia quam? Quasi perferendis laudantium saepe perspiciatis labore inventore corrupti cupiditate ullam beatae illo mollitia quis ea nulla dolores illum voluptatibus dicta, quos sint, eligendi commodi. Laborum aliquam quae necessitatibus ducimus ut maxime eos alias possimus cum, magnam, eum ipsa optio accusantium ullam! Provident eum aliquam saepe facere error deserunt quae tenetur illo rem, ratione velit sed. Dolore harum soluta illum beatae quaerat placeat earum eius nihil, odio omnis!"
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
        facts={[
            {
                title: 'Lorem ipsum dolor sit amet A',
                subTitle: 'Subheadline',
                text: `Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore `,
                image: {
                    small: 'https://unsplash.it/599/450?image=700',
                    medium: 'https://unsplash.it/789/789?image=700',
                    large: 'https://unsplash.it/591/591?image=700',
                    xlarge: 'https://unsplash.it/592/592?image=700',
                },
            },
            {
                title: 'Lorem ipsum dolor sit amet A',
                subTitle: 'Subheadline',
                text: `Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore `,
                image: {
                    small: 'https://unsplash.it/599/450?image=700',
                    medium: 'https://unsplash.it/789/789?image=700',
                    large: 'https://unsplash.it/591/591?image=700',
                    xlarge: 'https://unsplash.it/592/592?image=700',
                },
            },
            {
                title: 'Lorem ipsum dolor sit amet A',
                subTitle: 'Subheadline',
                text: `Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore `,
                image: {
                    small: 'https://unsplash.it/599/450?image=700',
                    medium: 'https://unsplash.it/789/789?image=700',
                    large: 'https://unsplash.it/591/591?image=700',
                    xlarge: 'https://unsplash.it/592/592?image=700',
                },
            },
            {
                title: 'Lorem ipsum dolor sit amet A',
                subTitle: 'Subheadline',
                text: `Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore `,
                image: {
                    small: 'https://unsplash.it/599/450?image=700',
                    medium: 'https://unsplash.it/789/789?image=700',
                    large: 'https://unsplash.it/591/591?image=700',
                    xlarge: 'https://unsplash.it/592/592?image=700',
                },
            },
            {
                title: 'Lorem ipsum dolor sit amet A',
                subTitle: 'Subheadline',
                text: `Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore `,
                image: {
                    small: 'https://unsplash.it/599/450?image=700',
                    medium: 'https://unsplash.it/789/789?image=700',
                    large: 'https://unsplash.it/591/591?image=700',
                    xlarge: 'https://unsplash.it/592/592?image=700',
                },
            },
            {
                title: 'Lorem ipsum dolor sit amet A',
                subTitle: 'Subheadline',
                text: `Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore `,
                image: {
                    small: 'https://unsplash.it/599/450?image=700',
                    medium: 'https://unsplash.it/789/789?image=700',
                    large: 'https://unsplash.it/591/591?image=700',
                    xlarge: 'https://unsplash.it/592/592?image=700',
                },
            },
            {
                title: 'Lorem ipsum dolor sit amet A',
                subTitle: 'Subheadline',
                text: `Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore `,
                image: {
                    small: 'https://unsplash.it/599/450?image=700',
                    medium: 'https://unsplash.it/789/789?image=700',
                    large: 'https://unsplash.it/591/591?image=700',
                    xlarge: 'https://unsplash.it/592/592?image=700',
                },
            },
            {
                title: 'Lorem ipsum dolor sit amet A',
                subTitle: 'Subheadline',
                text: `Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore `,
                image: {
                    small: 'https://unsplash.it/599/450?image=700',
                    medium: 'https://unsplash.it/789/789?image=700',
                    large: 'https://unsplash.it/591/591?image=700',
                    xlarge: 'https://unsplash.it/592/592?image=700',
                },
            },
            {
                title: 'Lorem ipsum dolor sit amet A',
                subTitle: 'Subheadline',
                text: `Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore `,
                image: {
                    small: 'https://unsplash.it/599/450?image=700',
                    medium: 'https://unsplash.it/789/789?image=700',
                    large: 'https://unsplash.it/591/591?image=700',
                    xlarge: 'https://unsplash.it/592/592?image=700',
                },
            },
            {
                title: 'Lorem ipsum dolor sit amet A',
                subTitle: 'Subheadline',
                text: `Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore `,
                image: {
                    small: 'https://unsplash.it/599/450?image=700',
                    medium: 'https://unsplash.it/789/789?image=700',
                    large: 'https://unsplash.it/591/591?image=700',
                    xlarge: 'https://unsplash.it/592/592?image=700',
                },
            },
            {
                title: 'Lorem ipsum dolor sit amet A',
                subTitle: 'Subheadline',
                text: `Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore `,
                image: {
                    small: 'https://unsplash.it/599/450?image=700',
                    medium: 'https://unsplash.it/789/789?image=700',
                    large: 'https://unsplash.it/591/591?image=700',
                    xlarge: 'https://unsplash.it/592/592?image=700',
                },
            },
            {
                title: 'Lorem ipsum dolor sit amet A',
                subTitle: 'Subheadline',
                text: `Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore `,
                image: {
                    small: 'https://unsplash.it/599/450?image=700',
                    medium: 'https://unsplash.it/789/789?image=700',
                    large: 'https://unsplash.it/591/591?image=700',
                    xlarge: 'https://unsplash.it/592/592?image=700',
                },
            },
        ]}
    />
);
