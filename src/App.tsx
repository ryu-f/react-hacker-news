import React from 'react'
import { GlobalStyle } from './styles'
import { useRouter } from '@/features/router'
import { NavigationModule } from '@/features/feed/module'

const App: React.FC = () => {
  useRouter()

  return (
    <React.Fragment>
      <NavigationModule />
      <GlobalStyle />
    </React.Fragment>
  )
}

export default App
