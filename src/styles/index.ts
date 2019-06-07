import { BaseStyle } from './BaseStyle'
import { ResetStyle } from './ResetStyle'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  ${ResetStyle}
  ${BaseStyle}
`
