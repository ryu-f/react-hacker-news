import { BACKGROUND_COLOR } from './constants'
import { css } from 'styled-components'

export const base = css`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', 'Oswald', sans-serif;
    word-break: break-all;
    background-color: ${BACKGROUND_COLOR.GLAY};
  }
`
