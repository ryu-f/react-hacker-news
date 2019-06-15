import React from 'react'
import { GlobalStyle } from './styles'
import { navItem } from '@/data/navItem'
import Navigation from '@/componets/organisms/Navigation'
import { useRouter } from '@/features/router'
import getFeeds from '@/api/getFeerds'

const App: React.FC = () => {
  useRouter()
  // @ts-ignore
  const res = getFeeds({ type: 'news', page: 1 })
  console.log(res)

  return (
    <React.Fragment>
      <GlobalStyle />
      <Navigation navItem={navItem} />
    </React.Fragment>
  )
}

export default App
