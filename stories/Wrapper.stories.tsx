import * as React from 'react';
import { Meta } from '@storybook/react';

import Wrapper from '../src/components/base/Wrapper';

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
} as Meta;

export const Default = () => (
    <Wrapper>
        <ExampleContent />
    </Wrapper>
);

export const WithWhitespace = () => (
    <Wrapper addWhitespace>
        <ExampleContent />
    </Wrapper>
);
