import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import BasicText from './'

const components = storiesOf('BasicText', module)
components.addDecorator(withInfo({ inline: true })).add('Show text', () => (
  <BasicText size={'BASE'} color={'BLACK'}>
    test
  </BasicText>
))
