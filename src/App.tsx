import * as React from 'react'

import CardList from '@/componets/organisms/CardList'
import { GlobalStyle } from './styles'
import Header from '@/componets/organisms/Header'

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <CardList />
    </>
  )
}

export default App
