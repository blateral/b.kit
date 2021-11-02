import * as React from 'react';

import { Meta, Story } from '@storybook/react';
import ParallaxBackground from 'components/sections/ParallaxBackground';

export default {
    title: 'Sections/ParallaxBackground',
    component: ParallaxBackground,
    decorators: [
        (Story) => (
            <>
                <div
                    style={{
                        height: '100vh',
                        border: 'solid 2px black',
                        color: 'black',
                    }}
                >
                    <b>Section before parallax</b>
                    <br /> Lorem ipsum dolor sit amet, consetetur sadipscing
                    elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                    dolore magna aliquyam erat, sed diam voluptua. At vero eos
                    et accusam et justo duo dolores et ea rebum. Stet clita kasd
                    gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                    amet. Lorem ipsum dolor sit amet, consetetur sadipscing
                    elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                    dolore magna aliquyam erat, sed diam voluptua. At vero eos
                    et accusam et justo duo dolores et ea rebum. Stet clita kasd
                    gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                    amet.
                </div>
                <Story />
                <div
                    style={{
                        height: '100vh',
                        border: 'solid 2px black',
                        color: 'black',
                    }}
                >
                    <b>Section after parallax</b>
                    <br /> Lorem ipsum dolor sit amet, consetetur sadipscing
                    elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                    dolore magna aliquyam erat, sed diam voluptua. At vero eos
                    et accusam et justo duo dolores et ea rebum. Stet clita kasd
                    gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                    amet. Lorem ipsum dolor sit amet, consetetur sadipscing
                    elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                    dolore magna aliquyam erat, sed diam voluptua. At vero eos
                    et accusam et justo duo dolores et ea rebum. Stet clita kasd
                    gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                    amet.
                </div>
            </>
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

export const WithDifferentMoveRatio: Story = () => (
    <ParallaxBackground
        moveRatio={0.7}
        hAlign="center"
        contentWidth={0.6}
        image={<img src="/images/ParallaxBackground.svg" />}
    />
);

export const WithDownDirection: Story = () => (
    <ParallaxBackground
        direction="down"
        hAlign="center"
        contentWidth={0.6}
        image={<img src="/images/ParallaxBackground.svg" />}
    />
);

export const ClampToElementHeight: Story = () => (
    <ParallaxBackground
        clampToElementHeight
        moveRatio={0.7}
        direction="down"
        hAlign="center"
        contentWidth={0.6}
        image={<img src="/images/ParallaxBackground.svg" />}
    />
);
