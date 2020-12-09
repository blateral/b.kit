import * as React from 'react';
import { storiesOf } from '@storybook/react';

import ImageCarousel from '../src/components/sections/carousel/ImageCarousel';
import ArrowRight from '../src/components/base/icons/ArrowRight';

storiesOf('Sections / ImageCarousel', module)
    .add('with one slide', () => (
        <ImageCarousel
            images={[
                {
                    small: 'https://unsplash.it/520/415?image=400',
                    medium: 'https://unsplash.it/601/480?image=400',
                    large: 'https://unsplash.it/722/576?image=400',
                    xlarge: 'https://unsplash.it/802/640?image=400',
                    alt: 'Placeholder Image',
                },
            ]}
        />
    ))
    .add('with multiple slides', () => (
        <ImageCarousel
            images={[
                {
                    small: 'https://unsplash.it/520/415?image=400',
                    medium: 'https://unsplash.it/601/480?image=400',
                    large: 'https://unsplash.it/722/576?image=400',
                    xlarge: 'https://unsplash.it/802/640?image=400',
                    alt: 'Placeholder Image',
                },
                {
                    small: 'https://unsplash.it/520/415?image=401',
                    medium: 'https://unsplash.it/601/480?image=401',
                    large: 'https://unsplash.it/722/576?image=401',
                    xlarge: 'https://unsplash.it/802/640?image=401',
                    alt: 'Placeholder Image',
                },
                {
                    small: 'https://unsplash.it/520/415?image=402',
                    medium: 'https://unsplash.it/601/480?image=402',
                    large: 'https://unsplash.it/722/576?image=402',
                    xlarge: 'https://unsplash.it/802/640?image=402',
                    alt: 'Placeholder Image',
                },
            ]}
        />
    ))
    .add('different slide widths', () => (
        <ImageCarousel
            images={[
                {
                    small: 'https://unsplash.it/520/415?image=400',
                    medium: 'https://unsplash.it/601/480?image=400',
                    large: 'https://unsplash.it/722/576?image=400',
                    xlarge: 'https://unsplash.it/802/640?image=400',
                    alt: 'Placeholder Image',
                },
                {
                    small: 'https://unsplash.it/200/415?image=401',
                    medium: 'https://unsplash.it/300/480?image=401',
                    large: 'https://unsplash.it/400/576?image=401',
                    xlarge: 'https://unsplash.it/480/640?image=401',
                    alt: 'Placeholder Image',
                },
                {
                    small: 'https://unsplash.it/520/415?image=402',
                    medium: 'https://unsplash.it/601/480?image=402',
                    large: 'https://unsplash.it/722/576?image=402',
                    xlarge: 'https://unsplash.it/802/640?image=402',
                    alt: 'Placeholder Image',
                },
            ]}
        />
    ))
    .add('inverted', () => (
        <ImageCarousel
            isInverted
            images={[
                {
                    small: 'https://unsplash.it/520/415?image=400',
                    medium: 'https://unsplash.it/601/480?image=400',
                    large: 'https://unsplash.it/722/576?image=400',
                    xlarge: 'https://unsplash.it/802/640?image=400',
                    alt: 'Placeholder Image',
                },
                {
                    small: 'https://unsplash.it/520/415?image=401',
                    medium: 'https://unsplash.it/601/480?image=401',
                    large: 'https://unsplash.it/722/576?image=401',
                    xlarge: 'https://unsplash.it/802/640?image=401',
                    alt: 'Placeholder Image',
                },
                {
                    small: 'https://unsplash.it/520/415?image=402',
                    medium: 'https://unsplash.it/601/480?image=402',
                    large: 'https://unsplash.it/722/576?image=402',
                    xlarge: 'https://unsplash.it/802/640?image=402',
                    alt: 'Placeholder Image',
                },
            ]}
        />
    ))
    .add('with background', () => (
        <ImageCarousel
            bgMode="full"
            images={[
                {
                    small: 'https://unsplash.it/520/415?image=400',
                    medium: 'https://unsplash.it/601/480?image=400',
                    large: 'https://unsplash.it/722/576?image=400',
                    xlarge: 'https://unsplash.it/802/640?image=400',
                    alt: 'Placeholder Image',
                },
                {
                    small: 'https://unsplash.it/520/415?image=401',
                    medium: 'https://unsplash.it/601/480?image=401',
                    large: 'https://unsplash.it/722/576?image=401',
                    xlarge: 'https://unsplash.it/802/640?image=401',
                    alt: 'Placeholder Image',
                },
                {
                    small: 'https://unsplash.it/520/415?image=402',
                    medium: 'https://unsplash.it/601/480?image=402',
                    large: 'https://unsplash.it/722/576?image=402',
                    xlarge: 'https://unsplash.it/802/640?image=402',
                    alt: 'Placeholder Image',
                },
            ]}
        />
    ))
    .add('with half background', () => (
        <ImageCarousel
            bgMode="splitted"
            images={[
                {
                    small: 'https://unsplash.it/520/415?image=400',
                    medium: 'https://unsplash.it/601/480?image=400',
                    large: 'https://unsplash.it/722/576?image=400',
                    xlarge: 'https://unsplash.it/802/640?image=400',
                    alt: 'Placeholder Image',
                },
                {
                    small: 'https://unsplash.it/520/415?image=401',
                    medium: 'https://unsplash.it/601/480?image=401',
                    large: 'https://unsplash.it/722/576?image=401',
                    xlarge: 'https://unsplash.it/802/640?image=401',
                    alt: 'Placeholder Image',
                },
                {
                    small: 'https://unsplash.it/520/415?image=402',
                    medium: 'https://unsplash.it/601/480?image=402',
                    large: 'https://unsplash.it/722/576?image=402',
                    xlarge: 'https://unsplash.it/802/640?image=402',
                    alt: 'Placeholder Image',
                },
            ]}
        />
    ))
    .add('with large spacing', () => (
        <ImageCarousel
            spacing="large"
            bgMode="full"
            images={[
                {
                    small: 'https://unsplash.it/520/415?image=400',
                    medium: 'https://unsplash.it/601/480?image=400',
                    large: 'https://unsplash.it/722/576?image=400',
                    xlarge: 'https://unsplash.it/802/640?image=400',
                    alt: 'Placeholder Image',
                },
                {
                    small: 'https://unsplash.it/520/415?image=401',
                    medium: 'https://unsplash.it/601/480?image=401',
                    large: 'https://unsplash.it/722/576?image=401',
                    xlarge: 'https://unsplash.it/802/640?image=401',
                    alt: 'Placeholder Image',
                },
                {
                    small: 'https://unsplash.it/520/415?image=402',
                    medium: 'https://unsplash.it/601/480?image=402',
                    large: 'https://unsplash.it/722/576?image=402',
                    xlarge: 'https://unsplash.it/802/640?image=402',
                    alt: 'Placeholder Image',
                },
            ]}
        />
    ))
    .add('with more visible items', () => (
        <ImageCarousel
            mode="2.75"
            spacing="large"
            bgMode="full"
            images={[
                {
                    small: 'https://unsplash.it/520/415?image=400',
                    medium: 'https://unsplash.it/601/480?image=400',
                    large: 'https://unsplash.it/722/576?image=400',
                    xlarge: 'https://unsplash.it/802/640?image=400',
                    alt: 'Placeholder Image',
                },
                {
                    small: 'https://unsplash.it/520/415?image=401',
                    medium: 'https://unsplash.it/601/480?image=401',
                    large: 'https://unsplash.it/722/576?image=401',
                    xlarge: 'https://unsplash.it/802/640?image=401',
                    alt: 'Placeholder Image',
                },
                {
                    small: 'https://unsplash.it/520/415?image=402',
                    medium: 'https://unsplash.it/601/480?image=402',
                    large: 'https://unsplash.it/722/576?image=402',
                    xlarge: 'https://unsplash.it/802/640?image=402',
                    alt: 'Placeholder Image',
                },
            ]}
        />
    ))
    .add('with handlers', () => (
        <ImageCarousel
            bgMode="full"
            onInit={(steps) => console.log('carousel has ' + steps + ' steps')}
            beforeChange={(current) => console.log('before step: ' + current)}
            afterChange={(current) => console.log('after step: ' + current)}
            images={[
                {
                    small: 'https://unsplash.it/520/415?image=400',
                    medium: 'https://unsplash.it/601/480?image=400',
                    large: 'https://unsplash.it/722/576?image=400',
                    xlarge: 'https://unsplash.it/802/640?image=400',
                    alt: 'Placeholder Image',
                },
                {
                    small: 'https://unsplash.it/520/415?image=401',
                    medium: 'https://unsplash.it/601/480?image=401',
                    large: 'https://unsplash.it/722/576?image=401',
                    xlarge: 'https://unsplash.it/802/640?image=401',
                    alt: 'Placeholder Image',
                },
                {
                    small: 'https://unsplash.it/520/415?image=402',
                    medium: 'https://unsplash.it/601/480?image=402',
                    large: 'https://unsplash.it/722/576?image=402',
                    xlarge: 'https://unsplash.it/802/640?image=402',
                    alt: 'Placeholder Image',
                },
            ]}
        />
    ))
    .add('with custom controls', () => (
        <ImageCarousel
            bgMode="full"
            controlNext={() => <ArrowRight />}
            controlPrev={() => <ArrowRight />}
            images={[
                {
                    small: 'https://unsplash.it/520/415?image=400',
                    medium: 'https://unsplash.it/601/480?image=400',
                    large: 'https://unsplash.it/722/576?image=400',
                    xlarge: 'https://unsplash.it/802/640?image=400',
                    alt: 'Placeholder Image',
                },
                {
                    small: 'https://unsplash.it/520/415?image=401',
                    medium: 'https://unsplash.it/601/480?image=401',
                    large: 'https://unsplash.it/722/576?image=401',
                    xlarge: 'https://unsplash.it/802/640?image=401',
                    alt: 'Placeholder Image',
                },
                {
                    small: 'https://unsplash.it/520/415?image=402',
                    medium: 'https://unsplash.it/601/480?image=402',
                    large: 'https://unsplash.it/722/576?image=402',
                    xlarge: 'https://unsplash.it/802/640?image=402',
                    alt: 'Placeholder Image',
                },
            ]}
        />
    ))
    .add('with custom dots', () => (
        <ImageCarousel
            bgMode="full"
            dot={(isInverted, isActive) => (
                <ArrowRight iconColor={isActive ? 'red' : 'grey'} />
            )}
            images={[
                {
                    small: 'https://unsplash.it/520/415?image=400',
                    medium: 'https://unsplash.it/601/480?image=400',
                    large: 'https://unsplash.it/722/576?image=400',
                    xlarge: 'https://unsplash.it/802/640?image=400',
                    alt: 'Placeholder Image',
                },
                {
                    small: 'https://unsplash.it/520/415?image=401',
                    medium: 'https://unsplash.it/601/480?image=401',
                    large: 'https://unsplash.it/722/576?image=401',
                    xlarge: 'https://unsplash.it/802/640?image=401',
                    alt: 'Placeholder Image',
                },
                {
                    small: 'https://unsplash.it/520/415?image=402',
                    medium: 'https://unsplash.it/601/480?image=402',
                    large: 'https://unsplash.it/722/576?image=402',
                    xlarge: 'https://unsplash.it/802/640?image=402',
                    alt: 'Placeholder Image',
                },
            ]}
        />
    ));
