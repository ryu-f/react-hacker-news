import { css } from 'styled-components'
import { BACKGROUND_COLOR } from './Constants'

export const BaseStyle = css`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Oswald', sans-serif;
    background-color: ${BACKGROUND_COLOR.GLAY};
  }
`
