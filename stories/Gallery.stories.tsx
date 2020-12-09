import * as React from 'react';
import { Meta } from '@storybook/react';
import Gallery from '../src/components/sections/Gallery';

export default {
    title: 'Sections/Gallery',
    component: Gallery,
} as Meta;

export const SingleImageFull = () => (
    <Gallery
        images={[
            {
                small: 'https://unsplash.it/500/246?image=400',
                medium: 'https://unsplash.it/640/315?image=400',
                large: 'https://unsplash.it/1024/504?image=400',
                xlarge: 'https://unsplash.it/1440/710?image=400',
            },
        ]}
    />
);

export const MultipleImages = () => (
    <Gallery
        images={[
            {
                small: 'https://unsplash.it/500/246?image=400',
                medium: 'https://unsplash.it/640/315?image=400',
                large: 'https://unsplash.it/1024/504?image=400',
                xlarge: 'https://unsplash.it/1440/710?image=400',
            },
            {
                small: 'https://unsplash.it/500/246?image=401',
                medium: 'https://unsplash.it/640/315?image=401',
                large: 'https://unsplash.it/1024/504?image=401',
                xlarge: 'https://unsplash.it/1440/710?image=401',
            },
        ]}
    />
);

export const SingeImageHalf = () => (
    <Gallery
        images={[
            {
                size: 'half',
                small: 'https://unsplash.it/610/457?image=400',
                medium: 'https://unsplash.it/507/380?image=400',
                large: 'https://unsplash.it/507/380?image=400',
                xlarge: 'https://unsplash.it/710/533?image=400',
            },
        ]}
    />
);

export const HalfImagesA = () => (
    <Gallery
        images={[
            {
                size: 'half',
                small: 'https://unsplash.it/610/457?image=400',
                medium: 'https://unsplash.it/507/380?image=400',
                large: 'https://unsplash.it/507/380?image=400',
                xlarge: 'https://unsplash.it/710/533?image=400',
            },
            {
                size: 'half',
                small: 'https://unsplash.it/610/457?image=401',
                medium: 'https://unsplash.it/507/380?image=401',
                large: 'https://unsplash.it/507/380?image=401',
                xlarge: 'https://unsplash.it/710/533?image=401',
            },
        ]}
    />
);
HalfImagesA.storyName = 'Half images with ratio 4:3';

export const HalfImagesB = () => (
    <Gallery
        images={[
            {
                size: 'half',
                small: 'https://unsplash.it/630/630?image=400',
                medium: 'https://unsplash.it/315/315?image=400',
                large: 'https://unsplash.it/507/507?image=400',
                xlarge: 'https://unsplash.it/710/710?image=400',
            },
            {
                size: 'half',
                small: 'https://unsplash.it/630/630?image=401',
                medium: 'https://unsplash.it/315/315?image=401',
                large: 'https://unsplash.it/507/507?image=401',
                xlarge: 'https://unsplash.it/710/710?image=401',
            },
        ]}
    />
);
HalfImagesB.storyName = 'Half images with ratio 1:1';

export const HalfImagesC = () => (
    <Gallery
        images={[
            {
                size: 'half',
                small: 'https://unsplash.it/610/457?image=400',
                medium: 'https://unsplash.it/315/420?image=400',
                large: 'https://unsplash.it/507/676?image=400',
                xlarge: 'https://unsplash.it/710/947?image=400',
            },
            {
                size: 'half',
                small: 'https://unsplash.it/610/457?image=401',
                medium: 'https://unsplash.it/315/420?image=401',
                large: 'https://unsplash.it/507/676?image=401',
                xlarge: 'https://unsplash.it/710/947?image=401',
            },
        ]}
    />
);
HalfImagesC.storyName = 'Half images with ratio 3:4';

export const MixedImages = () => (
    <Gallery
        images={[
            {
                size: 'full',
                small: 'https://unsplash.it/500/246?image=400',
                medium: 'https://unsplash.it/640/315?image=400',
                large: 'https://unsplash.it/1024/504?image=400',
                xlarge: 'https://unsplash.it/1440/710?image=400',
            },
            {
                size: 'half',
                small: 'https://unsplash.it/630/630?image=401',
                medium: 'https://unsplash.it/315/315?image=401',
                large: 'https://unsplash.it/507/507?image=401',
                xlarge: 'https://unsplash.it/710/710?image=401',
            },
            {
                size: 'half',
                small: 'https://unsplash.it/630/630?image=402',
                medium: 'https://unsplash.it/315/315?image=402',
                large: 'https://unsplash.it/507/507?image=402',
                xlarge: 'https://unsplash.it/710/710?image=402',
            },
        ]}
    />
);
MixedImages.storyName = 'Mixed image widths';

export const WithBackground: React.VFC = () => (
    <Gallery
        hasBack
        images={[
            {
                size: 'full',
                small: 'https://unsplash.it/500/246?image=400',
                medium: 'https://unsplash.it/640/315?image=400',
                large: 'https://unsplash.it/1024/504?image=400',
                xlarge: 'https://unsplash.it/1440/710?image=400',
            },
            {
                size: 'half',
                small: 'https://unsplash.it/630/630?image=401',
                medium: 'https://unsplash.it/315/315?image=401',
                large: 'https://unsplash.it/507/507?image=401',
                xlarge: 'https://unsplash.it/710/710?image=401',
            },
            {
                size: 'half',
                small: 'https://unsplash.it/630/630?image=402',
                medium: 'https://unsplash.it/315/315?image=402',
                large: 'https://unsplash.it/507/507?image=402',
                xlarge: 'https://unsplash.it/710/710?image=402',
            },
        ]}
    />
);

export const Inverted: React.VFC = () => (
    <Gallery
        isInverted
        images={[
            {
                size: 'full',
                small: 'https://unsplash.it/500/246?image=400',
                medium: 'https://unsplash.it/640/315?image=400',
                large: 'https://unsplash.it/1024/504?image=400',
                xlarge: 'https://unsplash.it/1440/710?image=400',
            },
            {
                size: 'half',
                small: 'https://unsplash.it/630/630?image=401',
                medium: 'https://unsplash.it/315/315?image=401',
                large: 'https://unsplash.it/507/507?image=401',
                xlarge: 'https://unsplash.it/710/710?image=401',
            },
            {
                size: 'half',
                small: 'https://unsplash.it/630/630?image=402',
                medium: 'https://unsplash.it/315/315?image=402',
                large: 'https://unsplash.it/507/507?image=402',
                xlarge: 'https://unsplash.it/710/710?image=402',
            },
        ]}
    />
);
