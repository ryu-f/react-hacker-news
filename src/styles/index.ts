import { base } from './base'
import { reset } from './reset'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  ${reset}
  ${base}
`
