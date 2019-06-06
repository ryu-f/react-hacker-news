import React from 'react';
import styled from 'styled-components'
import { FONT_SIZE } from '@/styles/Constants'

type Props = {
  children: string | React.ReactNode
  size: 'BASE' | 'SMALL' | 'LARGE'
}

const BasicText: React.FC<Props> = ({ children }) => (
  <Txt>{ children }</Txt>
)

const Txt = styled('p')`
  font-size: ${(props: Props) => FONT_SIZE[props.size]}px;
`

export default BasicText