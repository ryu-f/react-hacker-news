import * as React from 'react'

import { Button } from './'
import { withInfo } from '@storybook/addon-info'

export default {
  title: 'Atom|Button',
  parameters: {
    component: Button
  }
}

export const basic = () => (
  <Button size={'BASE'} textColor={'BLACK'}>
    test
  </Button>
)
basic.story = {
  decorators: [withInfo({ inline: true })]
}
