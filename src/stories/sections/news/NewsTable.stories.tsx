import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import NewsTable, {
    NewsTableComponent,
} from 'components/sections/news/NewsTable';
import ButtonGhost from 'components/buttons/ButtonGhost';
import Button from 'components/buttons/Button';

export default {
    title: 'Sections / News / NewsTable',
    components: NewsTableComponent,
    parameters: {
        status: {
            type: 'stable',
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

export const WithActions: Story = () => (
    <NewsTable
        primaryAction={(isInverted) => (
            <Button.View isInverted={isInverted}>
                <Button.Label>Primary</Button.Label>
            </Button.View>
        )}
        secondaryAction={(isInverted) => (
            <ButtonGhost.View isInverted={isInverted}>
                <ButtonGhost.Label>Secondary</ButtonGhost.Label>
            </ButtonGhost.View>
        )}
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

export const WithBackground: Story = () => (
    <NewsTable
        bgMode="full"
        primaryAction={(isInverted) => (
            <Button.View isInverted={isInverted}>
                <Button.Label>Primary</Button.Label>
            </Button.View>
        )}
        secondaryAction={(isInverted) => (
            <ButtonGhost.View isInverted={isInverted}>
                <ButtonGhost.Label>Secondary</ButtonGhost.Label>
            </ButtonGhost.View>
        )}
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
        primaryAction={(isInverted) => (
            <Button.View isInverted={isInverted}>
                <Button.Label>Primary</Button.Label>
            </Button.View>
        )}
        secondaryAction={(isInverted) => (
            <ButtonGhost.View isInverted={isInverted}>
                <ButtonGhost.Label>Secondary</ButtonGhost.Label>
            </ButtonGhost.View>
        )}
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
