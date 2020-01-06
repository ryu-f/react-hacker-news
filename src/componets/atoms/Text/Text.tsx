import * as React from 'react'

import { COLOR, FONT_SIZE } from '@/styles/Constants'
import { Link, RouteComponentProps } from 'react-router-dom'

import styled from 'styled-components'

// types
////////////////////////////////////////////////////////////
type Props = {
  size: 'BASE' | 'SMALL' | 'LARGE'
  textColor: 'BLACK' | 'WHITE' | 'GLAY'
}

interface AnchorProps extends Props, React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
}

interface HeadingProps extends Props, React.ParamHTMLAttributes<HTMLHeadingElement> {
  level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

interface LinkProps extends Props, RouteComponentProps {}

type ComponentProps = Props | AnchorProps | HeadingProps | LinkProps

// jsx
////////////////////////////////////////////////////////////
export const Text: React.FC<ComponentProps> = props => {
  const { size, textColor, children } = props

  if ('href' in props) {
    const { href } = props

    return (
      <AnchorView size={size} textColor={textColor} href={href} {...props}>
        {children}
      </AnchorView>
    )
  }

  if ('to' in props) {
    const { to } = props

    return (
      <LinkView size={size} textColor={textColor} to={to} {...props}>
        {children}
      </LinkView>
    )
  }

  return (
    <TextView size={size} textColor={textColor} {...props}>
      {children}
    </TextView>
  )
}

// styled
////////////////////////////////////////////////////////////
const TextView = styled.p<Props>`
  font-size: ${({ size }) => FONT_SIZE[size]}px;
  color: ${({ textColor }) => COLOR[textColor]};
`

const AnchorView = TextView.withComponent('a')

const LinkView = TextView.withComponent(Link)
