import * as React from 'react';
import styled from 'styled-components';
import { Meta, Story } from '@storybook/react';

import SearchInput from 'components/fields/SearchInput';
import Magnifier from 'components/base/icons/Magnifier';
import CrossSmall from 'components/base/icons/CrossSmall';

const Helper = styled.div`
    height: 150px;
    width: 100%;
    padding: 20px;
`;

export default {
    title: 'Fields/SearchInput',
    component: SearchInput,
    decorators: [
        (Story) => (
            <Helper>
                <Story />
            </Helper>
        ),
    ],
    parameters: {
        status: {
            type: 'stable',
        },
    },
} as Meta;

export const Default: Story = () => (
    <SearchInput
        placeholder="Suche"
        onSubmit={() => console.log('submit')}
        onClick={console.log}
        onBlur={console.log}
    />
);

export const WithSubmitIcon: Story = () => (
    <SearchInput
        placeholder="Suche"
        submitIcon={<Magnifier />}
        onSubmit={() => console.log('submit')}
        onClick={console.log}
        onBlur={console.log}
    />
);

export const WithSubmitAndClearIcon: Story = () => (
    <SearchInput
        placeholder="Suche"
        submitIcon={<Magnifier />}
        clearIcon={<CrossSmall />}
        onSubmit={() => console.log('submit')}
        onClear={() => console.log('clear')}
        onClick={console.log}
        onBlur={console.log}
    />
);

export const Inverted: Story = () => (
    <SearchInput
        isInverted
        placeholder="Suche"
        submitIcon={<Magnifier />}
        clearIcon={<CrossSmall />}
        onSubmit={() => console.log('submit')}
        onClear={() => console.log('clear')}
        onClick={console.log}
        onBlur={console.log}
    />
);

Inverted.parameters = {
    backgrounds: {
        default: 'inverted',
        values: [{ name: 'inverted', value: 'black' }],
    },
};
