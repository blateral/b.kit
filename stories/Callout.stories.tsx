import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import Callout from '../src/components/typography/Callout';

const Seperator = () => (
    <React.Fragment>
        <br />
        <br />
        <hr />
        <br />
        <br />
    </React.Fragment>
);

export default {
    title: 'Typography/Callout',
    component: Callout,
} as Meta;

export const Default: Story = () => <Callout>Lorem Ipsum Dolor Sit</Callout>;

export const WithSize: Story = () => (
    <>
        <Callout size="medium">Lorem Ipsum Dolor Sit</Callout>
        <Seperator />
        <Callout size="small">Lorem Ipsum Dolor Sit</Callout>
        <Seperator />
        <Callout size="big">Lorem Ipsum Dolor Sit</Callout>
    </>
);

export const WithColor: Story = () => (
    <>
        <Callout textColor={'green'}>Lorem Ipsum Dolor Sit</Callout>
        <Callout textColor={'hotpink'}>Lorem Ipsum Dolor Sit</Callout>
    </>
);

export const WithShadow: Story = () => (
    <>
        <Callout textColor={'green'} hasShadow>
            Lorem Ipsum Dolor Sit
        </Callout>
        <Callout textColor={'hotpink'} hasShadow>
            Lorem Ipsum Dolor Sit
        </Callout>
    </>
);

export const RenderAs: Story = () => (
    <>
        <Callout as="h1">Lorem Ipsum Dolor Sit</Callout>
        <Seperator />
        <Callout as="h2">Lorem Ipsum Dolor Sit</Callout>
        <Seperator />
        <Callout as="h3">Lorem Ipsum Dolor Sit</Callout>
        <Seperator />
        <Callout as="h4">Lorem Ipsum Dolor Sit</Callout>
        <Seperator />
        <Callout as="h5">Lorem Ipsum Dolor Sit</Callout>
        <Seperator />
        <Callout as="h6">Lorem Ipsum Dolor Sit</Callout>
        <Seperator />
        <Callout as="span">Lorem Ipsum Dolor Sit</Callout>
        <Seperator />
        <Callout as="div">Lorem Ipsum Dolor Sit</Callout>
    </>
);
