import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import Fact from 'components/blocks/Fact';

export default {
    title: 'Blocks/Fact',
    component: Fact,
} as Meta;

export const Default: Story = () => (
    <Fact title="Lorem ipsum dolor sit amet A" />
);

export const WithImage: Story = () => (
    <Fact
        title="Lorem ipsum dolor sit amet A"
        image={{
            small: 'https://unsplash.it/599/450?image=700',
            medium: 'https://unsplash.it/789/789?image=700',
            large: 'https://unsplash.it/591/591?image=700',
            xlarge: 'https://unsplash.it/592/592?image=700',
        }}
    />
);

export const WithImageCovered: Story = () => (
    <Fact
        title="Lorem ipsum dolor sit amet A"
        image={{
            small: 'https://unsplash.it/599/450?image=700',
            medium: 'https://unsplash.it/789/789?image=700',
            large: 'https://unsplash.it/591/591?image=700',
            xlarge: 'https://unsplash.it/592/592?image=700',
            coverSpace: true,
        }}
    />
);
