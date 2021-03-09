import * as React from 'react';
import { Meta, Story } from '@storybook/react';

import Map from 'components/sections/Map';

export default {
    title: 'Sections/Map',
    component: Map,
} as Meta;

export const Default: Story = () => <Map />;
