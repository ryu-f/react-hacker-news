import * as React from 'react'
import { GlobalStyle } from './styles'
import Navigation from '@/componets/organisms/Navigation'
import { navItem } from '@/data/navItem'

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Navigation navItem={navItem} />
    </>
  )
}

export default App
