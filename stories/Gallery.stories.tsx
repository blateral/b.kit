import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Gallery from 'components/sections/Gallery';

storiesOf('Sections / Gallery', module)
    .add('single image full', () => (
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
    ))
    .add('multiple images', () => (
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
    ))
    .add('single image half', () => (
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
    ))
    .add('half images with ratio 4:3', () => (
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
    ))
    .add('half images with ratio 1:1', () => (
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
    ))
    .add('half images with ratio 3:4', () => (
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
    ))
    .add('mixed image widths', () => (
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
    ))
    .add('with background', () => (
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
    ))
    .add('inverted', () => (
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
    ));
