import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import FactGrid from 'components/sections/FactGrid';
import Button from 'components/buttons/Button';
import ButtonGhost from 'components/buttons/ButtonGhost';
import { generateItemList } from 'utils/storyHelpers';
import { FactProps } from 'components/blocks/Fact';

export default {
    title: 'Sections/FactGrid',
    component: FactGrid,
} as Meta;

const exampleFact = {
    title: 'Lorem ipsum dolor sit amet',
    subTitle: 'Subheadline',
    text: `Lorem ipsum dolor sit amet consetetur 
        sadipscing elitr, sed diam nonumy eirmod 
        tempor invidunt ut labore Lorem ipsum dolor sit amet consetetur 
        sadipscing elitr, sed diam nonumy eirmod 
        tempor invidunt ut labore `,
    image: {
        small: 'https://unsplash.it/620/310?image=700',
        medium: 'https://unsplash.it/250/188?image=700',
        semilarge: 'https://unsplash.it/310/233?image=700',
        large: 'https://unsplash.it/350/263?image=700',
    },
};

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
        facts={generateItemList<FactProps>(exampleFact, 4, (item, i) => ({
            ...item,
            image: {
                small: 'https://unsplash.it/620/310?image=70' + i,
                medium: 'https://unsplash.it/250/188?image=70' + i,
                semilarge: 'https://unsplash.it/310/233?image=70' + i,
                large: 'https://unsplash.it/350/263?image=70' + i,
                coverSpace: true,
            },
        }))}
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
        facts={generateItemList<FactProps>(exampleFact, 4, (item, i) => ({
            ...item,
            image: {
                small: 'https://unsplash.it/620/310?image=70' + i,
                medium: 'https://unsplash.it/250/188?image=70' + i,
                semilarge: 'https://unsplash.it/310/233?image=70' + i,
                large: 'https://unsplash.it/350/263?image=70' + i,
                coverSpace: true,
            },
        }))}
    />
);

export const WithAlternativeRatio: Story = () => (
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
        facts={generateItemList<FactProps>(exampleFact, 4, (item, i) => ({
            ...item,
            image: {
                small: 'https://unsplash.it/620/310?image=70' + i,
                medium: 'https://unsplash.it/250/125?image=70' + i,
                semilarge: 'https://unsplash.it/310/155?image=70' + i,
                large: 'https://unsplash.it/350/175?image=70' + i,
                coverSpace: true,
            },
        }))}
    />
);
WithAlternativeRatio.storyName = 'With image ration 2:1';

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
        facts={generateItemList<FactProps>(exampleFact, 6, (item, i) => ({
            ...item,
            image: {
                small: 'https://unsplash.it/620/310?image=70' + i,
                medium: 'https://unsplash.it/250/188?image=70' + i,
                semilarge: 'https://unsplash.it/310/233?image=70' + i,
                large: 'https://unsplash.it/350/263?image=70' + i,
                coverSpace: true,
            },
        }))}
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
        facts={generateItemList<FactProps>(exampleFact, 11)}
    />
);

