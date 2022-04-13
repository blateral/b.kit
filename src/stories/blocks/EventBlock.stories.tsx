import React from 'react';
import { Meta, Story } from '@storybook/react';
import EventBlock from 'components/blocks/EventBlock';
import Pointer from 'components/buttons/Pointer';
import AngleRight from 'components/base/icons/AngleRight';

export default {
    title: 'Blocks / EventBlock',
    component: EventBlock,
    parameters: {
        status: {
            type: ['preview'],
        },
    },
} as Meta;

export const Default: Story = () => (
    <EventBlock
        date={new Date('July 22, 2021 03:24:00')}
        title="Sitzung des Gemeinderates"
        text="17:00-22:00 Uhr | Stadt Überlingen, im Pfarrsaal, Münsterplatz 5"
        tags={[
            { name: 'Tag 1', link: { href: '#0' } },
            { name: 'Tag 2', link: { href: '#0' } },
            { name: 'Tag 3', link: { href: '#0' } },
            { name: 'Tag 4', link: { href: '#0' } },
            { name: 'Tag 5', link: { href: '#0' } },
        ]}
    />
);

export const WithTertiaryAction: Story = () => (
    <EventBlock
        date={new Date('July 22, 2021 03:24:00')}
        title="Sitzung des Gemeinderates"
        text="17:00-22:00 Uhr | Stadt Überlingen, im Pfarrsaal, Münsterplatz 5"
        tags={[
            { name: 'Tag 1', link: { href: '#0' } },
            { name: 'Tag 2', link: { href: '#0' } },
            { name: 'Tag 3', link: { href: '#0' } },
            { name: 'Tag 4', link: { href: '#0' } },
            { name: 'Tag 5', link: { href: '#0' } },
        ]}
        action={({ isInverted }) => (
            <Pointer.View
                href="#0"
                textDecoration="none"
                isInverted={isInverted}
            >
                <Pointer.Label>Lorem Ipsum</Pointer.Label>
                <Pointer.Icon>
                    <AngleRight />
                </Pointer.Icon>
            </Pointer.View>
        )}
    />
);

export const WithImage: Story = () => (
    <EventBlock
        date={new Date('July 22, 2021 03:24:00')}
        image={{
            small: 'https://unsplash.it/640/274',
            medium: 'https://unsplash.it/832/357',
            semilarge: 'https://unsplash.it/1024/439',
            large: 'https://unsplash.it/832/624',
        }}
        title="Sitzung des Gemeinderates"
        text="17:00-22:00 Uhr | Stadt Überlingen, im Pfarrsaal, Münsterplatz 5"
        tags={[
            { name: 'Tag 1', link: { href: '#0' } },
            { name: 'Tag 2', link: { href: '#0' } },
            { name: 'Tag 3', link: { href: '#0' } },
            { name: 'Tag 4', link: { href: '#0' } },
            { name: 'Tag 5', link: { href: '#0' } },
        ]}
        action={({ isInverted }) => (
            <Pointer.View
                href="#0"
                textDecoration="none"
                isInverted={isInverted}
            >
                <Pointer.Label>Lorem Ipsum</Pointer.Label>
                <Pointer.Icon>
                    <AngleRight />
                </Pointer.Icon>
            </Pointer.View>
        )}
    />
);
