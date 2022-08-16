import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import Gallery, { GalleryComponent } from 'components/sections/Gallery';

export default {
    title: 'Sections/Gallery',
    component: GalleryComponent,
    parameters: {
        status: {
            type: 'preview',
        },
    },
} as Meta;

export const SingleImage: Story = () => (
    <Gallery
        images={[
            {
                small: 'https://unsplash.it/640/315?image=400',
                medium: 'https://unsplash.it/1024/505?image=400',
                large: 'https://unsplash.it/1400/690?image=400',
                ratios: {
                    small: { w: 640, h: 315 },
                    medium: { w: 1024, h: 505 },
                    large: { w: 1400, h: 690 },
                },
            },
        ]}
    />
);

export const MultipleImages: Story = () => (
    <Gallery
        images={[
            {
                small: 'https://unsplash.it/640/315?image=400',
                medium: 'https://unsplash.it/1024/505?image=400',
                large: 'https://unsplash.it/1400/690?image=400',
                ratios: {
                    small: { w: 640, h: 315 },
                    medium: { w: 1024, h: 505 },
                    large: { w: 1400, h: 690 },
                },
            },
            {
                small: 'https://unsplash.it/640/315?image=401',
                medium: 'https://unsplash.it/1024/505?image=401',
                large: 'https://unsplash.it/1400/690?image=401',
                ratios: {
                    small: { w: 640, h: 315 },
                    medium: { w: 1024, h: 505 },
                    large: { w: 1400, h: 690 },
                },
            },
        ]}
    />
);

export const RatioA: Story = () => (
    <Gallery
        images={[
            {
                small: 'https://unsplash.it/640/480?image=400',
                medium: 'https://unsplash.it/1024/768?image=400',
                large: 'https://unsplash.it/1400/1050?image=400',
                ratios: {
                    small: { w: 640, h: 480 },
                    medium: { w: 1024, h: 768 },
                    large: { w: 1400, h: 1050 },
                },
            },
            {
                small: 'https://unsplash.it/640/480?image=401',
                medium: 'https://unsplash.it/1024/768?image=401',
                large: 'https://unsplash.it/1400/1050?image=401',
                ratios: {
                    small: { w: 640, h: 480 },
                    medium: { w: 1024, h: 768 },
                    large: { w: 1400, h: 1050 },
                },
            },
        ]}
    />
);
RatioA.storyName = 'Image ratio 4:3';

export const RatioB: Story = () => (
    <Gallery
        images={[
            {
                small: 'https://unsplash.it/640/640?image=400',
                medium: 'https://unsplash.it/1024/1024?image=400',
                large: 'https://unsplash.it/1400/1400?image=400',
                ratios: {
                    small: { w: 640, h: 640 },
                    medium: { w: 1024, h: 1024 },
                    large: { w: 1400, h: 1400 },
                },
            },
            {
                small: 'https://unsplash.it/640/640?image=401',
                medium: 'https://unsplash.it/1024/1024?image=401',
                large: 'https://unsplash.it/1400/1400?image=401',
                ratios: {
                    small: { w: 640, h: 640 },
                    medium: { w: 1024, h: 1024 },
                    large: { w: 1400, h: 1400 },
                },
            },
        ]}
    />
);
RatioB.storyName = 'Image ratio 1:1';

export const RatioC: Story = () => (
    <Gallery
        images={[
            {
                small: 'https://unsplash.it/640/853?image=400',
                medium: 'https://unsplash.it/1024/1365?image=400',
                large: 'https://unsplash.it/1400/1867?image=400',
                ratios: {
                    small: { w: 640, h: 853 },
                    medium: { w: 1024, h: 1365 },
                    large: { w: 1400, h: 1867 },
                },
            },
            {
                small: 'https://unsplash.it/640/853?image=401',
                medium: 'https://unsplash.it/1024/1365?image=401',
                large: 'https://unsplash.it/1400/1867?image=401',
                ratios: {
                    small: { w: 640, h: 853 },
                    medium: { w: 1024, h: 1365 },
                    large: { w: 1400, h: 1867 },
                },
            },
        ]}
    />
);
RatioC.storyName = 'Image ratio 3:4';

