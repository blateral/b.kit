import * as React from 'react';
import styled from 'styled-components';
import { Meta, Story } from '@storybook/react';

import FilterField from 'components/fields/FilterField';
import Map from 'components/base/icons/Map';

const Helper = styled.div`
    height: 150px;
    width: 100%;
    padding: 20px;
`;

export default {
    title: 'Fields / FilterField',
    component: FilterField,
    decorators: [
        (Story) => (
            <Helper>
                <Story />
            </Helper>
        ),
    ],
    parameters: {
        status: {
            type: 'preview',
        },
    },
} as Meta;

export const Default: Story = () => (
    <FilterField
        placeholder="Suche"
        onSubmit={() => console.log('submit')}
        onBlur={console.log}
    />
);

export const Inverted: Story = () => (
    <FilterField
        isInverted
        placeholder="Suche"
        onSubmit={() => console.log('submit')}
        onBlur={console.log}
    />
);

Inverted.parameters = {
    backgrounds: {
        default: 'inverted',
        values: [{ name: 'inverted', value: 'black' }],
    },
};

export const CustomIcon: Story = () => (
    <FilterField
        placeholder="Suche"
        onSubmit={() => console.log('submit')}
        onBlur={console.log}
        submitIcon={() => <Map />}
    />
);
