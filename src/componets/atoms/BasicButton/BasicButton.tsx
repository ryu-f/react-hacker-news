import * as React from 'react'

import { COLOR, FONT_SIZE } from '@/styles/Constants'

import styled from 'styled-components'

type Props = {
  size: 'BASE' | 'SMALL' | 'LARGE'
  color: 'BLACK' | 'WHITE'
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const BasicButton: React.FC<Props> = ({ size, color, children, onClick }) => (
  <Component size={size} color={color} onClick={onClick}>
    {children}
  </Component>
)

const Component = styled.button<Props>`
  font-size: ${({ size }) => FONT_SIZE[size]}px;
  color: ${({ color }) => COLOR[color]};
`
