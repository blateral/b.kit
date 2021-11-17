import * as React from 'react';
import { Meta, Story } from '@storybook/react';

import Wrapper from 'components/base/Wrapper';

const ExampleContent = () => (
    <div
        style={{
            backgroundColor: 'lightblue',
            padding: 50,
            textAlign: 'center',
        }}
    >
        Content
    </div>
);

export default {
    title: 'Base/Wrapper',
    component: Wrapper,
    parameters: {
        status: {
            type: 'stable',
        },
    },
} as Meta;

export const Default: Story = () => (
    <Wrapper>
        <ExampleContent />
    </Wrapper>
);

export const ClampOnLargeWrapper: Story = () => (
    <Wrapper clampWidth="large">
        <ExampleContent />
    </Wrapper>
);

export const WithWhitespace: Story = () => (
    <Wrapper addWhitespace>
        <ExampleContent />
    </Wrapper>
);
