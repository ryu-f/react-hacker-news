import { base } from './base'
import { createGlobalStyle } from 'styled-components'
import { reset } from './reset'

export const GlobalStyle = createGlobalStyle`
  ${reset}
  ${base}
`
