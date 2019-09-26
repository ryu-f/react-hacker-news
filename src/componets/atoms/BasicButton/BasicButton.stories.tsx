import * as React from 'react'

import { AnchorButton, BasicButton } from './'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

const components = storiesOf('Atom', module)

components
  .addDecorator(withInfo({ inline: true }))
  .add('BasicButton', () => (
    <BasicButton size={'BASE'} textColor={'BLACK'}>
      test
    </BasicButton>
  ))
  .add('AnchorButton', () => (
    <AnchorButton size={'BASE'} textColor={'BLACK'} href="https://google.com" target="_blank">
      to Google
    </AnchorButton>
  ))
