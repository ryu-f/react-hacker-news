import * as React from 'react'
import Navigation from '@/componets/organisms/Navigation'
import { navItem } from '@/data/navItem'
import { useActions } from 'typeless'
import { RouterActions } from 'typeless-router'

const NavigationView: React.FC = () => {
  const { push } = useActions(RouterActions)

  const onClick = (e: React.MouseEvent<HTMLElement>, i: number) => {
    e.preventDefault()
    push(navItem[i].path)
  }

  return <Navigation navItem={navItem} onClick={onClick} />
}

export default NavigationView
