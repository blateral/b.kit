import * as React from 'react';
import { Meta, Story } from '@storybook/react';

import Button from 'components/buttons/Button';
import ButtonGhost from 'components/buttons/ButtonGhost';
import TableSection from 'components/sections/Table';
import Table from 'components/blocks/Table';

export default {
    title: 'Sections / TableSek',
    components: TableSection,
} as Meta;

export const Default: Story = () => (
    <TableSection
        tableItems={(IsInverted) => (
            <Table
                isInverted={IsInverted}
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
        )}
    />
);

export const WithIntro: Story = () => (
    <TableSection
        title="Lorem ipsum dolor sit amet."
        superTitle="Lorem, ipsum dolor."
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid veniam corrupti tempore doloribus nobis at minima sed similique, nulla molestias!"
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
        tableItems={(isInverted) => (
            <Table
                isInverted={isInverted}
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
        )}
    />
);

export const WithTableGroups: Story = () => (
    <TableSection
        title="Lorem ipsum dolor sit amet."
        superTitle="Lorem, ipsum dolor."
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid veniam corrupti tempore doloribus nobis at minima sed similique, nulla molestias!"
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
        tableItems={(IsInverted) => (
            <Table
                isInverted={IsInverted}
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
        )}
    />
);

export const IsInverted: Story = () => (
    <TableSection
        title="Lorem ipsum dolor sit amet."
        superTitle="Lorem, ipsum dolor."
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid veniam corrupti tempore doloribus nobis at minima sed similique, nulla molestias!"
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
        tableItems={(IsInverted) => (
            <Table
                isInverted={IsInverted}
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
        )}
        isInverted
    />
);
