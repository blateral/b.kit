import * as React from 'react'
import { storiesOf } from '@storybook/react'

import { ExampleComponent } from 'b.kit'
import 'b.kit/dist/index.css'

storiesOf('Example', module).add('default', () => (
  <ExampleComponent text='Create React Library Example 😄' />
))
