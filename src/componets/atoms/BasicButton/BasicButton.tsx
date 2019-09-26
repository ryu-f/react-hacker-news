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

export const BasicButton: React.FC<Props> = ({ size, textColor, children, onClick, ...props }) => (
  <View size={size} textColor={textColor} onClick={onClick} {...props}>
    {children}
  </View>
)

export const AnchorButton: React.FC<AnchorProps> = ({
  size,
  textColor,
  href,
  children,
  onClick,
  ...props
}) => (
  <AnchorButtonView size={size} textColor={textColor} href={href} onClick={onClick} {...props}>
    {children}
  </AnchorButtonView>
)

const View = styled.button<Props>`
  font-size: ${({ size }) => FONT_SIZE[size]}px;
  color: ${({ textColor }) => COLOR[textColor]};
`

const AnchorButtonView = View.withComponent('a')
