import React from 'react';
import { Meta, Story } from '@storybook/react';
import LinkList from 'components/blocks/LinkList';

export default {
    title: 'Blocks / LinkList',
    component: LinkList,
} as Meta;

export const Default: Story = () => (
    <LinkList
        items={[
            {
                label: 'Link 1',
                link: {
                    href: 'https://www.lorem.pdf',
                },
            },
            {
                label: 'Link 2',
                link: {
                    href: 'https://www.lorem.docx',
                },
            },
            {
                label: 'Link 3',
                link: {
                    href: 'https://www.lorem.xlsx',
                },
            },
            {
                label: 'Link 4',
                link: {
                    href: 'https://www.lorem.pptx',
                },
            },
            {
                label: 'Link 5',
                link: {
                    href: 'https://www.lorem.png',
                },
            },
            {
                label: 'Link 6',
                link: {
                    href: 'https://www.lorem.psd',
                },
            },
            {
                label: 'Link 7',
                link: {
                    href: 'https://www.lorem.de',
                },
            },
        ]}
    />
);
