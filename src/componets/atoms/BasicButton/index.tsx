import React from 'react'
import styled from 'styled-components'
import { FONT_SIZE, COLOR } from '@/styles/Constants'

type Props = {
  width: string
  height: string
  size: 'BASE' | 'SMALL' | 'LARGE'
  color: 'BLACK' | 'WHITE'
  children: string | React.ReactChild
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const BasicButton: React.SFC<Props> = ({ width, height, size, color, children, onClick }) => (
  <Component width={width} height={height} size={size} color={color} onClick={onClick}>
    {children}
  </Component>
)

const Component = styled.button<Props>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  font-size: ${({ size }) => FONT_SIZE[size]}px;
  color: ${({ color }) => COLOR[color]};
`

export default BasicButton