export const MixedImages: Story = () => (
    <Gallery
        images={[
            {
                small: 'https://unsplash.it/640/315?image=400',
                medium: 'https://unsplash.it/1024/505?image=400',
                large: 'https://unsplash.it/1400/690?image=400',
                ratios: {
                    small: { w: 640, h: 315 },
                    medium: { w: 1024, h: 505 },
                    large: { w: 1400, h: 690 },
                },
            },
            {
                small: 'https://unsplash.it/640/640?image=401',
                medium: 'https://unsplash.it/1024/1024?image=401',
                large: 'https://unsplash.it/1400/1400?image=401',
                ratios: {
                    small: { w: 640, h: 640 },
                    medium: { w: 1024, h: 1024 },
                    large: { w: 1400, h: 1400 },
                },
            },
            {
                small: 'https://unsplash.it/640/640?image=401',
                medium: 'https://unsplash.it/1024/1024?image=401',
                large: 'https://unsplash.it/1400/1400?image=401',
                ratios: {
                    small: { w: 640, h: 640 },
                    medium: { w: 1024, h: 1024 },
                    large: { w: 1400, h: 1400 },
                },
            },
            {
                small: 'https://unsplash.it/640/315?image=400',
                medium: 'https://unsplash.it/1024/505?image=400',
                large: 'https://unsplash.it/1400/690?image=400',
                ratios: {
                    small: { w: 640, h: 315 },
                    medium: { w: 1024, h: 505 },
                    large: { w: 1400, h: 690 },
                },
            },
        ]}
    />
);
MixedImages.storyName = 'Mixed image widths';

export const MixedFirstFull: Story = () => (
    <Gallery
        images={[
            {
                small: 'https://unsplash.it/640/315?image=400',
                medium: 'https://unsplash.it/1024/505?image=400',
                large: 'https://unsplash.it/1400/690?image=400',
                ratios: {
                    small: { w: 640, h: 315 },
                    medium: { w: 1024, h: 505 },
                    large: { w: 1400, h: 690 },
                },
                isFull: true,
            },
            {
                small: 'https://unsplash.it/640/640?image=401',
                medium: 'https://unsplash.it/1024/1024?image=401',
                large: 'https://unsplash.it/1400/1400?image=401',
                ratios: {
                    small: { w: 640, h: 640 },
                    medium: { w: 1024, h: 1024 },
                    large: { w: 1400, h: 1400 },
                },
            },
            {
                small: 'https://unsplash.it/640/640?image=402',
                medium: 'https://unsplash.it/1024/1024?image=402',
                large: 'https://unsplash.it/1400/1400?image=402',
                ratios: {
                    small: { w: 640, h: 640 },
                    medium: { w: 1024, h: 1024 },
                    large: { w: 1400, h: 1400 },
                },
            },
            {
                small: 'https://unsplash.it/640/315?image=404',
                medium: 'https://unsplash.it/1024/505?image=404',
                large: 'https://unsplash.it/1400/690?image=404',
                ratios: {
                    small: { w: 640, h: 315 },
                    medium: { w: 1024, h: 505 },
                    large: { w: 1400, h: 690 },
                },
            },
        ]}
    />
);
MixedFirstFull.storyName = 'First to full width';

export const MixedSecondFull: Story = () => (
    <Gallery
        images={[
            {
                small: 'https://unsplash.it/640/315?image=404',
                medium: 'https://unsplash.it/1024/505?image=404',
                large: 'https://unsplash.it/1400/690?image=404',
                ratios: {
                    small: { w: 640, h: 315 },
                    medium: { w: 1024, h: 505 },
                    large: { w: 1400, h: 690 },
                },
            },
            {
                small: 'https://unsplash.it/640/640?image=402',
                medium: 'https://unsplash.it/1024/1024?image=402',
                large: 'https://unsplash.it/1400/1400?image=402',
                ratios: {
                    small: { w: 640, h: 640 },
                    medium: { w: 1024, h: 1024 },
                    large: { w: 1400, h: 1400 },
                },
                isFull: true,
            },
            {
                small: 'https://unsplash.it/640/640?image=402',
                medium: 'https://unsplash.it/1024/1024?image=402',
                large: 'https://unsplash.it/1400/1400?image=402',
                ratios: {
                    small: { w: 640, h: 640 },
                    medium: { w: 1024, h: 1024 },
                    large: { w: 1400, h: 1400 },
                },
            },
            {
                small: 'https://unsplash.it/640/315?image=400',
                medium: 'https://unsplash.it/1024/505?image=400',
                large: 'https://unsplash.it/1400/690?image=400',
                ratios: {
                    small: { w: 640, h: 315 },
                    medium: { w: 1024, h: 505 },
                    large: { w: 1400, h: 690 },
                },
            },
        ]}
    />
);
MixedSecondFull.storyName = 'Second to full width';

