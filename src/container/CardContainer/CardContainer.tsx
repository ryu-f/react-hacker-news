import * as React from 'react'
import Card from '@/componets/organisms/Card'
import { useNews } from './CardContainer.hooks'

export const CardContainer: React.FC = () => {
  const _props = useNews()

  return <Card {..._props} />
}
