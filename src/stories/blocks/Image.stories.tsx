import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import Image from 'components/blocks/Image';

export default {
    title: 'Blocks/Image',
    component: Image,
    parameters: {
        status: {
            type: 'preview',
        },
    },
} as Meta;

export const Default: Story = () => (
    <Image
        small="https://unsplash.it/619/619"
        medium="https://unsplash.it/791/791"
        semilarge="https://unsplash.it/883/883"
        large="https://unsplash.it/766/766"
        xlarge="https://unsplash.it/824/824"
        alt="Image"
    />
);

export const WithSVG: Story = () => (
    <Image
        small="/images/testIcon.svg"
        alt="Image"
        ratios={{
            small: 6 / 3,
        }}
    />
);

export const CoverSpace: Story = () => (
    <Image
        coverSpace
        small="https://unsplash.it/619/619"
        medium="https://unsplash.it/791/791"
        semilarge="https://unsplash.it/883/883"
        large="https://unsplash.it/766/766"
        xlarge="https://unsplash.it/824/824"
        alt="Image"
    />
);

export const WithAspectRatio: Story = () => (
    <Image
        small="https://unsplash.it/619/619"
        medium="https://unsplash.it/791/791"
        semilarge="https://unsplash.it/883/883"
        large="https://unsplash.it/766/766"
        xlarge="https://unsplash.it/824/824"
        alt="Image"
        coverSpace
        ratios={{
            small: 6 / 3,
        }}
    />
);
