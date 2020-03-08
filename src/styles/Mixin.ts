import { Interpolation, css } from 'styled-components'

import { BREAK_POINT } from './Constants'

const mediaQuery = {
  desktop: `min-width:${BREAK_POINT.TABLET + 1}px`,
  tablet: `max-width:${BREAK_POINT.TABLET}px`,
  mobile: `max-width:${BREAK_POINT.MOBILE}px`
}

const mediaQueryBuilder = (size: string) => (
  strings: TemplateStringsArray,
  ...interpolations: Interpolation<any>[]
) => css`
  @media (${size}) {
    ${css(strings, ...interpolations)}
  }
`

export const media = {
  desktop: mediaQueryBuilder(mediaQuery.desktop),
  tablet: mediaQueryBuilder(mediaQuery.tablet),
  mobile: mediaQueryBuilder(mediaQuery.mobile)
}
