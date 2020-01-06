import * as React from 'react'

import { BaseProps, BaseStyle } from './_Base'
import { Link, LinkProps } from 'react-router-dom'

// type
////////////////////////////////////////////////////////////
export interface LinkButtonProps extends BaseProps, LinkProps {
  to: string
}

// jsx
////////////////////////////////////////////////////////////
export const LinkButton: React.FC<LinkButtonProps> = props => {
  const { to, size, textColor, children } = props

  return (
    <LinkView to={to} size={size} textColor={textColor} {...props}>
      {children}
    </LinkView>
  )
}

// styled
////////////////////////////////////////////////////////////
const LinkView = BaseStyle.withComponent(Link)
