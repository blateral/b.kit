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
    <ParallaxBackground
        image={{
            small: 'https://unsplash.it/832/500?image=409',
            medium: 'https://unsplash.it/1023/500?image=409',
            large: 'https://unsplash.it/1439/511?image=409',
            xlarge: 'https://unsplash.it/2400/854?image=409',
        }}
    />
);

export const WithSVG: Story = () => (
    <ParallaxBackground
        image={{
            small: '/images/ParallaxBackground.svg',
        }}
    />
);

export const SmallerContentWidth: Story = () => (
    <ParallaxBackground
        contentWidth={0.6}
        image={{
            small: 'https://unsplash.it/832/500?image=409',
            medium: 'https://unsplash.it/1023/500?image=409',
            large: 'https://unsplash.it/1439/511?image=409',
            xlarge: 'https://unsplash.it/2400/854?image=409',
        }}
    />
);

export const RightAlign: Story = () => (
    <ParallaxBackground
        hAlign="right"
        contentWidth={0.6}
        image={{
            small: 'https://unsplash.it/832/500?image=409',
            medium: 'https://unsplash.it/1023/500?image=409',
            large: 'https://unsplash.it/1439/511?image=409',
            xlarge: 'https://unsplash.it/2400/854?image=409',
        }}
    />
);

export const CenterAlign: Story = () => (
    <ParallaxBackground
        hAlign="center"
        contentWidth={0.6}
        image={{
            small: 'https://unsplash.it/832/500?image=409',
            medium: 'https://unsplash.it/1023/500?image=409',
            large: 'https://unsplash.it/1439/511?image=409',
            xlarge: 'https://unsplash.it/2400/854?image=409',
        }}
    />
);

export const WithDifferentMoveRatio: Story = () => (
    <ParallaxBackground
        moveRatio={0.7}
        hAlign="center"
        contentWidth={0.6}
        image={{
            small: 'https://unsplash.it/832/500?image=409',
            medium: 'https://unsplash.it/1023/500?image=409',
            large: 'https://unsplash.it/1439/511?image=409',
            xlarge: 'https://unsplash.it/2400/854?image=409',
        }}
    />
);

export const WithDownDirection: Story = () => (
    <ParallaxBackground
        direction="down"
        hAlign="center"
        contentWidth={0.6}
        image={{
            small: 'https://unsplash.it/832/500?image=409',
            medium: 'https://unsplash.it/1023/500?image=409',
            large: 'https://unsplash.it/1439/511?image=409',
            xlarge: 'https://unsplash.it/2400/854?image=409',
        }}
    />
);
