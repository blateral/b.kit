import * as React from 'react';
import { Meta, Story } from '@storybook/react';

import Button from 'components/buttons/Button';
import ButtonGhost from 'components/buttons/ButtonGhost';
import Table from 'components/sections/Table';
import TableBlock from 'components/blocks/TableBlock';

export default {
    title: 'Sections / Table',
    components: Table,
} as Meta;

export const Default: Story = () => (
    <Table
        tableItems={(IsInverted) => (
            <TableBlock
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
    <Table
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
            <TableBlock
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
    <Table
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
            <TableBlock
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
    <Table
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
            <TableBlock
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
