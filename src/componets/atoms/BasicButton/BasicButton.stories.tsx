import * as React from 'react'

import BasicButton from './'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

const components = storiesOf('Atom', module)

components.addDecorator(withInfo({ inline: true })).add('BasicButton', () => (
  <BasicButton size={'BASE'} color={'BLACK'}>
    test
  </BasicButton>
))
