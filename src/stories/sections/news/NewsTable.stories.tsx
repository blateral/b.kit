import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import NewsTable, {
    NewsTableComponent,
} from 'components/sections/news/NewsTable';

export default {
    title: 'Sections / News / NewsTable',
    components: NewsTableComponent,
    parameters: {
        status: {
            type: ['preview', 'qsReady', 'releaseCandidate'],
        },
    },
} as Meta;

export const Default: Story = () => (
    <NewsTable
        tableItems={[
            {
                rowTitle: [
                    'Table Headline',
                    'Table Headline',
                    'Table Headline',
                    'Table Headline',
                ],
                row: [
                    {
                        cols: [
                            'Lorem ipsum dolor sit amet',
                            'Lorem ipsum dolor sit amet',
                            'Lorem ipsum dolor sit amet',
                            'Lorem ipsum dolor sit amet',
                        ],
                    },
                    {
                        cols: [
                            'Lorem ipsum dolor sit amet',
                            'Lorem ipsum dolor sit amet',
                            'Lorem ipsum dolor sit amet',
                            'Lorem ipsum dolor sit amet',
                        ],
                    },
                    {
                        cols: [
                            'Lorem ipsum dolor sit amet',
                            'Lorem ipsum dolor sit amet',
                            'Lorem ipsum dolor sit amet',
                            'Lorem ipsum dolor sit amet',
                        ],
                    },
                    {
                        cols: [
                            'Lorem ipsum dolor sit amet',
                            'Lorem ipsum dolor sit amet',
                            'Lorem ipsum dolor sit amet',
                            'Lorem ipsum dolor sit amet',
                        ],
                    },
                ],
            },
        ]}
    />
);

export const WithTableGroups: Story = () => (
    <NewsTable
        tableItems={[
            {
                tableTitle: 'Gruppe 1',
                rowTitle: [
                    'Table Headline',
                    'Table Headline',
                    'Table Headline',
                    'Table Headline',
                ],
                row: [
                    {
                        cols: [
                            'Lorem ipsum dolor sit amet',
                            'Lorem ipsum dolor sit amet',
                            'Lorem ipsum dolor sit amet',
                            'Lorem ipsum dolor sit amet',
                        ],
                    },
                    {
                        cols: [
                            'Lorem ipsum dolor sit amet',
                            'Lorem ipsum dolor sit amet',
                            'Lorem ipsum dolor sit amet',
                            'Lorem ipsum dolor sit amet',
                        ],
                    },
                    {
                        cols: [
                            'Lorem ipsum dolor sit amet',
                            'Lorem ipsum dolor sit amet',
                            'Lorem ipsum dolor sit amet',
                            'Lorem ipsum dolor sit amet',
                        ],
                    },
                    {
                        cols: [
                            'Lorem ipsum dolor sit amet',
                            'Lorem ipsum dolor sit amet',
                            'Lorem ipsum dolor sit amet',
                            'Lorem ipsum dolor sit amet',
                        ],
                    },
                ],
            },
            {
                tableTitle: 'Gruppe 2',
                rowTitle: [
                    'Table Headline',
                    'Table Headline',
                    'Table Headline',
                    'Table Headline',
                ],
                row: [
                    {
                        cols: [
                            'Lorem ipsum dolor sit amet',
                            'Lorem ipsum dolor sit amet',
                            'Lorem ipsum dolor sit amet',
                            'Lorem ipsum dolor sit amet',
                        ],
                    },
                    {
                        cols: [
                            'Lorem ipsum dolor sit amet',
                            'Lorem ipsum dolor sit amet',
                            'Lorem ipsum dolor sit amet',
                            'Lorem ipsum dolor sit amet',
                        ],
                    },
                    {
                        cols: [
                            'Lorem ipsum dolor sit amet',
                            'Lorem ipsum dolor sit amet',
                            'Lorem ipsum dolor sit amet',
                            'Lorem ipsum dolor sit amet',
                        ],
                    },
                    {
                        cols: [
                            'Lorem ipsum dolor sit amet',
                            'Lorem ipsum dolor sit amet',
                            'Lorem ipsum dolor sit amet',
                            'Lorem ipsum dolor sit amet',
                        ],
                    },
                ],
            },
        ]}
    />
);

export const WithBackground: Story = () => (
    <NewsTable
        bgMode="full"
        tableItems={[
            {
                rowTitle: [
                    'Table Headline',
                    'Table Headline',
                    'Table Headline',
                    'Table Headline',
                ],
                row: [
                    {
                        cols: [
                            'Lorem ipsum dolor sit amet',
                            'Lorem ipsum dolor sit amet',
                            'Lorem ipsum dolor sit amet',
                            'Lorem ipsum dolor sit amet',
                        ],
                    },
                    {
                        cols: [
                            'Lorem ipsum dolor sit amet',
                            'Lorem ipsum dolor sit amet',
                            'Lorem ipsum dolor sit amet',
                            'Lorem ipsum dolor sit amet',
                        ],
                    },
                    {
                        cols: [
                            'Lorem ipsum dolor sit amet',
                            'Lorem ipsum dolor sit amet',
                            'Lorem ipsum dolor sit amet',
                            'Lorem ipsum dolor sit amet',
                        ],
                    },
                    {
                        cols: [
                            'Lorem ipsum dolor sit amet',
                            'Lorem ipsum dolor sit amet',
                            'Lorem ipsum dolor sit amet',
                            'Lorem ipsum dolor sit amet',
                        ],
                    },
                ],
            },
        ]}
    />
);

export const isInverted: Story = () => (
    <NewsTable
        bgMode="inverted"
        tableItems={[
            {
                rowTitle: [
                    'Table Headline',
                    'Table Headline',
                    'Table Headline',
                    'Table Headline',
                ],
                row: [
                    {
                        cols: [
                            'Lorem ipsum dolor sit amet',
                            'Lorem ipsum dolor sit amet',
                            'Lorem ipsum dolor sit amet',
                            'Lorem ipsum dolor sit amet',
                        ],
                    },
                    {
                        cols: [
                            'Lorem ipsum dolor sit amet',
                            'Lorem ipsum dolor sit amet',
                            'Lorem ipsum dolor sit amet',
                            'Lorem ipsum dolor sit amet',
                        ],
                    },
                    {
                        cols: [
                            'Lorem ipsum dolor sit amet',
                            'Lorem ipsum dolor sit amet',
                            'Lorem ipsum dolor sit amet',
                            'Lorem ipsum dolor sit amet',
                        ],
                    },
                    {
                        cols: [
                            'Lorem ipsum dolor sit amet',
                            'Lorem ipsum dolor sit amet',
                            'Lorem ipsum dolor sit amet',
                            'Lorem ipsum dolor sit amet',
                        ],
                    },
                ],
            },
        ]}
    />
);
