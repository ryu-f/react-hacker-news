import * as React from 'react'
import Navigation from '@/componets/organisms/Navigation'
import { navItem } from '@/data/navItem'

const NavigationView: React.FC = () => {
  return <Navigation navItem={navItem} />
}

export default NavigationView
