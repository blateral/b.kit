import React from 'react';
import { Meta, Story } from '@storybook/react';
import Alert from '../../components/blocks/Alert';
import Star from 'components/base/icons/Star';

export default {
    title: 'Blocks / Alert',
    component: Alert,
    parameters: {
        status: {
            type: ['preview', 'qsReady'],
        },
    },
    decorators: [
        (Story) => (
            <div style={{ padding: '20px' }}>
                <Story />
            </div>
        ),
    ],
} as Meta;

export const Default: Story = () => (
    <Alert
        title="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        date={new Date()}
    />
);

export const WithLink: Story = () => (
    <Alert
        title="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        date={new Date()}
        link={{ href: '#' }}
    />
);

export const WithDescription: Story = () => (
    <Alert
        title="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        date={new Date()}
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus suscipit voluptatem aliquid itaque eos ullam sit neque ipsam delectus molestiae."
        link={{ href: '#' }}
    />
);

export const Inverted: Story = () => (
    <Alert
        isInverted
        title="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        date={new Date()}
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus suscipit voluptatem aliquid itaque eos ullam sit neque ipsam delectus molestiae."
        link={{ href: '#' }}
    />
);

Inverted.parameters = {
    backgrounds: {
        default: 'inverted',
        values: [{ name: 'inverted', value: 'black' }],
    },
};

export const CustomIcon: Story = () => (
    <Alert
        title="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        date={new Date()}
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus suscipit voluptatem aliquid itaque eos ullam sit neque ipsam delectus molestiae."
        link={{ href: '#' }}
        customIcon={() => <Star />}
    />
);
