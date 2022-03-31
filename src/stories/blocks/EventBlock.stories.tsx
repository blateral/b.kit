import React from 'react';
import { Meta, Story } from '@storybook/react';
import EventBlock from 'components/blocks/EventBlock';
import Pointer from 'components/buttons/Pointer';
import AngleRight from 'components/base/icons/AngleRight';

export default {
    title: 'Blocks / EventBlock',
    component: EventBlock,
} as Meta;

export const Default: Story = () => (
    <EventBlock
        date={new Date('July 22, 2021 03:24:00')}
        title="Sitzung des Gemeinderates"
        text="17:00-22:00 Uhr | Stadt Überlingen, im Pfarrsaal, Münsterplatz 5"
        tags={['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4', 'Tag 5']}
    />
);

export const WithTertiaryAction: Story = () => (
    <EventBlock
        date={new Date('July 22, 2021 03:24:00')}
        title="Sitzung des Gemeinderates"
        text="17:00-22:00 Uhr | Stadt Überlingen, im Pfarrsaal, Münsterplatz 5"
        tags={['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4', 'Tag 5']}
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
        tags={['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4', 'Tag 5']}
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
