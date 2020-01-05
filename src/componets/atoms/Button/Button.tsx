import * as React from 'react'

import { COLOR, FONT_SIZE } from '@/styles/Constants'

import styled from 'styled-components'

type Props = {
  size: 'BASE' | 'SMALL' | 'LARGE'
  textColor: 'BLACK' | 'WHITE'
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

interface AnchorProps extends Props, React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  onClick?:
    | (((event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void) &
        ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void))
    | undefined
}

export const Button: React.FC<Props | AnchorProps> = props => {
  const { size, textColor, children, onClick } = props

  if ('href' in props) {
    const { href, onClick } = props

    return (
      <AnchorView size={size} textColor={textColor} href={href} onClick={onClick} {...props}>
        {children}
      </AnchorView>
    )
  }

  return (
    <ButtonView size={size} textColor={textColor} onClick={onClick} {...props}>
      {children}
    </ButtonView>
  )
}

const ButtonView = styled.button<Props>`
  font-size: ${({ size }) => FONT_SIZE[size]}px;
  color: ${({ textColor }) => COLOR[textColor]};
`

const AnchorView = ButtonView.withComponent('a')
