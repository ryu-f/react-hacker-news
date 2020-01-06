import * as React from 'react'

import { COLOR, FONT_SIZE } from '@/styles/Constants'
import { Link, RouteComponentProps } from 'react-router-dom'

import styled from 'styled-components'

// types
////////////////////////////////////////////////////////////
type Props = {
  size: 'BASE' | 'SMALL' | 'LARGE'
  textColor: 'BLACK' | 'WHITE'
}

interface ButtonProps extends Props, React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

interface AnchorProps extends Props, React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void
}

interface LinkProps extends Props, RouteComponentProps {}

type ComponentProps = ButtonProps | AnchorProps | LinkProps

// jsx
////////////////////////////////////////////////////////////
export const Button: React.FC<ComponentProps> = props => {
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
    <ButtonView size={size} textColor={textColor} {...props}>
      {children}
    </ButtonView>
  )
}

// styled
////////////////////////////////////////////////////////////
const ButtonView = styled.button<Props>`
  font-size: ${({ size }) => FONT_SIZE[size]}px;
  color: ${({ textColor }) => COLOR[textColor]};
`

const AnchorView = ButtonView.withComponent('a')

const LinkView = ButtonView.withComponent(Link)
