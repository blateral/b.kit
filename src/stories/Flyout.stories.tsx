import * as React from 'react';
import { Meta, Story } from '@storybook/react';

import Flyout from 'components/sections/header/menu/Flyout';
import SearchInput from 'components/fields/SearchInput';

export default {
    title: 'Sections/Header/Menu/Flyout',
    component: Flyout.View,
    decorators: [
        (Story) => (
            <div
                style={{ height: '100vh', width: '100vw', background: 'black' }}
            >
                <Story />
            </div>
        ),
    ],
} as Meta;

export const Default: Story = () => <Flyout.View isOpen />;

export const WithSearchInput: Story = () => (
    <Flyout.View isOpen>
        <SearchInput
            placeholder="Suche"
            onSubmit={() => console.log('submit')}
        />
    </Flyout.View>
);

export const WithNavList: Story = () => (
    <Flyout.View isOpen>
        <SearchInput
            placeholder="Suche"
            onSubmit={() => console.log('submit')}
        />
        <Flyout.NavList navGroups={[{ id: 'nav1', name: 'Zimmer' }]} />
    </Flyout.View>
);

export const FullWidth: Story = () => (
    <Flyout.View isOpen isLarge>
        <SearchInput
            placeholder="Suche"
            onSubmit={() => console.log('submit')}
        />
        <Flyout.NavList navGroups={[{ id: 'nav1', name: 'Zimmer' }]} />
    </Flyout.View>
);
