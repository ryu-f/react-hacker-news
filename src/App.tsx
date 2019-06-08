import React from 'react'
import { hot } from 'react-hot-loader/root'
import { GlobalStyle } from './styles'
import { navItem } from '@/data/navItem'
import Navigation from '@/componets/organisms/Navigation'


const App: React.FC = () => (
  <React.Fragment>
    <GlobalStyle />
    <Navigation navItem={navItem} />
  </React.Fragment>
)

export default hot(App)
