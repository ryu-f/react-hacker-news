import * as React from 'react'

import { BaseProps, BaseStyle } from './_Base'

import styled from 'styled-components'

// type
////////////////////////////////////////////////////////////
export interface BasicButtonProps extends BaseProps, React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

// jsx
////////////////////////////////////////////////////////////
export const BasicButton: React.FC<BasicButtonProps> = props => {
  const { size, textcolor, children } = props

  return (
    <BasicView size={size} textcolor={textcolor} {...props}>
      {children}
    </BasicView>
  )
}

// styled
////////////////////////////////////////////////////////////
const BasicView = styled(BaseStyle)``
