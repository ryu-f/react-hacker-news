import React from 'react'
import { GlobalStyle } from './styles'
import { navItem } from '@/data/navItem'
import Navigation from '@/componets/organisms/Navigation'
import { useRouter } from '@/features/router'

const App: React.FC = () => {
  useRouter()

  return (
    <React.Fragment>
      <GlobalStyle />
      <Navigation navItem={navItem} />
    </React.Fragment>
  )
}

export default App
