import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';
import Datepicker from 'components/fields/Datepicker';

export default {
    title: 'Fields / Datepicker',
    component: Datepicker,
    decorators: [
        (Story) => (
            <Helper>
                <Story />
            </Helper>
        ),
    ],
    parameters: {
        backgrounds: {
            default: 'gray',
            values: [{ name: 'gray', value: '#F0F0F0' }],
        },
        status: {
            type: 'preview',
        },
    },
} as Meta;

const Helper = styled.div`
    height: 300px;
    width: 100%;
    padding: 20px;
`;

export const Default: Story = () => (
    <Datepicker
        placeholder="Prompt Text"
        onSubmit={(start, end) => console.log(start, end)}
    />
);

export const WithLabel: Story = () => (
    <Datepicker label="Label" placeholder="Prompt Text" />
);

export const WithIcon: Story = () => (
    <Datepicker
        icon={{ src: 'http://placehold.it/50' }}
        label="Label"
        placeholder="Prompt Text"
    />
);

export const WithCustomButtons: Story = () => (
    <Datepicker
        icon={{ src: 'http://placehold.it/50' }}
        label="Label"
        placeholder="Prompt Text"
        submitAction={(clickHandler) => (
            <button onClick={clickHandler}>Auswählen</button>
        )}
        deleteAction={(clickHandler) => (
            <button onClick={clickHandler}>löschen</button>
        )}
        nextCtrlUrl="/images/Arrow-Right.svg"
        prevCtrlUrl="/images/Arrow-Left.svg"
    />
);

export const WithCustomIndicator: Story = () => (
    <Datepicker
        icon={{ src: 'http://placehold.it/50' }}
        label="Label"
        placeholder="Prompt Text"
        indicator={({ isOpen }) => <div>{isOpen ? 'close' : 'open'}</div>}
        nextCtrlUrl="/images/Arrow-Right.svg"
        prevCtrlUrl="/images/Arrow-Left.svg"
    />
);
