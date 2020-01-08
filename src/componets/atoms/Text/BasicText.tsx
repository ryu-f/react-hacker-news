import * as React from 'react'

import { BaseProps, BaseStyle } from './_Base'

import styled from 'styled-components'

// type
////////////////////////////////////////////////////////////
type BasicTextProps = BaseProps

// jsx
////////////////////////////////////////////////////////////
export const BasicText: React.FC<BasicTextProps> = props => {
  const { size, textColor, children } = props

  return (
    <BasicView size={size} textColor={textColor} {...props}>
      {children}
    </BasicView>
  )
}

// styled
////////////////////////////////////////////////////////////
const BasicView = styled(BaseStyle)``
