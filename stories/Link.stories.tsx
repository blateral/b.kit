import * as React from 'react';
import { Meta, Story } from '@storybook/react';

import Link from '../src/components/typography/Link';

export default {
    title: 'Typography/Link',
    component: Link,
} as Meta;

export const Default: Story = () => <Link href="#">My Link</Link>;

export const External: Story = () => (
    <Link isExternal href="https://www.google.de">
        My external Link
    </Link>
);
