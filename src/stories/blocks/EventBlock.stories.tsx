import React from 'react';
import { Meta, Story } from '@storybook/react';
import EventBlock from 'components/blocks/EventBlock';

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
