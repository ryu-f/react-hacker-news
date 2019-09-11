import { css } from 'styled-components'
import { BREAK_POINT } from '@/styles/Constants'

type MediaQuery = {
  [key: string]: string
}

const mediaQuery: MediaQuery = {
  desktop: `min-width:${BREAK_POINT.TABLET + 1}px`,
  tablet: `max-width:${BREAK_POINT.TABLET}px`,
  mobile: `max-width:${BREAK_POINT.MOBILE}px`
}

type AccArguments = (literals: TemplateStringsArray, ...placeholders: any[]) => string

export function useStyledMediaQuery() {
  return Object.keys(mediaQuery).reduce(
    (acc, label) => {
      acc[label] = (literals: TemplateStringsArray, ...placeholders: any[]) =>
        css`
          @media (${mediaQuery[label]}) {
            ${css(literals, ...placeholders)};
          }
        `.join('')
      return acc
    },
    {} as Record<keyof typeof mediaQuery, AccArguments> & { [key: string]: AccArguments }
  )
}
