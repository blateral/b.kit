import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import Heading from 'components/typography/Heading';

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
    title: 'Typography/Heading',
    component: Heading,
} as Meta;

export const Default: Story = () => <Heading>Lorem Ipsum Dolor Sit</Heading>;

export const WithInnerHTML: Story = () => (
    <Heading innerHTML="Lorem Ipsum Dolor Sit <br /> Ipsum Sit " />
);

export const WithSize: Story = () => (
    <>
        <Heading size="heading-1">Lorem Ipsum Dolor Sit</Heading>
        <Seperator />
        <Heading size="heading-2">Lorem Ipsum Dolor Sit</Heading>
        <Seperator />
        <Heading size="heading-3">Lorem Ipsum Dolor Sit</Heading>
        <Seperator />
        <Heading size="heading-4">Lorem Ipsum Dolor Sit</Heading>
        <Seperator />
        <Heading size="super">Lorem Ipsum Dolor Sit</Heading>
    </>
);

export const WithColor: Story = () => (
    <>
        <Heading textColor={'green'}>Lorem Ipsum Dolor Sit</Heading>
        <Seperator />
        <Heading textColor={'hotpink'}>Lorem Ipsum Dolor Sit</Heading>
        <Seperator />
        <Heading
            textGradient="linear-gradient(
                    89.07deg,
                    #407199 24.08%,
                    #a8dde0 116.66%
                )"
        >
            Lorem Ipsum Dolor Sit
        </Heading>
    </>
);

export const WithShadow: Story = () => (
    <>
        <Heading textColor={'green'} hasShadow>
            Lorem Ipsum Dolor Sit
        </Heading>
        <Heading textColor={'hotpink'} hasShadow>
            Lorem Ipsum Dolor Sit
        </Heading>
    </>
);

export const RenderAs: Story = () => (
    <>
        <Heading as="h1">Lorem Ipsum Dolor Sit</Heading>
        <Seperator />
        <Heading as="h2">Lorem Ipsum Dolor Sit</Heading>
        <Seperator />
        <Heading as="h3">Lorem Ipsum Dolor Sit</Heading>
        <Seperator />
        <Heading as="h4">Lorem Ipsum Dolor Sit</Heading>
        <Seperator />
        <Heading as="h5">Lorem Ipsum Dolor Sit</Heading>
        <Seperator />
        <Heading as="h6">Lorem Ipsum Dolor Sit</Heading>
        <Seperator />
        <Heading as="span">Lorem Ipsum Dolor Sit</Heading>
        <Seperator />
        <Heading as="div">Lorem Ipsum Dolor Sit</Heading>
    </>
);
