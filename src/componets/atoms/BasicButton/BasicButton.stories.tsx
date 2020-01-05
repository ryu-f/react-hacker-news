import * as React from 'react'

import { BasicButton } from './'

export default {
  title: 'Atom|BasicButton',
  parameters: {
    component: BasicButton
  }
}

export const normal = () => (
  <BasicButton size={'BASE'} textColor={'BLACK'}>
    test
  </BasicButton>
)
