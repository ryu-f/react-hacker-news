import * as React from 'react'
import Navigation from '@/componets/organisms/Navigation'
import { navItem } from '@/data/navItem'
import { useActions } from 'typeless'
import { FeedActions } from '@/features/feed/interface'

const NavigationView: React.FC = () => {
  const { changeFeed } = useActions(FeedActions)

  const onClick = (e: React.MouseEvent<HTMLElement>, i: number) => {
    e.preventDefault()
    const path = navItem[i].path
    const type = navItem[i].type
    changeFeed(path, type)
  }

  return <Navigation navItem={navItem} onClick={onClick} />
}

export default NavigationView
