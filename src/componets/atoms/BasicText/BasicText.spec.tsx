import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import BasicText from '.'

const size = 'BASE'
const color = 'BLACK'

describe('BasicText', () => {
  test('renders BasicText with text', () => {
    const { getByText } = render(
      <BasicText size={size} color={color}>
        Test
      </BasicText>
    )
    getByText('Test')
  })
})
