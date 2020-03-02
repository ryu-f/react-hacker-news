import * as React from 'react'

import { BaseProps, BaseStyle } from './_Base'
import styled, { css } from 'styled-components'

// type
////////////////////////////////////////////////////////////
type BaloonTextProps = BaseProps

// jsx
////////////////////////////////////////////////////////////
export const BaloonText: React.FC<BaloonTextProps> = props => {
  const { size, textcolor, children } = props

  return (
    <BaloonView size={size} textcolor={textcolor} {...props}>
      {children}
    </BaloonView>
  )
}

// styled
////////////////////////////////////////////////////////////
const triangle = css`
  position: absolute;
  left: 50%;
  display: block;
  content: '';
  border-style: solid;
  transform: translateX(-50%);
`

const BaloonView = styled(BaseStyle)`
  position: relative;
  padding: 3px;
  border: 1px solid #000;
  border-radius: 5px;

  &::before {
    ${triangle}
    bottom: -6px;
    border-color: #000 transparent transparent transparent;
    border-top-width: 6px;
    border-right-width: 4px;
    border-bottom-width: 0;
    border-left-width: 4px;
  }

  &::after {
    ${triangle}
    bottom: -4px;
    border-color: #fff transparent transparent transparent;
    border-top-width: 5px;
    border-right-width: 3px;
    border-bottom-width: 0;
    border-left-width: 3px;
  }
`
