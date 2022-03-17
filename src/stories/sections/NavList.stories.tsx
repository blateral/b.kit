import React from 'react';
import { Meta, Story } from '@storybook/react';
import NavList from '../../components/sections/NavList';

export default {
    title: 'Sections / NavList',
    component: NavList,
} as Meta;

export const Default: Story = () => (
    <NavList
        items={[
            {
                label: 'Änderungen der Corona-Verordnung',
                text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, nostrum perferendis nisi unde, reiciendis eos repellendus asperiores eaque eligendi possimus maiores numquam fugit dignissimos obcaecati recusandae! Expedita, facere modi. Exercitationem?',
                href: '#0',
            },
            {
                label: 'Änderungen der Corona-Verordnung',
                text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, nostrum perferendis nisi unde, reiciendis eos repellendus asperiores eaque eligendi possimus maiores numquam fugit dignissimos obcaecati recusandae! Expedita, facere modi. Exercitationem?',
                href: '#0',
            },
            {
                label: 'Änderungen der Corona-Verordnung',
                text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, nostrum perferendis nisi unde, reiciendis eos repellendus asperiores eaque eligendi possimus maiores numquam fugit dignissimos obcaecati recusandae! Expedita, facere modi. Exercitationem?',
                href: '#0',
            },
            {
                label: 'Änderungen der Corona-Verordnung',
                text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, nostrum perferendis nisi unde, reiciendis eos repellendus asperiores eaque eligendi possimus maiores numquam fugit dignissimos obcaecati recusandae! Expedita, facere modi. Exercitationem?',
                href: '#0',
            },
        ]}
    />
);

export const WithBackground: Story = () => (
    <NavList
        bgMode="full"
        items={[
            {
                label: 'Änderungen der Corona-Verordnung',
                text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, nostrum perferendis nisi unde, reiciendis eos repellendus asperiores eaque eligendi possimus maiores numquam fugit dignissimos obcaecati recusandae! Expedita, facere modi. Exercitationem?',
                href: '#0',
            },
            {
                label: 'Änderungen der Corona-Verordnung',
                text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, nostrum perferendis nisi unde, reiciendis eos repellendus asperiores eaque eligendi possimus maiores numquam fugit dignissimos obcaecati recusandae! Expedita, facere modi. Exercitationem?',
                href: '#0',
            },
            {
                label: 'Änderungen der Corona-Verordnung',
                text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, nostrum perferendis nisi unde, reiciendis eos repellendus asperiores eaque eligendi possimus maiores numquam fugit dignissimos obcaecati recusandae! Expedita, facere modi. Exercitationem?',
                href: '#0',
            },
            // {
            //     label: 'Änderungen der Corona-Verordnung',
            //     text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, nostrum perferendis nisi unde, reiciendis eos repellendus asperiores eaque eligendi possimus maiores numquam fugit dignissimos obcaecati recusandae! Expedita, facere modi. Exercitationem?',
            //     href: '#0',
            // },
        ]}
    />
);
