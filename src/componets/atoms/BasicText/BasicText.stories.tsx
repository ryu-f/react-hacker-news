import * as React from 'react'
import { storiesOf } from '@storybook/react'

import BasicText from './'

storiesOf('BasicText', module).add('Show text', () => (
  <BasicText size={'BASE'} color={'BLACK'}>
    test
  </BasicText>
))
