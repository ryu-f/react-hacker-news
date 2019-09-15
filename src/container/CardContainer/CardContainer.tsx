import * as React from 'react'

import CardList from '@/componets/organisms/CardList'
import { useNews } from './CardContainer.hooks'

export const CardContainer: React.FC = () => {
  const _props = useNews()

  return <CardList {..._props} />
}
