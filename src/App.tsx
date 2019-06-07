import React from 'react'
import { GlobalStyle } from './styles'
import Navigation from '@/componets/organisms/Navigation'
import BasicText from '@/componets/atoms/BasicText'

const listItem = [
  {
    text: 'new',
    link: '/new/'
  },
  {
    text: 'ask',
    link: '/ask/'
  },
  {
    text: 'job',
    link: '/job/'
  }
]

const App: React.FC = () => (
  <React.Fragment>
    <GlobalStyle />
    <Navigation listItem={listItem} />
  </React.Fragment>
)

export default App
