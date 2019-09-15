import * as React from 'react'

import CardContainer from '@/container/CardContainer'
import { GlobalStyle } from './styles'
import HeaderContainer from '@/container/HeaderContainer'

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <HeaderContainer />
      <CardContainer />
    </>
  )
}

export default App
