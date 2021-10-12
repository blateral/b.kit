import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import FactGrid, { FactGridComponent } from 'components/sections/FactGrid';
import { generateItemList } from 'utils/storyHelpers';
import { FactProps } from 'components/blocks/Fact';

export default {
    title: 'Sections/FactGrid',
    component: FactGridComponent,
} as Meta;

const exampleFact = {
    title: 'Lorem ipsum dolor sit amet',
    subTitle: 'Subheadline',
    text: `Lorem ipsum dolor sit amet consetetur 
        sadipscing elitr, sed diam nonumy eirmod 
        tempor invidunt ut labore Lorem ipsum dolor sit amet consetetur 
        sadipscing elitr, sed diam nonumy eirmod 
        tempor invidunt ut labore `,
    image: {
        small: 'https://unsplash.it/620/310?image=700',
        medium: 'https://unsplash.it/250/188?image=700',
        semilarge: 'https://unsplash.it/310/233?image=700',
        large: 'https://unsplash.it/350/263?image=700',
    },
} as Omit<FactProps, 'isInverted' | 'isCentered'>;

export const Default: Story = () => (
    <FactGrid
        facts={generateItemList<FactProps>(exampleFact, 4, (item, i) => ({
            ...item,
            image: {
                small: 'https://unsplash.it/620/310?image=70' + i,
                medium: 'https://unsplash.it/250/188?image=70' + i,
                semilarge: 'https://unsplash.it/310/233?image=70' + i,
                large: 'https://unsplash.it/350/263?image=70' + i,
                coverSpace: true,
            },
        }))}
    />
);

export const AsRichText: Story = () => (
    <FactGrid
        facts={generateItemList<FactProps>(exampleFact, 4, (item, i) => ({
            ...item,
            subTitle: undefined,
            text: `
                <b>Subheadline</b>
                <br/>
                Lorem ipsum dolor sit amet consetetur 
                sadipscing elitr, sed diam nonumy eirmod 
                tempor invidunt ut labore Lorem ipsum dolor sit amet consetetur 
                sadipscing elitr, sed diam nonumy eirmod 
                tempor invidunt ut labore `,
            image: {
                small: 'https://unsplash.it/620/310?image=70' + i,
                medium: 'https://unsplash.it/250/188?image=70' + i,
                semilarge: 'https://unsplash.it/310/233?image=70' + i,
                large: 'https://unsplash.it/350/263?image=70' + i,
                coverSpace: true,
            },
        }))}
    />
);

export const Centered: Story = () => (
    <FactGrid
        isCentered
        facts={generateItemList<FactProps>(exampleFact, 4, (item, i) => ({
            ...item,
            image: {
                small: 'https://unsplash.it/620/310?image=70' + i,
                medium: 'https://unsplash.it/250/188?image=70' + i,
                semilarge: 'https://unsplash.it/310/233?image=70' + i,
                large: 'https://unsplash.it/350/263?image=70' + i,
                coverSpace: true,
            },
        }))}
    />
);

export const WithAlternativeRatio: Story = () => (
    <FactGrid
        facts={generateItemList<FactProps>(exampleFact, 4, (item, i) => ({
            ...item,
            image: {
                small: 'https://unsplash.it/620/310?image=70' + i,
                medium: 'https://unsplash.it/250/125?image=70' + i,
                semilarge: 'https://unsplash.it/310/155?image=70' + i,
                large: 'https://unsplash.it/350/175?image=70' + i,
                coverSpace: true,
            },
        }))}
    />
);
WithAlternativeRatio.storyName = 'With image ration 2:1';

export const With4Columns: Story = () => (
    <FactGrid
        columns={4}
        facts={generateItemList<FactProps>(exampleFact, 6, (item, i) => ({
            ...item,
            image: {
                small: 'https://unsplash.it/620/310?image=70' + i,
                medium: 'https://unsplash.it/250/188?image=70' + i,
                semilarge: 'https://unsplash.it/310/233?image=70' + i,
                large: 'https://unsplash.it/350/263?image=70' + i,
                coverSpace: true,
            },
        }))}
    />
);

export const With6Columns: Story = () => (
    <FactGrid
        columns={6}
        facts={generateItemList<FactProps>(exampleFact, 11)}
    />
);

