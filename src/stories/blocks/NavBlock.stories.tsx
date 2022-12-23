import React from 'react';
import { Meta, Story } from '@storybook/react';
import NavBlock from 'components/blocks/NavBlock';
import Star from 'components/base/icons/Star';
import ArrowRight from 'components/base/icons/ArrowRight';

export default {
    title: 'Blocks / NavBlock',
    component: NavBlock,
    parameters: {
        status: {
            type: ['preview', 'qsReady'],
        },
    },
} as Meta;

export const Default: Story = () => <NavBlock title="Lorem Ipsum" />;

export const WithLink: Story = () => (
    <NavBlock title="Lorem Ipsum" link={{ href: '#0' }} />
);

export const WithText: Story = () => (
    <NavBlock
        title="Lorem Ipsum"
        link={{ href: '#0' }}
        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa omnis, ad odio sint qui necessitatibus alias est culpa eaque fuga nesciunt laboriosam veritatis exercitationem doloribus nisi, quia corporis fugit? Reprehenderit."
    />
);

export const Inverted: Story = () => (
    <NavBlock
        isInverted
        title="Lorem Ipsum"
        link={{ href: '#0' }}
        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa omnis, ad odio sint qui necessitatibus alias est culpa eaque fuga nesciunt laboriosam veritatis exercitationem doloribus nisi, quia corporis fugit? Reprehenderit."
    />
);

Inverted.parameters = {
    backgrounds: {
        default: 'inverted',
        values: [{ name: 'inverted', value: 'black' }],
    },
};

export const WithCustomIcon: Story = () => (
    <NavBlock
        title="Lorem Ipsum"
        link={{ href: '#0' }}
        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa omnis, ad odio sint qui necessitatibus alias est culpa eaque fuga nesciunt laboriosam veritatis exercitationem doloribus nisi, quia corporis fugit? Reprehenderit."
        customIcon={() => <Star />}
    />
);

export const WithCustomTitleIcon: Story = () => (
    <NavBlock
        title="Lorem Ipsum"
        link={{ href: '#0' }}
        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa omnis, ad odio sint qui necessitatibus alias est culpa eaque fuga nesciunt laboriosam veritatis exercitationem doloribus nisi, quia corporis fugit? Reprehenderit."
        customIcon={() => <Star />}
        customTitleIcon={() => <ArrowRight />}
    />
);
