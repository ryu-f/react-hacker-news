import * as React from 'react'

import BasicText from './'
import { withInfo } from '@storybook/addon-info'

export default {
  title: 'Atom|BasicText',
  parameters: {
    component: BasicText
  }
}

export const basic = () => (
  <BasicText size={'BASE'} color={'BLACK'}>
    test
  </BasicText>
)
basic.story = {
  decorators: [withInfo({ inline: true })]
}
