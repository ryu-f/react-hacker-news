import * as React from 'react'

import BasicText from './'

export default {
  title: 'Atom|BasicText',
  parameters: {
    component: BasicText
  }
}

export const normal = () => (
  <BasicText size={'BASE'} color={'BLACK'}>
    test
  </BasicText>
)
