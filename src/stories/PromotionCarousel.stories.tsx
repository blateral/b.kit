/* eslint-disable react/display-name */
import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import ArrowRight from 'components/base/icons/ArrowRight';
import PromotionCarousel, {
    PromotionCarouselItem,
} from 'components/sections/carousel/PromotionCarousel';
import { generateItemList } from 'utils/storyHelpers';

const examplePromotion: PromotionCarouselItem = {
    title: 'Haus St. Franziskus – lorem ipsum dolor sit amet',
    image: {
        small: 'https://unsplash.it/553/553',
        medium: 'https://unsplash.it/441/441',
        large: 'https://unsplash.it/507/507',
        xlarge: 'https://unsplash.it/680/680',
        alt: 'Image Placeholder',
    },
};

const examplePromotions = generateItemList<PromotionCarouselItem>(
    examplePromotion,
    4,
    (item, i) => ({
        ...item,
        title: 'Haus St. Franziskus – lorem ipsum dolor sit amet',
        image: {
            small: `${item.image.small}?image=40${i}`,
            medium: `${item.image.medium}?image=40${i}`,
            large: `${item.image.large}?image=40${i}`,
            xlarge: `${item.image.xlarge}?image=40${i}`,
            alt: 'Image Placeholder ' + i,
        },
    })
);

export default {
    title: 'Sections/Carousels/PromotionCarousel',
    component: PromotionCarousel,
} as Meta;

export const Default: Story = () => (
    <PromotionCarousel
        promotions={examplePromotions.map((promotion, i) => ({
            ...promotion,
            image: {
                small: 'https://unsplash.it/553/553?image=40' + i,
                medium: 'https://unsplash.it/441/441?image=40' + i,
                large: 'https://unsplash.it/507/507?image=40' + i,
                xlarge: 'https://unsplash.it/680/680?image=40' + i,
                alt: 'Image Placeholder ' + i,
            },
        }))}
    />
);

export const Inverted: Story = () => (
    <PromotionCarousel
        bgMode="inverted"
        promotions={examplePromotions.map((promotion, i) => ({
            ...promotion,
            image: {
                small: 'https://unsplash.it/553/553?image=40' + i,
                medium: 'https://unsplash.it/441/441?image=40' + i,
                large: 'https://unsplash.it/507/507?image=40' + i,
                xlarge: 'https://unsplash.it/680/680?image=40' + i,
                alt: 'Image Placeholder ' + i,
            },
        }))}
    />
);

export const WithFullBackground: Story = () => (
    <PromotionCarousel
        bgMode="full"
        promotions={examplePromotions.map((promotion, i) => ({
            ...promotion,
            image: {
                small: 'https://unsplash.it/553/553?image=40' + i,
                medium: 'https://unsplash.it/441/441?image=40' + i,
                large: 'https://unsplash.it/507/507?image=40' + i,
                xlarge: 'https://unsplash.it/680/680?image=40' + i,
                alt: 'Image Placeholder ' + i,
            },
        }))}
    />
);

export const SplittedBackground: Story = () => (
    <PromotionCarousel
        bgMode="splitted"
        promotions={examplePromotions.map((promotion, i) => ({
            ...promotion,
            image: {
                small: 'https://unsplash.it/553/553?image=40' + i,
                medium: 'https://unsplash.it/441/441?image=40' + i,
                large: 'https://unsplash.it/507/507?image=40' + i,
                xlarge: 'https://unsplash.it/680/680?image=40' + i,
                alt: 'Image Placeholder ' + i,
            },
        }))}
    />
);

export const WithHandlers: Story = () => (
    <PromotionCarousel
        bgMode="full"
        promotions={examplePromotions.map((promotion, i) => ({
            ...promotion,
            image: {
                small: 'https://unsplash.it/553/553?image=40' + i,
                medium: 'https://unsplash.it/441/441?image=40' + i,
                large: 'https://unsplash.it/507/507?image=40' + i,
                xlarge: 'https://unsplash.it/680/680?image=40' + i,
                alt: 'Image Placeholder ' + i,
            },
        }))}
        onInit={(steps) => console.log('carousel has ' + steps + ' steps')}
        beforeChange={(current) => console.log('before step: ' + current)}
        afterChange={(current) => console.log('after step: ' + current)}
    />
);

export const WithCustomControls: Story = () => (
    <PromotionCarousel
        bgMode="full"
        promotions={examplePromotions.map((promotion, i) => ({
            ...promotion,
            image: {
                small: 'https://unsplash.it/553/553?image=40' + i,
                medium: 'https://unsplash.it/441/441?image=40' + i,
                large: 'https://unsplash.it/507/507?image=40' + i,
                xlarge: 'https://unsplash.it/680/680?image=40' + i,
                alt: 'Image Placeholder ' + i,
            },
        }))}
        controlNext={() => <ArrowRight />}
        controlPrev={() => <ArrowRight />}
    />
);

export const WithCustomDots: Story = () => (
    <PromotionCarousel
        bgMode="full"
        promotions={examplePromotions.map((promotion, i) => ({
            ...promotion,
            image: {
                small: 'https://unsplash.it/553/553?image=40' + i,
                medium: 'https://unsplash.it/441/441?image=40' + i,
                large: 'https://unsplash.it/507/507?image=40' + i,
                xlarge: 'https://unsplash.it/680/680?image=40' + i,
                alt: 'Image Placeholder ' + i,
            },
        }))}
        dot={({ isActive }) => (
            <ArrowRight iconColor={isActive ? 'red' : 'grey'} />
        )}
    />
);

export const WithRatioA: Story = () => (
    <PromotionCarousel
        bgMode="full"
        promotions={examplePromotions.map((promotion, i) => ({
            ...promotion,
            image: {
                small: 'https://unsplash.it/553/415?image=40' + i,
                medium: 'https://unsplash.it/441/331?image=40' + i,
                large: 'https://unsplash.it/507/381?image=40' + i,
                xlarge: 'https://unsplash.it/680/510?image=40' + i,
                alt: 'Image Placeholder ' + i,
            },
        }))}
    />
);

WithRatioA.storyName = 'With ratio 4:3';

export const WithRatioB: Story = () => (
    <PromotionCarousel
        bgMode="full"
        promotions={examplePromotions.map((promotion, i) => ({
            ...promotion,
            image: {
                small: 'https://unsplash.it/553/736?image=40' + i,
                medium: 'https://unsplash.it/441/587?image=40' + i,
                large: 'https://unsplash.it/507/675?image=40' + i,
                xlarge: 'https://unsplash.it/680/905?image=40' + i,
                alt: 'Image Placeholder ' + i,
            },
        }))}
    />
);

WithRatioB.storyName = 'With ratio 3:4';
