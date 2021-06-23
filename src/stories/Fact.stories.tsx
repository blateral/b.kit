import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import Fact from 'components/blocks/Fact';

export default {
    title: 'Blocks/Fact',
    component: Fact,
} as Meta;

export const WithTitle: Story = () => (
    <Fact title="Lorem ipsum dolor sit amet A" />
);

export const WithSubtitle: Story = () => (
    <Fact title="Lorem ipsum dolor sit amet A" subTitle="Subheadline" />
);

export const WithText: Story = () => (
    <Fact
        title="Lorem ipsum dolor sit amet A"
        subTitle="Subheadline"
        text={`Lorem ipsum dolor sit amet consetetur 
            sadipscing elitr, sed diam nonumy eirmod 
            tempor invidunt ut labore Lorem ipsum dolor sit amet consetetur 
            sadipscing elitr, sed diam nonumy eirmod 
            tempor invidunt ut labore `}
    />
);

export const WithImage: Story = () => (
    <Fact
        title="Lorem ipsum dolor sit amet A"
        subTitle="Subheadline"
        text={`Lorem ipsum dolor sit amet consetetur 
            sadipscing elitr, sed diam nonumy eirmod 
            tempor invidunt ut labore Lorem ipsum dolor sit amet consetetur 
            sadipscing elitr, sed diam nonumy eirmod 
            tempor invidunt ut labore `}
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
        subTitle="Subheadline"
        text={`Lorem ipsum dolor sit amet consetetur 
            sadipscing elitr, sed diam nonumy eirmod 
            tempor invidunt ut labore Lorem ipsum dolor sit amet consetetur 
            sadipscing elitr, sed diam nonumy eirmod 
            tempor invidunt ut labore `}
        image={{
            small: 'https://unsplash.it/599/450?image=700',
            medium: 'https://unsplash.it/789/789?image=700',
            large: 'https://unsplash.it/591/591?image=700',
            xlarge: 'https://unsplash.it/592/592?image=700',
            coverSpace: true,
        }}
    />
);
