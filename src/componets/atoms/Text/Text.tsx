import * as React from 'react'

import { COLOR, FONT_SIZE } from '@/styles/Constants'

import styled from 'styled-components'

type Props = {
  size: 'BASE' | 'SMALL' | 'LARGE'
  textColor: 'BLACK' | 'WHITE' | 'GLAY'
}

interface AnchorProps extends Props, React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
}

interface HeadingProps extends Props, React.ParamHTMLAttributes<HTMLHeadingElement> {
  level: 1 | 2 | 3 | 4 | 5 | 6
}

export const Text: React.FC<Props | AnchorProps | HeadingProps> = props => {
  const { size, textColor, children } = props

  if ('href' in props) {
    const { href } = props

    return (
      <AnchorView size={size} textColor={textColor} href={href}>
        {children}
      </AnchorView>
    )
  }

  return (
    <TextView size={size} textColor={textColor}>
      {children}
    </TextView>
  )
}

const TextView = styled.p<Props>`
  font-size: ${({ size }) => FONT_SIZE[size]}px;
  color: ${({ textColor }) => COLOR[textColor]};
`

const AnchorView = TextView.withComponent('a')
