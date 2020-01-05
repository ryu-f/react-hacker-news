import { BACKGROUND_COLOR } from './Constants'
import { css } from 'styled-components'

export const Base = css`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', 'Oswald', sans-serif;
    word-break: break-all;
    background-color: ${BACKGROUND_COLOR.GLAY};
  }
`
