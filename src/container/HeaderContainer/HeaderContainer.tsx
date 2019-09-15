import * as React from 'react'

import Header from '@/componets/organisms/Header'
import { useNews } from './HeaderContainer.hooks'

export const HeaderContainer: React.FC = () => {
  const _props = useNews()

  return <Header {..._props} />
}
