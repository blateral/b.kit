import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';
import Datepicker from 'components/fields/Datepicker';
import Clock from 'components/base/icons/Clock';

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

export const WithCustomButtons: Story = () => (
    <Datepicker
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

export const CustomIcon: Story = () => (
    <Datepicker
        customIcon={() => <Clock />}
        label="Label"
        placeholder="Prompt Text"
        nextCtrlUrl="/images/Arrow-Right.svg"
        prevCtrlUrl="/images/Arrow-Left.svg"
    />
);