export const WithEmptyColumns: Story = () => (
    <FactGrid
        columns={6}
        facts={[
            {
                title: 'Lorem ipsum dolor sit amet',
                subTitle: 'Subheadline',
                text: `Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore `,
                image: {
                    small: 'https://unsplash.it/620/310?image=700',
                    medium: 'https://unsplash.it/250/188?image=700',
                    semilarge: 'https://unsplash.it/310/233?image=700',
                    large: 'https://unsplash.it/350/263?image=700',
                    coverSpace: true,
                },
            },
            {
                title: 'Lorem ipsum dolor sit amet',
                subTitle: 'Subheadline',
                text: `Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore `,
                image: {
                    small: 'https://unsplash.it/620/310?image=700',
                    medium: 'https://unsplash.it/250/188?image=700',
                    semilarge: 'https://unsplash.it/310/233?image=700',
                    large: 'https://unsplash.it/350/263?image=700',
                    coverSpace: true,
                },
            },
            {
                title: 'Lorem ipsum dolor sit amet',
                subTitle: 'Subheadline',
                text: `Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore `,
                image: {
                    small: 'https://unsplash.it/620/310?image=700',
                    medium: 'https://unsplash.it/250/188?image=700',
                    semilarge: 'https://unsplash.it/310/233?image=700',
                    large: 'https://unsplash.it/350/263?image=700',
                    coverSpace: true,
                },
            },
            {
                title: 'Lorem ipsum dolor sit amet',
                subTitle: 'Subheadline',
                text: `Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore `,
                image: {
                    small: 'https://unsplash.it/620/310?image=700',
                    medium: 'https://unsplash.it/250/188?image=700',
                    semilarge: 'https://unsplash.it/310/233?image=700',
                    large: 'https://unsplash.it/350/263?image=700',
                    coverSpace: true,
                },
            },
            {
                title: 'Lorem ipsum dolor sit amet',
                subTitle: 'Subheadline',
                text: `Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore `,
                image: {
                    small: 'https://unsplash.it/620/310?image=700',
                    medium: 'https://unsplash.it/250/188?image=700',
                    semilarge: 'https://unsplash.it/310/233?image=700',
                    large: 'https://unsplash.it/350/263?image=700',
                    coverSpace: true,
                },
            },
            {
                title: 'Lorem ipsum dolor sit amet',
                subTitle: 'Subheadline',
                text: `Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore `,
                image: {
                    small: 'https://unsplash.it/620/310?image=700',
                    medium: 'https://unsplash.it/250/188?image=700',
                    semilarge: 'https://unsplash.it/310/233?image=700',
                    large: 'https://unsplash.it/350/263?image=700',
                    coverSpace: true,
                },
            },
            {
                title: 'Lorem ipsum dolor sit amet',
                subTitle: 'Subheadline',
                text: `Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore `,
                image: {
                    small: 'https://unsplash.it/620/310?image=700',
                    medium: 'https://unsplash.it/250/188?image=700',
                    semilarge: 'https://unsplash.it/310/233?image=700',
                    large: 'https://unsplash.it/350/263?image=700',
                    coverSpace: true,
                },
            },
            {},
            {
                title: 'Lorem ipsum dolor sit amet',
                subTitle: 'Subheadline',
                text: `Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore `,
                image: {
                    small: 'https://unsplash.it/620/310?image=700',
                    medium: 'https://unsplash.it/250/188?image=700',
                    semilarge: 'https://unsplash.it/310/233?image=700',
                    large: 'https://unsplash.it/350/263?image=700',
                    coverSpace: true,
                },
            },
            {
                title: 'Lorem ipsum dolor sit amet',
                subTitle: 'Subheadline',
                text: `Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore `,
                image: {
                    small: 'https://unsplash.it/620/310?image=700',
                    medium: 'https://unsplash.it/250/188?image=700',
                    semilarge: 'https://unsplash.it/310/233?image=700',
                    large: 'https://unsplash.it/350/263?image=700',
                    coverSpace: true,
                },
            },
            {},
            {
                title: 'Lorem ipsum dolor sit amet',
                subTitle: 'Subheadline',
                text: `Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore Lorem ipsum dolor sit amet consetetur 
                    sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore `,
                image: {
                    small: 'https://unsplash.it/620/310?image=700',
                    medium: 'https://unsplash.it/250/188?image=700',
                    semilarge: 'https://unsplash.it/310/233?image=700',
                    large: 'https://unsplash.it/350/263?image=700',
                    coverSpace: true,
                },
            },
        ]}
    />
);

export const WithBackground: Story = () => (
    <FactGrid
        bgMode="full"
        columns={6}
        facts={generateItemList<FactProps>(exampleFact, 6, (item, i) => ({
            ...item,
            image: {
                small: 'https://unsplash.it/620/310?image=70' + i,
                medium: 'https://unsplash.it/250/188?image=70' + i,
                semilarge: 'https://unsplash.it/310/233?image=70' + i,
                large: 'https://unsplash.it/350/263?image=70' + i,
                coverSpace: true,
            },
        }))}
    />
);

export const WithSplittedBackground: Story = () => (
    <FactGrid
        bgMode="splitted"
        columns={6}
        facts={generateItemList<FactProps>(exampleFact, 6, (item, i) => ({
            ...item,
            image: {
                small: 'https://unsplash.it/620/310?image=70' + i,
                medium: 'https://unsplash.it/250/188?image=70' + i,
                semilarge: 'https://unsplash.it/310/233?image=70' + i,
                large: 'https://unsplash.it/350/263?image=70' + i,
                coverSpace: true,
            },
        }))}
    />
);

export const Inverted: Story = () => (
    <FactGrid
        bgMode="inverted"
        columns={6}
        facts={generateItemList<FactProps>(exampleFact, 6, (item, i) => ({
            ...item,
            image: {
                small: 'https://unsplash.it/620/310?image=70' + i,
                medium: 'https://unsplash.it/250/188?image=70' + i,
                semilarge: 'https://unsplash.it/310/233?image=70' + i,
                large: 'https://unsplash.it/350/263?image=70' + i,
                coverSpace: true,
            },
        }))}
    />
);