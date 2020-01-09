import { COLOR, FONT_SIZE } from '@/styles/Constants'

import styled from 'styled-components'

export type BaseProps = {
  size: 'BASE' | 'SMALL' | 'LARGE'
  textcolor: 'BLACK' | 'WHITE' | 'GLAY'
}

export const BaseStyle = styled.p<BaseProps>`
  font-size: ${({ size }) => FONT_SIZE[size]}px;
  color: ${({ textcolor }) => COLOR[textcolor]};
`
