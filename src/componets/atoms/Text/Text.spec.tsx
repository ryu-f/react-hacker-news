import '@testing-library/jest-dom/extend-expect'

import * as React from 'react'

import { BasicText } from './'
import { render } from '@testing-library/react'

const size = 'BASE'
const textColor = 'BLACK'

describe('Text', () => {
  test('renders Text with text', () => {
    const { getByText } = render(
      <BasicText size={size} textColor={textColor}>
        Test
      </BasicText>
    )
    getByText('Test')
  })
})
