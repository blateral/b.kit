import React from 'react';
import { Meta, Story } from '@storybook/react';
import Navigation from 'components/sections/navigation/remastered/Navigation';

export default {
    title: 'Sections/Navigation/Remastered',
    component: Navigation,
    decorators: [
        (Story) => (
            <div style={{ height: '180vh', width: '100%', background: 'grey' }}>
                <Story />
                <div
                    style={{
                        height: '600px',
                        background: '#4d4d4d',
                        color: 'white',
                    }}
                >
                    Content
                </div>
            </div>
        ),
    ],
    parameters: {
        status: {
            type: 'preview',
        },
    },
} as Meta;

export const Default: Story = () => <Navigation />;

export const StickableNavbar: Story = () => <Navigation isNavbarStickable />;
