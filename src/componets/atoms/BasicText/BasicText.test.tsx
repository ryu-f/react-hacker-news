import React from 'react'
import BasicText from './index'
import 'jest-dom/extend-expect'
import { render } from '@testing-library/react'

const size = 'BASE'
const color = 'BLACK'

describe('BasicText', () => {
  it('Show children text', () => {
    const { getByText } = render(
      <BasicText size={size} color={color}>
        Test
      </BasicText>
    )
    expect(getByText(/Test: \d+/)).toHaveTextContent('Test')
  })
})
