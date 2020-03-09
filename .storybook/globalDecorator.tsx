import * as React from 'react'

import { GlobalStyle } from '../src/styles'
import { makeDecorator } from '@storybook/addons'

export default makeDecorator({
  name: 'globalDecorator',
  parameterName: 'globalDecorator',
  wrapper: (storyFn, context) => (
    <>
      <GlobalStyle />
      {storyFn(context)}
    </>
  )
})
