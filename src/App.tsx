import * as React from 'react'
import { GlobalStyle } from './styles'
import HeaderContainer from '@/container/HeaderContainer'

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <HeaderContainer />
    </>
  )
}

export default App