export const WithEmptyColumns: Story = () => (
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
                title: 'Lorem ipsum dolor sit amet',
                subTitle: 'Subheadline',
                text: `Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore `,
                image: {
                    small: 'https://unsplash.it/620/310?image=700',
                    medium: 'https://unsplash.it/250/188?image=700',
                    semilarge: 'https://unsplash.it/310/233?image=700',
                    large: 'https://unsplash.it/350/263?image=700',
                    coverSpace: true,
                },
            },
            {
                title: 'Lorem ipsum dolor sit amet',
                subTitle: 'Subheadline',
                text: `Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore `,
                image: {
                    small: 'https://unsplash.it/620/310?image=700',
                    medium: 'https://unsplash.it/250/188?image=700',
                    semilarge: 'https://unsplash.it/310/233?image=700',
                    large: 'https://unsplash.it/350/263?image=700',
                    coverSpace: true,
                },
            },
            {
                title: 'Lorem ipsum dolor sit amet',
                subTitle: 'Subheadline',
                text: `Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore `,
                image: {
                    small: 'https://unsplash.it/620/310?image=700',
                    medium: 'https://unsplash.it/250/188?image=700',
                    semilarge: 'https://unsplash.it/310/233?image=700',
                    large: 'https://unsplash.it/350/263?image=700',
                    coverSpace: true,
                },
            },
            {
                title: 'Lorem ipsum dolor sit amet',
                subTitle: 'Subheadline',
                text: `Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore `,
                image: {
                    small: 'https://unsplash.it/620/310?image=700',
                    medium: 'https://unsplash.it/250/188?image=700',
                    semilarge: 'https://unsplash.it/310/233?image=700',
                    large: 'https://unsplash.it/350/263?image=700',
                    coverSpace: true,
                },
            },
            {
                title: 'Lorem ipsum dolor sit amet',
                subTitle: 'Subheadline',
                text: `Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore `,
                image: {
                    small: 'https://unsplash.it/620/310?image=700',
                    medium: 'https://unsplash.it/250/188?image=700',
                    semilarge: 'https://unsplash.it/310/233?image=700',
                    large: 'https://unsplash.it/350/263?image=700',
                    coverSpace: true,
                },
            },
            {
                title: 'Lorem ipsum dolor sit amet',
                subTitle: 'Subheadline',
                text: `Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore `,
                image: {
                    small: 'https://unsplash.it/620/310?image=700',
                    medium: 'https://unsplash.it/250/188?image=700',
                    semilarge: 'https://unsplash.it/310/233?image=700',
                    large: 'https://unsplash.it/350/263?image=700',
                    coverSpace: true,
                },
            },
            {
                title: 'Lorem ipsum dolor sit amet',
                subTitle: 'Subheadline',
                text: `Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore `,
                image: {
                    small: 'https://unsplash.it/620/310?image=700',
                    medium: 'https://unsplash.it/250/188?image=700',
                    semilarge: 'https://unsplash.it/310/233?image=700',
                    large: 'https://unsplash.it/350/263?image=700',
                    coverSpace: true,
                },
            },
            {},
            {
                title: 'Lorem ipsum dolor sit amet',
                subTitle: 'Subheadline',
                text: `Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore `,
                image: {
                    small: 'https://unsplash.it/620/310?image=700',
                    medium: 'https://unsplash.it/250/188?image=700',
                    semilarge: 'https://unsplash.it/310/233?image=700',
                    large: 'https://unsplash.it/350/263?image=700',
                    coverSpace: true,
                },
            },
            {
                title: 'Lorem ipsum dolor sit amet',
                subTitle: 'Subheadline',
                text: `Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore `,
                image: {
                    small: 'https://unsplash.it/620/310?image=700',
                    medium: 'https://unsplash.it/250/188?image=700',
                    semilarge: 'https://unsplash.it/310/233?image=700',
                    large: 'https://unsplash.it/350/263?image=700',
                    coverSpace: true,
                },
            },
            {},
            {
                title: 'Lorem ipsum dolor sit amet',
                subTitle: 'Subheadline',
                text: `Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore `,
                image: {
                    small: 'https://unsplash.it/620/310?image=700',
                    medium: 'https://unsplash.it/250/188?image=700',
                    semilarge: 'https://unsplash.it/310/233?image=700',
                    large: 'https://unsplash.it/350/263?image=700',
                    coverSpace: true,
                },
            },
        ]}
    />
);

export const WithBackground: Story = () => (
    <FactGrid
        bgMode="full"
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
        facts={generateItemList<FactProps>(exampleFact, 6, (item, i) => ({
            ...item,
            image: {
                small: 'https://unsplash.it/620/310?image=70' + i,
                medium: 'https://unsplash.it/250/188?image=70' + i,
                semilarge: 'https://unsplash.it/310/233?image=70' + i,
                large: 'https://unsplash.it/350/263?image=70' + i,
                coverSpace: true,
            },
        }))}
    />
);

export const WithSplittedBackground: Story = () => (
    <FactGrid
        bgMode="splitted"
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
        facts={generateItemList<FactProps>(exampleFact, 6, (item, i) => ({
            ...item,
            image: {
                small: 'https://unsplash.it/620/310?image=70' + i,
                medium: 'https://unsplash.it/250/188?image=70' + i,
                semilarge: 'https://unsplash.it/310/233?image=70' + i,
                large: 'https://unsplash.it/350/263?image=70' + i,
                coverSpace: true,
            },
        }))}
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
        facts={generateItemList<FactProps>(exampleFact, 6, (item, i) => ({
            ...item,
            image: {
                small: 'https://unsplash.it/620/310?image=70' + i,
                medium: 'https://unsplash.it/250/188?image=70' + i,
                semilarge: 'https://unsplash.it/310/233?image=70' + i,
                large: 'https://unsplash.it/350/263?image=70' + i,
                coverSpace: true,
            },
        }))}
    />
);
