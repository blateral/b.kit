import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Link from 'components/typography/Link';

storiesOf('Typography / Link', module)
    .add('default', () => <Link href="#">My Link</Link>)
    .add('external', () => (
        <Link isExternal href="https://www.google.de">
            My external Link
        </Link>
    ));
