import React from 'react'
import styled from 'styled-components'
import { FONT_SIZE, COLOR } from '@/styles/Constants'

type Props = {
  size: 'BASE' | 'SMALL' | 'LARGE'
  color: 'BLACK' | 'WHITE' | 'GLAY'
  href?: string
}

export const BasicText: React.SFC<Props> = ({ children, size, color, href }) => (
  <Component size={size} color={color} href={href}>
    {children}
  </Component>
)

const Component = styled.p<Props>`
  font-size: ${({ size }) => FONT_SIZE[size]}px;
  color: ${({ color }) => COLOR[color]};
`
