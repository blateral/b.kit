import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import Title from 'components/blocks/Title';

export default {
    title: 'Blocks/Title',
    component: Title,
    parameters: {
        status: {
            type: 'stable',
        },
    },
} as Meta;

export const Default: Story = () => (
    <Title
        title="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor"
        titleAs="h2"
    />
);

export const WithSupertitle: Story = () => (
    <Title
        title="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor"
        titleAs="h2"
        superTitle="Lorem Ipsum"
    />
);

export const Centered: Story = () => (
    <Title
        isCentered
        title="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor"
        titleAs="h2"
        superTitle="Lorem Ipsum"
    />
);

export const Inverted: Story = () => (
    <Title
        colorMode="inverted"
        isCentered
        title="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor"
        titleAs="h2"
        superTitle="Lorem Ipsum"
    />
);

Inverted.parameters = {
    backgrounds: {
        default: 'inverted',
        values: [{ name: 'inverted', value: 'black' }],
    },
};

export const OnImage: Story = () => (
    <Title
        colorMode="onImage"
        isCentered
        title="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor"
        titleAs="h2"
        superTitle="Lorem Ipsum"
    />
);

OnImage.parameters = {
    backgrounds: {
        default: 'inverted',
        values: [{ name: 'inverted', value: 'black' }],
    },
};
