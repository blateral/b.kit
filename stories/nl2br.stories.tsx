import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Nl2Br from 'components/base/nl2br';

storiesOf('Typography / nl2br', module).add('default', () => {
    return (
        <Nl2Br
            text={`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. 
        
        Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy 
        At vero eos et accusam et justo duo dolores et ea rebum. Stet `}
        />
    );
});
