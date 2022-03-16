import React from 'react';
import { Meta, Story } from '@storybook/react';
import AlertList from '../../components/sections/AlertList';

export default {
    title: 'Sections / AlertList',
    component: AlertList,
} as Meta;

export const Default: Story = () => (
    <AlertList
        items={[
            {
                label: 'Änderungen der Corona-Verordnung',
                date: new Date(),
                onClick: () => 'click',
            },
            {
                label: 'Änderungen der Corona-Verordnung',
                date: new Date(),
                onClick: () => 'click',
            },
            {
                label: 'Änderungen der Corona-Verordnung',
                date: new Date(),
                onClick: () => 'click',
            },
            {
                label: 'Änderungen der Corona-Verordnung',
                date: new Date(),
                onClick: () => 'click',
            },
        ]}
    />
);

export const WithBackground: Story = () => (
    <AlertList
        bgMode="full"
        items={[
            {
                label: 'Änderungen der Corona-Verordnung',
                date: new Date(),
                onClick: () => 'click',
            },
            {
                label: 'Änderungen der Corona-Verordnung',
                date: new Date(),
                onClick: () => 'click',
            },
            {
                label: 'Änderungen der Corona-Verordnung',
                date: new Date(),
                onClick: () => 'click',
            },
            {
                label: 'Änderungen der Corona-Verordnung',
                date: new Date(),
                onClick: () => 'click',
            },
        ]}
    />
);

export const IsInverted: Story = () => (
    <AlertList
        bgMode="inverted"
        items={[
            {
                label: 'Änderungen der Corona-Verordnung',
                date: new Date(),
                onClick: () => 'click',
            },
            {
                label: 'Änderungen der Corona-Verordnung',
                date: new Date(),
                onClick: () => 'click',
            },
            {
                label: 'Änderungen der Corona-Verordnung',
                date: new Date(),
                onClick: () => 'click',
            },
            {
                label: 'Änderungen der Corona-Verordnung',
                date: new Date(),
                onClick: () => 'click',
            },
        ]}
    />
);
