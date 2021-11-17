import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import PromotionCard from 'components/blocks/PromotionCard';

export default {
    title: 'Blocks/PromotionCard',
    component: PromotionCard,
    parameters: {
        status: {
            type: 'stable',
        },
    },
} as Meta;

export const Default: Story = () => (
    <PromotionCard
        title="Haus St. Franziskus – lorem ipsum dolor sit amet"
        image={{
            small: 'https://unsplash.it/338/253?image=409',
            medium: 'https://unsplash.it/722/541?image=409',
            large: 'https://unsplash.it/958/718?image=409',
        }}
    />
);

export const WithText: Story = () => (
    <PromotionCard
        title="Haus St. Franziskus – lorem ipsum dolor sit amet"
        image={{
            small: 'https://unsplash.it/338/253?image=409',
            medium: 'https://unsplash.it/722/541?image=409',
            large: 'https://unsplash.it/958/718?image=409',
        }}
    />
);

export const WithActions: Story = () => (
    <PromotionCard
        title="Haus St. Franziskus – lorem ipsum dolor sit amet"
        image={{
            small: 'https://unsplash.it/338/253?image=409',
            medium: 'https://unsplash.it/722/541?image=409',
            large: 'https://unsplash.it/958/718?image=409',
        }}
    />
);

export const WithLink: Story = () => (
    <PromotionCard
        title="Haus St. Franziskus – lorem ipsum dolor sit amet"
        image={{
            small: 'https://unsplash.it/338/253?image=409',
            medium: 'https://unsplash.it/722/541?image=409',
            large: 'https://unsplash.it/958/718?image=409',
        }}
        href="#0"
    />
);

export const WithClickHandler: Story = () => (
    <PromotionCard
        title="Haus St. Franziskus – lorem ipsum dolor sit amet"
        image={{
            small: 'https://unsplash.it/338/253?image=409',
            medium: 'https://unsplash.it/722/541?image=409',
            large: 'https://unsplash.it/958/718?image=409',
        }}
        onClick={() => console.log('click')}
    />
);
