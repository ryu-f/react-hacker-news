import * as React from 'react'

import { BasicText } from './'
import { withInfo } from '@storybook/addon-info'

export default {
  title: 'Atom|Text',
  parameters: {
    component: Text
  }
}

export const basic = () => (
  <BasicText size={'BASE'} textcolor={'BLACK'}>
    test
  </BasicText>
)
basic.story = {
  decorators: [withInfo({ inline: true })]
}
