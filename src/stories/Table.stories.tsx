import * as React from 'react';
import { Meta, Story } from '@storybook/react';

import Table, { TableComponent } from 'components/sections/Table';

export default {
    title: 'Sections / Table',
    components: TableComponent,
} as Meta;

export const Default: Story = () => (
    <Table
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
    <Table
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
    <Table
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
        bgMode="full"
    />
);

export const IsInverted: Story = () => (
    <Table
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
        bgMode="inverted"
    />
);
