import * as React from 'react'

import FeedCardList from '@/componets/organisms/FeedCardList'
import { GlobalStyle } from './styles'
import Header from '@/componets/organisms/Header'

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <FeedCardList />
    </>
  )
}

export default App
