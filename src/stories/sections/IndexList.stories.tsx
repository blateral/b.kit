import React from 'react';
import { Meta, Story } from '@storybook/react';
import IndexList, { IndexListComponent } from 'components/sections/IndexList';
import AngleDown from 'components/base/icons/AngleDown';

export default {
    title: 'Sections / IndexList',
    component: IndexListComponent,
    parameters: {
        status: {
            type: ['preview'],
        },
    },
} as Meta;

export const Default: Story = () => (
    <IndexList
        items={[
            {
                label: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
                link: { href: '#anchor_1' },
            },
            {
                label: 'Cum sociis natoque',
                link: { href: '#anchor_2' },
            },
            {
                label: 'Lorem ipsum dolor sit amet',
                link: { href: '#anchor_3' },
            },
            {
                label: 'Lorem ipsum',
                link: { href: '#anchor_4' },
            },
        ]}
    />
);

export const WithBackground: Story = () => (
    <IndexList
        bgMode="full"
        items={[
            {
                label: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
                link: { href: '#anchor_1' },
            },
            {
                label: 'Cum sociis natoque',
                link: { href: '#anchor_2' },
            },
            {
                label: 'Lorem ipsum dolor sit amet',
                link: { href: '#anchor_3' },
            },
            {
                label: 'Lorem ipsum',
                link: { href: '#anchor_4' },
            },
        ]}
    />
);

export const Inverted: Story = () => (
    <IndexList
        bgMode="inverted"
        items={[
            {
                label: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
                link: { href: '#anchor_1' },
            },
            {
                label: 'Cum sociis natoque',
                link: { href: '#anchor_2' },
            },
            {
                label: 'Lorem ipsum dolor sit amet',
                link: { href: '#anchor_3' },
            },
            {
                label: 'Lorem ipsum',
                link: { href: '#anchor_4' },
            },
        ]}
    />
);

export const WithCustomIcon: Story = () => (
    <IndexList
        customIcon={() => <AngleDown />}
        items={[
            {
                label: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
                link: { href: '#anchor_1' },
            },
            {
                label: 'Cum sociis natoque',
                link: { href: '#anchor_2' },
            },
            {
                label: 'Lorem ipsum dolor sit amet',
                link: { href: '#anchor_3' },
            },
            {
                label: 'Lorem ipsum',
                link: { href: '#anchor_4' },
            },
        ]}
    />
);

export const WithAnchors: Story = () => (
    <IndexList
        items={[
            {
                label: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
                link: { href: '#anchor_1' },
            },
            {
                label: 'Cum sociis natoque',
                link: { href: '#anchor_2' },
            },
            {
                label: 'Lorem ipsum dolor sit amet',
                link: { href: '#anchor_3' },
            },
            {
                label: 'Lorem ipsum',
                link: { href: '#anchor_4' },
            },
        ]}
    />
);

WithAnchors.decorators = [
    (Story) => (
        <>
            <Story />
            <div style={{ height: '110vh' }} />
            <div id="anchor_1">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            </div>
            <div style={{ height: '50vh' }} />
            <div id="anchor_2">Cum sociis natoque</div>
            <div style={{ height: '50vh' }} />
            <div id="anchor_3">Lorem ipsum dolor sit amet</div>
            <div style={{ height: '50vh' }} />
            <div id="anchor_4">Lorem ipsum</div>
            <div style={{ height: '50vh' }} />
        </>
    ),
];