export const MixedThirdFull: Story = () => (
    <Gallery
        images={[
            {
                small: 'https://unsplash.it/640/315?image=404',
                medium: 'https://unsplash.it/1024/505?image=404',
                large: 'https://unsplash.it/1400/690?image=404',
                ratios: {
                    small: { w: 640, h: 315 },
                    medium: { w: 1024, h: 505 },
                    large: { w: 1400, h: 690 },
                },
            },
            {
                small: 'https://unsplash.it/640/640?image=402',
                medium: 'https://unsplash.it/1024/1024?image=402',
                large: 'https://unsplash.it/1400/1400?image=402',
                ratios: {
                    small: { w: 640, h: 640 },
                    medium: { w: 1024, h: 1024 },
                    large: { w: 1400, h: 1400 },
                },
            },
            {
                small: 'https://unsplash.it/640/640?image=401',
                medium: 'https://unsplash.it/1024/1024?image=401',
                large: 'https://unsplash.it/1400/1400?image=401',
                ratios: {
                    small: { w: 640, h: 640 },
                    medium: { w: 1024, h: 1024 },
                    large: { w: 1400, h: 1400 },
                },
                isFull: true,
            },
            {
                small: 'https://unsplash.it/640/315?image=400',
                medium: 'https://unsplash.it/1024/505?image=400',
                large: 'https://unsplash.it/1400/690?image=400',
                ratios: {
                    small: { w: 640, h: 315 },
                    medium: { w: 1024, h: 505 },
                    large: { w: 1400, h: 690 },
                },
            },
        ]}
    />
);
MixedThirdFull.storyName = 'Third to full width';

export const WithBackground: Story = () => (
    <Gallery
        bgMode="full"
        images={[
            {
                small: 'https://unsplash.it/640/315?image=400',
                medium: 'https://unsplash.it/1024/505?image=400',
                large: 'https://unsplash.it/1400/690?image=400',
                ratios: {
                    small: { w: 640, h: 315 },
                    medium: { w: 1024, h: 505 },
                    large: { w: 1400, h: 690 },
                },
            },
            {
                small: 'https://unsplash.it/640/640?image=401',
                medium: 'https://unsplash.it/1024/1024?image=401',
                large: 'https://unsplash.it/1400/1400?image=401',
                ratios: {
                    small: { w: 640, h: 640 },
                    medium: { w: 1024, h: 1024 },
                    large: { w: 1400, h: 1400 },
                },
            },
            {
                small: 'https://unsplash.it/640/640?image=402',
                medium: 'https://unsplash.it/1024/1024?image=402',
                large: 'https://unsplash.it/1400/1400?image=402',
                ratios: {
                    small: { w: 640, h: 640 },
                    medium: { w: 1024, h: 1024 },
                    large: { w: 1400, h: 1400 },
                },
            },
        ]}
    />
);

export const SplittedBackground: Story = () => (
    <Gallery
        bgMode="splitted"
        images={[
            {
                small: 'https://unsplash.it/640/315?image=400',
                medium: 'https://unsplash.it/1024/505?image=400',
                large: 'https://unsplash.it/1400/690?image=400',
                ratios: {
                    small: { w: 640, h: 315 },
                    medium: { w: 1024, h: 505 },
                    large: { w: 1400, h: 690 },
                },
            },
            {
                small: 'https://unsplash.it/640/640?image=401',
                medium: 'https://unsplash.it/1024/1024?image=401',
                large: 'https://unsplash.it/1400/1400?image=401',
                ratios: {
                    small: { w: 640, h: 640 },
                    medium: { w: 1024, h: 1024 },
                    large: { w: 1400, h: 1400 },
                },
            },
            {
                small: 'https://unsplash.it/640/640?image=402',
                medium: 'https://unsplash.it/1024/1024?image=402',
                large: 'https://unsplash.it/1400/1400?image=402',
                ratios: {
                    small: { w: 640, h: 640 },
                    medium: { w: 1024, h: 1024 },
                    large: { w: 1400, h: 1400 },
                },
            },
        ]}
    />
);

export const Inverted: Story = () => (
    <Gallery
        bgMode="inverted"
        images={[
            {
                small: 'https://unsplash.it/640/315?image=400',
                medium: 'https://unsplash.it/1024/505?image=400',
                large: 'https://unsplash.it/1400/690?image=400',
                ratios: {
                    small: { w: 640, h: 315 },
                    medium: { w: 1024, h: 505 },
                    large: { w: 1400, h: 690 },
                },
            },
            {
                small: 'https://unsplash.it/640/640?image=401',
                medium: 'https://unsplash.it/1024/1024?image=401',
                large: 'https://unsplash.it/1400/1400?image=401',
                ratios: {
                    small: { w: 640, h: 640 },
                    medium: { w: 1024, h: 1024 },
                    large: { w: 1400, h: 1400 },
                },
            },
            {
                small: 'https://unsplash.it/640/640?image=402',
                medium: 'https://unsplash.it/1024/1024?image=402',
                large: 'https://unsplash.it/1400/1400?image=402',
                ratios: {
                    small: { w: 640, h: 640 },
                    medium: { w: 1024, h: 1024 },
                    large: { w: 1400, h: 1400 },
                },
            },
        ]}
    />
);
