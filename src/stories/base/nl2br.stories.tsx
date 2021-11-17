import * as React from 'react';
import { Meta, Story } from '@storybook/react';

import Nl2Br from 'components/base/nl2br';

export default {
    title: 'Typography/nl2br',
    component: Nl2Br,
    parameters: {
        status: {
            type: 'stable',
        },
    },
} as Meta;

export const Default: Story = () => (
    <Nl2Br
        text={`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. 
        
        Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy 
        At vero eos et accusam et justo duo dolores et ea rebum. Stet `}
    />
);
