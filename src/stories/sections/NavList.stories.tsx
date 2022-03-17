import React from 'react';
import { Meta, Story } from '@storybook/react';
import NavList, { NavListComponent } from 'components/sections/NavList';

export default {
    title: 'Sections / NavList',
    component: NavListComponent,
    parameters: {
        status: {
            type: ['preview', 'qsReady'],
        },
    },
} as Meta;

export const Default: Story = () => (
    <NavList
        items={[
            {
                title: 'Lorem Ipsum',
                text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, nostrum perferendis nisi unde, reiciendis eos repellendus asperiores eaque eligendi possimus maiores numquam fugit dignissimos obcaecati recusandae! Expedita, facere modi. Exercitationem?',
                link: { href: '#0' },
            },
            {
                title: 'Lorem Ipsum',
                text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, nostrum perferendis nisi unde, reiciendis eos repellendus asperiores eaque eligendi possimus maiores numquam fugit dignissimos obcaecati recusandae! Expedita, facere modi. Exercitationem?',
                link: { href: '#0' },
            },
            {
                title: 'Lorem Ipsum',
                text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, nostrum perferendis nisi unde, reiciendis eos repellendus asperiores eaque eligendi possimus maiores numquam fugit dignissimos obcaecati recusandae! Expedita, facere modi. Exercitationem?',
                link: { href: '#0' },
            },
            {
                title: 'Lorem Ipsum',
                text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, nostrum perferendis nisi unde, reiciendis eos repellendus asperiores eaque eligendi possimus maiores numquam fugit dignissimos obcaecati recusandae! Expedita, facere modi. Exercitationem?',
                link: { href: '#0' },
            },
        ]}
    />
);

export const WithBackground: Story = () => (
    <NavList
        bgMode="full"
        items={[
            {
                title: 'Lorem Ipsum',
                text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, nostrum perferendis nisi unde, reiciendis eos repellendus asperiores eaque eligendi possimus maiores numquam fugit dignissimos obcaecati recusandae! Expedita, facere modi. Exercitationem?',
                link: { href: '#0' },
            },
            {
                title: 'Lorem Ipsum',
                text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, nostrum perferendis nisi unde, reiciendis eos repellendus asperiores eaque eligendi possimus maiores numquam fugit dignissimos obcaecati recusandae! Expedita, facere modi. Exercitationem?',
                link: { href: '#0' },
            },
            {
                title: 'Lorem Ipsum',
                text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, nostrum perferendis nisi unde, reiciendis eos repellendus asperiores eaque eligendi possimus maiores numquam fugit dignissimos obcaecati recusandae! Expedita, facere modi. Exercitationem?',
                link: { href: '#0' },
            },
            {
                title: 'Lorem Ipsum',
                text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, nostrum perferendis nisi unde, reiciendis eos repellendus asperiores eaque eligendi possimus maiores numquam fugit dignissimos obcaecati recusandae! Expedita, facere modi. Exercitationem?',
                link: { href: '#0' },
            },
        ]}
    />
);

export const Inverted: Story = () => (
    <NavList
        bgMode="inverted"
        items={[
            {
                title: 'Lorem Ipsum',
                text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, nostrum perferendis nisi unde, reiciendis eos repellendus asperiores eaque eligendi possimus maiores numquam fugit dignissimos obcaecati recusandae! Expedita, facere modi. Exercitationem?',
                link: { href: '#0' },
            },
            {
                title: 'Lorem Ipsum',
                text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, nostrum perferendis nisi unde, reiciendis eos repellendus asperiores eaque eligendi possimus maiores numquam fugit dignissimos obcaecati recusandae! Expedita, facere modi. Exercitationem?',
                link: { href: '#0' },
            },
            {
                title: 'Lorem Ipsum',
                text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, nostrum perferendis nisi unde, reiciendis eos repellendus asperiores eaque eligendi possimus maiores numquam fugit dignissimos obcaecati recusandae! Expedita, facere modi. Exercitationem?',
                link: { href: '#0' },
            },
            {
                title: 'Lorem Ipsum',
                text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, nostrum perferendis nisi unde, reiciendis eos repellendus asperiores eaque eligendi possimus maiores numquam fugit dignissimos obcaecati recusandae! Expedita, facere modi. Exercitationem?',
                link: { href: '#0' },
            },
        ]}
    />
);
