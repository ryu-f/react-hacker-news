import { COLOR, FONT_SIZE } from '@/styles/Constants'

import styled from 'styled-components'

// types
////////////////////////////////////////////////////////////
export type BaseProps = {
  size: 'BASE' | 'SMALL' | 'LARGE'
  textcolor: 'BLACK' | 'WHITE'
}

export const BaseStyle = styled.button<BaseProps>`
  font-size: ${({ size }) => FONT_SIZE[size]}px;
  color: ${({ textcolor }) => COLOR[textcolor]};
`
