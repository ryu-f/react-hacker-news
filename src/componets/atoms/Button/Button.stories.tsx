import * as React from 'react'

import { BasicButton } from './'
import { action } from '@storybook/addon-actions'

export default {
  title: 'atoms|Button',
  component: BasicButton
}

export const basic = () => (
  <BasicButton onClick={action('onClick')} size={'BASE'} textcolor={'BLACK'}>
    test
  </BasicButton>
)
