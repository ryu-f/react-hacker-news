import React from 'react'
import styled from 'styled-components'
import { FONT_SIZE, COLOR } from '@/styles/Constants'

type Props = {
  children: string | React.ReactChild
  size: 'BASE' | 'SMALL' | 'LARGE'
  color: 'WHITE'
}

const BasicText: React.FC<Props> = ({ children, size, color }) => (
  <Component size={size} color={color}>
    {children}
  </Component>
)

const Component = styled.p`
  font-size: ${(props: Props) => FONT_SIZE[props.size]}px;
  color: ${(props: Props) => COLOR[props.color]};
`

export default BasicText
