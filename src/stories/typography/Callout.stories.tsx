import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import Callout from 'components/typography/Callout';

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
    parameters: {
        status: {
            type: 'stable',
        },
    },
} as Meta;

export const Default: Story = () => <Callout>Lorem Ipsum Dolor Sit</Callout>;

export const WithInnerHTML: Story = () => (
    <Callout innerHTML="Lorem Ipsum Dolor Sit <br /> Dolor Sit" />
);

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
        <Callout renderAs="h1">Lorem Ipsum Dolor Sit</Callout>
        <Seperator />
        <Callout renderAs="h2">Lorem Ipsum Dolor Sit</Callout>
        <Seperator />
        <Callout renderAs="h3">Lorem Ipsum Dolor Sit</Callout>
        <Seperator />
        <Callout renderAs="h4">Lorem Ipsum Dolor Sit</Callout>
        <Seperator />
        <Callout renderAs="h5">Lorem Ipsum Dolor Sit</Callout>
        <Seperator />
        <Callout renderAs="h6">Lorem Ipsum Dolor Sit</Callout>
        <Seperator />
        <Callout renderAs="span">Lorem Ipsum Dolor Sit</Callout>
        <Seperator />
        <Callout renderAs="div">Lorem Ipsum Dolor Sit</Callout>
    </>
);
