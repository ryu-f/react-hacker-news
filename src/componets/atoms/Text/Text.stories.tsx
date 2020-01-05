import * as React from 'react'

import { Text } from './'
import { withInfo } from '@storybook/addon-info'

export default {
  title: 'Atom|Text',
  parameters: {
    component: Text
  }
}

export const basic = () => (
  <Text size={'BASE'} textColor={'BLACK'}>
    test
  </Text>
)
basic.story = {
  decorators: [withInfo({ inline: true })]
}
