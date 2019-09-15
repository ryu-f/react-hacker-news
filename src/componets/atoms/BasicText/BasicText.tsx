import * as React from 'react'

import { COLOR, FONT_SIZE } from '@/styles/Constants'

import styled from 'styled-components'

type Props = {
  size: 'BASE' | 'SMALL' | 'LARGE'
  color: 'BLACK' | 'WHITE' | 'GLAY'
  href?: string
}

export const BasicText: React.FC<Props> = ({ children, size, color, href }) => (
  <Component size={size} color={color} href={href}>
    {children}
  </Component>
)

const Component = styled.p<Props>`
  font-size: ${({ size }) => FONT_SIZE[size]}px;
  color: ${({ color }) => COLOR[color]};
`
