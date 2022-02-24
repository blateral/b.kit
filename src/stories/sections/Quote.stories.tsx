import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import Quote, { QuoteComponent } from 'components/sections/Quote';

export default {
    title: 'Sections/Quote',
    component: QuoteComponent,
    parameters: {
        status: {
            type: 'beta',
        },
    },
} as Meta;

export const Default: Story = () => (
    <Quote text="“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor amet incididunt ut labore do eiusmod et dolore magna aliqua.”" />
);

export const WithAuthor: Story = () => (
    <Quote
        text="“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor amet incididunt ut labore do eiusmod et dolore magna aliqua.”"
        source={`<b>– Manuela Huber</b> <br />Marketing`}
    />
);

export const WithCiteUrl: Story = () => (
    <Quote
        text="“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor amet incididunt ut labore do eiusmod et dolore magna aliqua.”"
        source={`<b>– Manuela Huber</b> <br />Marketing`}
        citeUrl="http://developer.mozilla.org"
    />
);

export const WithBackground: Story = () => (
    <Quote
        bgMode="full"
        text="“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor amet incididunt ut labore do eiusmod et dolore magna aliqua.”"
        source={`<b>– Manuela Huber</b> <br />Marketing`}
        citeUrl="http://developer.mozilla.org"
    />
);

export const Inverted: Story = () => (
    <Quote
        bgMode="inverted"
        text="“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor amet incididunt ut labore do eiusmod et dolore magna aliqua.”"
        source={`<b>– Manuela Huber</b> <br />Marketing`}
        citeUrl="http://developer.mozilla.org"
    />
);
