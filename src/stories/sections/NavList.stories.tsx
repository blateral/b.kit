/* eslint-disable react/display-name */
import React from 'react';
import { Meta, Story } from '@storybook/react';
import NavList, { NavListComponent } from 'components/sections/NavList';
import Mail from 'components/base/icons/Mail';
import Phone from 'components/base/icons/Phone';
import Star from 'components/base/icons/Star';
import ArrowRight from 'components/base/icons/ArrowRight';

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

export const WithCustomIcon: Story = () => (
    <NavList
        items={[
            {
                title: 'Lorem Ipsum',
                text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, nostrum perferendis nisi unde, reiciendis eos repellendus asperiores eaque eligendi possimus maiores numquam fugit dignissimos obcaecati recusandae! Expedita, facere modi. Exercitationem?',
                link: { href: '#0' },
                customIcon: () => <Mail />,
            },
            {
                title: 'Lorem Ipsum',
                text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, nostrum perferendis nisi unde, reiciendis eos repellendus asperiores eaque eligendi possimus maiores numquam fugit dignissimos obcaecati recusandae! Expedita, facere modi. Exercitationem?',
                link: { href: '#0' },
                customIcon: () => <Star />,
            },
            {
                title: 'Lorem Ipsum',
                text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, nostrum perferendis nisi unde, reiciendis eos repellendus asperiores eaque eligendi possimus maiores numquam fugit dignissimos obcaecati recusandae! Expedita, facere modi. Exercitationem?',
                link: { href: '#0' },
                customIcon: () => <Phone />,
            },
            {
                title: 'Lorem Ipsum',
                text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, nostrum perferendis nisi unde, reiciendis eos repellendus asperiores eaque eligendi possimus maiores numquam fugit dignissimos obcaecati recusandae! Expedita, facere modi. Exercitationem?',
                link: { href: '#0' },
                customIcon: () => <ArrowRight />,
            },
        ]}
    />
);
