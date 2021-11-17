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
        title="Ausstattung der Zimmer für Dauer- und Kurzzeitpflege"
        titleAs="h2"
    />
);

export const WithSupertitle: Story = () => (
    <Title
        title="Ausstattung der Zimmer für Dauer- und Kurzzeitpflege"
        titleAs="h2"
        superTitle="Haus St. Franziskus"
    />
);

export const Centered: Story = () => (
    <Title
        isCentered
        title="Ausstattung der Zimmer für Dauer- und Kurzzeitpflege"
        titleAs="h2"
        superTitle="Haus St. Franziskus"
    />
);

export const Inverted: Story = () => (
    <Title
        colorMode="inverted"
        isCentered
        title="Ausstattung der Zimmer für Dauer- und Kurzzeitpflege"
        titleAs="h2"
        superTitle="Haus St. Franziskus"
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
        title="Ausstattung der Zimmer für Dauer- und Kurzzeitpflege"
        titleAs="h2"
        superTitle="Haus St. Franziskus"
    />
);

OnImage.parameters = {
    backgrounds: {
        default: 'inverted',
        values: [{ name: 'inverted', value: 'black' }],
    },
};
