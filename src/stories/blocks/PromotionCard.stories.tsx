import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import PromotionCard from 'components/blocks/PromotionCard';
import Magnifier from 'components/base/icons/Magnifier';
import ArrowRight from 'components/base/icons/ArrowRight';

export default {
    title: 'Blocks/PromotionCard',
    component: PromotionCard,
    parameters: {
        status: {
            type: 'preview',
        },
    },
} as Meta;

export const Default: Story = () => (
    <PromotionCard
        title="Lorem ipsum dolor sit amet"
        image={{
            small: 'https://unsplash.it/338/253?image=409',
            medium: 'https://unsplash.it/722/541?image=409',
            large: 'https://unsplash.it/958/718?image=409',
        }}
    />
);

export const WithTitle: Story = () => (
    <PromotionCard
        title="Lorem ipsum dolor sit amet"
        image={{
            small: 'https://unsplash.it/338/253?image=409',
            medium: 'https://unsplash.it/722/541?image=409',
            large: 'https://unsplash.it/958/718?image=409',
        }}
    />
);

export const WithSuperTitle: Story = () => (
    <PromotionCard
        superTitle="Lorem ipsum dolor sit amet dolor"
        title="Lorem ipsum dolor sit amet"
        image={{
            small: 'https://unsplash.it/338/253?image=409',
            medium: 'https://unsplash.it/722/541?image=409',
            large: 'https://unsplash.it/958/718?image=409',
        }}
    />
);

export const WithActions: Story = () => (
    <PromotionCard
        title="Lorem ipsum dolor sit amet"
        image={{
            small: 'https://unsplash.it/338/253?image=409',
            medium: 'https://unsplash.it/722/541?image=409',
            large: 'https://unsplash.it/958/718?image=409',
        }}
    />
);

export const WithLink: Story = () => (
    <PromotionCard
        title="Lorem ipsum dolor sit amet"
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
        title="Lorem ipsum dolor sit amet"
        image={{
            small: 'https://unsplash.it/338/253?image=409',
            medium: 'https://unsplash.it/722/541?image=409',
            large: 'https://unsplash.it/958/718?image=409',
        }}
    />
);

export const WithIcon: Story = () => (
    <PromotionCard
        title="Lorem ipsum dolor sit amet"
        image={{
            small: 'https://unsplash.it/338/253?image=409',
            medium: 'https://unsplash.it/722/541?image=409',
            large: 'https://unsplash.it/958/718?image=409',
        }}
        icon={() => <Magnifier />}
    />
);

export const WithCustomTitleIcon: Story = () => (
    <PromotionCard
        title="Lorem ipsum dolor sit amet"
        image={{
            small: 'https://unsplash.it/338/253?image=409',
            medium: 'https://unsplash.it/722/541?image=409',
            large: 'https://unsplash.it/958/718?image=409',
        }}
        icon={() => <Magnifier />}
        customTitleIcon={() => <ArrowRight />}
    />
);
