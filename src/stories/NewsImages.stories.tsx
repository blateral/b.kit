import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import NewsImages, {
    NewsImagesComponent,
} from '../components/sections/news/NewsImages';
import Button from 'components/buttons/Button';
import ButtonGhost from 'components/buttons/ButtonGhost';

export default {
    title: 'Sections/News/NewsImages',
    component: NewsImagesComponent,
} as Meta;

export const Default: Story = () => (
    <NewsImages
        images={[
            {
                small: 'https://unsplash.it/619/305?image=400',
                medium: 'https://unsplash.it/983/483?image=400',
            },
        ]}
    />
);

export const SingleImageHalf: Story = () => (
    <NewsImages
        images={[
            {
                small: 'https://unsplash.it/619/465?image=400',
                medium: 'https://unsplash.it/376/282?image=400',
                large: 'https://unsplash.it/452/339?image=400',
            },
        ]}
        imageStyle="half"
    />
);

export const MultipleHalfImages: Story = () => (
    <NewsImages
        images={[
            {
                small: 'https://unsplash.it/619/465?image=400',
                medium: 'https://unsplash.it/376/282?image=400',
                large: 'https://unsplash.it/452/339?image=400',
            },
            {
                small: 'https://unsplash.it/619/465?image=401',
                medium: 'https://unsplash.it/376/282?image=401',
                large: 'https://unsplash.it/452/339?image=401',
            },
            {
                small: 'https://unsplash.it/619/465?image=402',
                medium: 'https://unsplash.it/376/282?image=402',
                large: 'https://unsplash.it/452/339?image=402',
            },
        ]}
        imageStyle="half"
    />
);

export const WithActions: Story = () => (
    <NewsImages
        images={[
            {
                small: 'https://unsplash.it/619/465?image=400',
                medium: 'https://unsplash.it/376/282?image=400',
                large: 'https://unsplash.it/452/339?image=400',
            },
            {
                small: 'https://unsplash.it/619/465?image=401',
                medium: 'https://unsplash.it/376/282?image=401',
                large: 'https://unsplash.it/452/339?image=401',
            },
        ]}
        imageStyle="half"
        primaryAction={(isInverted) => (
            <Button.View isInverted={isInverted}>
                <Button.Label>Primary</Button.Label>
            </Button.View>
        )}
        secondaryAction={(isInverted) => (
            <ButtonGhost.View isInverted={isInverted}>
                <ButtonGhost.Label>Secondary</ButtonGhost.Label>
            </ButtonGhost.View>
        )}
    />
);

export const WithBackground: Story = () => (
    <NewsImages
        bgMode="full"
        images={[
            {
                small: 'https://unsplash.it/619/465?image=400',
                medium: 'https://unsplash.it/376/282?image=400',
                large: 'https://unsplash.it/452/339?image=400',
            },
            {
                small: 'https://unsplash.it/619/465?image=401',
                medium: 'https://unsplash.it/376/282?image=401',
                large: 'https://unsplash.it/452/339?image=401',
            },
        ]}
        imageStyle="half"
        primaryAction={(isInverted) => (
            <Button.View isInverted={isInverted}>
                <Button.Label>Primary</Button.Label>
            </Button.View>
        )}
        secondaryAction={(isInverted) => (
            <ButtonGhost.View isInverted={isInverted}>
                <ButtonGhost.Label>Secondary</ButtonGhost.Label>
            </ButtonGhost.View>
        )}
    />
);

export const Inverted: Story = () => (
    <NewsImages
        images={[
            {
                small: 'https://unsplash.it/619/465?image=400',
                medium: 'https://unsplash.it/376/282?image=400',
                large: 'https://unsplash.it/452/339?image=400',
            },
            {
                small: 'https://unsplash.it/619/465?image=401',
                medium: 'https://unsplash.it/376/282?image=401',
                large: 'https://unsplash.it/452/339?image=401',
            },
        ]}
        imageStyle="half"
        primaryAction={(isInverted) => (
            <Button.View isInverted={isInverted}>
                <Button.Label>Primary</Button.Label>
            </Button.View>
        )}
        secondaryAction={(isInverted) => (
            <ButtonGhost.View isInverted={isInverted}>
                <ButtonGhost.Label>Secondary</ButtonGhost.Label>
            </ButtonGhost.View>
        )}
        bgMode="inverted"
    />
);
