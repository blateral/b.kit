import React from 'react';
import { Meta, Story } from '@storybook/react';
import Alert from '../../components/blocks/Alert';

export default {
    title: 'Blocks / Alert',
    component: Alert,
} as Meta;

export const Default: Story = () => (
    <Alert label="Änderungen der Corona-Verordnung" date={new Date()} />
);

export const WithLink: Story = () => (
    <Alert
        label="Änderungen der Corona-Verordnung"
        date={new Date()}
        onClick={() => 'click'}
    />
);

export const WithDescriptionText: Story = () => (
    <Alert
        label="Änderungen der Corona-Verordnung"
        date={new Date()}
        onClick={() => 'click'}
        descriptionText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus suscipit voluptatem aliquid itaque eos ullam sit neque ipsam delectus molestiae."
    />
);
