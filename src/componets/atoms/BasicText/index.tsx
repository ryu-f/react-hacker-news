import React from 'react'
import styled from 'styled-components'
import { FONT_SIZE, COLOR } from '@/styles/Constants'

type Props = {
  children: string | React.ReactChild
  size: 'BASE' | 'SMALL' | 'LARGE'
  color: 'BLACK' | 'WHITE'
}

const BasicText: React.SFC<Props> = ({ children, size, color }) => (
  <Component size={size} color={color}>
    {children}
  </Component>
)

const Component = styled.p<Props>`
  font-size: ${({ size }) => FONT_SIZE[size]}px;
  color: ${({ color }) => COLOR[color]};
`

export default BasicText
