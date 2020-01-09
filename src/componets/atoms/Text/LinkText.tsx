import * as React from 'react'

import { BaseProps, BaseStyle } from './_Base'
import { Link, LinkProps } from 'react-router-dom'

// type
////////////////////////////////////////////////////////////

interface LinkTextProps extends BaseProps, LinkProps {
  to: string
}

// jsx
////////////////////////////////////////////////////////////
export const LinkText: React.FC<LinkTextProps> = props => {
  const { to, size, textcolor, children } = props

  return (
    <LinkView to={to} size={size} textcolor={textcolor} {...props}>
      {children}
    </LinkView>
  )
}

// styled
////////////////////////////////////////////////////////////
const LinkView = BaseStyle.withComponent(Link)
