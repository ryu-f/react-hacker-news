import { BACKGROUND_COLOR } from './Constants'
import { css } from 'styled-components'

export const BaseStyle = css`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', 'Oswald', sans-serif;
    background-color: ${BACKGROUND_COLOR.GLAY};
  }
`
