import React from 'react';
import { Meta, Story } from '@storybook/react';
import NavBlock from 'components/blocks/NavBlock';

export default {
    title: 'Blocks / NavBlock',
    component: NavBlock,
} as Meta;

export const Default: Story = () => <NavBlock label="Lorem Ipsum" />;
export const WithLink: Story = () => <NavBlock label="Lorem Ipsum" href="#0" />;
export const WithText: Story = () => (
    <NavBlock
        label="Lorem Ipsum"
        href="#0"
        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa omnis, ad odio sint qui necessitatibus alias est culpa eaque fuga nesciunt laboriosam veritatis exercitationem doloribus nisi, quia corporis fugit? Reprehenderit."
    />
);
