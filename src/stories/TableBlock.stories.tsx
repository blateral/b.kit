import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import TableBlock from '../components/blocks/TableBlock';

export default {
    title: 'Blocks/TableBlock',
    component: TableBlock,
} as Meta;

export const Default: Story = () => (
    <TableBlock
        rowTitle={[
            'Table Headline',
            'Table Headline',
            'Table Headline',
            'Table Headline',
        ]}
        row={[
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
        ]}
    />
);

export const IsInverted: Story = () => (
    <TableBlock
        rowTitle={[
            'Table Headline',
            'Table Headline',
            'Table Headline',
            'Table Headline',
        ]}
        row={[
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
        ]}
        isInverted
    />
);
