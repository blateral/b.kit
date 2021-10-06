import * as React from 'react';

import { Meta, Story } from '@storybook/react';
import ParallaxBackground from 'components/sections/ParallaxBackground';

export default {
    title: 'Sections/ParallaxBackground',
    component: ParallaxBackground,
    decorators: [
        (Story) => (
            <div style={{ marginTop: '400px', height: '200vh' }}>
                <Story />
            </div>
        ),
    ],
} as Meta;

export const Default: Story = () => (
    <ParallaxBackground image={<img src="/images/ParallaxBackground.svg" />} />
);

export const SmallerContentWidth: Story = () => (
    <ParallaxBackground
        contentWidth={0.6}
        image={<img src="/images/ParallaxBackground.svg" />}
    />
);

export const RightAlign: Story = () => (
    <ParallaxBackground
        hAlign="right"
        contentWidth={0.6}
        image={<img src="/images/ParallaxBackground.svg" />}
    />
);

export const CenterAlign: Story = () => (
    <ParallaxBackground
        hAlign="center"
        contentWidth={0.6}
        image={<img src="/images/ParallaxBackground.svg" />}
    />
);
