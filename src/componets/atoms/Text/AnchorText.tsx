import * as React from 'react'

import { BaseProps, BaseStyle } from './_Base'

// type
////////////////////////////////////////////////////////////
interface AnchorTextProps extends BaseProps, React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
}

// jsx
////////////////////////////////////////////////////////////
export const AnchorText: React.FC<AnchorTextProps> = props => {
  const { href, size, textcolor, children } = props

  return (
    <AnchorView href={href} size={size} textcolor={textcolor} {...props}>
      {children}
    </AnchorView>
  )
}

// styled
////////////////////////////////////////////////////////////
const AnchorView = BaseStyle.withComponent('a')
