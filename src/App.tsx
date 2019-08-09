import * as React from 'react'
import { GlobalStyle } from './styles'
import HeaderContainer from '@/container/HeaderContainer'
import CardContainer from '@/container/CardContainer'

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
