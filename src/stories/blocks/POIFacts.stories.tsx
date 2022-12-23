import React from 'react';
import { Meta, Story } from '@storybook/react';
import POIFacts from 'components/blocks/POIFacts';

export default {
    title: 'Blocks / POIFacts',
    component: POIFacts,
    parameters: {
        status: {
            type: 'preview',
        },
    },
} as Meta;

export const Default: Story = () => (
    <POIFacts facts={['Fact 1', 'Fact 2', 'Fact 3', 'Fact 4', 'Fact 5']} />
);

export const Inverted: Story = () => (
    <POIFacts
        isInverted
        facts={['Fact 1', 'Fact 2', 'Fact 3', 'Fact 4', 'Fact 5']}
    />
);

Inverted.parameters = {
    backgrounds: {
        default: 'inverted',
        values: [{ name: 'inverted', value: 'black' }],
    },
};

export const CustomFact: Story = () => (
    <POIFacts
        facts={['Fact 1', 'Fact 2', 'Fact 3', 'Fact 4', 'Fact 5']}
        customFact={({ name }) => <span>{name}</span>}
    />
);
