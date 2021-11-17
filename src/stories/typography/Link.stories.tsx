import * as React from 'react';
import { Meta, Story } from '@storybook/react';

import Link from 'components/typography/Link';

export default {
    title: 'Typography/Link',
    component: Link,
    parameters: {
        status: {
            type: 'stable',
        },
    },
} as Meta;

export const Default: Story = () => <Link href="#">My Link</Link>;

export const External: Story = () => (
    <Link isExternal href="https://www.google.de">
        My external Link
    </Link>
);
