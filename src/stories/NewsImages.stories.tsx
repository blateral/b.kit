import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import NewsImages from '../components/sections/news/NewsImages';
import Button from 'components/buttons/Button';
import ButtonGhost from 'components/buttons/ButtonGhost';

export default {
    title: 'Sections/News/NewsImages',
    component: NewsImages,
} as Meta;

export const Default: Story = () => (
    <NewsImages
        images={[
            {
                small: 'https://unsplash.it/619/305?image=400',
                medium: 'https://unsplash.it/983/483?image=400',
                large: 'https://unsplash.it/1399/688?image=400',
                xlarge: 'https://unsplash.it/1400/690?image=400',
            },
        ]}
    />
);

export const SingleImageHalf: Story = () => (
    <NewsImages
        images={[
            {
                small: 'https://unsplash.it/419/313?image=400',
                medium: 'https://unsplash.it/983/736?image=400',
                large: 'https://unsplash.it/1399/1048?image=400',
                xlarge: 'https://unsplash.it/1400/1050?image=400',
            },
        ]}
        imageStyle="half"
    />
);

export const MultipleHalfImages: Story = () => (
    <NewsImages
        images={[
            {
                small: 'https://unsplash.it/419/313?image=400',
                medium: 'https://unsplash.it/983/736?image=400',
                large: 'https://unsplash.it/1399/1048?image=400',
                xlarge: 'https://unsplash.it/1400/1050?image=400',
            },
            {
                small: 'https://unsplash.it/419/313?image=401',
                medium: 'https://unsplash.it/983/736?image=401',
                large: 'https://unsplash.it/1399/1048?image=401',
                xlarge: 'https://unsplash.it/1400/1050?image=401',
            },
            {
                small: 'https://unsplash.it/419/313?image=402',
                medium: 'https://unsplash.it/983/736?image=402',
                large: 'https://unsplash.it/1399/1048?image=402',
                xlarge: 'https://unsplash.it/1400/1050?image=402',
            },
        ]}
        imageStyle="half"
    />
);

export const WithActions: Story = () => (
    <NewsImages
        images={[
            {
                small: 'https://unsplash.it/419/313?image=400',
                medium: 'https://unsplash.it/983/736?image=400',
                large: 'https://unsplash.it/1399/1048?image=400',
                xlarge: 'https://unsplash.it/1400/1050?image=400',
            },
            {
                small: 'https://unsplash.it/419/313?image=401',
                medium: 'https://unsplash.it/983/736?image=401',
                large: 'https://unsplash.it/1399/1048?image=401',
                xlarge: 'https://unsplash.it/1400/1050?image=401',
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
        hasBack
        images={[
            {
                small: 'https://unsplash.it/419/313?image=400',
                medium: 'https://unsplash.it/983/736?image=400',
                large: 'https://unsplash.it/1399/1048?image=400',
                xlarge: 'https://unsplash.it/1400/1050?image=400',
            },
            {
                small: 'https://unsplash.it/419/313?image=401',
                medium: 'https://unsplash.it/983/736?image=401',
                large: 'https://unsplash.it/1399/1048?image=401',
                xlarge: 'https://unsplash.it/1400/1050?image=401',
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
                small: 'https://unsplash.it/419/313?image=400',
                medium: 'https://unsplash.it/983/736?image=400',
                large: 'https://unsplash.it/1399/1048?image=400',
                xlarge: 'https://unsplash.it/1400/1050?image=400',
            },
            {
                small: 'https://unsplash.it/419/313?image=401',
                medium: 'https://unsplash.it/983/736?image=401',
                large: 'https://unsplash.it/1399/1048?image=401',
                xlarge: 'https://unsplash.it/1400/1050?image=401',
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
        isInverted
    />
);
