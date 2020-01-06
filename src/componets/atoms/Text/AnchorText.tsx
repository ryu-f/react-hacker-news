import * as React from 'react'

import { BaseProps, BaseStyle } from './_Base'

// type
////////////////////////////////////////////////////////////
export interface AnchorTextProps extends BaseProps, React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
}

// jsx
////////////////////////////////////////////////////////////
export const AnchorText: React.FC<AnchorTextProps> = props => {
  const { href, size, textColor, children } = props

  return (
    <AnchorView href={href} size={size} textColor={textColor} {...props}>
      {children}
    </AnchorView>
  )
}

// styled
////////////////////////////////////////////////////////////
const AnchorView = BaseStyle.withComponent('a')
