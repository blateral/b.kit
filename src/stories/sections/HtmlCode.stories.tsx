import React from 'react';
import { Meta, Story } from '@storybook/react';
import HtmlCode, { HtmlCodeComponent } from 'components/sections/HtmlCode';

export default {
    title: 'Sections / HtmlCode',
    component: HtmlCodeComponent,
    parameters: {
        status: {
            type: 'preview',
        },
    },
} as Meta;

export const Default: Story = () => (
    <HtmlCode
        html={`<iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/jfKfPfyJRdk"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
        ></iframe>`}
    />
);

export const WithBackground: Story = () => (
    <HtmlCode
        bgMode="full"
        html={`<iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/jfKfPfyJRdk"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
        ></iframe>`}
    />
);

export const Inverted: Story = () => (
    <HtmlCode
        bgMode="inverted"
        html={`<iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/jfKfPfyJRdk"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
        ></iframe>`}
    />
);
