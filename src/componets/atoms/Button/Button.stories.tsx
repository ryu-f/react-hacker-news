import * as React from 'react'

import { BasicButton } from './'
import { withInfo } from '@storybook/addon-info'

export default {
  title: 'Atom|Button',
  parameters: {
    component: BasicButton
  }
}

export const basic = () => (
  <BasicButton size={'BASE'} textcolor={'BLACK'}>
    test
  </BasicButton>
)
basic.story = {
  decorators: [withInfo({ inline: true })]
}
