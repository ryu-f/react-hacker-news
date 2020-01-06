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
  <BasicButton size={'BASE'} textColor={'BLACK'}>
    test
  </BasicButton>
)
basic.story = {
  decorators: [withInfo({ inline: true })]
}
