/* eslint-disable react/display-name */
import { Meta, Story } from '@storybook/react';
import Datepicker, {
    FooterRendererFn,
    HeaderRendererFn,
} from 'components/fields/Datepicker';
import { format } from 'date-fns';
import * as React from 'react';
import styled from 'styled-components';

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
            type: 'production',
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
        onChange={(start, end) => console.log(start, end)}
    />
);

export const WithLabel: Story = () => (
    <Datepicker
        label="Label"
        placeholder="Prompt Text"
        onChange={(start, end) => console.log(start, end)}
    />
);

export const WithInfoMessage: Story = () => (
    <Datepicker
        label="Label"
        placeholder="Prompt Text"
        infoMessage="This is a datepicker field"
        onChange={(start, end) => console.log(start, end)}
    />
);

export const Required: Story = () => (
    <Datepicker
        label="Label"
        placeholder="Prompt Text"
        infoMessage="This is a datepicker field"
        isRequired
        onChange={(start, end) => console.log(start, end)}
    />
);

export const Disabled: Story = () => (
    <Datepicker
        label="Label"
        placeholder="Prompt Text"
        infoMessage="This is a datepicker field"
        isDisabled
        onChange={(start, end) => console.log(start, end)}
    />
);

export const HasError: Story = () => (
    <Datepicker
        label="Label"
        placeholder="Prompt Text"
        infoMessage="This is a datepicker field"
        errorMessage="Bitte geben Sie einen gültigen Wert ein!"
        onChange={(start, end) => console.log(start, end)}
    />
);

export const SingeSelect: Story = () => (
    <Datepicker
        singleSelect
        label="Label"
        placeholder="Prompt Text"
        onChange={(start, end) => console.log(start, end)}
    />
);

export const MultipleMonths: Story = () => (
    <Datepicker
        visibleMonths="2"
        label="Label"
        placeholder="Prompt Text"
        onChange={(start, end) => console.log(start, end)}
    />
);

const customHeader: HeaderRendererFn =
    ({ monthsShown }) =>
    ({ monthDate, customHeaderCount, increaseMonth, decreaseMonth }) =>
        (
            <div style={{ display: 'flex', alignItems: 'center' }}>
                {customHeaderCount === 0 ? (
                    <button onClick={decreaseMonth}>-1</button>
                ) : null}{' '}
                {format(monthDate, 'LLLL')}
                {customHeaderCount === monthsShown - 1 ? (
                    <button
                        onClick={increaseMonth}
                        style={{ marginLeft: 'auto' }}
                    >
                        +1
                    </button>
                ) : null}
            </div>
        );

export const CustomHeader: Story = () => (
    <Datepicker
        label="Label"
        placeholder="Prompt Text"
        onChange={(start, end) => console.log(start, end)}
        customHeader={customHeader}
    />
);

export const CustomHeaderTwoMonths: Story = () => (
    <Datepicker
        label="Label"
        placeholder="Prompt Text"
        visibleMonths="2"
        onChange={(start, end) => console.log(start, end)}
        customHeader={customHeader}
    />
);

const customFooter: FooterRendererFn = ({ resetHandler, closeHandler }) => (
    <div>
        <button onClick={resetHandler}>reset</button>
        <button onClick={closeHandler}>close</button>
    </div>
);

export const CustomFooter: Story = () => (
    <Datepicker
        label="Label"
        placeholder="Prompt Text"
        onChange={(start, end) => console.log(start, end)}
        customFooter={customFooter}
    />
);

export const CustomFooterTwoMonths: Story = () => (
    <Datepicker
        label="Label"
        placeholder="Prompt Text"
        visibleMonths="2"
        onChange={(start, end) => console.log(start, end)}
        customFooter={customFooter}
    />
);
